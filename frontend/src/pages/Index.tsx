import { lazy, Suspense } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import Marquee from "@/components/home/Marquee";
import StatsBar from "@/components/home/StatsBar";
import GlowDivider from "@/components/effects/GlowDivider";

// Lazy-load all below-fold sections for faster initial paint
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const CoolSculptingSection = lazy(() => import("@/components/home/CoolSculptingSection"));
const TechnologySection = lazy(() => import("@/components/home/TechnologySection"));
const WeightLossSection = lazy(() => import("@/components/home/WeightLossSection"));
const WhyChooseSection = lazy(() => import("@/components/home/WhyChooseSection"));
const ProcessSection = lazy(() => import("@/components/home/ProcessSection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const GallerySection = lazy(() => import("@/components/home/GallerySection"));
const CertificationsStrip = lazy(() => import("@/components/home/CertificationsStrip"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const BookingSection = lazy(() => import("@/components/home/BookingSection"));
const SEOContentSection = lazy(() => import("@/components/home/SEOContentSection"));
const ParallaxStorySection = lazy(() => import("@/components/home/ParallaxStorySection"));
const LoyaltyTeaser = lazy(() => import("@/components/home/LoyaltyTeaser"));


const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      {/* Critical above-fold — eagerly loaded */}
      <HeroSlider />
      <Marquee />
      <StatsBar />
      <GlowDivider variant="gold" />

      {/* Below-fold — lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
        <GlowDivider variant="multi" />
        <WhyChooseSection />
        <GlowDivider variant="subtle" />
        <CoolSculptingSection />
        <GlowDivider variant="gold" />
        <WeightLossSection />
        <GlowDivider variant="subtle" />
        <TechnologySection />
        <GlowDivider variant="gold" />
        <ParallaxStorySection />
        <GlowDivider variant="multi" />
        <ProcessSection />
        <GlowDivider variant="subtle" />
        <TestimonialsSection />
        <GlowDivider variant="gold" />
        <GallerySection />
        <GlowDivider variant="multi" />
        <LoyaltyTeaser />
        <GlowDivider variant="gold" />
        <CertificationsStrip />
        <GlowDivider variant="gold" />
        <FAQSection />
        <GlowDivider variant="multi" />
        <SEOContentSection />
        <GlowDivider variant="gold" />
        <BookingSection />
      </Suspense>
    </>
  );
};

export default Index;
