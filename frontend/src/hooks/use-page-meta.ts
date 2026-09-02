import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Safeguard: Normalize a canonical URL so it always lives under the
 * `https://empathylaserclinic.com/laser-treatments/` base, has no
 * accidental double slashes, and ends with a trailing slash (except
 * when pointing to a file like .xml or with a query/fragment).
 */
const SITE_BASE = "https://empathylaserclinic.com";
const PATH_BASE = "/laser-treatments";

export const normalizeCanonical = (input?: string): string | undefined => {
  if (!input) return undefined;
  let url = input.trim();

  // If a relative path was passed, mount it under the base
  if (!/^https?:\/\//i.test(url)) {
    url = `${SITE_BASE}${PATH_BASE}/${url.replace(/^\/+/, "")}`;
  }

  try {
    const u = new URL(url);
    // Force correct host
    u.protocol = "https:";
    u.host = "empathylaserclinic.com";

    // Ensure path is mounted under /laser-treatments
    let path = u.pathname;
    if (!path.startsWith(`${PATH_BASE}/`) && path !== PATH_BASE) {
      path = `${PATH_BASE}/${path.replace(/^\/+/, "")}`;
    }
    // Collapse repeated slashes
    path = path.replace(/\/{2,}/g, "/");

    // Trailing slash unless it ends with a file extension
    const hasExt = /\.[a-z0-9]{2,5}$/i.test(path);
    if (!hasExt && !path.endsWith("/")) path += "/";

    u.pathname = path;
    return u.toString();
  } catch {
    return input;
  }
};

/**
 * Sets document title, meta description, canonical, and OG tags per page.
 * Restores defaults on unmount so navigation always has fresh tags.
 */
const usePageMeta = ({ title, description, canonical, ogTitle, ogDescription, ogImage, jsonLd }: PageMetaOptions) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // Canonical (always normalized through safeguard)
    const safeCanonical = normalizeCanonical(canonical);
    if (safeCanonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = safeCanonical;
    }

    // OG tags
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute("content", ogTitle || title);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute("content", ogDescription || description);

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl && safeCanonical) ogUrlEl.setAttribute("content", safeCanonical);

    if (ogImage) {
      const ogImgEl = document.querySelector('meta[property="og:image"]');
      if (ogImgEl) ogImgEl.setAttribute("content", ogImage);
      const twImgEl = document.querySelector('meta[name="twitter:image"]');
      if (twImgEl) twImgEl.setAttribute("content", ogImage);
      const ogImgAlt = document.querySelector('meta[property="og:image:alt"]');
      if (ogImgAlt) ogImgAlt.setAttribute("content", ogTitle || title);
    }

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
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, jsonLd]);
};

export default usePageMeta;
