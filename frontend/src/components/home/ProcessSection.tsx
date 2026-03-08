import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ParticleField from "@/components/effects/ParticleField";
import AuroraMesh from "@/components/effects/AuroraMesh";

const steps = [
  { num: "01", title: "Free Consultation", desc: "Meet our specialists to discuss your goals and create a personalized treatment plan — completely free, no obligation.", emoji: "💬" },
  { num: "02", title: "Skin Analysis", desc: "Advanced clinical analysis to determine the perfect treatment protocol for your unique skin type and concerns.", emoji: "🔬" },
  { num: "03", title: "Treatment", desc: "Experience precision-driven treatments in our state-of-the-art clinic with complete comfort and care.", emoji: "✨" },
  { num: "04", title: "Results & Aftercare", desc: "See transformative results with dedicated aftercare guidance for lasting, beautiful outcomes.", emoji: "🌟" },
];

const ProcessSection = () => {
  return (
    <section className="py-28 bg-cosmic relative overflow-hidden light-rays">
      <AuroraMesh intensity="medium" />
      <ParticleField count={25} className="opacity-40" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="section-heading">
            Your Journey in <em className="holographic-text" style={{ fontStyle: "italic" }}>4 Steps</em>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            From your first call to visible results — here's what to expect at Empathy Laser Clinic.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-primary/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute top-0 h-full w-1/4"
              style={{ background: "linear-gradient(90deg, transparent, hsl(38 50% 75% / 0.6), transparent)" }}
            />
          </div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center relative group"
              >
                {/* 3D orb */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-full border border-primary/30"
                  />
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 40px hsl(38 45% 60% / 0.4), 0 0 80px hsl(38 45% 60% / 0.15)",
                    }}
                    className="absolute inset-2 rounded-full border-2 border-primary/40 flex items-center justify-center bg-background relative z-10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 depth-shadow"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">{step.emoji}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.5} className="text-center mt-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)] hover:shadow-[0_12px_40px_hsl(38,45%,60%,0.4)] transition-shadow"
            >
              Start Your Journey Today <ArrowRight size={16} />
            </Link>
          </motion.div>
          <p className="text-xs text-muted-foreground mt-3">Free consultation · No obligation · Walk-ins welcome</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
