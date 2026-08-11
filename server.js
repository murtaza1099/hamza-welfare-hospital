// -----------------------------------------------------------------------------
// Production server for Hostinger Node.js hosting.
// -----------------------------------------------------------------------------
// Hostinger's Node.js hosting runs a Node process, not Apache. That means
// .htaccess is IGNORED — the SPA routing, caching, compression and security
// headers it used to provide have to happen here instead.
//
// This file serves the built site in dist/ and does four jobs:
//   1. SPA fallback  — /about, /services etc. return index.html so React Router
//                      can take over, instead of 404ing.
//   2. Caching       — hashed assets cached for a year, HTML never cached, so
//                      users get updates immediately after a redeploy.
//   3. Compression   — gzip for text responses.
//   4. Security      — nosniff, clickjacking and referrer headers; blocks
//                      dotfiles and source files from being served.
//
// Deliberately zero-dependency: only Node built-ins. Nothing to install, nothing
// to keep patched, and it cannot break because of a package version bump.
//
// Run with:  npm start
// -----------------------------------------------------------------------------

import http from "node:http";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "dist");
const INDEX = path.join(DIST, "index.html");

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// --- Fail loudly and early if the build is missing -------------------------
if (!fs.existsSync(INDEX)) {
  console.error(
    "\n[server] FATAL: dist/index.html not found.\n" +
      "[server] The site was never built, or the build failed.\n" +
      "[server] Hostinger's build command should be: npm run build\n"
  );
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".map": "application/json; charset=utf-8",
};

// Types worth gzipping. Images and fonts are already compressed.
const COMPRESSIBLE = new Set([
  ".html", ".js", ".mjs", ".css", ".json", ".svg", ".txt", ".xml", ".webmanifest", ".map",
]);

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};

function cacheControlFor(urlPath, ext) {
  // Vite content-hashes everything in /assets/, so a changed file gets a changed
  // name. Safe to cache forever.
  if (urlPath.startsWith("/assets/")) {
    return "public, max-age=31536000, immutable";
  }
  // Images keep their filenames across builds, so cache for a month only.
  if (urlPath.startsWith("/images/")) {
    return "public, max-age=2592000";
  }
  // index.html must never be cached, or users keep seeing the old site after a
  // redeploy because their browser never asks for the new asset filenames.
  if (ext === ".html") {
    return "no-cache, must-revalidate";
  }
  return "public, max-age=3600";
}

function send(req, res, status, body, headers = {}) {
  const merged = { ...SECURITY_HEADERS, ...headers };
  res.writeHead(status, merged);
  if (req.method === "HEAD") return res.end();
  res.end(body);
}

// Resolve a URL path to a real file inside dist/, or null.
// Returns null for anything that escapes dist/ — this is the path-traversal guard.
async function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const candidate = path.join(DIST, decoded);
  const resolved = path.resolve(candidate);

  // Must stay inside dist/
  if (resolved !== DIST && !resolved.startsWith(DIST + path.sep)) return null;

  try {
    const stat = await fsp.stat(resolved);
    if (stat.isDirectory()) {
      const idx = path.join(resolved, "index.html");
      const idxStat = await fsp.stat(idx).catch(() => null);
      return idxStat?.isFile() ? { file: idx, stat: idxStat } : null;
    }
    return stat.isFile() ? { file: resolved, stat } : null;
  } catch {
    return null;
  }
}

// Mirrors the old .htaccess rule that denied dotfiles and source files.
function isBlocked(urlPath) {
  const name = path.basename(urlPath);
  if (name.startsWith(".")) return true;
  return /\.(md|env|lock|php|log)$/i.test(name);
}

async function serve(req, res, filePath, stat, urlPath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";
  const etag = `W/"${stat.size}-${stat.mtimeMs}"`;

  // Unchanged since the browser last asked — save the bandwidth.
  if (req.headers["if-none-match"] === etag) {
    return send(req, res, 304, null, { ETag: etag });
  }

  const headers = {
    "Content-Type": type,
    "Cache-Control": cacheControlFor(urlPath, ext),
    ETag: etag,
    "Last-Modified": stat.mtime.toUTCString(),
  };

  const acceptsGzip = /\bgzip\b/.test(req.headers["accept-encoding"] || "");
  const worthGzipping = COMPRESSIBLE.has(ext) && stat.size > 1024;

  if (acceptsGzip && worthGzipping) {
    const raw = await fsp.readFile(filePath);
    const gz = zlib.gzipSync(raw);
    return send(req, res, 200, gz, {
      ...headers,
      "Content-Encoding": "gzip",
      "Content-Length": Buffer.byteLength(gz),
      Vary: "Accept-Encoding",
    });
  }

  headers["Content-Length"] = stat.size;
  res.writeHead(200, { ...SECURITY_HEADERS, ...headers });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return send(req, res, 405, "Method Not Allowed", {
        "Content-Type": "text/plain; charset=utf-8",
        Allow: "GET, HEAD",
      });
    }

    const urlPath = new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname;

    if (isBlocked(urlPath)) {
      return send(req, res, 404, "Not Found", {
        "Content-Type": "text/plain; charset=utf-8",
      });
    }

    const hit = await resolveFile(urlPath);
    if (hit) {
      return await serve(req, res, hit.file, hit.stat, urlPath);
    }

    // No real file. If it looks like a missing asset, 404 honestly rather than
    // handing back HTML — otherwise a broken <script src> silently "succeeds"
    // and you get a blank page with a confusing MIME-type error instead.
    if (path.extname(urlPath)) {
      return send(req, res, 404, "Not Found", {
        "Content-Type": "text/plain; charset=utf-8",
      });
    }

    // Otherwise it's a client-side route — hand over to React Router.
    const stat = await fsp.stat(INDEX);
    return await serve(req, res, INDEX, stat, "/index.html");
  } catch (err) {
    console.error("[server] error handling", req.url, err);
    return send(req, res, 500, "Internal Server Error", {
      "Content-Type": "text/plain; charset=utf-8",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[server] Hamza Welfare Hospital running on http://${HOST}:${PORT}`);
  console.log(`[server] serving ${DIST}`);
});

// Hostinger restarts the app on redeploy — exit cleanly so it doesn't hang.
for (const signal of ["SIGTERM", "SIGINT"]) {
  process.on(signal, () => {
    console.log(`[server] ${signal} received, shutting down`);
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 5000).unref();
  });
}
