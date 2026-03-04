import { Shield } from "lucide-react";

const certs = [
  "USFDA Cleared", "ISO Certified", "CE Marked", "Allergan Partner", "Venus Concept Partner", "15+ Years", "25K+ Clients"
];

const CertificationsStrip = () => (
  <section className="py-12 bg-card border-y border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {certs.map((cert, i) => (
          <div key={i} className="flex items-center gap-2 text-muted-foreground">
            <Shield size={14} className="text-primary" />
            <span className="text-xs font-sans uppercase tracking-[0.15em]">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsStrip;
