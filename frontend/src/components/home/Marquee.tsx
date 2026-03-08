import { motion } from "framer-motion";

const items = [
  "Laser Hair Removal Delhi", "CoolSculpting® Delhi", "Weight Loss Clinic Delhi NCR", "Lumenis LightSheer",
  "Alma Soprano ICE", "Botox & Fillers Delhi", "Bridal Packages Delhi", "Skin Rejuvenation Delhi",
  "Body Contouring Delhi", "USFDA Cleared", "Non-Surgical Fat Reduction Delhi", "Hair Transplant Delhi",
  "Acne Treatment Delhi", "Skin Lightening Delhi", "HIFU Face Lift Delhi", "Pitampura",
];

const Marquee = () => (
  <div className="relative overflow-hidden">
    {/* Multi-layer gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,2%)] via-primary/10 to-[hsl(0,0%,2%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

    {/* Top prismatic line */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    {/* Bottom prismatic line */}
    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[hsl(350,50%,55%,0.3)] via-primary/40 to-transparent" />

    <div className="relative py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-xs font-sans uppercase tracking-[0.25em] text-foreground/60 font-medium">
            {item}
            <span className="mx-4 inline-block w-1 h-1 rounded-full bg-primary/50 align-middle" />
          </span>
        ))}
      </div>
    </div>

    {/* Fade edges */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(0,0%,2%)] to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(0,0%,2%)] to-transparent z-10" />
  </div>
);

export default Marquee;