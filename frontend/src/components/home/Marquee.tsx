const items = [
  "Laser Hair Removal Delhi", "CoolSculpting® Delhi", "Weight Loss Clinic Delhi NCR", "Lumenis LightSheer",
  "Alma Soprano ICE", "Botox & Fillers Delhi", "Bridal Packages Delhi", "Skin Rejuvenation Delhi",
  "Body Contouring Delhi", "USFDA Cleared", "Non-Surgical Fat Reduction Delhi", "Hair Transplant Delhi",
  "Acne Treatment Delhi", "Skin Lightening Delhi", "HIFU Face Lift Delhi", "Pitampura",
];

const Marquee = () => (
  <div className="bg-primary py-3 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-6 text-xs font-sans uppercase tracking-[0.2em] text-primary-foreground font-semibold">
          {item} <span className="mx-3 text-primary-foreground/40">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
