import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/effects/PageTransition";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/laser-hair-removal" element={<PageTransition><ServicePage service="laser" /></PageTransition>} />
        <Route path="/coolsculpting" element={<PageTransition><ServicePage service="coolsculpting" /></PageTransition>} />
        <Route path="/weight-loss-delhi" element={<PageTransition><ServicePage service="weightloss" /></PageTransition>} />
        <Route path="/skin-treatments" element={<PageTransition><ServicePage service="skin" /></PageTransition>} />
        <Route path="/resurfx" element={<PageTransition><ServicePage service="resurfx" /></PageTransition>} />
        <Route path="/botox-fillers" element={<PageTransition><ServicePage service="botox" /></PageTransition>} />
        <Route path="/microdermabrasion" element={<PageTransition><ServicePage service="microdermabrasion" /></PageTransition>} />
        <Route path="/bridal-packages" element={<PageTransition><ServicePage service="bridal" /></PageTransition>} />
        <Route path="/facials" element={<PageTransition><ServicePage service="facials" /></PageTransition>} />
        <Route path="/salon-services" element={<PageTransition><ServicePage service="salon" /></PageTransition>} />
        <Route path="/acne-treatment" element={<PageTransition><ServicePage service="acne" /></PageTransition>} />
        <Route path="/skin-lightening" element={<PageTransition><ServicePage service="skinlightening" /></PageTransition>} />
        <Route path="/anti-ageing" element={<PageTransition><ServicePage service="antiageing" /></PageTransition>} />
        <Route path="/hifu-treatment" element={<PageTransition><ServicePage service="hifu" /></PageTransition>} />
        <Route path="/dark-circles" element={<PageTransition><ServicePage service="darkcircles" /></PageTransition>} />
        <Route path="/skin-tightening" element={<PageTransition><ServicePage service="skintightening" /></PageTransition>} />
        <Route path="/stretch-marks" element={<PageTransition><ServicePage service="stretchmarks" /></PageTransition>} />
        <Route path="/tattoo-removal" element={<PageTransition><ServicePage service="tattooremoval" /></PageTransition>} />
        <Route path="/mole-wart-removal" element={<PageTransition><ServicePage service="molewart" /></PageTransition>} />
        <Route path="/hair-loss-treatment" element={<PageTransition><ServicePage service="hairloss" /></PageTransition>} />
        <Route path="/hair-transplant" element={<PageTransition><ServicePage service="hairtransplant" /></PageTransition>} />
        <Route path="/body-contouring" element={<PageTransition><ServicePage service="bodycontouring" /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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

export default App;
