import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import baAcne from "@/assets/ba-acne.jpg";
import baBotox from "@/assets/ba-botox.jpg";
import baCoolsculpting from "@/assets/ba-coolsculpting.jpg";
import baFacial from "@/assets/ba-facial.jpg";
import baHifu from "@/assets/ba-hifu.jpg";
import baLaserMen from "@/assets/ba-laser-men.jpg";
import baSkin from "@/assets/ba-skin.jpg";
import baResurfx from "@/assets/ba-resurfx.jpg";

const images = [
  { src: baAcne, alt: "Acne treatment results" },
  { src: baBotox, alt: "Botox treatment results" },
  { src: baCoolsculpting, alt: "CoolSculpting body contouring results" },
  { src: baFacial, alt: "Facial rejuvenation results" },
  { src: baHifu, alt: "HIFU face lift results" },
  { src: baLaserMen, alt: "Laser hair removal for men" },
  { src: baSkin, alt: "Skin treatment results" },
  { src: baResurfx, alt: "ResurFX skin resurfacing results" },
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
      <motion.a
        href="https://www.instagram.com/empathylaserclinic/"
        target="_blank"
        rel="noopener noreferrer"
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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-xs font-sans uppercase tracking-widest text-foreground flex items-center gap-1.5">
            <Instagram size={14} className="text-primary" />
            View on Instagram
          </span>
        </div>
        {/* Glare effect */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl z-10"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsla(38, 50%, 75%, ${glare.opacity}), transparent 60%)`,
            transition: "opacity 0.2s",
          }}
        />
      </motion.a>
    </div>
  );
};

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram size={16} className="text-primary" />
          <span className="eyebrow">@empathylaserclinic</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">
          Follow Our <em className="text-primary">Journey</em>
        </h2>
        <p className="text-muted-foreground mt-4">See real results and latest updates from our clinic</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <GalleryCard key={i} img={img} i={i} />
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.instagram.com/empathylaserclinic/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border text-foreground px-6 py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
        >
          <Instagram size={16} /> Follow on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default GallerySection;
