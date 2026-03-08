import { motion } from "framer-motion";
import { Shield, Award, Users, Heart, Sparkles, Clock, ArrowRight, CheckCircle, Leaf, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import AuroraMesh from "@/components/effects/AuroraMesh";

const reasons = [
  { num: "01", title: "Certified Specialists", desc: "Board-certified physicians and trained aestheticians with decades of combined experience across 50+ professionals. Every procedure is performed or supervised by qualified medical staff.", icon: Award },
  { num: "02", title: "Genuine USFDA Technology", desc: "Only USFDA-cleared equipment — Lumenis LightSheer Desire™, Alma Soprano ICE Platinum™, CoolSculpting® Elite. No grey-market imports, no refurbished machines. Direct from the manufacturer.", icon: Shield },
  { num: "03", title: "Indian Skin Experts", desc: "Treatments specifically calibrated for the full range of Indian skin tones (Fitzpatrick III-VI). Our protocols are developed for the unique challenges of Indian skin — pigmentation, sensitivity, and tanning.", icon: Users },
  { num: "04", title: "Zero Downtime Treatments", desc: "Walk in during lunch, walk out ready for your evening plans. Most of our treatments — including CoolSculpting®, laser, and HIFU — require zero recovery time.", icon: Clock },
  { num: "05", title: "Compassionate Care", desc: "The 'Empathy' in our name is our promise. We treat every client with genuine care, listen to your concerns, and never push unnecessary treatments. Your comfort comes first, always.", icon: Heart },
  { num: "06", title: "Free Expert Consultation", desc: "Every journey starts with a complimentary consultation worth ₹500. Get a personalized assessment, honest recommendations, and transparent pricing — zero obligation, zero pressure.", icon: Sparkles },
  { num: "07", title: "Aftercare Excellence", desc: "Treatment doesn't end when you leave. We provide detailed aftercare kits, follow-up calls within 48 hours, complimentary review appointments, and progress tracking photography.", icon: Leaf },
  { num: "08", title: "Results-Driven Approach", desc: "We measure success by your transformation, not our revenue. Before-and-after documentation, clinical progress tracking, and honest assessments at every stage of your journey.", icon: TrendingUp },
  { num: "09", title: "Transparent Pricing", desc: "No hidden charges, no surprise fees. We discuss every cost upfront during your consultation. Flexible EMI options and package savings make premium treatments accessible to all.", icon: Target },
];

const WhyChooseSection = () => (
  <section className="py-28 bg-velvet relative overflow-hidden light-rays vignette">
    <AuroraMesh intensity="medium" />
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow" />

    <div className="relative z-10 container mx-auto px-6">
      <ScrollReveal direction="up" className="text-center mb-6">
        <p className="eyebrow mb-4">The Empathy Difference</p>
        <h2 className="section-heading">
          Why Choose <em className="holographic-text" style={{ fontStyle: "italic" }}>Empathy</em>
        </h2>
        <p className="body-text mt-4 max-w-xl mx-auto">
          In a market flooded with options, here's what sets Empathy Laser Clinic apart from every other aesthetic clinic in Delhi NCR.
        </p>
      </ScrollReveal>

      {/* Quick trust strip */}
      <ScrollReveal direction="up" delay={0.05} className="flex flex-wrap justify-center gap-4 mb-14">
        {["15+ Years Experience", "25,000+ Happy Clients", "4.9★ Google Rating", "50+ Expert Staff", "22+ Treatments"].map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            <CheckCircle size={10} className="text-primary" />
            {item}
          </span>
        ))}
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.07}>
            <Tilt3DCard className="h-full" maxTilt={8}>
              <div className="group relative p-8 obsidian-panel rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 h-full card-ultra shimmer-sweep border-liquid-gold">
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
            Experience the Empathy Difference <ArrowRight size={16} />
          </Link>
        </motion.div>
        <p className="body-text text-xs mt-3">
          Free consultation · No obligation · Walk-ins welcome
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyChooseSection;
