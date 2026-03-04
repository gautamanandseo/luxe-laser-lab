import { motion } from "framer-motion";
import { Zap, CircleDot, Scan, Award } from "lucide-react";

const techs = [
  { icon: Zap, name: "Diode Laser", desc: "Advanced 808nm wavelength for all skin types" },
  { icon: CircleDot, name: "CoolSculpting® Elite", desc: "Dual applicator for twice the results" },
  { icon: Scan, name: "Venus Treatments", desc: "RF & IPL for skin tightening and rejuvenation" },
  { icon: Award, name: "Clinical Skin Analysis", desc: "AI-powered diagnostic skin assessment" },
];

const TechnologySection = () => (
  <section className="py-24 bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual - animated rings */}
        <div className="relative flex items-center justify-center h-80">
          <div className="absolute w-40 h-40 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-56 h-56 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute w-72 h-72 rounded-full border border-primary/5 animate-[spin_40s_linear_infinite]" />
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-primary animate-gold-pulse" />
          </div>
          {/* Certification badges around the ring */}
          {["USFDA", "ISO", "CE", "FDA"].map((badge, i) => (
            <div
              key={badge}
              className="absolute text-[10px] font-sans uppercase tracking-wider text-primary/60 bg-card border border-border px-2 py-1 rounded"
              style={{
                top: `${20 + (i % 2) * 60}%`,
                left: i < 2 ? "0%" : undefined,
                right: i >= 2 ? "0%" : undefined,
              }}
            >
              {badge}
            </div>
          ))}
        </div>

        {/* Content */}
        <div>
          <p className="eyebrow mb-4">Our Technology</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Cutting-Edge <em className="text-primary">Equipment</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We invest in only the most advanced, clinically proven technologies. Every device in our clinic is USFDA cleared and operated by certified specialists.
          </p>
          <div className="space-y-6">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <tech.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechnologySection;
