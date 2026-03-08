import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Scan, Snowflake, Award, Check, Shield, Star, Timer, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Lazy load tech images
const useLazyImage = (importFn: () => Promise<{ default: string }>) => {
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    importFn().then((mod) => setSrc(mod.default));
  }, []);
  return src;
};

const lightsheerSpecs = [
  { label: "Wavelength", value: "805nm Diode" },
  { label: "Spot Size", value: "22×35mm (XL) / 12×12mm (ET)" },
  { label: "Pulse Rate", value: "Up to 3 Hz" },
  { label: "Cooling", value: "Integrated ChillTip™ Contact" },
  { label: "Clearance", value: "USFDA Cleared" },
  { label: "Manufacturer", value: "Lumenis Ltd., Israel" },
];

const lightsheerFeatures = [
  { icon: Zap, title: "Vacuum-Assist Technology", desc: "Patented vacuum pulls skin into the handpiece, stretching the dermis and bringing follicles closer to the laser — reducing energy needed by 50% while increasing efficacy." },
  { icon: Shield, title: "Safe for All Skin Types", desc: "Calibrated for Fitzpatrick skin types I–VI, including darker Indian skin tones. Built-in contact cooling eliminates burns and pigmentation risks." },
  { icon: Timer, title: "Large Area Speed", desc: "The 22×35mm XL handpiece covers a full back in under 15 minutes. Vacuum-assist means no messy gels needed." },
  { icon: Star, title: "Gold Standard Results", desc: "Clinical studies show 90%+ permanent hair reduction after 4-6 sessions. Over 20+ years of published clinical evidence worldwide." },
];

const sopranoSpecs = [
  { label: "Wavelengths", value: "755nm + 810nm + 1064nm" },
  { label: "Technology", value: "SHR™ (Super Hair Removal)" },
  { label: "Pulse Mode", value: "In-Motion™ Continuous" },
  { label: "Cooling", value: "ICE™ Sapphire Contact Cooling" },
  { label: "Clearance", value: "USFDA Cleared" },
  { label: "Manufacturer", value: "Alma Lasers, Israel" },
];

const sopranoFeatures = [
  { icon: Snowflake, title: "ICE™ Cooling Technology", desc: "Continuous sapphire contact cooling keeps the skin at a comfortable temperature throughout treatment — making it the most pain-free laser in the world." },
  { icon: Users, title: "Triple-Wavelength Advantage", desc: "Three wavelengths (755+810+1064nm) target hair at different depths simultaneously, treating fine vellus hair and coarse terminal hair in a single pass." },
  { icon: Scan, title: "In-Motion™ Technology", desc: "Sweeping continuous motion eliminates missed spots. The gradual heat build-up (SHR) destroys follicles without the sharp pulse pain of traditional lasers." },
  { icon: Star, title: "Sensitive Area Specialist", desc: "The pain-free profile makes it ideal for upper lip, bikini line, underarms, and other sensitive zones where traditional lasers cause significant discomfort." },
];

const certBadges = ["USFDA Cleared", "ISO Certified", "CE Marked", "Allergan Partner", "Lumenis Partner", "Alma Lasers Partner", "CoolSculpting Certified"];

const TechnologySection = () => {
  const lightsheerImg = useLazyImage(() => import("@/assets/tech-lightsheer-lg.jpg"));
  const sopranoImg = useLazyImage(() => import("@/assets/tech-soprano-lg.jpg"));

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="eyebrow mb-4">Our Cutting-Edge Equipment</p>
          <h2 className="section-heading">
            World-Class <em className="text-primary not-italic">Technology</em>
          </h2>
          <p className="body-text mt-4 max-w-3xl mx-auto">
            We invest in only the most advanced, USFDA-cleared equipment from globally renowned manufacturers — Lumenis and Alma Lasers. Every device is operated by certified specialists with 15+ years of experience.
          </p>
        </div>

        {/* ── LIGHTSHEER DESIRE ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          {/* Machine label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary">Machine 01</span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground -mt-0.5">Lumenis LightSheer Desire™</h3>
            </div>
            <span className="ml-auto text-[10px] font-sans uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1.5 rounded-full hidden md:block">
              USFDA Cleared
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
                {lightsheerImg ? (
                  <img
                    src={lightsheerImg}
                    alt="Lumenis LightSheer Desire™ — 805nm Diode Laser Hair Removal System at Empathy Laser Clinic"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full aspect-square bg-muted animate-pulse" />
                )}
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-primary font-sans uppercase tracking-wider">Gold Standard</p>
                    <p className="text-foreground text-sm font-semibold">Since 1997 · 20M+ treatments worldwide</p>
                  </div>
                  <Shield size={20} className="text-primary" />
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-8">
                The <strong className="text-foreground">LightSheer Desire</strong> is the world's most trusted diode laser — installed in more clinics globally than any other laser hair removal system. Its patented <span className="text-primary">vacuum-assist technology</span> reduces treatment pain by up to 50% while delivering superior results across all skin types, including darker Indian skin tones (Fitzpatrick IV–VI).
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 p-5 bg-card rounded-xl border border-border">
                {lightsheerSpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">{spec.label}</span>
                    <span className="text-sm text-foreground font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                {lightsheerFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/laser-hair-removal"
                className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-[0.1em] hover:gap-3 transition-all"
              >
                View Laser Hair Removal Services <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── SOPRANO ICE PLATINUM ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          {/* Machine label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Scan size={20} className="text-primary" />
            </div>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary">Machine 02</span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground -mt-0.5">Alma Soprano ICE Platinum™</h3>
            </div>
            <span className="ml-auto text-[10px] font-sans uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1.5 rounded-full hidden md:block">
              USFDA Cleared
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Details (left this time) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-2 lg:order-1"
            >
              <p className="text-muted-foreground leading-relaxed mb-8">
                The <strong className="text-foreground">Soprano ICE Platinum</strong> is the most advanced pain-free laser hair removal system available. Its revolutionary <span className="text-primary">triple-wavelength technology</span> (Alexandrite 755nm + Diode 810nm + Nd:YAG 1064nm) targets hair at three different depths simultaneously, while the patented <span className="text-primary">ICE™ cooling</span> system ensures a virtually pain-free experience — even on the most sensitive areas.
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 p-5 bg-card rounded-xl border border-border">
                {sopranoSpecs.map((spec, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">{spec.label}</span>
                    <span className="text-sm text-foreground font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                {sopranoFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{f.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/laser-hair-removal"
                className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-[0.1em] hover:gap-3 transition-all"
              >
                View Laser Hair Removal Services <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Large Image (right) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
                {sopranoImg ? (
                  <img
                    src={sopranoImg}
                    alt="Alma Soprano ICE Platinum™ — Triple-Wavelength Pain-Free Laser at Empathy Laser Clinic"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto aspect-square object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full aspect-square bg-muted animate-pulse" />
                )}
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-primary font-sans uppercase tracking-wider">Pain-Free Pioneer</p>
                    <p className="text-foreground text-sm font-semibold">3 wavelengths · ICE™ cooling · In-Motion™</p>
                  </div>
                  <Snowflake size={20} className="text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── WHY TWO MACHINES? ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-3">
              Why <em className="text-primary not-italic">Two</em> World-Class Lasers?
            </h3>
            <p className="text-muted-foreground text-center text-sm md:text-base mb-8 max-w-2xl mx-auto">
              Most clinics own one laser and treat everyone the same way. At Empathy, our specialists choose the optimal machine for <em>your</em> specific skin type, hair colour, and treatment area — ensuring the fastest results with maximum comfort.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl p-5">
                <h4 className="text-primary font-sans text-xs uppercase tracking-[0.15em] mb-2">LightSheer Desire™ — Best For</h4>
                <ul className="space-y-2">
                  {["Large body areas (back, legs, chest)", "Thick, coarse hair (Indian skin types)", "Speed — full back in 15 minutes", "Patients who prefer vacuum-assisted comfort"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary rounded-xl p-5">
                <h4 className="text-primary font-sans text-xs uppercase tracking-[0.15em] mb-2">Soprano ICE Platinum™ — Best For</h4>
                <ul className="space-y-2">
                  {["Sensitive areas (face, bikini, underarms)", "Fine & light hair (triple wavelength reach)", "Pain-free priority patients", "Tanned or darker skin (Nd:YAG 1064nm)"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CoolSculpting Brief ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
            <Snowflake size={24} className="text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-serif text-xl text-foreground">CoolSculpting® Elite</h3>
            <p className="text-sm text-muted-foreground mt-1">The world's #1 non-invasive fat reduction system with dual applicators and 18% more coverage. FDA-cleared cryolipolysis.</p>
          </div>
          <Link
            to="/coolsculpting"
            className="gold-shimmer text-primary-foreground px-6 py-3 text-xs font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform shrink-0"
          >
            Explore CoolSculpting® <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {certBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full"
            >
              <Award size={12} className="text-primary" />
              <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-muted-foreground">{badge}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
