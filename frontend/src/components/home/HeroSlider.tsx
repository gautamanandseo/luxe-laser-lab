import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, Shield, Pause, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleField from "@/components/effects/ParticleField";
import LiveViewerCounter from "@/components/LiveViewerCounter";
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
    overlay: "from-background/90 via-background/60 to-transparent",
    accentColor: "38 45% 60%",
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
    accentColor: "210 60% 55%",
  },
  {
    tag: "Allergan Certified · Natural Results",
    headline: "Botox &",
    accent: "Dermal Fillers",
    subtitle: "GENUINE ALLERGAN PRODUCTS · CERTIFIED PHYSICIANS",
    desc: "Natural-looking Botox & premium dermal fillers administered by certified aesthetic physicians in Delhi. Forehead lines, crow's feet, lip enhancement & jawline contouring.",
    cta1: { text: "Book Consultation", link: "/contact" },
    cta2: { text: "View Treatments", link: "/botox-fillers" },
    overlay: "from-[hsl(280,30%,5%)/90] via-[hsl(280,30%,5%)/60] to-transparent",
    accentColor: "280 40% 60%",
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
    accentColor: "150 50% 50%",
  },
  {
    tag: "Non-Surgical · Zero Downtime",
    headline: "Weight Loss &",
    accent: "Body Contouring",
    subtitle: "DELHI NCR'S #1 FAT REDUCTION CLINIC",
    desc: "Transform your body without surgery. CoolSculpting® Elite, RF tightening, and targeted inch-loss programs — permanent fat cell elimination with zero downtime.",
    cta1: { text: "Free Body Assessment", link: "/contact" },
    cta2: { text: "Weight Loss Delhi", link: "/weight-loss-delhi" },
    overlay: "from-[hsl(220,40%,5%)/90] via-[hsl(220,40%,5%)/60] to-transparent",
    accentColor: "220 50% 55%",
  },
  {
    tag: "PRP Therapy · FUE Transplant",
    headline: "Hair Restoration",
    accent: "& Regrowth",
    subtitle: "ADVANCED TRICHOLOGY · MEN & WOMEN",
    desc: "Stop hair loss and regrow thicker hair with PRP therapy, mesotherapy, and FUE hair transplant in Delhi. Effective solutions for men and women.",
    cta1: { text: "Book Hair Analysis", link: "/contact" },
    cta2: { text: "Hair Treatments", link: "/hair-loss-treatment" },
    overlay: "from-[hsl(30,50%,5%)/90] via-[hsl(30,50%,5%)/60] to-transparent",
    accentColor: "30 60% 55%",
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
    accentColor: "350 50% 60%",
  },
  {
    tag: "HydraFacial · LED Therapy · Oxygen Infusion",
    headline: "Luxury",
    accent: "Facials",
    subtitle: "CLINICAL-GRADE SKINCARE EXPERIENCE",
    desc: "Signature HydraFacials, LED light therapy, oxygen infusion, and medical-grade peels — clinical facial treatments that deliver visible, lasting glow from session one.",
    cta1: { text: "Book Facial", link: "/contact" },
    cta2: { text: "Facial Treatments", link: "/facials" },
    overlay: "from-[hsl(15,40%,5%)/90] via-[hsl(15,40%,5%)/60] to-transparent",
    accentColor: "15 50% 55%",
  },
];

/* ── Word-by-word cinematic reveal ── */
const WordReveal = ({ text, className, delay = 0, reduced }: { text: string; className: string; delay?: number; reduced?: boolean }) => {
  if (reduced) return <span className={className}>{text}</span>;
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", gap: "0 0.3em" }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            initial={{ y: "110%", rotateX: -40, opacity: 0 }}
            animate={{ y: "0%", rotateX: 0, opacity: 1 }}
            transition={{
              delay: delay + i * 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block", transformOrigin: "bottom", perspective: "800px" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ── Diagonal wipe mask shapes ── */
const clipPaths = [
  "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
];

const SLIDE_DURATION = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, string>>({ 0: heroLaser });
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 30, stiffness: 100 };
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [15, -15]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [10, -10]), springConfig);
  const bgScale = useSpring(useTransform(mouseX, [0, 0.5, 1], [1.08, 1.05, 1.08]), springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  // Lazy load images
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
    setDirection(1);
    setCurrent(c => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(c => (c - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setProgress(0);
  }, [current]);

  const togglePause = useCallback(() => {
    setManualPause(p => !p);
  }, []);

  // Progress bar + auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    const interval = 50;
    const timer = setInterval(() => {
      setProgress(p => {
        const nextVal = p + (interval / SLIDE_DURATION) * 100;
        if (nextVal >= 100) {
          setDirection(1);
          setCurrent(c => (c + 1) % slides.length);
          return 0;
        }
        return nextVal;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [isPlaying, current]);

  const slide = slides[current];
  const currentImage = loadedImages[current] || heroLaser;

  // Image transition variants with directional diagonal wipe
  const imageVariants = {
    enter: (dir: number) => ({
      clipPath: dir > 0
        ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
        : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      scale: 1.15,
    }),
    center: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      transition: { clipPath: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }, scale: { duration: 6, ease: "linear" } },
    },
    exit: (dir: number) => ({
      clipPath: dir > 0
        ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      scale: 1.05,
      transition: { clipPath: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }, scale: { duration: 0.8 } },
    }),
  };

  // Simple fade for reduced motion
  const imageVariantsReduced = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  // Content variants
  const contentVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
      filter: "blur(12px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      filter: "blur(8px)",
      transition: { duration: 0.4 },
    }),
  };

  const contentVariantsReduced = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden vignette"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); mouseX.set(0.5); mouseY.set(0.5); }}
      onMouseMove={handleMouseMove}
      aria-label="Hero slideshow"
    >
      {/* ── Background Images with diagonal wipe + mouse parallax ── */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={reduced ? imageVariantsReduced : imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 will-change-[clip-path]"
          style={reduced ? {} : { x: parallaxX, y: parallaxY, scale: bgScale }}
        >
          <img
            src={currentImage}
            alt={slide.headline + " " + slide.accent}
            className="w-full h-full object-cover"
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding={current === 0 ? "sync" : "async"}
          />
          {/* Multi-layer overlays */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/20" />
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic big slide number ── */}
      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-[6] pointer-events-none select-none hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 0.04, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[20rem] font-serif font-bold leading-none text-foreground"
            style={{ WebkitTextStroke: "1px hsl(var(--primary) / 0.15)" }}
          >
            {String(current + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Animated accent line ── */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] z-[8] origin-top"
        style={{ background: `linear-gradient(to bottom, transparent, hsl(${slide.accentColor} / 0.6), transparent)` }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        key={current}
      />

      {/* Aurora mesh overlay */}
      <AuroraMesh intensity="subtle" className="z-[3] mix-blend-soft-light" />

      {/* Particle overlay */}
      <ParticleField count={25} className="z-[5]" />

      {/* ── Floating geometric orbs ── */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full z-[4] hidden lg:block"
        style={{
          background: `radial-gradient(circle, hsl(${slide.accentColor} / 0.1), transparent 70%)`,
          border: `1px solid hsl(${slide.accentColor} / 0.12)`,
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        animate={{ y: [15, -25, 15], x: [5, -15, 5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[25%] w-20 h-20 rounded-full z-[4] hidden lg:block"
        style={{
          background: "radial-gradient(circle, hsl(350 40% 50% / 0.06), transparent 70%)",
          border: "1px solid hsl(350 40% 50% / 0.08)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* ── Decorative corner accents with animated draw-in ── */}
      {[
        { pos: "top-8 left-8", grad1: "from-primary/50 to-transparent", grad2: "from-primary/50 to-transparent", origin: "top left" },
        { pos: "top-8 right-8", grad1: "from-primary/50 to-transparent", grad2: "from-primary/50 to-transparent", origin: "top right" },
        { pos: "bottom-28 left-8", grad1: "from-primary/50 to-transparent", grad2: "from-primary/50 to-transparent", origin: "bottom left" },
        { pos: "bottom-28 right-8", grad1: "from-primary/50 to-transparent", grad2: "from-primary/50 to-transparent", origin: "bottom right" },
      ].map(({ pos, origin }, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${pos} w-24 h-24 z-10 hidden md:block`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: origin }}
        >
          <div className={`absolute ${origin.includes("top") ? "top-0" : "bottom-0"} ${origin.includes("left") ? "left-0" : "right-0"} w-full h-px bg-gradient-to-${origin.includes("left") ? "r" : "l"} from-primary/50 to-transparent`} />
          <div className={`absolute ${origin.includes("top") ? "top-0" : "bottom-0"} ${origin.includes("left") ? "left-0" : "right-0"} w-px h-full bg-gradient-to-${origin.includes("top") ? "b" : "t"} from-primary/50 to-transparent`} />
          <motion.div
            className={`absolute ${origin.includes("top") ? "top-0" : "bottom-0"} ${origin.includes("left") ? "left-0" : "right-0"} w-2 h-2 bg-primary/60 rounded-full`}
            animate={{ boxShadow: ["0 0 6px hsl(var(--primary) / 0.4)", "0 0 16px hsl(var(--primary) / 0.7)", "0 0 6px hsl(var(--primary) / 0.4)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>
      ))}

      {/* ── Side vertical progress ── */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-white/5 z-10 hidden lg:block">
        <motion.div
          className="w-full bg-primary"
          initial={{ height: "0%" }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"
          animate={{ boxShadow: ["0 0 10px hsl(38 45% 60% / 0.5)", "0 0 25px hsl(38 45% 60% / 0.8)", "0 0 10px hsl(38 45% 60% / 0.5)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ top: `${progress}%` }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={reduced ? contentVariantsReduced : contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-2xl"
            >
              {/* Tag line */}
              <motion.div
                initial={{ opacity: 0, x: -30, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 mb-6 overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={14} className="text-primary" />
                </motion.div>
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary whitespace-nowrap">{slide.tag}</span>
                <motion.div
                  className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>

              {/* Headline with word reveal */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.08] mb-1 tracking-tight text-emboss">
                <WordReveal text={slide.headline} className="" delay={0.5} reduced={reduced} />
              </h1>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic leading-[1.08] mb-6 tracking-tight">
                <WordReveal text={slide.accent} className="holographic-text text-glow-strong" delay={0.7} reduced={reduced} />
              </h1>

              {/* Animated underline beneath accent */}
              <motion.div
                className="h-[2px] mb-6 rounded-full"
                style={{ background: `linear-gradient(90deg, hsl(${slide.accentColor}), hsl(${slide.accentColor} / 0.2), transparent)` }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "40%", opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4"
              >
                {slide.subtitle}
              </motion.p>

              {/* Description with stagger */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="body-text text-foreground/70 text-base md:text-lg max-w-lg mb-8"
              >
                {slide.desc}
              </motion.p>

              {/* CTAs with stagger */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to={slide.cta1.link}
                  className="group gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_hsl(38,45%,60%,0.5)]"
                >
                  {slide.cta1.text}
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight size={16} />
                  </motion.span>
                </Link>
                <Link
                  to={slide.cta2.link}
                  className="btn-neon text-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  {slide.cta2.text} <ArrowRight size={16} />
                </Link>
              </motion.div>

              {/* Live viewer counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mt-6"
              >
                <LiveViewerCounter pageName="this treatment" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Segmented Progress Bar ── */}
      <div className="absolute bottom-[72px] left-0 right-0 z-20 flex gap-1 px-4 md:px-16">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative flex-1 h-[3px] bg-foreground/10 rounded-full overflow-hidden cursor-pointer group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
              style={{
                width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                boxShadow: i === current ? "0 0 10px hsl(38 45% 60% / 0.5)" : "none",
              }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors rounded-full" />
          </button>
        ))}
      </div>

      {/* ── Bottom Controls ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 md:gap-6 bg-background/10 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-6 py-3 shadow-[0_8px_32px_hsl(0,0%,0%,0.4),inset_0_1px_0_hsl(255,255%,255%,0.05)]">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </motion.button>

        <span className="text-sm font-sans text-primary font-medium tabular-nums min-w-[50px] text-center">
          {String(current + 1).padStart(2, "0")} <span className="text-foreground/40">/ {String(slides.length).padStart(2, "0")}</span>
        </span>

        {/* Mini dot nav */}
        <div className="hidden md:flex gap-1.5">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 h-2 bg-primary shadow-[0_0_15px_hsl(38,45%,60%,0.6)]"
                  : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          onClick={togglePause}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
            manualPause
              ? "border-primary/40 text-primary bg-primary/10"
              : "border-foreground/10 text-foreground/60 hover:text-primary hover:border-primary/40"
          }`}
          aria-label={manualPause ? "Resume slideshow" : "Pause slideshow"}
        >
          {manualPause ? <Play size={14} /> : <Pause size={14} />}
        </motion.button>

        <motion.button
          onClick={next}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSlider;
