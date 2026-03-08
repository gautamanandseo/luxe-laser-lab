import { motion } from "framer-motion";
import { Zap, Snowflake, Scan, Award } from "lucide-react";
import { Link } from "react-router-dom";
import techLightsheer from "@/assets/tech-lightsheer.png";
import techSoprano from "@/assets/tech-soprano.png";

const techs = [
  {
    icon: Zap,
    name: "Lumenis LightSheer Desire™",
    desc: "The world's gold standard in laser hair removal. 805nm diode laser with integrated vacuum-assist technology for virtually painless, permanent hair reduction on all skin types.",
    link: "/laser-hair-removal",
    badge: "USFDA Cleared",
  },
  {
    icon: Scan,
    name: "Alma Soprano ICE Platinum™",
    desc: "Triple-wavelength (755+810+1064nm) SHR technology with ICE™ cooling. The most advanced pain-free laser hair removal system for even the most sensitive areas.",
    link: "/laser-hair-removal",
    badge: "USFDA Cleared",
  },
  {
    icon: Snowflake,
    name: "CoolSculpting® Elite",
    desc: "The world's #1 non-invasive fat reduction system. Dual applicators with 18% more coverage for faster, more effective body contouring. FDA-cleared cryolipolysis technology.",
    link: "/coolsculpting",
    badge: "FDA Cleared",
  },
];

const certBadges = ["USFDA Cleared", "ISO Certified", "CE Marked", "Allergan Partner", "Lumenis Partner", "Alma Lasers Partner", "CoolSculpting Certified"];

const TechnologySection = () => (
  <section className="py-24 bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="eyebrow mb-4">Our Cutting-Edge Equipment</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">
          World-Class <em className="text-primary">Technology</em>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          We invest in only the most advanced, USFDA-cleared equipment from globally renowned manufacturers — Lumenis, Alma Lasers, and Allergan (CoolSculpting). Every device is operated by certified specialists.
        </p>
      </div>

      {/* Equipment Showcase */}
      <div className="grid lg:grid-cols-3 gap-8 mb-20">
        {techs.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <tech.icon size={24} className="text-primary" />
              </div>
              <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                {tech.badge}
              </span>
            </div>

            <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{tech.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tech.desc}</p>

            <Link
              to={tech.link}
              className="text-sm text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Equipment Images Row */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center"
        >
          <img src={techLightsheer} alt="Lumenis LightSheer Desire Laser" className="h-48 object-contain mb-6" />
          <h4 className="font-serif text-lg text-foreground">Lumenis LightSheer Desire™</h4>
          <p className="text-xs text-muted-foreground text-center mt-2">805nm diode with vacuum-assist technology</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-card border border-border rounded-2xl p-8 flex flex-col items-center"
        >
          <img src={techSoprano} alt="Alma Soprano ICE Platinum Laser" className="h-48 object-contain mb-6" />
          <h4 className="font-serif text-lg text-foreground">Alma Soprano ICE Platinum™</h4>
          <p className="text-xs text-muted-foreground text-center mt-2">Triple-wavelength SHR with ICE™ cooling</p>
        </motion.div>
      </div>

      {/* Certification Badges */}
      <div className="flex flex-wrap justify-center gap-4">
        {certBadges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full"
          >
            <Award size={12} className="text-primary" />
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-muted-foreground">{badge}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologySection;
