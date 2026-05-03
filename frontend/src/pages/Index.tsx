import { lazy, Suspense } from "react";
import usePageMeta from "@/hooks/use-page-meta";
import HeroSlider from "@/components/home/HeroSlider";
import Marquee from "@/components/home/Marquee";
import StatsBar from "@/components/home/StatsBar";
import GlowDivider from "@/components/effects/GlowDivider";
import LazySection from "@/components/effects/LazySection";
import {
  buildGraph,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  buildFAQSchema,
  SITE_BASE_URL,
} from "@/lib/seo-schema";

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

const homeFaqs = [
  { q: "Where is the best laser hair removal clinic in Delhi?", a: "Empathy Laser Clinic in Pitampura, Delhi is consistently rated among Delhi NCR's top clinics for laser hair removal, with USFDA-cleared Lumenis LightSheer Desire and Alma Soprano ICE Platinum technology and 25,000+ satisfied clients since 2009." },
  { q: "How much does CoolSculpting cost in Delhi?", a: "CoolSculpting cost in Delhi varies by treatment area and number of cycles required. Book a free body assessment at Empathy Laser Clinic Pitampura for a personalised, transparent quote." },
  { q: "Is laser hair removal safe for Indian skin?", a: "Yes. We use Alma Soprano ICE Platinum and Lumenis LightSheer Desire, both clinically proven safe and effective for Fitzpatrick III–VI Indian skin types, with virtually painless sessions." },
  { q: "Which areas of Delhi NCR do you serve?", a: "We serve clients from Pitampura, Rohini, Shalimar Bagh, Model Town, Paschim Vihar, Ashok Vihar, Dwarka, Noida, Gurugram, Ghaziabad and Faridabad — easily reachable from Pitampura Metro." },
];

const Index = () => {
  const url = SITE_BASE_URL;
  usePageMeta({
    title: "Empathy Laser Clinic Delhi | Laser Hair Removal, CoolSculpting & Skin Treatments",
    description:
      "Delhi's #1 aesthetic clinic for laser hair removal, CoolSculpting fat reduction, Botox, dermal fillers, skin treatments & hair restoration. 25,000+ clients. Book free consultation.",
    canonical: url,
    jsonLd: buildGraph([
      buildBreadcrumbSchema([{ name: "Home", url }], url),
      buildWebPageSchema(
        url,
        "Empathy Laser Clinic Delhi — Laser Hair Removal, CoolSculpting & Skin Treatments",
        "Delhi NCR's premier aesthetic clinic for laser hair removal, CoolSculpting, Botox, fillers, skin & hair treatments."
      ),
      buildFAQSchema(homeFaqs, url),
    ]),
  });

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
