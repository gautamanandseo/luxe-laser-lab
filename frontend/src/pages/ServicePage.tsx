import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, ChevronDown, Star, Quote, Info, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { servicesData } from "@/data/serviceData";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import GlowDivider from "@/components/effects/GlowDivider";
import ParticleField from "@/components/effects/ParticleField";

const BodyMap3D = lazy(() => import("@/components/coolsculpting/BodyMap3D"));

// New high-quality hero images
import heroLaserNew from "@/assets/hero-laser-new.jpg";
import heroCoolNew from "@/assets/hero-cool-new.jpg";
import heroSkinNew from "@/assets/hero-skin-new.jpg";
import heroBotoxNew from "@/assets/hero-botox-new.jpg";
import heroBridalNew from "@/assets/hero-bridal-new.jpg";
import heroSalonNew from "@/assets/hero-salon-new.jpg";
import heroMicrodermNew from "@/assets/hero-microderm-new.jpg";
import heroResurfxNew from "@/assets/hero-resurfx-new.jpg";

// Service-specific images
import serviceAcne from "@/assets/service-acne-gen.jpg";
import serviceSkinlightening from "@/assets/service-skinlightening-gen.jpg";
import serviceAntiageing from "@/assets/service-antiageing-gen.jpg";
import serviceHifu from "@/assets/service-hifu-gen.jpg";
import serviceDarkcircles from "@/assets/service-darkcircles-gen.jpg";
import serviceSkintightening from "@/assets/service-skintightening-gen.jpg";
import serviceStretchmarks from "@/assets/service-stretchmarks-gen.jpg";
import serviceTattoo from "@/assets/service-tattoo-gen.jpg";
import serviceMolewart from "@/assets/service-molewart-gen.jpg";
import serviceHairloss from "@/assets/service-hairloss-gen.jpg";
import serviceHairtransplant from "@/assets/service-hairtransplant-gen.jpg";
import serviceBodycontouring from "@/assets/service-bodycontouring-gen.jpg";
import serviceFacial from "@/assets/service-facial-gen.jpg";

// Before/After result images
import baCoolsculpting from "@/assets/ba-coolsculpting.jpg";
import baSkin from "@/assets/ba-skin.jpg";
import baBotox from "@/assets/ba-botox.jpg";
import baResurfx from "@/assets/ba-resurfx.jpg";
import baMicroderm from "@/assets/ba-microderm.jpg";
import baAntiaging from "@/assets/ba-antiaging-face.jpg";
import baHairloss from "@/assets/ba-hairloss.jpg";
import baDarkcircles from "@/assets/ba-darkcircles.jpg";
import baTattoo from "@/assets/ba-tattoo.jpg";
import baLaserMen from "@/assets/ba-laser-men.jpg";
import baResurfx2 from "@/assets/ba-resurfx2.jpg";
import baLaserUnderarm from "@/assets/ba-laser-underarm.jpg";
import baAcne from "@/assets/ba-acne.jpg";
import baSkinlightening from "@/assets/ba-skinlightening.jpg";
import baHifu from "@/assets/ba-hifu.jpg";
import baSkintightening from "@/assets/ba-skintightening.jpg";
import baMolewart from "@/assets/ba-molewart.jpg";
import baHairtransplant from "@/assets/ba-hairtransplant.jpg";
import baFacial from "@/assets/ba-facial.jpg";
import baBotox2 from "@/assets/ba-botox2.jpg";
import baCoolsculptingChin from "@/assets/ba-coolsculpting-chin.jpg";
import baBodycontouring2 from "@/assets/ba-bodycontouring2.jpg";

const heroImages: Record<string, string> = {
  laser: heroLaserNew,
  coolsculpting: heroCoolNew,
  skin: heroSkinNew,
  botox: heroBotoxNew,
  bridal: heroBridalNew,
  facials: serviceFacial,
  salon: heroSalonNew,
  microdermabrasion: heroMicrodermNew,
  resurfx: heroResurfxNew,
  acne: serviceAcne,
  skinlightening: serviceSkinlightening,
  antiageing: serviceAntiageing,
  hifu: serviceHifu,
  darkcircles: serviceDarkcircles,
  skintightening: serviceSkintightening,
  stretchmarks: serviceStretchmarks,
  tattooremoval: serviceTattoo,
  molewart: serviceMolewart,
  hairloss: serviceHairloss,
  hairtransplant: serviceHairtransplant,
  bodycontouring: serviceBodycontouring,
  weightloss: heroCoolNew,
};

// Use same high-quality images for secondary/service images
const serviceImages: Record<string, string> = {
  laser: heroLaserNew,
  coolsculpting: heroCoolNew,
  skin: heroSkinNew,
  botox: heroBotoxNew,
  bridal: heroBridalNew,
  facials: serviceFacial,
  salon: heroSalonNew,
  microdermabrasion: heroMicrodermNew,
  resurfx: heroResurfxNew,
  acne: serviceAcne,
  skinlightening: serviceSkinlightening,
  antiageing: serviceAntiageing,
  hifu: serviceHifu,
  darkcircles: serviceDarkcircles,
  skintightening: serviceSkintightening,
  stretchmarks: serviceStretchmarks,
  tattooremoval: serviceTattoo,
  molewart: serviceMolewart,
  hairloss: serviceHairloss,
  hairtransplant: serviceHairtransplant,
  bodycontouring: serviceBodycontouring,
  weightloss: heroCoolNew,
};

// Before/After images per service
const beforeAfterImages: Record<string, { image: string; label: string }[]> = {
  laser: [
    { image: baLaserUnderarm, label: "Underarm — 6 Sessions" },
    { image: baLaserMen, label: "Men's Back — 5 Sessions" },
    { image: baSkin, label: "Full Face — 8 Sessions" },
  ],
  coolsculpting: [
    { image: baCoolsculpting, label: "Abdomen — 2 Sessions" },
    { image: baCoolsculptingChin, label: "Double Chin — 2 Sessions" },
    { image: baBodycontouring2, label: "Body Contouring Results" },
  ],
  skin: [
    { image: baSkin, label: "Acne & Blemish Clearance" },
    { image: baFacial, label: "Skin Texture Improvement" },
    { image: baSkinlightening, label: "Pigmentation Correction" },
  ],
  botox: [
    { image: baBotox, label: "Forehead & Crow's Feet" },
    { image: baBotox2, label: "Frown Lines & Glabella" },
    { image: baAntiaging, label: "Full Face Rejuvenation" },
  ],
  resurfx: [
    { image: baResurfx, label: "Acne Scar Resurfacing" },
    { image: baResurfx2, label: "Fine Lines & Wrinkles" },
    { image: baSkin, label: "Skin Texture Refinement" },
  ],
  microdermabrasion: [
    { image: baMicroderm, label: "Skin Texture Refinement" },
    { image: baFacial, label: "Pore Reduction" },
    { image: baSkin, label: "Dull Skin Revival" },
  ],
  acne: [
    { image: baAcne, label: "Active Acne Clearance" },
    { image: baResurfx, label: "Acne Scar Treatment" },
    { image: baSkin, label: "Post-Acne Pigmentation" },
  ],
  skinlightening: [
    { image: baSkinlightening, label: "Full Face Brightening" },
    { image: baFacial, label: "Uneven Tone Correction" },
    { image: baSkin, label: "Hyperpigmentation Treatment" },
  ],
  antiageing: [
    { image: baAntiaging, label: "Fine Lines & Wrinkles" },
    { image: baBotox2, label: "Forehead Lines Reduction" },
    { image: baHifu, label: "Skin Firmness Improvement" },
  ],
  hifu: [
    { image: baHifu, label: "Face Lift — Non-Surgical" },
    { image: baSkintightening, label: "Jawline Definition" },
    { image: baAntiaging, label: "Skin Tightening Results" },
  ],
  darkcircles: [
    { image: baDarkcircles, label: "Under-Eye Rejuvenation" },
    { image: baAntiaging, label: "Periorbital Brightening" },
  ],
  skintightening: [
    { image: baSkintightening, label: "Jawline Contouring" },
    { image: baHifu, label: "Face & Neck Tightening" },
    { image: baAntiaging, label: "Skin Elasticity Boost" },
  ],
  stretchmarks: [
    { image: baBodycontouring2, label: "Abdomen Stretch Marks" },
    { image: baCoolsculpting, label: "Post-Pregnancy Recovery" },
  ],
  tattooremoval: [
    { image: baTattoo, label: "Full Sleeve Removal" },
    { image: baTattoo, label: "Small Tattoo — 4 Sessions" },
  ],
  molewart: [
    { image: baMolewart, label: "Mole Removal — Neck" },
    { image: baMolewart, label: "Skin Tag Clearance" },
  ],
  hairloss: [
    { image: baHairloss, label: "PRP Hair Regrowth" },
    { image: baHairtransplant, label: "Hairline Restoration" },
  ],
  hairtransplant: [
    { image: baHairtransplant, label: "FUE Hair Transplant" },
    { image: baHairloss, label: "Crown Area Restoration" },
  ],
  bodycontouring: [
    { image: baBodycontouring2, label: "Full Body Contouring" },
    { image: baCoolsculpting, label: "Abdomen Sculpting" },
    { image: baCoolsculptingChin, label: "Chin & Jawline Definition" },
  ],
  facials: [
    { image: baFacial, label: "HydraFacial Glow" },
    { image: baSkin, label: "Deep Cleansing Results" },
    { image: baSkinlightening, label: "Brightening Facial" },
  ],
  bridal: [
    { image: baFacial, label: "Pre-Bridal Glow Package" },
    { image: baSkinlightening, label: "Bridal Skin Prep" },
  ],
  weightloss: [
    { image: baCoolsculpting, label: "CoolSculpting® Body Contouring" },
    { image: baBodycontouring2, label: "Weight Loss Transformation" },
    { image: baCoolsculptingChin, label: "Double Chin Reduction" },
  ],
  salon: [],
  spa: [],
};

interface ServicePageProps {
  service: string;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const data = servicesData[service];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data) return null;

  const heroImg = heroImages[service] || data.heroImage;
  const secondaryImg = serviceImages[service] || data.secondaryImage;
  const processImg = heroImages[service] || data.processImage;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden scanlines">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt={data.title + " " + data.accent} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${data.heroOverlay}`} />
        </div>
        <AuroraMesh intensity="subtle" className="z-[2]" />
        <ParticleField count={15} className="z-[3] opacity-25" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <data.icon size={14} className="text-primary" />
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">{data.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">
                {data.title}
              </h1>
              <h1 className="font-serif text-5xl md:text-7xl italic leading-[0.95] mb-6">
                <span className="holographic-text">{data.accent}</span>
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-foreground/60 mb-6">
                {data.subtitle}
              </p>

              {/* Description */}
              <p className="text-foreground/80 text-lg max-w-xl mb-8 leading-relaxed">
                {data.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+919811157787"
                  className="border border-foreground/30 backdrop-blur-sm text-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
                >
                  <Phone size={16} /> Call Now
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-foreground/10">
                {data.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-serif text-2xl md:text-3xl text-primary">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-foreground/60 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-foreground/10 shadow-2xl">
                  <img
                    src={secondaryImg}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-6 shadow-xl max-w-xs">
                  <p className="font-serif text-lg text-primary mb-1">Free Consultation</p>
                  <p className="text-sm text-muted-foreground">Book to get a personalized quote</p>
                </div>
                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GlowDivider variant="gold" />

      {/* About Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">About This Treatment</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Why Choose <em className="text-primary">{data.title} {data.accent}</em>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {data.longDescription}
              </p>
              <ul className="space-y-3">
                {data.whyChooseUs.slice(0, 4).map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={processImg}
                  alt={`${data.title} treatment`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/40" />
            </motion.div>
          </div>
        </div>
      </section>

      <GlowDivider variant="multi" />

      {/* Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Benefits</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Why Clients <em className="text-primary">Love</em> This Treatment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Tilt3DCard maxTilt={8} className="h-full">
                  <div className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300 depth-shadow shimmer-sweep overflow-hidden relative h-full">
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                    <div className="relative z-10">
                      <motion.div whileHover={{ rotate: 10, scale: 1.15 }}
                        className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_hsl(38,45%,60%,0.3)] transition-all"
                      >
                        <benefit.icon size={24} className="text-primary" />
                      </motion.div>
                      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results Gallery */}
      {beforeAfterImages[service] && beforeAfterImages[service].length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">Real Results</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                Before & <em className="text-primary">After</em>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                See the transformative results our clients achieve at Empathy Laser Clinic. All results are from actual treatments performed at our clinic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {beforeAfterImages[service].map((ba, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-border bg-card"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={ba.image}
                      alt={`Before and after ${data.title} - ${ba.label}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Before/After labels */}
                    <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-foreground text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-border">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                      After
                    </div>
                    {/* Divider line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground/30" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Eye size={14} className="text-primary" />
                      <p className="text-sm font-semibold text-foreground">{ba.label}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Results may vary. Individual consultation required.</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/contact"
                className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                See Your Potential Results — Book Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Your Journey to <em className="text-primary">Results</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {data.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {i < data.processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                    <span className="font-serif text-xl text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Treatment Options</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                Areas We <em className="text-primary">Treat</em>
              </h2>
              
              <div className="space-y-4">
                {data.treatmentAreas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-primary/40 transition-all group"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{area.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{area.description}</p>
                    </div>
                    {area.duration && (
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full whitespace-nowrap">
                        {area.duration}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {data.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
                >
                  <img
                    src={img}
                    alt={`${data.title} gallery ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      {data.comparison && data.comparison.length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">Compare Methods</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                How It <em className="text-primary">Compares</em>
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Method</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Duration</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Pain Level</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Results</th>
                    <th className="text-left py-4 px-4 text-sm uppercase tracking-wider text-muted-foreground font-sans">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.map((item, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`border-b border-border ${item.recommended ? 'bg-primary/5' : ''}`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.recommended && <div className="w-2 h-2 rounded-full bg-primary" />}
                          <span className={`font-semibold ${item.recommended ? 'text-primary' : 'text-foreground'}`}>{item.method}</span>
                          {item.recommended && <span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase">Recommended</span>}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.duration}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.pain}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.results}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{item.cost}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Sections */}
      {data.detailedSections && data.detailedSections.length > 0 && (
        <section className={`py-24 ${data.comparison ? 'bg-background' : 'bg-secondary'}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {data.detailedSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Info size={24} className="text-primary flex-shrink-0 mt-1" />
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">{section.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-10">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Our Packages</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Investment in <em className="text-primary">Yourself</em>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Every treatment is customized to your needs. Contact us for a personalized quote tailored to your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.pricing.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? 'bg-card border-primary shadow-xl shadow-primary/10'
                    : 'bg-card border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-serif text-2xl text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="font-serif text-lg text-primary uppercase tracking-wider">Ask for Quote</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3.5 rounded-full text-sm font-sans uppercase tracking-[0.1em] inline-flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? 'gold-shimmer text-primary-foreground hover:scale-105'
                      : 'border border-border text-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  Get Quote <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Success Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              What Our <em className="text-primary">Clients</em> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border relative"
              >
                <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-serif text-primary text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Frequently Asked <em className="text-primary">Questions</em>
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
              </p>
              <Link
                to="/contact"
                className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border rounded-xl overflow-hidden bg-card"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-primary flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delhi NCR SEO Content */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              {data.title} {data.accent} in Delhi NCR
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Empathy Laser Clinic in Pitampura, Delhi is one of the most trusted clinics for {data.title.toLowerCase()} treatments in Delhi NCR. 
                With over 15 years of experience and 25,000+ happy clients, we serve patients from across Delhi including Rohini, Shalimar Bagh, 
                Model Town, Ashok Vihar, Paschim Vihar, Punjabi Bagh, Dwarka, and Janakpuri — as well as Noida, Gurugram, Ghaziabad, and Faridabad.
              </p>
              <p>
                Our clinic uses only USFDA-cleared, genuine technology and products. Whether you're looking for {data.title.toLowerCase()} cost in Delhi, 
                the best {data.title.toLowerCase()} clinic near you, or want to compare treatment options, our expert team provides free consultations 
                with transparent pricing and flexible EMI options.
              </p>
              <p>
                Conveniently located near Pitampura Metro Station, Empathy Laser Clinic is easily accessible from anywhere in North Delhi and Delhi NCR. 
                We are open Monday to Saturday, 10 AM to 7 PM. Call 9811157787 or WhatsApp us to book your free consultation today.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["Pitampura", "Rohini", "Shalimar Bagh", "Model Town", "Ashok Vihar", "Noida", "Gurugram", "North Delhi", "Delhi NCR"].map((area, i) => (
                <span key={i} className="text-xs border border-border rounded-full px-3 py-1.5 text-muted-foreground">
                  {data.title} in {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Book your free consultation at Delhi NCR's most trusted aesthetic clinic and take the first step towards {data.tagline.toLowerCase()}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919811157787"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all"
              >
                <Phone size={16} /> Call 9811157787
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
