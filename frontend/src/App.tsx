import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const queryClient = new QueryClient();

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
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/laser-hair-removal" element={<ServicePage service="laser" />} />
            <Route path="/coolsculpting" element={<ServicePage service="coolsculpting" />} />
            <Route path="/weight-loss-delhi" element={<ServicePage service="weightloss" />} />
            <Route path="/skin-treatments" element={<ServicePage service="skin" />} />
            <Route path="/resurfx" element={<ServicePage service="resurfx" />} />
            <Route path="/botox-fillers" element={<ServicePage service="botox" />} />
            <Route path="/microdermabrasion" element={<ServicePage service="microdermabrasion" />} />
            <Route path="/bridal-packages" element={<ServicePage service="bridal" />} />
            <Route path="/spa-services" element={<ServicePage service="spa" />} />
            <Route path="/salon-services" element={<ServicePage service="salon" />} />
            <Route path="/acne-treatment" element={<ServicePage service="acne" />} />
            <Route path="/skin-lightening" element={<ServicePage service="skinlightening" />} />
            <Route path="/anti-ageing" element={<ServicePage service="antiageing" />} />
            <Route path="/hifu-treatment" element={<ServicePage service="hifu" />} />
            <Route path="/dark-circles" element={<ServicePage service="darkcircles" />} />
            <Route path="/skin-tightening" element={<ServicePage service="skintightening" />} />
            <Route path="/stretch-marks" element={<ServicePage service="stretchmarks" />} />
            <Route path="/tattoo-removal" element={<ServicePage service="tattooremoval" />} />
            <Route path="/mole-wart-removal" element={<ServicePage service="molewart" />} />
            <Route path="/hair-loss-treatment" element={<ServicePage service="hairloss" />} />
            <Route path="/hair-transplant" element={<ServicePage service="hairtransplant" />} />
            <Route path="/body-contouring" element={<ServicePage service="bodycontouring" />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
