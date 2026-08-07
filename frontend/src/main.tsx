import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Offline-first PWA support (production builds only, never in Lovable preview/iframe)
const swBlocked = () => {
  if (!import.meta.env.PROD) return true;
  if (typeof window === "undefined") return true;
  if (window.top !== window.self) return true;
  const h = window.location.hostname;
  if (h.startsWith("id-preview--") || h.startsWith("preview--")) return true;
  if (h === "lovableproject.com" || h.endsWith(".lovableproject.com")) return true;
  if (h === "lovableproject-dev.com" || h.endsWith(".lovableproject-dev.com")) return true;
  if (h === "beta.lovable.dev" || h.endsWith(".beta.lovable.dev")) return true;
  if (new URLSearchParams(window.location.search).has("sw") && new URLSearchParams(window.location.search).get("sw") === "off") return true;
  return false;
};

if ("serviceWorker" in navigator) {
  if (swBlocked()) {
    navigator.serviceWorker.getRegistrations?.().then((regs) =>
      regs.forEach((r) => {
        if (r.active?.scriptURL.endsWith("/sw.js")) r.unregister();
      })
    );
  } else {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(`${import.meta.env.BASE_URL}sw.js`, { scope: import.meta.env.BASE_URL })
        .catch(() => {
          /* non-fatal */
        });
    });
  }
}

