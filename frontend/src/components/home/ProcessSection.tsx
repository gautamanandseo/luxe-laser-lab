import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle, Clock, Sparkles, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ParticleField from "@/components/effects/ParticleField";
import AuroraMesh from "@/components/effects/AuroraMesh";

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Book a free, no-obligation consultation with our specialists. Share your goals and concerns — we'll listen carefully and assess your unique needs. Available in-clinic, over phone, or via WhatsApp.",
    emoji: "💬",
    detail: "Worth ₹500 — Complimentary for all new clients",
  },
  {
    num: "02",
    title: "Skin & Body Analysis",
    desc: "Our experts perform a thorough clinical analysis using advanced diagnostic tools. We evaluate your skin type, concern severity, and medical history to determine the ideal treatment protocol.",
    emoji: "🔬",
    detail: "Trichoscopy · Skin scanner · Body assessment",
  },
  {
    num: "03",
    title: "Customized Treatment Plan",
    desc: "Receive a personalized treatment plan with transparent pricing, timeline, expected results, and aftercare instructions. We explain everything — no jargon, no hidden costs, no surprises.",
    emoji: "📋",
    detail: "Clear pricing · EMI options · Package savings",
  },
  {
    num: "04",
    title: "Expert Treatment",
    desc: "Experience precision-driven treatments in our state-of-the-art clinic. Our trained specialists use only USFDA-cleared equipment to deliver safe, effective, and comfortable procedures.",
    emoji: "✨",
    detail: "Board-certified team · Premium equipment",
  },
  {
    num: "05",
    title: "Results & Follow-Up",
    desc: "See real, measurable results. We document your progress with before-and-after photos, schedule follow-up reviews, and provide detailed aftercare guidance to ensure lasting outcomes.",
    emoji: "🌟",
    detail: "Free follow-up · Progress tracking · Aftercare kit",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-28 bg-velvet relative overflow-hidden light-rays vignette diamond-dust">
      <AuroraMesh intensity="medium" />
      <ParticleField count={25} className="opacity-40" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="section-heading">
            Your Journey in <em className="holographic-text" style={{ fontStyle: "italic" }}>5 Steps</em>
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            From your very first call to visible, lasting results — here's exactly what to expect when you choose Empathy Laser Clinic.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-primary/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute top-0 h-full w-1/5"
              style={{ background: "linear-gradient(90deg, transparent, hsl(38 50% 75% / 0.6), transparent)" }}
            />
          </div>

          {steps.map((step, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center relative group"
              >
                {/* 3D orb */}
                <div className="relative w-20 h-20 mx-auto mb-5">
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
                    className="absolute inset-2 rounded-full border-2 border-primary/40 flex items-center justify-center bg-background relative z-10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 depth-shadow group-hover:shadow-[0_0_50px_hsl(38,45%,60%,0.5)]"
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform">{step.emoji}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1.5">Step {step.num}</div>
                <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{step.desc}</p>
                <p className="text-[9px] text-primary/60 uppercase tracking-wider">{step.detail}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quick action strip */}
        <ScrollReveal direction="up" delay={0.4} className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-primary/10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 text-sm text-foreground/80">
              <Clock size={16} className="text-primary" />
              <span>Average first visit: 30-45 minutes</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-primary/20" />
            <div className="flex items-center gap-3 text-sm text-foreground/80">
              <CheckCircle size={16} className="text-primary" />
              <span>Walk-ins welcome (Tue–Sun)</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-primary/20" />
            <div className="flex items-center gap-3 text-sm text-foreground/80">
              <Sparkles size={16} className="text-primary" />
              <span>20% off first session</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.5} className="text-center mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)] hover:shadow-[0_12px_40px_hsl(38,45%,60%,0.4)] transition-shadow"
              >
                Start Your Journey Today <ArrowRight size={16} />
              </Link>
            </motion.div>
            <a
              href="tel:+919811157787"
              className="border border-primary/20 text-foreground px-6 py-4 text-sm font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center gap-2 hover:border-primary/40 hover:text-primary transition-colors"
            >
              <Phone size={14} /> Call: 9811157787
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Free consultation · No obligation · Walk-ins welcome · EMI available</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;
