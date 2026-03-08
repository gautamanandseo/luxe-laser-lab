import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import BeforeAfterSlider from "@/components/effects/BeforeAfterSlider";
import baAcne from "@/assets/ba-acne.jpg";
import baBotox from "@/assets/ba-botox.jpg";
import baCoolsculpting from "@/assets/ba-coolsculpting.jpg";
import baFacial from "@/assets/ba-facial.jpg";
import baHifu from "@/assets/ba-hifu.jpg";
import baLaserMen from "@/assets/ba-laser-men.jpg";
import baSkin from "@/assets/ba-skin.jpg";
import baResurfx from "@/assets/ba-resurfx.jpg";

const images = [
  { src: baAcne, alt: "Acne treatment before and after results", label: "Acne Treatment" },
  { src: baBotox, alt: "Botox treatment before and after results", label: "Botox & Fillers" },
  { src: baCoolsculpting, alt: "CoolSculpting body contouring before and after", label: "CoolSculpting®" },
  { src: baFacial, alt: "Facial rejuvenation before and after results", label: "HydraFacial" },
  { src: baHifu, alt: "HIFU face lift before and after results", label: "HIFU Lift" },
  { src: baLaserMen, alt: "Laser hair removal for men before and after", label: "Laser (Men)" },
  { src: baSkin, alt: "Skin treatment before and after results", label: "Skin Rejuvenation" },
  { src: baResurfx, alt: "ResurFX skin resurfacing before and after", label: "ResurFX™" },
];

const GallerySection = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  return (
    <section id="gallery" className="py-28 bg-velvet relative overflow-hidden vignette">
      <div className="absolute inset-0 grid-bg opacity-8" />
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-4">
          <p className="eyebrow mb-4">Real Results</p>
          <h2 className="section-heading">
            Before & <em className="holographic-text" style={{ fontStyle: "italic" }}>After</em>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            See real transformations from 25,000+ clients. Drag the slider to compare results.
          </p>
        </ScrollReveal>

        {/* Trust strip */}
        <ScrollReveal direction="up" delay={0.1} className="flex justify-center gap-6 mb-12 text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
          <span>✓ Unedited photos</span>
          <span>✓ Real patients</span>
          <span>✓ Verified results</span>
        </ScrollReveal>

        {/* Featured Before/After Slider */}
        <ScrollReveal direction="up" delay={0.15} className="max-w-3xl mx-auto mb-12">
          <BeforeAfterSlider
            image={images[activeSlider].src}
            alt={images[activeSlider].alt}
            label={images[activeSlider].label}
            className="aspect-[16/10]"
          />
          {/* Treatment selector pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveSlider(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 text-[10px] font-sans uppercase tracking-[0.1em] rounded-full border transition-all duration-300 ${
                  i === activeSlider
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(38,45%,60%,0.3)]"
                    : "border-primary/10 text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {img.label}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveSlider(i)}
              whileHover={{ scale: 1.05 }}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                i === activeSlider
                  ? "border-primary shadow-[0_0_15px_hsl(38,45%,60%,0.3)]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://www.instagram.com/empathylaserclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram size={16} /> Follow @empathylaserclinic
          </a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="gold-shimmer text-primary-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_hsl(38,45%,60%,0.25)]"
            >
              Get Similar Results <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
