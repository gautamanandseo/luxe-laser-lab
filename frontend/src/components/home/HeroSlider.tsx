import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroLaser from "@/assets/hero-laser-gen.jpg";
import heroCool from "@/assets/hero-coolsculpting-gen.jpg";
import heroSkin from "@/assets/hero-skin-gen.jpg";
import heroBridal from "@/assets/hero-bridal-gen.jpg";

const slides = [
  {
    image: heroLaser,
    tag: "USFDA Cleared Treatment",
    headline: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "ADVANCED DIODE TECHNOLOGY",
    desc: "Experience precision-driven laser hair removal safe for all Indian skin types. Clinically proven, zero downtime, transformative results.",
    cta1: { text: "Book Free Consultation", link: "/contact" },
    cta2: { text: "Explore Treatment", link: "/laser-hair-removal" },
    overlay: "from-background/90 via-background/60 to-transparent",
  },
  {
    image: heroCool,
    tag: "FDA-Cleared Fat Freezing",
    headline: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "NON-SURGICAL BODY CONTOURING",
    desc: "Freeze away stubborn fat with clinically proven cryolipolysis. 27% fat reduction per session. No surgery, no downtime.",
    cta1: { text: "Book Consultation", link: "/contact" },
    cta2: { text: "Learn More", link: "/coolsculpting" },
    overlay: "from-[hsl(210,60%,5%)/90] via-[hsl(210,60%,5%)/60] to-transparent",
  },
  {
    image: heroSkin,
    tag: "Advanced Skin Science",
    headline: "Radiant Skin",
    accent: "Rejuvenation",
    subtitle: "CLINICAL SKINCARE EXCELLENCE",
    desc: "From HydraFacials to chemical peels, discover treatments crafted for your unique skin. Visible results from session one.",
    cta1: { text: "Book Skin Analysis", link: "/contact" },
    cta2: { text: "View Treatments", link: "/skin-treatments" },
    overlay: "from-[hsl(150,40%,4%)/90] via-[hsl(150,40%,4%)/60] to-transparent",
  },
  {
    image: heroBridal,
    tag: "Complete Bridal Beauty",
    headline: "Your Most",
    accent: "Beautiful Day",
    subtitle: "LUXURY BRIDAL PACKAGES",
    desc: "Comprehensive pre-bridal treatments from skincare to hair removal. Start your journey 6 months before your special day.",
    cta1: { text: "Bridal Consultation", link: "/contact" },
    cta2: { text: "View Packages", link: "/bridal-packages" },
    overlay: "from-[hsl(350,40%,4%)/90] via-[hsl(350,40%,4%)/60] to-transparent",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.headline + " " + slide.accent}
            className="w-full h-full object-cover animate-ken-burns"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <Shield size={14} className="text-primary" />
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary">{slide.tag}</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-2">
                {slide.headline}
              </h1>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light italic text-primary leading-[0.95] mb-6">
                {slide.accent}
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4">{slide.subtitle}</p>

              {/* Description */}
              <p className="text-foreground/70 text-base md:text-lg max-w-lg mb-8 font-light leading-relaxed">
                {slide.desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to={slide.cta1.link} className="gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
                  {slide.cta1.text} <ChevronRight size={16} />
                </Link>
                <Link to={slide.cta2.link} className="border border-foreground/30 text-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors">
                  {slide.cta2.text} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8 bg-background/30 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
        <span className="text-sm font-sans text-primary font-medium">
          {String(current + 1).padStart(2, "0")} <span className="text-foreground/40">/ {String(slides.length).padStart(2, "0")}</span>
        </span>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full transition-all duration-500 ${i === current ? "w-10 h-2 bg-primary" : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
