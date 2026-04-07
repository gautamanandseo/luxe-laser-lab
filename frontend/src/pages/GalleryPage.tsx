import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Filter, Eye, Award, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/use-page-meta";
import ScrollReveal from "@/components/effects/ScrollReveal";
import BeforeAfterSlider from "@/components/effects/BeforeAfterSlider";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";

import baAcne from "@/assets/ba-acne.jpg";
import baBotox from "@/assets/ba-botox.jpg";
import baBotox2 from "@/assets/ba-botox2.jpg";
import baCoolsculpting from "@/assets/ba-coolsculpting.jpg";
import baCoolsculptingChin from "@/assets/ba-coolsculpting-chin.jpg";
import baFacial from "@/assets/ba-facial.jpg";
import baHifu from "@/assets/ba-hifu.jpg";
import baLaserMen from "@/assets/ba-laser-men.jpg";
import baLaserUnderarm from "@/assets/ba-laser-underarm.jpg";
import baSkin from "@/assets/ba-skin.jpg";
import baResurfx from "@/assets/ba-resurfx.jpg";
import baResurfx2 from "@/assets/ba-resurfx2.jpg";
import baDarkcircles from "@/assets/ba-darkcircles.jpg";
import baHairloss from "@/assets/ba-hairloss.jpg";
import baHairtransplant from "@/assets/ba-hairtransplant.jpg";
import baMicroderm from "@/assets/ba-microderm.jpg";
import baMolewart from "@/assets/ba-molewart.jpg";
import baSkinlightening from "@/assets/ba-skinlightening.jpg";
import baSkintightening from "@/assets/ba-skintightening.jpg";
import baTattoo from "@/assets/ba-tattoo.jpg";
import baAntiaging from "@/assets/ba-antiaging-face.jpg";
import baBodycontouring from "@/assets/ba-bodycontouring2.jpg";

type Category = "all" | "face" | "body" | "laser" | "hair" | "injectables";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  category: Category[];
  sessions?: string;
  treatmentLink: string;
}

const galleryItems: GalleryItem[] = [
  { src: baAcne, alt: "Acne treatment results Delhi", label: "Acne & Scar Treatment", category: ["face"], sessions: "6 sessions", treatmentLink: "/acne-treatment-delhi" },
  { src: baBotox, alt: "Botox results forehead Delhi", label: "Botox — Forehead Lines", category: ["face", "injectables"], sessions: "1 session", treatmentLink: "/botox-fillers-delhi" },
  { src: baBotox2, alt: "Botox results crow's feet Delhi", label: "Botox — Crow's Feet", category: ["face", "injectables"], sessions: "1 session", treatmentLink: "/botox-fillers-delhi" },
  { src: baCoolsculpting, alt: "CoolSculpting abdomen results Delhi", label: "CoolSculpting® — Abdomen", category: ["body"], sessions: "2 cycles", treatmentLink: "/coolsculpting-delhi" },
  { src: baCoolsculptingChin, alt: "CoolSculpting double chin results Delhi", label: "CoolSculpting® — Double Chin", category: ["body"], sessions: "1 cycle", treatmentLink: "/coolsculpting-delhi" },
  { src: baFacial, alt: "HydraFacial glow results Delhi", label: "HydraFacial Glow", category: ["face"], sessions: "3 sessions", treatmentLink: "/facials-delhi" },
  { src: baHifu, alt: "HIFU face lift results Delhi", label: "HIFU Non-Surgical Lift", category: ["face"], sessions: "1 session", treatmentLink: "/hifu-treatment-delhi" },
  { src: baLaserMen, alt: "Laser hair removal men Delhi", label: "Laser — Men's Beard Line", category: ["laser"], sessions: "4 sessions", treatmentLink: "/laser-hair-removal-delhi" },
  { src: baLaserUnderarm, alt: "Laser hair removal underarm Delhi", label: "Laser — Underarm", category: ["laser"], sessions: "5 sessions", treatmentLink: "/laser-hair-removal-delhi" },
  { src: baSkin, alt: "Skin rejuvenation results Delhi", label: "Skin Rejuvenation", category: ["face"], sessions: "4 sessions", treatmentLink: "/skin-clinic-delhi" },
  { src: baResurfx, alt: "ResurFX skin resurfacing Delhi", label: "ResurFX™ — Acne Scars", category: ["face", "laser"], sessions: "3 sessions", treatmentLink: "/resurfx-delhi" },
  { src: baResurfx2, alt: "ResurFX pigmentation treatment Delhi", label: "ResurFX™ — Pigmentation", category: ["face", "laser"], sessions: "4 sessions", treatmentLink: "/resurfx-delhi" },
  { src: baDarkcircles, alt: "Dark circles treatment results Delhi", label: "Dark Circles Treatment", category: ["face"], sessions: "6 sessions", treatmentLink: "/dark-circles-treatment-delhi" },
  { src: baHairloss, alt: "PRP hair loss treatment results Delhi", label: "PRP Hair Restoration", category: ["hair"], sessions: "8 sessions", treatmentLink: "/hair-loss-treatment-delhi" },
  { src: baHairtransplant, alt: "Hair transplant results Delhi", label: "Hair Transplant — FUE", category: ["hair"], sessions: "1 procedure", treatmentLink: "/hair-transplant-delhi" },
  { src: baMicroderm, alt: "Microdermabrasion results Delhi", label: "Microdermabrasion", category: ["face"], sessions: "5 sessions", treatmentLink: "/microdermabrasion-delhi" },
  { src: baMolewart, alt: "Mole removal results Delhi", label: "Mole & Wart Removal", category: ["face"], sessions: "1 session", treatmentLink: "/mole-wart-removal-delhi" },
  { src: baSkinlightening, alt: "Skin lightening treatment results Delhi", label: "Skin Lightening", category: ["face"], sessions: "8 sessions", treatmentLink: "/skin-lightening-delhi" },
  { src: baSkintightening, alt: "Skin tightening treatment results Delhi", label: "RF Skin Tightening", category: ["face", "body"], sessions: "4 sessions", treatmentLink: "/skin-tightening-delhi" },
  { src: baTattoo, alt: "Tattoo removal results Delhi", label: "Laser Tattoo Removal", category: ["laser"], sessions: "6 sessions", treatmentLink: "/tattoo-removal-delhi" },
  { src: baAntiaging, alt: "Anti-ageing facial results Delhi", label: "Anti-Ageing Facial", category: ["face", "injectables"], sessions: "3 sessions", treatmentLink: "/anti-ageing-delhi" },
  { src: baBodycontouring, alt: "Body contouring results Delhi", label: "Body Contouring", category: ["body"], sessions: "3 sessions", treatmentLink: "/body-contouring-delhi" },
];

const categories: { key: Category; label: string; icon: string }[] = [
  { key: "all", label: "All Results", icon: "✦" },
  { key: "face", label: "Face & Skin", icon: "✧" },
  { key: "body", label: "Body", icon: "◇" },
  { key: "laser", label: "Laser", icon: "⚡" },
  { key: "hair", label: "Hair", icon: "❋" },
  { key: "injectables", label: "Injectables", icon: "💉" },
];

const stats = [
  { value: "25,000+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Treatments" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeSlider, setActiveSlider] = useState(0);

  usePageMeta({
    title: "Before & After Results Delhi | Treatment Gallery | Empathy Clinic",
    description: "See real before & after results from Empathy Laser Clinic Delhi — laser hair removal, CoolSculpting, Botox, skin treatments & more. 25,000+ transformations.",
    canonical: "https://empathylaserclinic.com/gallery",
  });

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category.includes(activeCategory));

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setActiveSlider(0);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-44 bg-background overflow-hidden">
        <AuroraMesh intensity="medium" />
        <div className="absolute inset-0 grid-bg opacity-8" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <p className="eyebrow mb-4">Real Patient Results</p>
            <h1 className="section-heading text-4xl md:text-6xl lg:text-7xl">
              Before & <em className="holographic-text" style={{ fontStyle: "italic" }}>After</em> Gallery
            </h1>
            <p className="body-text mt-6 max-w-2xl mx-auto text-lg">
              Explore verified, unedited transformations from over 25,000 clients across 50+ treatments at Empathy Laser Clinic, Delhi.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-14 mt-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary font-display">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Trust strip */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-primary" /> Unedited photos</span>
              <span className="flex items-center gap-1"><Eye size={12} className="text-primary" /> Real patients</span>
              <span className="flex items-center gap-1"><Award size={12} className="text-primary" /> Verified results</span>
              <span className="flex items-center gap-1"><Star size={12} className="text-primary" /> Doctor supervised</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category filters + Gallery */}
      <section className="py-20 bg-velvet relative overflow-hidden vignette">
        <div className="absolute inset-0 grid-bg opacity-8" />
        <div className="relative z-10 container mx-auto px-6">

          {/* Category pills */}
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
              {categories.map((cat) => {
                const count = cat.key === "all"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category.includes(cat.key)).length;
                return (
                  <motion.button
                    key={cat.key}
                    onClick={() => handleCategoryChange(cat.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2.5 text-xs font-sans uppercase tracking-[0.1em] rounded-full border transition-all duration-300 flex items-center gap-2 ${
                      cat.key === activeCategory
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(38,45%,60%,0.3)]"
                        : "border-primary/15 text-muted-foreground hover:border-primary/40 hover:text-primary bg-card/30 backdrop-blur-sm"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      cat.key === activeCategory ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}>
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Featured slider */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-4xl mx-auto mb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${activeSlider}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredItems.length > 0 && (
                    <Tilt3DCard maxTilt={5} className="rounded-2xl overflow-hidden">
                      <BeforeAfterSlider
                        image={filteredItems[activeSlider % filteredItems.length].src}
                        alt={filteredItems[activeSlider % filteredItems.length].alt}
                        label={filteredItems[activeSlider % filteredItems.length].label}
                        className="aspect-[16/10]"
                      />
                    </Tilt3DCard>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Info bar under slider */}
              {filteredItems.length > 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-2 gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {filteredItems[activeSlider % filteredItems.length].sessions}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    <span className="text-xs text-muted-foreground">
                      {activeSlider % filteredItems.length + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <Link
                    to={filteredItems[activeSlider % filteredItems.length].treatmentLink}
                    className="text-xs text-primary hover:text-primary/80 uppercase tracking-widest flex items-center gap-1 transition-colors"
                  >
                    Learn about this treatment <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Thumbnail grid */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
              <AnimatePresence>
                {filteredItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    onClick={() => setActiveSlider(i)}
                    className={`group relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      i === activeSlider % filteredItems.length
                        ? "border-primary shadow-[0_0_20px_hsl(38,45%,60%,0.3)] ring-1 ring-primary/20"
                        : "border-transparent opacity-70 hover:opacity-100 hover:border-primary/30"
                    }`}
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                      <span className="text-[8px] md:text-[9px] text-foreground font-sans uppercase tracking-wider leading-tight">
                        {item.label}
                      </span>
                    </div>
                    {/* Active indicator */}
                    {i === activeSlider % filteredItems.length && (
                      <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(38,45%,60%,0.6)]" />
                    )}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="section-heading text-3xl md:text-5xl mb-4">
              Ready for Your <em className="holographic-text" style={{ fontStyle: "italic" }}>Transformation</em>?
            </h2>
            <p className="body-text max-w-lg mx-auto mb-10">
              Book a free consultation and let our experts create a personalised treatment plan for your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-sans uppercase tracking-[0.12em] text-primary-foreground shadow-[0_4px_24px_hsl(38,45%,60%,0.3)]"
                  style={{
                    background: "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--gold-dark)) 100%)",
                    boxShadow: "0 1px 0 0 hsl(var(--gold-light) / 0.3) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.2) inset, 0 4px 20px -4px hsl(var(--primary) / 0.4)",
                  }}
                >
                  Book Free Consultation <ArrowRight size={14} />
                </Link>
              </motion.div>
              <a
                href="https://www.instagram.com/empathylaserclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-6 py-4 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram size={16} /> Follow on Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
