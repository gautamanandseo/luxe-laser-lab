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
          <motion.a
            key={i}
            href="https://www.instagram.com/empathylaserclinic/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{
              scale: 1.05,
              rotateX: 4,
              rotateY: -4,
              boxShadow: "0 20px 40px -10px hsl(38, 45%, 60%, 0.35)",
            }}
            style={{ perspective: 800, transformStyle: "preserve-3d" }}
            className="group relative aspect-square rounded-xl overflow-hidden border border-primary/10 cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <span className="text-xs font-sans uppercase tracking-widest text-foreground flex items-center gap-1.5">
                <Instagram size={14} className="text-primary" />
                View on Instagram
              </span>
            </div>
          </motion.a>
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
