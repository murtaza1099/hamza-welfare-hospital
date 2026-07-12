import { useEffect } from "react";

// Sets a unique title, meta description, canonical URL and Open Graph tags
// per page for SEO. Call once per page with a keyword-rich title + description.
export function useSeo(title, description) {
  useEffect(() => {
    if (title) document.title = title;

    const upsertMeta = (selector, attr, key, value) => {
      if (!value) return;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);

    // Canonical URL for the current path.
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + window.location.pathname);
    upsertMeta('meta[property="og:url"]', "property", "og:url", window.location.href);
  }, [title, description]);
}
