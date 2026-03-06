import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/laser-hair-removal" element={<ServicePage service="laser" />} />
            <Route path="/coolsculpting" element={<ServicePage service="coolsculpting" />} />
            <Route path="/skin-treatments" element={<ServicePage service="skin" />} />
            <Route path="/resurfx" element={<ServicePage service="resurfx" />} />
            <Route path="/botox-fillers" element={<ServicePage service="botox" />} />
            <Route path="/microdermabrasion" element={<ServicePage service="microdermabrasion" />} />
            <Route path="/bridal-packages" element={<ServicePage service="bridal" />} />
            <Route path="/spa-services" element={<ServicePage service="spa" />} />
            <Route path="/salon-services" element={<ServicePage service="salon" />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
