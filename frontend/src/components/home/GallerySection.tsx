import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import galleryClinic1 from "@/assets/gallery-clinic-1.jpg";
import galleryClinic2 from "@/assets/gallery-clinic-2.jpg";
import galleryCool1 from "@/assets/gallery-cool-1.jpg";
import galleryBridal1 from "@/assets/gallery-bridal-1.jpg";
import gallerySpa1 from "@/assets/gallery-spa-1.jpg";
import gallerySkincare1 from "@/assets/gallery-skincare-1.jpg";
import galleryLaser1 from "@/assets/gallery-laser-1.jpg";
import gallerySalon1 from "@/assets/gallery-salon-1.jpg";

const images = [
  { src: galleryClinic1, alt: "Luxury treatment room" },
  { src: galleryLaser1, alt: "Advanced laser technology" },
  { src: galleryCool1, alt: "CoolSculpting treatment" },
  { src: gallerySkincare1, alt: "Premium skincare products" },
  { src: galleryBridal1, alt: "Bridal beauty preparation" },
  { src: gallerySpa1, alt: "Hot stone spa therapy" },
  { src: gallerySalon1, alt: "Premium salon styling" },
  { src: galleryClinic2, alt: "Clinic reception lounge" },
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
            className="group relative aspect-square rounded-xl overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
              <Instagram size={24} className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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
