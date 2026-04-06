import { useState, lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/effects/PageTransition";
import Index from "./pages/Index";

// Lazy-load conversion widgets — not needed for initial render
const ExitIntentPopup = lazy(() => import("@/components/conversion/ExitIntentPopup"));
const SocialProofToasts = lazy(() => import("@/components/conversion/SocialProofToasts"));
const CountdownTimer = lazy(() => import("@/components/conversion/CountdownTimer"));
const FloatingConsultation = lazy(() => import("@/components/conversion/FloatingConsultation"));

// Lazy-load all non-homepage routes
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));

const queryClient = new QueryClient();

const LazyFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

// Old paths → new Delhi-suffixed paths (redirects for SEO continuity)
const legacyRedirects: Record<string, string> = {
  "/laser-hair-removal": "/laser-hair-removal-delhi",
  "/coolsculpting": "/coolsculpting-delhi",
  "/weight-loss-delhi": "/weight-loss-clinic-delhi",
  "/skin-treatments": "/skin-clinic-delhi",
  "/skin-clinic-delhi": "/skin-clinic-delhi",
  "/resurfx": "/resurfx-delhi",
  "/botox-fillers": "/botox-fillers-delhi",
  "/microdermabrasion": "/microdermabrasion-delhi",
  "/bridal-packages": "/bridal-packages-delhi",
  "/facials": "/facials-delhi",
  "/salon-services": "/salon-services-delhi",
  "/acne-treatment": "/acne-treatment-delhi",
  "/skin-lightening": "/skin-lightening-delhi",
  "/anti-ageing": "/anti-ageing-delhi",
  "/hifu-treatment": "/hifu-treatment-delhi",
  "/dark-circles": "/dark-circles-treatment-delhi",
  "/skin-tightening": "/skin-tightening-delhi",
  "/stretch-marks": "/stretch-marks-delhi",
  "/tattoo-removal": "/tattoo-removal-delhi",
  "/mole-wart-removal": "/mole-wart-removal-delhi",
  "/hair-loss-treatment": "/hair-loss-treatment-delhi",
  "/hair-transplant": "/hair-transplant-delhi",
  "/body-contouring": "/body-contouring-delhi",
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LazyFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />

          {/* Primary Delhi-suffixed routes */}
          <Route path="/laser-hair-removal-delhi" element={<PageTransition><ServicePage service="laser" /></PageTransition>} />
          <Route path="/coolsculpting-delhi" element={<PageTransition><ServicePage service="coolsculpting" /></PageTransition>} />
          <Route path="/weight-loss-clinic-delhi" element={<PageTransition><ServicePage service="weightloss" /></PageTransition>} />
          <Route path="/skin-clinic-delhi" element={<PageTransition><ServicePage service="skin" /></PageTransition>} />
          <Route path="/resurfx-delhi" element={<PageTransition><ServicePage service="resurfx" /></PageTransition>} />
          <Route path="/botox-fillers-delhi" element={<PageTransition><ServicePage service="botox" /></PageTransition>} />
          <Route path="/microdermabrasion-delhi" element={<PageTransition><ServicePage service="microdermabrasion" /></PageTransition>} />
          <Route path="/bridal-packages-delhi" element={<PageTransition><ServicePage service="bridal" /></PageTransition>} />
          <Route path="/facials-delhi" element={<PageTransition><ServicePage service="facials" /></PageTransition>} />
          <Route path="/salon-services-delhi" element={<PageTransition><ServicePage service="salon" /></PageTransition>} />
          <Route path="/acne-treatment-delhi" element={<PageTransition><ServicePage service="acne" /></PageTransition>} />
          <Route path="/skin-lightening-delhi" element={<PageTransition><ServicePage service="skinlightening" /></PageTransition>} />
          <Route path="/anti-ageing-delhi" element={<PageTransition><ServicePage service="antiageing" /></PageTransition>} />
          <Route path="/hifu-treatment-delhi" element={<PageTransition><ServicePage service="hifu" /></PageTransition>} />
          <Route path="/dark-circles-treatment-delhi" element={<PageTransition><ServicePage service="darkcircles" /></PageTransition>} />
          <Route path="/skin-tightening-delhi" element={<PageTransition><ServicePage service="skintightening" /></PageTransition>} />
          <Route path="/stretch-marks-delhi" element={<PageTransition><ServicePage service="stretchmarks" /></PageTransition>} />
          <Route path="/tattoo-removal-delhi" element={<PageTransition><ServicePage service="tattooremoval" /></PageTransition>} />
          <Route path="/mole-wart-removal-delhi" element={<PageTransition><ServicePage service="molewart" /></PageTransition>} />
          <Route path="/hair-loss-treatment-delhi" element={<PageTransition><ServicePage service="hairloss" /></PageTransition>} />
          <Route path="/hair-transplant-delhi" element={<PageTransition><ServicePage service="hairtransplant" /></PageTransition>} />
          <Route path="/body-contouring-delhi" element={<PageTransition><ServicePage service="bodycontouring" /></PageTransition>} />

          {/* Legacy redirects — 301 equivalent for SPA */}
          {Object.entries(legacyRedirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

// Deferred conversion widgets — load 3s after app mounts
const DeferredWidgets = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <ExitIntentPopup />
      <SocialProofToasts />
      <CountdownTimer />
      <FloatingConsultation />
    </Suspense>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          <main className="film-grain">
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileCTA />
          <DeferredWidgets />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
