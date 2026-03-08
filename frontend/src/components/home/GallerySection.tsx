import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
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

const GalleryCard = ({ img, i }: { img: typeof images[0]; i: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -cy * 15, y: cx * 15 });
    setGlare({ x: (cx + 0.5) * 100, y: (cy + 0.5) * 100, opacity: 0.2 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setHovered(false);
  };

  return (
    <div style={{ perspective: 800 }} className="aspect-square">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.05 : 1,
        }}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative w-full h-full rounded-xl overflow-hidden border border-primary/10 cursor-pointer block depth-shadow"
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* "Before & After" label */}
        <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[9px] font-sans uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shadow-lg">
          Before & After
        </div>

        {/* Treatment label */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs font-sans uppercase tracking-[0.1em] text-primary mb-1">{img.label}</p>
          <div className="flex items-center gap-1.5 text-foreground/80 text-[10px]">
            <Eye size={10} />
            <span>View Results</span>
          </div>
        </div>

        {/* Glare effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl z-10"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsla(38, 50%, 75%, ${glare.opacity}), transparent 60%)`,
            transition: "opacity 0.2s",
          }}
        />
      </motion.div>
    </div>
  );
};

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-secondary relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="relative z-10 container mx-auto px-6">
      <ScrollReveal direction="up" className="text-center mb-4">
        <p className="eyebrow mb-4">Real Results</p>
        <h2 className="section-heading">
          Before & <em className="holographic-text" style={{ fontStyle: "italic" }}>After</em>
        </h2>
        <p className="body-text mt-4 max-w-lg mx-auto">
          See real transformations from 25,000+ clients. Results you can trust, backed by 15+ years of clinical excellence.
        </p>
      </ScrollReveal>

      {/* Trust strip */}
      <ScrollReveal direction="up" delay={0.1} className="flex justify-center gap-6 mb-12 text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
        <span>✓ Unedited photos</span>
        <span>✓ Real patients</span>
        <span>✓ Verified results</span>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <GalleryCard key={i} img={img} i={i} />
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

export default GallerySection;
