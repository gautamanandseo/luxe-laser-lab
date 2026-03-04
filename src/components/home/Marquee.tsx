const items = [
  "Laser Hair Removal", "CoolSculpting®", "Botox & Fillers", "Microdermabrasion",
  "Bridal Packages", "Salon Services", "Spa Treatments", "Skin Rejuvenation",
  "Body Contouring", "USFDA Cleared", "Venus Treatments", "Delhi NCR",
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
