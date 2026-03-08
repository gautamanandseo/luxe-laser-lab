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
import SEOContentSection from "@/components/home/SEOContentSection";
import GlowDivider from "@/components/effects/GlowDivider";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <Marquee />
      <StatsBar />
      <GlowDivider variant="gold" />
      <ServicesSection />
      <GlowDivider variant="multi" />
      <WhyChooseSection />
      <GlowDivider variant="subtle" />
      <CoolSculptingSection />
      <GlowDivider variant="gold" />
      <WeightLossSection />
      <GlowDivider variant="multi" />
      <TechnologySection />
      <GlowDivider variant="subtle" />
      <ProcessSection />
      <GlowDivider variant="gold" />
      <TestimonialsSection />
      <GlowDivider variant="multi" />
      <GallerySection />
      <GlowDivider variant="subtle" />
      <CertificationsStrip />
      <GlowDivider variant="gold" />
      <FAQSection />
      <GlowDivider variant="multi" />
      <BookingSection />
    </>
  );
};

export default Index;
