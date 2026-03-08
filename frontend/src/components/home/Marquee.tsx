import { motion } from "framer-motion";

const items = [
  "Laser Hair Removal", "CoolSculpting®", "Botox & Fillers", "Lumenis LightSheer",
  "Alma Soprano ICE", "Bridal Packages", "Skin Rejuvenation", "Body Contouring",
  "HIFU Face Lift", "Hair Transplant", "Acne Treatment", "HydraFacial",
  "Anti-Ageing", "Skin Lightening", "Dark Circles", "Microdermabrasion",
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex overflow-hidden">
    <motion.div
      className="flex shrink-0 gap-0"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-6 px-6 text-[11px] font-sans uppercase tracking-[0.3em] text-foreground/40 whitespace-nowrap hover:text-primary/70 transition-colors duration-500"
        >
          {item}
          <span className="w-1 h-1 rounded-full bg-primary/30" />
        </span>
      ))}
    </motion.div>
  </div>
);

const Marquee = () => (
  <div className="relative overflow-hidden border-y border-foreground/[0.04]">
    {/* Subtle gradient bg */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/[0.03] to-background" />

    <div className="relative py-5 space-y-3">
      <MarqueeRow />
      <MarqueeRow reverse />
    </div>

    {/* Fade edges */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
  </div>
);

export default Marquee;
