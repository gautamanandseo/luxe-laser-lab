import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Production build is deployed to https://empathylaserclinic.com/laser-treatments/ on Hostinger.
  // Override with VITE_BASE=/ when building for the root of a different domain.
  base: process.env.VITE_BASE ?? (mode === "production" ? "/laser-treatments/" : "/"),
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      overlay: false,
    },
    allowedHosts: [
      "all",
      ".preview.emergentagent.com",
      ".preview.emergentcf.cloud"
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return "vendor-react";
          if (id.includes("framer-motion")) return "vendor-motion";
          if (id.includes("@tanstack")) return "vendor-query";
          if (/three|@react-three/.test(id)) return "vendor-three";
          if (id.includes("@radix-ui")) return "vendor-ui";
          if (id.includes("lucide-react")) return "vendor-icons";
          return "vendor";
        },
      },
    },
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    cssMinify: true,
    cssCodeSplit: true,
    target: 'es2020',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "three", "@react-three/fiber", "@react-three/drei"],
  },
}));
