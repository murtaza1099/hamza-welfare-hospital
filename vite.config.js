import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" keeps absolute asset + SPA-route paths, which works with the
// included .htaccess when the site is deployed at the domain root
// (public_html) on Hostinger. If you deploy into a SUBFOLDER instead,
// change base to "/your-subfolder/".
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
