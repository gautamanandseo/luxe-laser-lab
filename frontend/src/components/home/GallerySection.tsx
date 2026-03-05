import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const images = [
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501526250_eb5ry_Untitleddesign2.png",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501584462_moxs2_Untitleddesign2.png",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501696015_bq0po_20250404155222j.jpg",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501775088_le2ot_Untitleddesign2.png",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501965674_cd19k_Untitleddesign2.png",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769602368337-5iwrorz.png",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769602450968-o0map1w.png",
  "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769602486195-br2vkgw.jpeg",
];

const GallerySection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Instagram size={16} className="text-primary" />
          <span className="eyebrow">@empathylaserclinic</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">
          Follow Our <em className="text-primary">Journey</em>
        </h2>
        <p className="text-muted-foreground mt-4">See real results and latest updates</p>
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
              src={img}
              alt={`Clinic result ${i + 1}`}
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
