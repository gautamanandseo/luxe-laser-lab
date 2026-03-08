import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Snowflake, Sun, Heart, Flower2, Scissors, Syringe, Diamond, Scan, Scale, CircleDot, Palette, Hourglass, Radio, EyeOff, Lock, Eraser, Trash2, CircleX, Pill, Microscope, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";

// Only eagerly load the first visible service image
import serviceLaser from "@/assets/service-laser-gen.jpg";

const tabs = [
  {
    id: "laser",
    label: "Laser Hair Removal",
    icon: Sparkles,
    badge: "USFDA Cleared",
    title: "Permanent Laser Hair Removal",
    desc: "Delhi NCR's most advanced laser hair removal powered by Lumenis LightSheer Desire™ & Alma Soprano ICE Platinum™. Safe for all Indian skin types, virtually painless, permanent results.",
    features: ["Lumenis LightSheer Desire™ technology", "Alma Soprano ICE Platinum™ (pain-free)", "Safe for all Indian skin types", "Permanent hair reduction in 6-8 sessions", "Full body treatments available"],
    link: "/laser-hair-removal",
    imageModule: null as string | null, // will be set after load
  },
  { id: "cool", label: "CoolSculpting®", icon: Snowflake, badge: "FDA-Cleared", title: "CoolSculpting® Fat Freezing", desc: "The world's #1 non-invasive fat reduction treatment. CoolSculpting® uses patented cryolipolysis to freeze and eliminate stubborn fat cells permanently — no surgery, no needles, no downtime.", features: ["27% fat reduction per session", "9 treatable body areas", "Non-surgical & non-invasive", "FDA-cleared technology", "Permanent fat cell elimination"], link: "/coolsculpting", imageModule: null },
  { id: "acne", label: "Acne & Scars", icon: CircleDot, badge: "Expert Dermatology", title: "Acne & Acne Scar Treatment", desc: "Advanced dermatological treatments that target acne at its root and restore smooth, scar-free skin with clinical-grade technology including chemical peels, LED therapy, ResurFX™ laser, and microneedling with PRP.", features: ["Chemical peels & LED blue light therapy", "ResurFX™ fractional laser for scars", "Microneedling with PRP", "Calibrated for Indian skin types", "Long-term prevention protocols"], link: "/acne-treatment", imageModule: null },
  { id: "skinlightening", label: "Skin Lightening", icon: Palette, badge: "Brightening Experts", title: "Skin Lightening & Pigmentation", desc: "Advanced clinical treatments to restore even-toned, luminous skin. We target melasma, dark patches, sun damage, and uneven skin tone safely for all Indian skin types.", features: ["Chemical peels & laser toning", "Melasma specialist protocol", "Glutathione & vitamin C infusions", "Professional de-tan treatments", "Indian skin-safe formulations"], link: "/skin-lightening", imageModule: null },
  { id: "antiageing", label: "Anti-Ageing", icon: Hourglass, badge: "Age Reversal", title: "Anti-Ageing Treatments", desc: "Combine Botox, dermal fillers, HIFU, ResurFX™ laser, and advanced facials to restore youthful vitality — without surgery. Natural-looking results that make you look refreshed, not 'done'.", features: ["Genuine Allergan Botox", "Premium dermal fillers", "HIFU non-surgical face lift", "ResurFX™ collagen remodeling", "Preventive anti-ageing programs"], link: "/anti-ageing", imageModule: null },
  { id: "hifu", label: "HIFU Face Lift", icon: Radio, badge: "Non-Surgical Lift", title: "HIFU Non-Surgical Face Lift", desc: "High-Intensity Focused Ultrasound delivers focused energy deep into the SMAS layer to lift, tighten, and contour — all without surgery, needles, or downtime.", features: ["Targets SMAS layer (same as surgical facelift)", "Natural collagen regeneration", "Zero downtime", "Results last 12-18 months", "Face, neck, jawline & body"], link: "/hifu-treatment", imageModule: null },
  { id: "darkcircles", label: "Dark Circles", icon: EyeOff, badge: "Under-Eye Experts", title: "Dark Circles Treatment", desc: "Specialized under-eye treatments targeting pigmentation, hollowness, and puffiness. We use fillers, PRP, peels, and laser toning for brighter, rejuvenated eyes.", features: ["Under-eye HA fillers", "PRP therapy for natural brightening", "Eye-safe chemical peels", "Root cause diagnosis", "Visible results from first session"], link: "/dark-circles", imageModule: null },
  { id: "skintightening", label: "Skin Tightening", icon: Lock, badge: "Skin Firming", title: "Non-Surgical Skin Tightening", desc: "Sagging skin and loss of elasticity treated effectively without surgery using HIFU, radiofrequency, and ResurFX™ fractional laser technology.", features: ["HIFU deep tissue lifting", "Radiofrequency surface tightening", "ResurFX™ collagen remodeling", "Face and body treatment", "Post-weight loss skin firming"], link: "/skin-tightening", imageModule: null },
  { id: "hairloss", label: "Hair Loss & PRP", icon: Pill, badge: "Hair Restoration", title: "Hair Loss & PRP Treatment", desc: "Stop hair loss and regrow thicker hair with PRP therapy, mesotherapy, low-level laser therapy, and advanced medical treatments. Effective for men and women.", features: ["PRP (Platelet-Rich Plasma) therapy", "Scalp mesotherapy", "Low-level laser therapy (LLLT)", "Trichoscopy diagnosis", "Effective for men & women"], link: "/hair-loss-treatment", imageModule: null },
  { id: "hairtransplant", label: "Hair Transplant", icon: Microscope, badge: "Permanent Results", title: "FUE Hair Transplant", desc: "Advanced FUE hair transplant for permanent, natural-looking hair restoration. No linear scar, minimally invasive, with PRP-enhanced graft survival.", features: ["Advanced FUE technique", "Natural hairline design", "No linear scar", "95%+ graft survival rate", "PRP-enhanced recovery"], link: "/hair-transplant", imageModule: null },
  { id: "stretchmarks", label: "Stretch Marks", icon: Eraser, badge: "Skin Renewal", title: "Stretch Marks Removal", desc: "Significantly reduce stretch marks with ResurFX™ fractional laser, microneedling with PRP, and medical-grade treatments. Effective on both new and old stretch marks.", features: ["ResurFX™ fractional laser", "Microneedling + PRP", "50-80% improvement", "New & old stretch marks", "Any body area"], link: "/stretch-marks", imageModule: null },
  { id: "tattooremoval", label: "Tattoo Removal", icon: Trash2, badge: "Laser Removal", title: "Laser Tattoo Removal", desc: "Q-switched Nd:YAG laser technology safely breaks down tattoo pigments for effective removal. Works on all ink colors, safe for Indian skin types.", features: ["Q-switched Nd:YAG laser", "Multi-color ink treatment", "Safe for Indian skin", "Cover-up preparation available", "Gradual fading per session"], link: "/tattoo-removal", imageModule: null },
  { id: "molewart", label: "Mole & Wart", icon: CircleX, badge: "Clinical Removal", title: "Mole & Wart Removal", desc: "Safe, quick removal of moles, warts, skin tags, and DPNs using CO2 laser, radiofrequency, and electrocautery — with minimal scarring.", features: ["CO2 laser & RF removal", "5-20 minute procedures", "Minimal scarring", "Multiple growths per session", "Clinical assessment included"], link: "/mole-wart-removal", imageModule: null },
  { id: "bodycontouring", label: "Body Contouring", icon: Dumbbell, badge: "Body Sculpting", title: "Body Contouring & Inch Loss", desc: "Complete non-surgical body sculpting with CoolSculpting®, radiofrequency tightening, ultrasound cavitation, and targeted inch loss programs.", features: ["CoolSculpting® fat freezing", "RF body tightening", "Ultrasound cavitation", "Cellulite reduction", "Measurable inch loss"], link: "/body-contouring", imageModule: null },
  { id: "weightloss", label: "Weight Loss", icon: Scale, badge: "Non-Surgical", title: "Weight Loss & Body Contouring Delhi", desc: "Delhi NCR's most trusted non-surgical weight loss clinic. CoolSculpting® Elite permanently eliminates stubborn fat cells — no surgery, no needles, zero downtime.", features: ["Up to 27% fat reduction per session", "8+ treatable body areas", "Permanent fat cell elimination", "Non-surgical & FDA-cleared", "Free body assessment included"], link: "/weight-loss-delhi", imageModule: null },
  { id: "skin", label: "Skin Treatments", icon: Sun, badge: "Clinical Grade", title: "Advanced Skin Rejuvenation", desc: "From HydraFacials to chemical peels and LED therapy, our clinical skincare treatments address every concern — acne, pigmentation, anti-aging, dullness, and uneven texture.", features: ["HydraFacial & LED Therapy", "Chemical Peels", "Skin Boosters", "Pigmentation correction", "Anti-aging treatments"], link: "/skin-treatments", imageModule: null },
  { id: "resurfx", label: "ResurFX™", icon: Scan, badge: "Lumenis Tech", title: "ResurFX™ Skin Resurfacing", desc: "Revolutionary non-ablative fractional laser that stimulates deep collagen remodeling to treat scars, wrinkles, stretch marks, and uneven skin texture — with minimal downtime.", features: ["Non-ablative fractional laser", "Acne & surgical scar reduction", "Stretch mark treatment", "Collagen remodeling", "Safe for all skin types"], link: "/resurfx", imageModule: null },
  { id: "bridal", label: "Bridal", icon: Heart, badge: "Premium Packages", title: "Luxury Bridal Packages", desc: "Comprehensive pre-bridal treatments combining laser, skincare, spa, and salon services into a complete pre-wedding transformation.", features: ["6-month prep programs", "Complete skin transformation", "Hair removal packages", "HD & Airbrush makeup", "Bridesmaids packages"], link: "/bridal-packages", imageModule: null },
  { id: "facials", label: "Facials", icon: Flower2, badge: "Clinical Facials", title: "Advanced Facials & HydraFacial", desc: "From signature HydraFacials to LED light therapy, oxygen facials, and medical-grade chemical peels — clinical facial treatments that deliver visible, lasting results.", features: ["HydraFacial Vortex-Fusion technology", "LED Light Therapy (Blue & Red)", "Oxygen Infusion Facials", "Gold & Platinum Luxury Facials", "Customized for every skin type"], link: "/facials", imageModule: null },
  { id: "salon", label: "Salon", icon: Scissors, badge: "Expert Stylists", title: "Premium Salon Services", desc: "Expert hair, nail, makeup, and grooming services delivered with the same clinical precision and luxury experience that defines Empathy Laser Clinic.", features: ["Hair Styling & Colour", "Keratin Treatments", "Manicure & Pedicure", "Professional Makeup", "Waxing & Threading"], link: "/salon-services", imageModule: null },
  { id: "botox", label: "Botox & Fillers", icon: Syringe, badge: "Allergan Certified", title: "Natural-Looking Botox & Fillers", desc: "Administered by certified aesthetic physicians using only genuine Allergan Botox and premium dermal fillers. Subtle, natural-looking results that enhance your features.", features: ["Genuine Allergan products", "Certified physicians", "Forehead, Crow's Feet, Lip Flip", "Lip, Cheek & Jawline Fillers", "Natural-looking results"], link: "/botox-fillers", imageModule: null },
  { id: "micro", label: "Microdermabrasion", icon: Diamond, badge: "Skin Renewal", title: "Microdermabrasion Treatment", desc: "Reveal radiant, youthful skin with our advanced microdermabrasion treatments. Gently exfoliate the outer layer of skin to reduce fine lines, sun damage, and uneven texture.", features: ["Diamond-tip technology", "Fine line reduction", "Sun damage repair", "Improved skin texture", "Course packages available"], link: "/microdermabrasion", imageModule: null },
];

// Map tab IDs to their image imports for lazy loading
const imageImportMap: Record<string, () => Promise<{ default: string }>> = {
  laser: () => import("@/assets/service-laser-gen.jpg"),
  cool: () => import("@/assets/service-cool-gen.jpg"),
  acne: () => import("@/assets/service-acne-gen.jpg"),
  skinlightening: () => import("@/assets/service-skinlightening-gen.jpg"),
  antiageing: () => import("@/assets/service-antiageing-gen.jpg"),
  hifu: () => import("@/assets/service-hifu-gen.jpg"),
  darkcircles: () => import("@/assets/service-darkcircles-gen.jpg"),
  skintightening: () => import("@/assets/service-skintightening-gen.jpg"),
  hairloss: () => import("@/assets/service-hairloss-gen.jpg"),
  hairtransplant: () => import("@/assets/service-hairtransplant-gen.jpg"),
  stretchmarks: () => import("@/assets/service-stretchmarks-gen.jpg"),
  tattooremoval: () => import("@/assets/service-tattoo-gen.jpg"),
  molewart: () => import("@/assets/service-molewart-gen.jpg"),
  bodycontouring: () => import("@/assets/service-bodycontouring-gen.jpg"),
  weightloss: () => import("@/assets/service-cool-gen.jpg"),
  skin: () => import("@/assets/service-skin-gen.jpg"),
  resurfx: () => import("@/assets/service-resurfx-gen.jpg"),
  bridal: () => import("@/assets/service-bridal-gen.jpg"),
  facials: () => import("@/assets/service-facial-gen.jpg"),
  salon: () => import("@/assets/service-salon-gen.jpg"),
  botox: () => import("@/assets/service-botox-gen.jpg"),
  micro: () => import("@/assets/service-microderm-gen.jpg"),
};

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const [imageCache, setImageCache] = useState<Record<string, string>>({ laser: serviceLaser });
  const tab = tabs[active];

  // Lazy load image when tab changes
  useEffect(() => {
    const tabId = tabs[active].id;
    if (imageCache[tabId]) return;

    const loader = imageImportMap[tabId];
    if (loader) {
      loader().then((mod) => {
        setImageCache((prev) => ({ ...prev, [tabId]: mod.default }));
      });
    }
  }, [active, imageCache]);

  const currentImage = imageCache[tab.id] || serviceLaser;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="eyebrow mb-4">Our Expertise</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            All <em className="holographic-text" style={{ fontStyle: "italic" }}>Services</em>
          </h2>
        </ScrollReveal>

        {/* Tab Pills */}
        <ScrollReveal direction="up" delay={0.2} className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.1em] rounded-full border transition-all duration-300 ${
                i === active
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(38,45%,60%,0.3)]"
                  : "border-primary/10 text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {t.label}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Visual */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden relative group border-futuristic"
              >
                <img
                  src={currentImage}
                  alt={tab.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 scanlines opacity-30" />
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40" />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs px-4 py-1.5 rounded-full font-sans uppercase tracking-wider shadow-[0_0_15px_hsl(38,45%,60%,0.3)]"
                >
                  {tab.badge}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-6 left-6 w-14 h-14 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/20 shadow-[0_0_20px_hsl(38,45%,60%,0.1)]"
                >
                  <tab.icon size={24} className="text-primary" />
                </motion.div>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl text-foreground mb-4"
              >
                {tab.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {tab.desc}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-8"
              >
                {tab.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </motion.ul>
              <Link
                to={tab.link}
                className="inline-flex items-center gap-2 gold-shimmer text-primary-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full hover:scale-105 transition-transform"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
