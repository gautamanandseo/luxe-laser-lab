import { motion } from "framer-motion";
import { Shield, Award, Star, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";

const certs = [
  { label: "USFDA Cleared", icon: Shield },
  { label: "ISO Certified", icon: Award },
  { label: "CE Marked", icon: CheckCircle },
  { label: "Allergan Partner", icon: Star },
  { label: "Lumenis Partner", icon: Shield },
  { label: "Alma Lasers Partner", icon: Shield },
  { label: "CoolSculpting Certified", icon: Award },
  { label: "15+ Years Experience", icon: Star },
  { label: "25,000+ Clients", icon: CheckCircle },
];

const CertificationsStrip = () => (
  <section className="py-16 bg-card relative overflow-hidden border-y border-border">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="relative z-10 container mx-auto px-6">
      <ScrollReveal direction="up" className="text-center mb-10">
        <p className="eyebrow mb-2">Trusted & Certified</p>
        <h3 className="font-serif text-2xl text-foreground">
          Backed by the World's <em className="text-primary" style={{ fontStyle: "normal" }}>Best</em>
        </h3>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {certs.map((cert, i) => (
          <ScrollReveal key={i} direction="scale" delay={i * 0.05}>
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex items-center gap-2.5 bg-secondary/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 rounded-full px-5 py-2.5 transition-all depth-shadow cursor-default"
            >
              <cert.icon size={14} className="text-primary shrink-0" />
              <span className="text-xs font-sans uppercase tracking-[0.12em] text-foreground/80 whitespace-nowrap">{cert.label}</span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsStrip;
