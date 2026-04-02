import { lazy, Suspense } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import Marquee from "@/components/home/Marquee";
import StatsBar from "@/components/home/StatsBar";
import GlowDivider from "@/components/effects/GlowDivider";
import LazySection from "@/components/effects/LazySection";

// Lazy-load all below-fold sections
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

const Index = () => {
  return (
    <>
      {/* Critical above-fold — eagerly loaded */}
      <HeroSlider />
      <Marquee />
      <StatsBar />
      <GlowDivider variant="gold" />

      {/* Each section mounts only when scrolled near — keeps DOM small */}
      <LazySection>
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="multi" />

      <LazySection>
        <Suspense fallback={null}>
          <WhyChooseSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="subtle" />

      <LazySection>
        <Suspense fallback={null}>
          <CoolSculptingSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="gold" />

      <LazySection>
        <Suspense fallback={null}>
          <WeightLossSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="subtle" />

      <LazySection>
        <Suspense fallback={null}>
          <TechnologySection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="gold" />

      <LazySection>
        <Suspense fallback={null}>
          <ParallaxStorySection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="multi" />

      <LazySection>
        <Suspense fallback={null}>
          <ProcessSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="subtle" />

      <LazySection>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="gold" />

      <LazySection>
        <Suspense fallback={null}>
          <GallerySection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="multi" />

      <LazySection>
        <Suspense fallback={null}>
          <LoyaltyTeaser />
        </Suspense>
      </LazySection>

      <GlowDivider variant="gold" />

      <LazySection>
        <Suspense fallback={null}>
          <CertificationsStrip />
        </Suspense>
      </LazySection>

      <GlowDivider variant="gold" />

      <LazySection>
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="multi" />

      <LazySection>
        <Suspense fallback={null}>
          <SEOContentSection />
        </Suspense>
      </LazySection>

      <GlowDivider variant="gold" />

      <LazySection>
        <Suspense fallback={null}>
          <BookingSection />
        </Suspense>
      </LazySection>
    </>
  );
};

export default Index;
