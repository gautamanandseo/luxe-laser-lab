import { motion } from "framer-motion";
import { Shield, Award, Users, Heart, Sparkles, Clock } from "lucide-react";

const reasons = [
  { num: "01", title: "Certified Specialists", desc: "Board-certified physicians and trained aestheticians with decades of combined experience.", icon: Award },
  { num: "02", title: "Genuine Technology", desc: "Only USFDA-cleared equipment — Lumenis LightSheer Desire™, Alma Soprano ICE Platinum™, CoolSculpting® Elite.", icon: Shield },
  { num: "03", title: "All Skin Types", desc: "Treatments specifically calibrated for the full range of Indian skin tones (Fitzpatrick I-VI).", icon: Users },
  { num: "04", title: "Zero Downtime", desc: "Walk in during lunch, walk out ready for your evening plans. Most treatments need no recovery time.", icon: Clock },
  { num: "05", title: "Compassionate Care", desc: "The 'Empathy' in our name is our promise — we treat every client with genuine care and understanding.", icon: Heart },
  { num: "06", title: "Personalized Quotes", desc: "Every treatment plan is customized. Book a free consultation for a personalized quote.", icon: Sparkles },
];

const WhyChooseSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="eyebrow mb-4">The Empathy Difference</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">
          Why Choose <em className="text-primary">Empathy</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
          >
            {/* Top border sweep animation on hover */}
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
            
            <div className="flex items-start justify-between mb-6">
              <span className="font-serif text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">{r.num}</span>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <r.icon size={22} className="text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
