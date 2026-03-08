import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Heart, Zap, Award, Users, Star, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import AuroraMesh from "@/components/effects/AuroraMesh";

const milestones = [
  {
    icon: Sparkles,
    year: "2009",
    title: "The Beginning",
    desc: "Founded in Pitampura, Delhi with a singular vision — to bring world-class aesthetic treatments to Delhi NCR in an environment built on trust, clinical precision, and genuine empathy. Started with laser hair removal using India's first Lumenis LightSheer system.",
  },
  {
    icon: Shield,
    year: "2012",
    title: "Technology Pioneer",
    desc: "Became one of Delhi's first clinics to introduce USFDA-cleared Lumenis LightSheer Desire™ — setting new standards in laser hair removal. Clients from Rohini, Shalimar Bagh, and Model Town started choosing us for permanent, pain-free hair reduction.",
  },
  {
    icon: Award,
    year: "2015",
    title: "Comprehensive Skin Care",
    desc: "Expanded beyond laser to include advanced dermatological treatments — chemical peels, microdermabrasion, acne scar treatment, and anti-ageing protocols. Added Alma Soprano ICE Platinum™ for truly pain-free laser treatments across all skin types.",
  },
  {
    icon: Star,
    year: "2018",
    title: "Best Clinic Recognition",
    desc: "Recognized as Best Aesthetic Clinic in Delhi NCR. Introduced Botox, dermal fillers, HIFU face lift, and PRP therapy — all performed by board-certified physicians using genuine Allergan products.",
  },
  {
    icon: Zap,
    year: "2020",
    title: "CoolSculpting® Elite",
    desc: "Introduced CoolSculpting® Elite — the world's #1 non-surgical fat reduction system. Became Delhi NCR's premier destination for non-invasive body contouring with up to 27% fat reduction per session.",
  },
  {
    icon: Users,
    year: "2023",
    title: "Hair Restoration Centre",
    desc: "Launched comprehensive hair restoration services including FUE hair transplant, advanced PRP therapy, and scalp mesotherapy. Addressed Delhi's growing hair loss crisis with science-backed solutions.",
  },
  {
    icon: TrendingUp,
    year: "2025",
    title: "25,000+ Milestone",
    desc: "Celebrated 25,000+ successful treatments across 22+ service categories. Expanded team to 50+ trained professionals. Clients from across Delhi, Noida, Gurugram, Ghaziabad, and Faridabad trust Empathy for their most important aesthetic decisions.",
  },
];

const ParallaxStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-background overflow-hidden"
    >
      <AuroraMesh intensity="subtle" className="opacity-40" />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
      >
        <div className="w-full h-full rounded-full bg-primary blur-[100px]" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.03]"
      >
        <div className="w-full h-full rounded-full bg-primary blur-[80px]" />
      </motion.div>

      <div className="absolute inset-0 grid-bg opacity-20" />

      <motion.div style={{ opacity, scale }} className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-20">
          <p className="eyebrow mb-4">Our Journey</p>
          <h2 className="section-heading">
            A Legacy of <em className="holographic-text" style={{ fontStyle: "italic" }}>Excellence</em>
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            From a single-room clinic in Pitampura to Delhi NCR's most trusted aesthetic destination — 15+ years of transforming lives through clinical precision and compassionate care.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line with animated gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block">
            <motion.div
              className="absolute inset-x-0 w-full h-1/4"
              animate={{ top: ["-25%", "125%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "linear-gradient(180deg, transparent, hsl(38 50% 75% / 0.5), transparent)" }}
            />
          </div>

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal
                key={i}
                direction={isLeft ? "left" : "right"}
                delay={i * 0.1}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group p-6 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-500 depth-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
                    <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-primary to-transparent group-hover:w-full transition-all duration-700 delay-200" />
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                      <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary font-semibold">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="card-heading mb-2 group-hover:text-primary transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, boxShadow: "0 0 30px hsl(38,45%,60%,0.4)" }}
                    className="w-12 h-12 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center shadow-[0_0_20px_hsl(38,45%,60%,0.2)] transition-all"
                  >
                    <m.icon size={18} className="text-primary" />
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.5} className="text-center mt-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/about"
              className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)]"
            >
              Discover Our Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
};

export default ParallaxStorySection;
