import HeroSlider from "@/components/home/HeroSlider";
import Marquee from "@/components/home/Marquee";
import StatsBar from "@/components/home/StatsBar";
import ServicesSection from "@/components/home/ServicesSection";
import CoolSculptingSection from "@/components/home/CoolSculptingSection";
import TechnologySection from "@/components/home/TechnologySection";
import WeightLossSection from "@/components/home/WeightLossSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import CertificationsStrip from "@/components/home/CertificationsStrip";
import FAQSection from "@/components/home/FAQSection";
import BookingSection from "@/components/home/BookingSection";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <Marquee />
      <StatsBar />
      <ServicesSection />
      <WhyChooseSection />
      <CoolSculptingSection />
      <WeightLossSection />
      <TechnologySection />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
      <CertificationsStrip />
      <FAQSection />
      <BookingSection />
    </>
  );
};

export default Index;
