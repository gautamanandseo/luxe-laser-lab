import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Snowflake, Sun, Heart, Flower2, Scissors, Syringe, Diamond } from "lucide-react";
import { Link } from "react-router-dom";
import serviceLaser from "@/assets/service-laser-gen.jpg";
import serviceCoolsculpting from "@/assets/service-cool-gen.jpg";
import serviceSkin from "@/assets/service-skin-gen.jpg";
import serviceBotox from "@/assets/service-botox-gen.jpg";
import serviceBridal from "@/assets/service-bridal-gen.jpg";
import serviceSpa from "@/assets/service-spa-gen.jpg";
import serviceSalon from "@/assets/service-salon-gen.jpg";
import serviceMicroderm from "@/assets/service-microderm-gen.jpg";

const tabs = [
  {
    id: "laser",
    label: "Laser Hair Removal",
    icon: Sparkles,
    badge: "USFDA Cleared",
    title: "Permanent Laser Hair Removal",
    desc: "Experience the gold standard in laser hair removal with our advanced Diode technology. Safe for all Indian skin types (Fitzpatrick I-VI), our precision-driven treatments target hair follicles at the root for permanent reduction.",
    features: ["Safe for all Indian skin types", "Advanced Diode Laser Technology", "Zero downtime", "Permanent hair reduction", "Full body treatments available"],
    price: "Starting from ₹1,999",
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
    price: "Starting from ₹15,000",
    link: "/coolsculpting",
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
    price: "Starting from ₹2,499",
    link: "/skin-treatments",
    image: serviceSkin,
  },
  {
    id: "bridal",
    label: "Bridal",
    icon: Heart,
    badge: "Premium Packages",
    title: "Luxury Bridal Packages",
    desc: "Your most beautiful day deserves the most comprehensive preparation. Our bridal packages combine laser, skincare, spa, and salon services into a complete pre-wedding transformation.",
    features: ["6-month prep programs", "Complete skin transformation", "Hair removal packages", "HD & Airbrush makeup", "Bridesmaids packages"],
    price: "Starting from ₹25,000",
    link: "/bridal-packages",
    image: serviceSkinResurfacing,
  },
  {
    id: "spa",
    label: "Spa",
    icon: Flower2,
    badge: "Wellness",
    title: "Spa & Wellness Treatments",
    desc: "Indulge in complete relaxation with our therapeutic spa treatments. From Swedish massage to detox wraps, experience wellness that rejuvenates body and mind.",
    features: ["Swedish & Deep Tissue Massage", "Aromatherapy", "Body Wraps & Scrubs", "Hot Stone Therapy", "Couple Spa packages"],
    price: "Starting from ₹1,499",
    link: "/spa-services",
    image: serviceSkinResurfacing,
  },
  {
    id: "salon",
    label: "Salon",
    icon: Scissors,
    badge: "Expert Stylists",
    title: "Premium Salon Services",
    desc: "Expert hair, nail, makeup, and grooming services delivered with the same clinical precision and luxury experience that defines Empathy Laser Clinic.",
    features: ["Hair Styling & Colour", "Keratin Treatments", "Manicure & Pedicure", "Professional Makeup", "Waxing & Threading"],
    price: "Starting from ₹499",
    link: "/salon-services",
    image: serviceAcne,
  },
  {
    id: "botox",
    label: "Botox & Fillers",
    icon: Syringe,
    badge: "Allergan Certified",
    title: "Natural-Looking Botox & Fillers",
    desc: "Administered by certified aesthetic physicians using only genuine Allergan Botox and premium dermal fillers. Subtle, natural-looking results that enhance your features.",
    features: ["Genuine Allergan products", "Certified physicians", "Forehead, Crow's Feet, Lip Flip", "Lip, Cheek & Jawline Fillers", "Natural-looking results"],
    price: "Starting from ₹8,000",
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
    price: "Starting from ₹1,999",
    link: "/microdermabrasion",
    image: serviceSkinResurfacing,
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
              <p className="text-primary font-serif text-2xl mb-8">{tab.price}</p>
              <div className="flex flex-wrap gap-4">
                <Link to={tab.link} className="gold-shimmer text-primary-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
                  Learn More <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full hover:border-primary hover:text-primary transition-colors">
                  Book Consultation
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
