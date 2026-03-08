import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Snowflake, Sun, Heart, Flower2, Scissors, Syringe, Diamond, Scan, Scale, CircleDot, Palette, Hourglass, Radio, EyeOff, Lock, Eraser, Trash2, CircleX, Pill, Microscope, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import serviceLaser from "@/assets/service-laser-gen.jpg";
import serviceCoolsculpting from "@/assets/service-cool-gen.jpg";
import serviceSkin from "@/assets/service-skin-gen.jpg";
import serviceBotox from "@/assets/service-botox-gen.jpg";
import serviceBridal from "@/assets/service-bridal-gen.jpg";
import serviceFacial from "@/assets/service-facial-gen.jpg";
import serviceSalon from "@/assets/service-salon-gen.jpg";
import serviceMicroderm from "@/assets/service-microderm-gen.jpg";
import serviceResurfx from "@/assets/service-resurfx-gen.jpg";
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
    image: serviceLaser,
  },
  {
    id: "cool",
    label: "CoolSculpting®",
    icon: Snowflake,
    badge: "FDA-Cleared",
    title: "CoolSculpting® Fat Freezing",
    desc: "The world's #1 non-invasive fat reduction treatment. CoolSculpting® uses patented cryolipolysis to freeze and eliminate stubborn fat cells permanently — no surgery, no needles, no downtime.",
    features: ["27% fat reduction per session", "9 treatable body areas", "Non-surgical & non-invasive", "FDA-cleared technology", "Permanent fat cell elimination"],
    link: "/coolsculpting",
    image: serviceCoolsculpting,
  },
  {
    id: "acne",
    label: "Acne & Scars",
    icon: CircleDot,
    badge: "Expert Dermatology",
    title: "Acne & Acne Scar Treatment",
    desc: "Advanced dermatological treatments that target acne at its root and restore smooth, scar-free skin with clinical-grade technology including chemical peels, LED therapy, ResurFX™ laser, and microneedling with PRP.",
    features: ["Chemical peels & LED blue light therapy", "ResurFX™ fractional laser for scars", "Microneedling with PRP", "Calibrated for Indian skin types", "Long-term prevention protocols"],
    link: "/acne-treatment",
    image: serviceAcne,
  },
  {
    id: "skinlightening",
    label: "Skin Lightening",
    icon: Palette,
    badge: "Brightening Experts",
    title: "Skin Lightening & Pigmentation",
    desc: "Advanced clinical treatments to restore even-toned, luminous skin. We target melasma, dark patches, sun damage, and uneven skin tone safely for all Indian skin types.",
    features: ["Chemical peels & laser toning", "Melasma specialist protocol", "Glutathione & vitamin C infusions", "Professional de-tan treatments", "Indian skin-safe formulations"],
    link: "/skin-lightening",
    image: serviceSkinlightening,
  },
  {
    id: "antiageing",
    label: "Anti-Ageing",
    icon: Hourglass,
    badge: "Age Reversal",
    title: "Anti-Ageing Treatments",
    desc: "Combine Botox, dermal fillers, HIFU, ResurFX™ laser, and advanced facials to restore youthful vitality — without surgery. Natural-looking results that make you look refreshed, not 'done'.",
    features: ["Genuine Allergan Botox", "Premium dermal fillers", "HIFU non-surgical face lift", "ResurFX™ collagen remodeling", "Preventive anti-ageing programs"],
    link: "/anti-ageing",
    image: serviceAntiageing,
  },
  {
    id: "hifu",
    label: "HIFU Face Lift",
    icon: Radio,
    badge: "Non-Surgical Lift",
    title: "HIFU Non-Surgical Face Lift",
    desc: "High-Intensity Focused Ultrasound delivers focused energy deep into the SMAS layer to lift, tighten, and contour — all without surgery, needles, or downtime.",
    features: ["Targets SMAS layer (same as surgical facelift)", "Natural collagen regeneration", "Zero downtime", "Results last 12-18 months", "Face, neck, jawline & body"],
    link: "/hifu-treatment",
    image: serviceHifu,
  },
  {
    id: "darkcircles",
    label: "Dark Circles",
    icon: EyeOff,
    badge: "Under-Eye Experts",
    title: "Dark Circles Treatment",
    desc: "Specialized under-eye treatments targeting pigmentation, hollowness, and puffiness. We use fillers, PRP, peels, and laser toning for brighter, rejuvenated eyes.",
    features: ["Under-eye HA fillers", "PRP therapy for natural brightening", "Eye-safe chemical peels", "Root cause diagnosis", "Visible results from first session"],
    link: "/dark-circles",
    image: serviceDarkcircles,
  },
  {
    id: "skintightening",
    label: "Skin Tightening",
    icon: Lock,
    badge: "Skin Firming",
    title: "Non-Surgical Skin Tightening",
    desc: "Sagging skin and loss of elasticity treated effectively without surgery using HIFU, radiofrequency, and ResurFX™ fractional laser technology.",
    features: ["HIFU deep tissue lifting", "Radiofrequency surface tightening", "ResurFX™ collagen remodeling", "Face and body treatment", "Post-weight loss skin firming"],
    link: "/skin-tightening",
    image: serviceSkintightening,
  },
  {
    id: "hairloss",
    label: "Hair Loss & PRP",
    icon: Pill,
    badge: "Hair Restoration",
    title: "Hair Loss & PRP Treatment",
    desc: "Stop hair loss and regrow thicker hair with PRP therapy, mesotherapy, low-level laser therapy, and advanced medical treatments. Effective for men and women.",
    features: ["PRP (Platelet-Rich Plasma) therapy", "Scalp mesotherapy", "Low-level laser therapy (LLLT)", "Trichoscopy diagnosis", "Effective for men & women"],
    link: "/hair-loss-treatment",
    image: serviceHairloss,
  },
  {
    id: "hairtransplant",
    label: "Hair Transplant",
    icon: Microscope,
    badge: "Permanent Results",
    title: "FUE Hair Transplant",
    desc: "Advanced FUE hair transplant for permanent, natural-looking hair restoration. No linear scar, minimally invasive, with PRP-enhanced graft survival.",
    features: ["Advanced FUE technique", "Natural hairline design", "No linear scar", "95%+ graft survival rate", "PRP-enhanced recovery"],
    link: "/hair-transplant",
    image: serviceHairtransplant,
  },
  {
    id: "stretchmarks",
    label: "Stretch Marks",
    icon: Eraser,
    badge: "Skin Renewal",
    title: "Stretch Marks Removal",
    desc: "Significantly reduce stretch marks with ResurFX™ fractional laser, microneedling with PRP, and medical-grade treatments. Effective on both new and old stretch marks.",
    features: ["ResurFX™ fractional laser", "Microneedling + PRP", "50-80% improvement", "New & old stretch marks", "Any body area"],
    link: "/stretch-marks",
    image: serviceStretchmarks,
  },
  {
    id: "tattooremoval",
    label: "Tattoo Removal",
    icon: Trash2,
    badge: "Laser Removal",
    title: "Laser Tattoo Removal",
    desc: "Q-switched Nd:YAG laser technology safely breaks down tattoo pigments for effective removal. Works on all ink colors, safe for Indian skin types.",
    features: ["Q-switched Nd:YAG laser", "Multi-color ink treatment", "Safe for Indian skin", "Cover-up preparation available", "Gradual fading per session"],
    link: "/tattoo-removal",
    image: serviceTattoo,
  },
  {
    id: "molewart",
    label: "Mole & Wart",
    icon: CircleX,
    badge: "Clinical Removal",
    title: "Mole & Wart Removal",
    desc: "Safe, quick removal of moles, warts, skin tags, and DPNs using CO2 laser, radiofrequency, and electrocautery — with minimal scarring.",
    features: ["CO2 laser & RF removal", "5-20 minute procedures", "Minimal scarring", "Multiple growths per session", "Clinical assessment included"],
    link: "/mole-wart-removal",
    image: serviceMolewart,
  },
  {
    id: "bodycontouring",
    label: "Body Contouring",
    icon: Dumbbell,
    badge: "Body Sculpting",
    title: "Body Contouring & Inch Loss",
    desc: "Complete non-surgical body sculpting with CoolSculpting®, radiofrequency tightening, ultrasound cavitation, and targeted inch loss programs.",
    features: ["CoolSculpting® fat freezing", "RF body tightening", "Ultrasound cavitation", "Cellulite reduction", "Measurable inch loss"],
    link: "/body-contouring",
    image: serviceCoolsculpting,
  },
  {
    id: "weightloss",
    label: "Weight Loss",
    icon: Scale,
    badge: "Non-Surgical",
    title: "Weight Loss & Body Contouring Delhi",
    desc: "Delhi NCR's most trusted non-surgical weight loss clinic. CoolSculpting® Elite permanently eliminates stubborn fat cells — no surgery, no needles, zero downtime.",
    features: ["Up to 27% fat reduction per session", "8+ treatable body areas", "Permanent fat cell elimination", "Non-surgical & FDA-cleared", "Free body assessment included"],
    link: "/weight-loss-delhi",
    image: serviceCoolsculpting,
  },
  {
    id: "skin",
    label: "Skin Treatments",
    icon: Sun,
    badge: "Clinical Grade",
    title: "Advanced Skin Rejuvenation",
    desc: "From HydraFacials to chemical peels and LED therapy, our clinical skincare treatments address every concern — acne, pigmentation, anti-aging, dullness, and uneven texture.",
    features: ["HydraFacial & LED Therapy", "Chemical Peels", "Skin Boosters", "Pigmentation correction", "Anti-aging treatments"],
    link: "/skin-treatments",
    image: serviceSkin,
  },
  {
    id: "resurfx",
    label: "ResurFX™",
    icon: Scan,
    badge: "Lumenis Tech",
    title: "ResurFX™ Skin Resurfacing",
    desc: "Revolutionary non-ablative fractional laser that stimulates deep collagen remodeling to treat scars, wrinkles, stretch marks, and uneven skin texture — with minimal downtime.",
    features: ["Non-ablative fractional laser", "Acne & surgical scar reduction", "Stretch mark treatment", "Collagen remodeling", "Safe for all skin types"],
    link: "/resurfx",
    image: serviceResurfx,
  },
  {
    id: "bridal",
    label: "Bridal",
    icon: Heart,
    badge: "Premium Packages",
    title: "Luxury Bridal Packages",
    desc: "Comprehensive pre-bridal treatments combining laser, skincare, spa, and salon services into a complete pre-wedding transformation.",
    features: ["6-month prep programs", "Complete skin transformation", "Hair removal packages", "HD & Airbrush makeup", "Bridesmaids packages"],
    link: "/bridal-packages",
    image: serviceBridal,
  },
  {
    id: "spa",
    label: "Spa",
    icon: Flower2,
    badge: "Wellness",
    title: "Spa & Wellness Treatments",
    desc: "Indulge in complete relaxation with our therapeutic spa treatments. From Swedish massage to detox wraps, experience wellness that rejuvenates body and mind.",
    features: ["Swedish & Deep Tissue Massage", "Aromatherapy", "Body Wraps & Scrubs", "Hot Stone Therapy", "Couple Spa packages"],
    link: "/spa-services",
    image: serviceSpa,
  },
  {
    id: "salon",
    label: "Salon",
    icon: Scissors,
    badge: "Expert Stylists",
    title: "Premium Salon Services",
    desc: "Expert hair, nail, makeup, and grooming services delivered with the same clinical precision and luxury experience that defines Empathy Laser Clinic.",
    features: ["Hair Styling & Colour", "Keratin Treatments", "Manicure & Pedicure", "Professional Makeup", "Waxing & Threading"],
    link: "/salon-services",
    image: serviceSalon,
  },
  {
    id: "botox",
    label: "Botox & Fillers",
    icon: Syringe,
    badge: "Allergan Certified",
    title: "Natural-Looking Botox & Fillers",
    desc: "Administered by certified aesthetic physicians using only genuine Allergan Botox and premium dermal fillers. Subtle, natural-looking results that enhance your features.",
    features: ["Genuine Allergan products", "Certified physicians", "Forehead, Crow's Feet, Lip Flip", "Lip, Cheek & Jawline Fillers", "Natural-looking results"],
    link: "/botox-fillers",
    image: serviceBotox,
  },
  {
    id: "micro",
    label: "Microdermabrasion",
    icon: Diamond,
    badge: "Skin Renewal",
    title: "Microdermabrasion Treatment",
    desc: "Reveal radiant, youthful skin with our advanced microdermabrasion treatments. Gently exfoliate the outer layer of skin to reduce fine lines, sun damage, and uneven texture.",
    features: ["Diamond-tip technology", "Fine line reduction", "Sun damage repair", "Improved skin texture", "Course packages available"],
    link: "/microdermabrasion",
    image: serviceMicroderm,
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Our Expertise</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            All <em className="text-primary">Services</em>
          </h2>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.1em] rounded-full border transition-all ${
                i === active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden relative group">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                {/* Decorative frame corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/40" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/40" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs px-4 py-1.5 rounded-full font-sans uppercase tracking-wider">
                  {tab.badge}
                </div>
                {/* Floating icon */}
                <div className="absolute bottom-6 left-6 w-14 h-14 bg-card/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-border">
                  <tab.icon size={24} className="text-primary" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{tab.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{tab.desc}</p>
              <ul className="space-y-3 mb-6">
                {tab.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check size={14} className="text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <p className="text-primary font-sans text-sm uppercase tracking-[0.15em] mb-8">Contact us for a personalized quote</p>
              <div className="flex flex-wrap gap-4">
                <Link to={tab.link} className="gold-shimmer text-primary-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
                  Learn More <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full hover:border-primary hover:text-primary transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
