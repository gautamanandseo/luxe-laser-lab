import { useState, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/effects/PageTransition";
import LoadingScreen from "@/components/effects/LoadingScreen";
import Index from "./pages/Index";

// Lazy-load all non-homepage routes
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

const queryClient = new QueryClient();

const LazyFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LazyFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/laser-hair-removal" element={<PageTransition><ServicePage service="laser" /></PageTransition>} />
          <Route path="/laser-hair-removal-delhi" element={<PageTransition><ServicePage service="laser" /></PageTransition>} />
          <Route path="/coolsculpting" element={<PageTransition><ServicePage service="coolsculpting" /></PageTransition>} />
          <Route path="/coolsculpting-delhi" element={<PageTransition><ServicePage service="coolsculpting" /></PageTransition>} />
          <Route path="/weight-loss-delhi" element={<PageTransition><ServicePage service="weightloss" /></PageTransition>} />
          <Route path="/weight-loss-clinic-delhi" element={<PageTransition><ServicePage service="weightloss" /></PageTransition>} />
          <Route path="/skin-treatments" element={<PageTransition><ServicePage service="skin" /></PageTransition>} />
          <Route path="/skin-clinic-delhi" element={<PageTransition><ServicePage service="skin" /></PageTransition>} />
          <Route path="/resurfx" element={<PageTransition><ServicePage service="resurfx" /></PageTransition>} />
          <Route path="/botox-fillers" element={<PageTransition><ServicePage service="botox" /></PageTransition>} />
          <Route path="/botox-fillers-delhi" element={<PageTransition><ServicePage service="botox" /></PageTransition>} />
          <Route path="/microdermabrasion" element={<PageTransition><ServicePage service="microdermabrasion" /></PageTransition>} />
          <Route path="/bridal-packages" element={<PageTransition><ServicePage service="bridal" /></PageTransition>} />
          <Route path="/bridal-packages-delhi" element={<PageTransition><ServicePage service="bridal" /></PageTransition>} />
          <Route path="/facials" element={<PageTransition><ServicePage service="facials" /></PageTransition>} />
          <Route path="/salon-services" element={<PageTransition><ServicePage service="salon" /></PageTransition>} />
          <Route path="/acne-treatment" element={<PageTransition><ServicePage service="acne" /></PageTransition>} />
          <Route path="/acne-treatment-delhi" element={<PageTransition><ServicePage service="acne" /></PageTransition>} />
          <Route path="/skin-lightening" element={<PageTransition><ServicePage service="skinlightening" /></PageTransition>} />
          <Route path="/skin-lightening-delhi" element={<PageTransition><ServicePage service="skinlightening" /></PageTransition>} />
          <Route path="/anti-ageing" element={<PageTransition><ServicePage service="antiageing" /></PageTransition>} />
          <Route path="/anti-ageing-delhi" element={<PageTransition><ServicePage service="antiageing" /></PageTransition>} />
          <Route path="/hifu-treatment" element={<PageTransition><ServicePage service="hifu" /></PageTransition>} />
          <Route path="/hifu-treatment-delhi" element={<PageTransition><ServicePage service="hifu" /></PageTransition>} />
          <Route path="/dark-circles" element={<PageTransition><ServicePage service="darkcircles" /></PageTransition>} />
          <Route path="/dark-circles-treatment-delhi" element={<PageTransition><ServicePage service="darkcircles" /></PageTransition>} />
          <Route path="/skin-tightening" element={<PageTransition><ServicePage service="skintightening" /></PageTransition>} />
          <Route path="/skin-tightening-delhi" element={<PageTransition><ServicePage service="skintightening" /></PageTransition>} />
          <Route path="/stretch-marks" element={<PageTransition><ServicePage service="stretchmarks" /></PageTransition>} />
          <Route path="/tattoo-removal" element={<PageTransition><ServicePage service="tattooremoval" /></PageTransition>} />
          <Route path="/tattoo-removal-delhi" element={<PageTransition><ServicePage service="tattooremoval" /></PageTransition>} />
          <Route path="/mole-wart-removal" element={<PageTransition><ServicePage service="molewart" /></PageTransition>} />
          <Route path="/hair-loss-treatment" element={<PageTransition><ServicePage service="hairloss" /></PageTransition>} />
          <Route path="/hair-loss-treatment-delhi" element={<PageTransition><ServicePage service="hairloss" /></PageTransition>} />
          <Route path="/hair-transplant" element={<PageTransition><ServicePage service="hairtransplant" /></PageTransition>} />
          <Route path="/hair-transplant-delhi" element={<PageTransition><ServicePage service="hairtransplant" /></PageTransition>} />
          <Route path="/body-contouring" element={<PageTransition><ServicePage service="bodycontouring" /></PageTransition>} />
          <Route path="/body-contouring-delhi" element={<PageTransition><ServicePage service="bodycontouring" /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
        <BrowserRouter>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
