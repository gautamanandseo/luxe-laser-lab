import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Sets document title, meta description, canonical, and OG tags per page.
 * Restores defaults on unmount so navigation always has fresh tags.
 */
const usePageMeta = ({ title, description, canonical, ogTitle, ogDescription, jsonLd }: PageMetaOptions) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) {
        link.href = canonical;
      }
    }

    // OG tags
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", ogTitle || title);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", ogDescription || description);

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl && canonical) ogUrlEl.setAttribute("content", canonical);

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", ogTitle || title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", ogDescription || description);

    // JSON-LD (page-specific)
    if (jsonLd) {
      let script = document.getElementById("page-jsonld") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "page-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
      return () => {
        script?.remove();
      };
    }
  }, [title, description, canonical, ogTitle, ogDescription, jsonLd]);
};

export default usePageMeta;
