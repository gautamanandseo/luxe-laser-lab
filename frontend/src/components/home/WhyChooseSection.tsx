import { motion } from "framer-motion";
import { Shield, Award, Users, Heart, Sparkles, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import AuroraMesh from "@/components/effects/AuroraMesh";

const reasons = [
  { num: "01", title: "Certified Specialists", desc: "Board-certified physicians and trained aestheticians with decades of combined experience.", icon: Award },
  { num: "02", title: "Genuine Technology", desc: "Only USFDA-cleared equipment — Lumenis LightSheer Desire™, Alma Soprano ICE Platinum™, CoolSculpting® Elite.", icon: Shield },
  { num: "03", title: "All Skin Types", desc: "Treatments specifically calibrated for the full range of Indian skin tones (Fitzpatrick I-VI).", icon: Users },
  { num: "04", title: "Zero Downtime", desc: "Walk in during lunch, walk out ready for your evening plans. Most treatments need no recovery time.", icon: Clock },
  { num: "05", title: "Compassionate Care", desc: "The 'Empathy' in our name is our promise — we treat every client with genuine care and understanding.", icon: Heart },
  { num: "06", title: "Personalized Quotes", desc: "Every treatment plan is customized. Book a free consultation for a personalized quote.", icon: Sparkles },
];

const WhyChooseSection = () => (
  <section className="py-28 bg-aurora-section relative overflow-hidden light-rays">
    <AuroraMesh intensity="medium" />
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow" />

    <div className="relative z-10 container mx-auto px-6">
      <ScrollReveal direction="up" className="text-center mb-16">
        <p className="eyebrow mb-4">The Empathy Difference</p>
        <h2 className="section-heading">
          Why Choose <em className="holographic-text" style={{ fontStyle: "italic" }}>Empathy</em>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.1}>
            <Tilt3DCard className="h-full" maxTilt={8}>
              <div className="group relative p-8 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full depth-shadow shimmer-sweep">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 radial-glow" />
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-gradient-to-l from-primary to-primary/0 group-hover:w-full transition-all duration-700 delay-200" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-serif text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">{r.num}</span>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_hsl(38,45%,60%,0.3)] transition-all duration-500"
                    >
                      <r.icon size={24} className="text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="card-heading mb-3 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </Tilt3DCard>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal direction="up" delay={0.4} className="text-center mt-14">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/contact"
            className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)] hover:shadow-[0_12px_40px_hsl(38,45%,60%,0.4)] transition-shadow"
          >
            Experience the Difference <ArrowRight size={16} />
          </Link>
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyChooseSection;
