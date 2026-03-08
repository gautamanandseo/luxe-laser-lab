import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleField from "@/components/effects/ParticleField";
import AuroraMesh from "@/components/effects/AuroraMesh";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import heroLaser from "@/assets/hero-laser-gen.jpg";

const slides = [
  {
    tag: "USFDA Cleared · Lumenis LightSheer · Alma Soprano",
    headline: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "LIGHTSHEER DESIRE™ & SOPRANO ICE PLATINUM™",
    desc: "Delhi NCR's most advanced laser hair removal with Lumenis LightSheer Desire & Alma Soprano ICE Platinum. Safe for all Indian skin types. Painless, permanent results.",
    cta1: { text: "Book Free Consultation", link: "/contact" },
    cta2: { text: "Explore Treatment", link: "/laser-hair-removal" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "FDA-Cleared · #1 Weight Loss Solution",
    headline: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "DELHI'S PREMIER WEIGHT LOSS CLINIC",
    desc: "Freeze away stubborn fat with CoolSculpting® Elite — Delhi NCR's top non-surgical weight loss and body contouring solution. 27% fat reduction per session.",
    cta1: { text: "Book Body Assessment", link: "/contact" },
    cta2: { text: "Learn More", link: "/coolsculpting" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "Allergan Certified · Natural Results",
    headline: "Botox &",
    accent: "Dermal Fillers",
    subtitle: "GENUINE ALLERGAN PRODUCTS · CERTIFIED PHYSICIANS",
    desc: "Natural-looking Botox & premium dermal fillers administered by certified aesthetic physicians in Delhi. Forehead lines, crow's feet, lip enhancement & jawline contouring.",
    cta1: { text: "Book Consultation", link: "/contact" },
    cta2: { text: "View Treatments", link: "/botox-fillers" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "Advanced Skin Science",
    headline: "Radiant Skin",
    accent: "Rejuvenation",
    subtitle: "CLINICAL SKINCARE EXCELLENCE",
    desc: "From HydraFacials to chemical peels, discover treatments crafted for your unique skin. Visible results from session one.",
    cta1: { text: "Book Skin Analysis", link: "/contact" },
    cta2: { text: "View Treatments", link: "/skin-treatments" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "Non-Surgical · Zero Downtime",
    headline: "Weight Loss &",
    accent: "Body Contouring",
    subtitle: "DELHI NCR'S #1 FAT REDUCTION CLINIC",
    desc: "Transform your body without surgery. CoolSculpting® Elite, RF tightening, and targeted inch-loss programs — permanent fat cell elimination with zero downtime.",
    cta1: { text: "Free Body Assessment", link: "/contact" },
    cta2: { text: "Weight Loss Delhi", link: "/weight-loss-delhi" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "PRP Therapy · FUE Transplant",
    headline: "Hair Restoration",
    accent: "& Regrowth",
    subtitle: "ADVANCED TRICHOLOGY · MEN & WOMEN",
    desc: "Stop hair loss and regrow thicker hair with PRP therapy, mesotherapy, and FUE hair transplant in Delhi. Effective solutions for men and women.",
    cta1: { text: "Book Hair Analysis", link: "/contact" },
    cta2: { text: "Hair Treatments", link: "/hair-loss-treatment" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "Complete Bridal Beauty",
    headline: "Your Most",
    accent: "Beautiful Day",
    subtitle: "LUXURY BRIDAL PACKAGES",
    desc: "Comprehensive pre-bridal treatments from skincare to hair removal. Start your journey 6 months before your special day.",
    cta1: { text: "Bridal Consultation", link: "/contact" },
    cta2: { text: "View Packages", link: "/bridal-packages" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
  {
    tag: "HydraFacial · LED Therapy · Oxygen Infusion",
    headline: "Luxury",
    accent: "Facials",
    subtitle: "CLINICAL-GRADE SKINCARE EXPERIENCE",
    desc: "Signature HydraFacials, LED light therapy, oxygen infusion, and medical-grade peels — clinical facial treatments that deliver visible, lasting glow from session one.",
    cta1: { text: "Book Facial", link: "/contact" },
    cta2: { text: "Facial Treatments", link: "/facials" },
    overlay: "from-background/95 via-background/70 to-background/20",
  },
];

// Word-by-word stagger animation
const WordReveal = ({ text, className, delay = 0, reduced }: { text: string; className: string; delay?: number; reduced?: boolean }) => {
  if (reduced) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + i * 0.12,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const trustIndicators = [
  { label: "15,000+", sub: "Clients" },
  { label: "Allergan", sub: "Certified" },
  { label: "4.9★", sub: "Google" },
  { label: "Since", sub: "2009" },
];

const SLIDE_DURATION = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, string>>({ 0: heroLaser });

  useEffect(() => {
    const timer = setTimeout(() => {
      Promise.all([
        import("@/assets/hero-coolsculpting-gen.jpg"),
        import("@/assets/hero-botox-gen.jpg"),
        import("@/assets/hero-skin-gen.jpg"),
        import("@/assets/hero-weightloss-gen.jpg"),
        import("@/assets/hero-hairloss-gen.jpg"),
        import("@/assets/hero-bridal-gen.jpg"),
        import("@/assets/hero-facial-gen.jpg"),
      ]).then(([cool, botox, skin, weightloss, hairloss, bridal, facial]) => {
        setLoadedImages(prev => ({
          ...prev,
          1: cool.default,
          2: botox.default,
          3: skin.default,
          4: weightloss.default,
          5: hairloss.default,
          6: bridal.default,
          7: facial.default,
        }));
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const reduced = useReducedMotion();
  const isPlaying = !paused && !manualPause;

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const togglePause = useCallback(() => {
    setManualPause(p => !p);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = 50;
    const timer = setInterval(() => {
      setProgress(p => {
        const next = p + (interval / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrent(c => (c + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isPlaying, current]);

  const slide = slides[current];
  const currentImage = loadedImages[current] || heroLaser;

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slideshow"
    >
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={currentImage}
            alt={slide.headline + " " + slide.accent}
            className="w-full h-full object-cover"
            style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding={current === 0 ? "sync" : "async"}
          />
          {/* Gradient overlays for readability */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          {/* Vignette */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 3% / 0.6) 100%)"
          }} />
        </motion.div>
      </AnimatePresence>

      {/* Subtle aurora */}
      <AuroraMesh intensity="subtle" className="z-[3] mix-blend-soft-light opacity-40" />

      {/* Particles — reduced count */}
      <ParticleField count={15} className="z-[5]" />

      {/* Scroll indicator — right side gold line */}
      <div className="absolute right-10 top-1/3 bottom-1/3 z-10 hidden lg:flex flex-col items-center">
        <div className="relative w-px h-full bg-foreground/10">
          <motion.div
            className="w-full bg-primary origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            key={current}
            style={{ height: "100%", transformOrigin: "top" }}
          />
        </div>
        <motion.div
          className="mt-3 w-2 h-2 rounded-full bg-primary"
          animate={{
            y: [0, 8, 0],
            boxShadow: [
              "0 0 8px hsl(38 45% 60% / 0.4)",
              "0 0 20px hsl(38 45% 60% / 0.8)",
              "0 0 8px hsl(38 45% 60% / 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.span
          className="mt-4 text-[10px] font-sans uppercase tracking-[0.3em] text-foreground/40"
          style={{ writingMode: "vertical-rl" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Scroll
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              {/* Tag line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-primary" />
                <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/90">
                  {slide.tag}
                </span>
              </motion.div>

              {/* Headline — word-by-word reveal */}
              <h1 className="font-serif font-light text-foreground leading-[1.05] tracking-tight mb-2"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
                <WordReveal text={slide.headline} className="" delay={0.2} reduced={reduced} />
              </h1>
              <h1 className="font-serif font-light italic leading-[1.05] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
                <WordReveal
                  text={slide.accent}
                  className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent"
                  delay={0.5}
                  reduced={reduced}
                />
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="font-sans text-[11px] uppercase tracking-[0.35em] text-foreground/50 mb-5"
              >
                {slide.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="font-sans text-base md:text-lg text-foreground/70 max-w-xl mb-10 leading-relaxed"
              >
                {slide.desc}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex flex-wrap gap-5"
              >
                <Link
                  to={slide.cta1.link}
                  className="group relative px-10 py-4 text-sm font-sans uppercase tracking-[0.2em] rounded-none overflow-hidden border border-primary bg-primary/10 text-foreground transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_hsl(38,45%,60%,0.3)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {slide.cta1.text}
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to={slide.cta2.link}
                  className="group px-10 py-4 text-sm font-sans uppercase tracking-[0.2em] rounded-none border border-foreground/20 text-foreground/80 transition-all duration-500 hover:border-primary/60 hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    {slide.cta2.text}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Trust Indicators — bottom-left area */}
      <div className="absolute bottom-32 left-6 lg:left-12 z-20 hidden md:flex gap-6">
        {trustIndicators.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + i * 0.15, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-lg font-serif text-primary font-semibold">{item.label}</div>
            <div className="text-[10px] font-sans uppercase tracking-[0.25em] text-foreground/50">{item.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-[68px] left-0 right-0 z-20 h-px bg-foreground/5">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-5 bg-background/20 backdrop-blur-2xl border border-foreground/[0.06] px-5 py-3">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-primary transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </motion.button>

        <span className="text-sm font-sans text-foreground/60 tabular-nums min-w-[50px] text-center">
          <span className="text-primary">{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-foreground/20">/</span>
          {String(slides.length).padStart(2, "0")}
        </span>

        <div className="hidden md:flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-6 h-1 bg-primary"
                  : "w-1.5 h-1 bg-foreground/15 hover:bg-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={togglePause}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-8 h-8 flex items-center justify-center transition-colors ${
            manualPause ? "text-primary" : "text-foreground/50 hover:text-primary"
          }`}
          aria-label={manualPause ? "Resume" : "Pause"}
        >
          {manualPause ? <Play size={14} /> : <Pause size={14} />}
        </motion.button>

        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center text-foreground/50 hover:text-primary transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSlider;
