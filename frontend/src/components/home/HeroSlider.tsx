import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleField from "@/components/effects/ParticleField";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import heroLaser from "@/assets/hero-laser-gen.jpg";

// Lazy-load non-first-slide images
const slideImages = [
  heroLaser, // eagerly loaded
  null, // will be set lazily
  null,
  null,
];

const slides = [
  {
    tag: "USFDA Cleared · Lumenis LightSheer · Alma Soprano",
    headline: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "LIGHTSHEER DESIRE™ & SOPRANO ICE PLATINUM™",
    desc: "Delhi NCR's most advanced laser hair removal with Lumenis LightSheer Desire & Alma Soprano ICE Platinum. Safe for all Indian skin types. Painless, permanent results.",
    cta1: { text: "Book Free Consultation", link: "/contact" },
    cta2: { text: "Explore Treatment", link: "/laser-hair-removal" },
    overlay: "from-background/90 via-background/60 to-transparent",
  },
  {
    tag: "FDA-Cleared · #1 Weight Loss Solution",
    headline: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "DELHI'S PREMIER WEIGHT LOSS CLINIC",
    desc: "Freeze away stubborn fat with CoolSculpting® Elite — Delhi NCR's top non-surgical weight loss and body contouring solution. 27% fat reduction per session.",
    cta1: { text: "Book Body Assessment", link: "/contact" },
    cta2: { text: "Learn More", link: "/coolsculpting" },
    overlay: "from-[hsl(210,60%,5%)/90] via-[hsl(210,60%,5%)/60] to-transparent",
  },
  {
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

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.03,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const AnimatedText = ({ text, className, reduced }: { text: string; className: string; reduced?: boolean }) => {
  if (reduced) {
    return <span className={className}>{text}</span>;
  }
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", perspective: "1000px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const reduced = useReducedMotion();
  const [loadedImages, setLoadedImages] = useState<Record<number, string>>({ 0: heroLaser });

  // Preload other slide images after first paint
  useEffect(() => {
    const timer = setTimeout(() => {
      Promise.all([
        import("@/assets/hero-coolsculpting-gen.jpg"),
        import("@/assets/hero-skin-gen.jpg"),
        import("@/assets/hero-bridal-gen.jpg"),
      ]).then(([cool, skin, bridal]) => {
        setLoadedImages(prev => ({
          ...prev,
          1: cool.default,
          2: skin.default,
          3: bridal.default,
        }));
      });
    }, 1000); // Delay preload by 1s to prioritize initial render
    return () => clearTimeout(timer);
  }, []);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];
  const currentImage = loadedImages[current] || heroLaser;

  return (
    <section
      className="relative h-screen overflow-hidden scanlines"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={currentImage}
            alt={slide.headline + " " + slide.accent}
            className="w-full h-full object-cover animate-ken-burns"
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding={current === 0 ? "sync" : "async"}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </motion.div>
      </AnimatePresence>

      {/* Particle overlay - reduced count */}
      <ParticleField count={20} className="z-[5]" />

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-primary/20 z-10" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-primary/20 z-10" />
      <div className="absolute bottom-28 left-8 w-20 h-20 border-b border-l border-primary/20 z-10" />
      <div className="absolute bottom-28 right-8 w-20 h-20 border-b border-r border-primary/20 z-10" />

      {/* Side progress line */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-white/5 z-10 hidden lg:block">
        <motion.div
          className="w-full bg-primary"
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={current}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 mb-6"
              >
                <Shield size={14} className="text-primary" />
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary">{slide.tag}</span>
              </motion.div>

              {/* Headline with letter animation */}
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-2">
                <AnimatedText text={slide.headline} className="" />
              </h1>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light italic leading-[0.95] mb-6">
                <AnimatedText text={slide.accent} className="holographic-text" />
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4"
              >
                {slide.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-foreground/70 text-base md:text-lg max-w-lg mb-8 font-light leading-relaxed"
              >
                {slide.desc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to={slide.cta1.link} className="gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary/30">
                  {slide.cta1.text} <ChevronRight size={16} />
                </Link>
                <Link to={slide.cta2.link} className="btn-neon text-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:text-primary transition-colors">
                  {slide.cta2.text} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8 bg-background/20 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 border-futuristic">
        <span className="text-sm font-sans text-primary font-medium tabular-nums">
          {String(current + 1).padStart(2, "0")} <span className="text-foreground/40">/ {String(slides.length).padStart(2, "0")}</span>
        </span>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 h-2 bg-primary shadow-[0_0_12px_hsl(38,45%,60%,0.5)]"
                  : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
