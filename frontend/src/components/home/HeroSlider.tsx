import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, Shield, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import LiveViewerCounter from "@/components/LiveViewerCounter";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import heroLaser from "@/assets/hero-laser-gen.jpg";

// Lazy-load heavy effects only on capable devices
import { lazy, Suspense } from "react";
const ParticleField = lazy(() => import("@/components/effects/ParticleField"));
const AuroraMesh = lazy(() => import("@/components/effects/AuroraMesh"));

const slides = [
  {
    tag: "USFDA Cleared · Lumenis LightSheer · Alma Soprano",
    headline: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "LIGHTSHEER DESIRE™ & SOPRANO ICE PLATINUM™",
    desc: "Delhi NCR's most advanced laser hair removal with Lumenis LightSheer Desire & Alma Soprano ICE Platinum. Safe for all Indian skin types. Painless, permanent results.",
    cta1: { text: "Book Free Consultation", link: "/contact" },
    cta2: { text: "Explore Treatment", link: "/laser-hair-removal-delhi" },
    overlay: "from-background/90 via-background/60 to-transparent",
  },
  {
    tag: "FDA-Cleared · #1 Weight Loss Solution",
    headline: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "DELHI'S PREMIER WEIGHT LOSS CLINIC",
    desc: "Freeze away stubborn fat with CoolSculpting® Elite — Delhi NCR's top non-surgical weight loss and body contouring solution. 27% fat reduction per session.",
    cta1: { text: "Book Body Assessment", link: "/contact" },
    cta2: { text: "Learn More", link: "/coolsculpting-delhi" },
    overlay: "from-[hsl(210,60%,5%)/90] via-[hsl(210,60%,5%)/60] to-transparent",
  },
  {
    tag: "Allergan Certified · Natural Results",
    headline: "Botox &",
    accent: "Dermal Fillers",
    subtitle: "GENUINE ALLERGAN PRODUCTS · CERTIFIED PHYSICIANS",
    desc: "Natural-looking Botox & premium dermal fillers administered by certified aesthetic physicians in Delhi. Forehead lines, crow's feet, lip enhancement & jawline contouring.",
    cta1: { text: "Book Consultation", link: "/contact" },
    cta2: { text: "View Treatments", link: "/botox-fillers-delhi" },
    overlay: "from-[hsl(280,30%,5%)/90] via-[hsl(280,30%,5%)/60] to-transparent",
  },
  {
    tag: "Advanced Skin Science",
    headline: "Radiant Skin",
    accent: "Rejuvenation",
    subtitle: "CLINICAL SKINCARE EXCELLENCE",
    desc: "From HydraFacials to chemical peels, discover treatments crafted for your unique skin. Visible results from session one.",
    cta1: { text: "Book Skin Analysis", link: "/contact" },
    cta2: { text: "View Treatments", link: "/skin-clinic-delhi" },
    overlay: "from-[hsl(150,40%,4%)/90] via-[hsl(150,40%,4%)/60] to-transparent",
  },
  {
    tag: "Non-Surgical · Zero Downtime",
    headline: "Weight Loss &",
    accent: "Body Contouring",
    subtitle: "DELHI NCR'S #1 FAT REDUCTION CLINIC",
    desc: "Transform your body without surgery. CoolSculpting® Elite, RF tightening, and targeted inch-loss programs — permanent fat cell elimination with zero downtime.",
    cta1: { text: "Free Body Assessment", link: "/contact" },
    cta2: { text: "Weight Loss Delhi", link: "/weight-loss-clinic-delhi" },
    overlay: "from-[hsl(220,40%,5%)/90] via-[hsl(220,40%,5%)/60] to-transparent",
  },
  {
    tag: "PRP Therapy · FUE Transplant",
    headline: "Hair Restoration",
    accent: "& Regrowth",
    subtitle: "ADVANCED TRICHOLOGY · MEN & WOMEN",
    desc: "Stop hair loss and regrow thicker hair with PRP therapy, mesotherapy, and FUE hair transplant in Delhi. Effective solutions for men and women.",
    cta1: { text: "Book Hair Analysis", link: "/contact" },
    cta2: { text: "Hair Treatments", link: "/hair-loss-treatment-delhi" },
    overlay: "from-[hsl(30,50%,5%)/90] via-[hsl(30,50%,5%)/60] to-transparent",
  },
  {
    tag: "Complete Bridal Beauty",
    headline: "Your Most",
    accent: "Beautiful Day",
    subtitle: "LUXURY BRIDAL PACKAGES",
    desc: "Comprehensive pre-bridal treatments from skincare to hair removal. Start your journey 6 months before your special day.",
    cta1: { text: "Bridal Consultation", link: "/contact" },
    cta2: { text: "View Packages", link: "/bridal-packages-delhi" },
    overlay: "from-[hsl(350,40%,4%)/90] via-[hsl(350,40%,4%)/60] to-transparent",
  },
  {
    tag: "HydraFacial · LED Therapy · Oxygen Infusion",
    headline: "Luxury",
    accent: "Facials",
    subtitle: "CLINICAL-GRADE SKINCARE EXPERIENCE",
    desc: "Signature HydraFacials, LED light therapy, oxygen infusion, and medical-grade peels — clinical facial treatments that deliver visible, lasting glow from session one.",
    cta1: { text: "Book Facial", link: "/contact" },
    cta2: { text: "Facial Treatments", link: "/facials-delhi" },
    overlay: "from-[hsl(15,40%,5%)/90] via-[hsl(15,40%,5%)/60] to-transparent",
  },
];

const SLIDE_DURATION = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const progressRef = useRef(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, string>>({ 0: heroLaser });
  const [showEffects, setShowEffects] = useState(false);

  // Preload other slide images after first paint
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
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Defer heavy effects until after first meaningful paint
  useEffect(() => {
    const timer = setTimeout(() => setShowEffects(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const reduced = useReducedMotion();
  const isPlaying = !paused && !manualPause;

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % slides.length);
    progressRef.current = 0;
    if (progressBarRef.current) progressBarRef.current.style.width = "0%";
  }, []);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
    progressRef.current = 0;
    if (progressBarRef.current) progressBarRef.current.style.width = "0%";
  }, []);

  const togglePause = useCallback(() => {
    setManualPause(p => !p);
  }, []);

  // Progress bar via rAF — zero re-renders
  useEffect(() => {
    if (!isPlaying) return;
    let animId: number;
    let lastTime = performance.now();
    progressRef.current = 0;

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      progressRef.current += (delta / SLIDE_DURATION) * 100;

      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setCurrent(c => (c + 1) % slides.length);
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressRef.current}%`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, current]);

  const slide = slides[current];
  const currentImage = loadedImages[current] || heroLaser;

  return (
    <section
      className="relative h-screen overflow-hidden vignette"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slideshow"
    >
      {/* Background Image — CSS transition for smoothness on slow connections */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          key={current}
        >
          <img
            src={currentImage}
            alt={slide.headline + " " + slide.accent}
            className="w-full h-full object-cover"
            style={{ willChange: "transform" }}
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding={current === 0 ? "sync" : "async"}
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/20" />
      </div>

      {/* Deferred heavy effects */}
      {showEffects && !reduced && (
        <Suspense fallback={null}>
          <AuroraMesh intensity="subtle" className="z-[3] mix-blend-soft-light" />
          <ParticleField count={25} className="z-[5]" />
        </Suspense>
      )}

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 z-10 hidden md:block">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary/60 rounded-full blur-sm" />
      </div>
      <div className="absolute top-8 right-8 w-24 h-24 z-10 hidden md:block">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary/60 rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-28 left-8 w-24 h-24 z-10 hidden md:block">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary/60 rounded-full blur-sm" />
      </div>
      <div className="absolute bottom-28 right-8 w-24 h-24 z-10 hidden md:block">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary/60 rounded-full blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <Shield size={14} className="text-primary" />
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary">{slide.tag}</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.08] tracking-tight text-emboss">
                <span>{slide.headline}</span>
                <span className="block italic mt-1 mb-6">
                  <span className="holographic-text text-glow-strong">{slide.accent}</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4">
                {slide.subtitle}
              </p>

              {/* Description */}
              <p className="body-text text-foreground/70 text-base md:text-lg max-w-lg mb-8">
                {slide.desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to={slide.cta1.link} className="gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-[0_0_30px_hsl(38,45%,60%,0.4)]">
                  {slide.cta1.text} <ChevronRight size={16} />
                </Link>
                <Link to={slide.cta2.link} className="btn-neon text-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:text-primary transition-colors">
                  {slide.cta2.text} <ArrowRight size={16} />
                </Link>
              </div>

              {/* Live viewer counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-6"
              >
                <LiveViewerCounter pageName="this treatment" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar — DOM-driven, no re-renders */}
      <div className="absolute bottom-[72px] left-0 right-0 z-20 h-[2px] bg-foreground/5">
        <div
          ref={progressBarRef}
          className="h-full bg-primary shadow-[0_0_8px_hsl(38,45%,60%,0.5)]"
          style={{ width: "0%", willChange: "width" }}
        />
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 md:gap-6 bg-background/10 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-6 py-3 shadow-[0_8px_32px_hsl(0,0%,0%,0.4),inset_0_1px_0_hsl(255,255%,255%,0.05)]">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>

        <span className="text-sm font-sans text-primary font-medium tabular-nums min-w-[50px] text-center">
          {String(current + 1).padStart(2, "0")} <span className="text-foreground/40">/ {String(slides.length).padStart(2, "0")}</span>
        </span>

        <div className="hidden md:flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); progressRef.current = 0; if (progressBarRef.current) progressBarRef.current.style.width = "0%"; }}
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 h-2 bg-primary shadow-[0_0_15px_hsl(38,45%,60%,0.6)]"
                  : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={togglePause}
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
            manualPause
              ? "border-primary/40 text-primary bg-primary/10"
              : "border-foreground/10 text-foreground/60 hover:text-primary hover:border-primary/40"
          }`}
          aria-label={manualPause ? "Resume slideshow" : "Pause slideshow"}
        >
          {manualPause ? <Play size={14} /> : <Pause size={14} />}
        </button>

        <button
          onClick={next}
          className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
