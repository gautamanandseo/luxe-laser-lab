import { motion } from "framer-motion";
import { ArrowRight, Check, Scale, Target, Zap, Shield, TrendingDown, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: TrendingDown, title: "Up to 27% Fat Reduction", desc: "Per session with CoolSculpting® Elite — clinically proven and FDA-cleared." },
  { icon: Shield, title: "No Surgery, No Needles", desc: "Completely non-invasive. No anesthesia, no incisions, no scars." },
  { icon: Clock, title: "Zero Downtime", desc: "Walk in during lunch, walk out and resume your day immediately." },
  { icon: Target, title: "Targeted Spot Reduction", desc: "Freeze away fat exactly where you want — belly, love handles, chin, thighs." },
];

const areas = [
  "Stubborn Belly Fat", "Love Handles & Flanks", "Double Chin", "Back & Bra Bulge",
  "Upper Arms", "Inner & Outer Thighs", "Male Chest", "Under Buttocks",
];

const WeightLossSection = () => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

    <div className="relative z-10 container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="eyebrow mb-4">Weight Loss & Body Contouring Delhi</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">
          Delhi NCR's Premier <em className="text-primary">Weight Loss</em> Clinic
        </h2>
        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
          Struggling with stubborn fat that won't budge despite diet and exercise? Empathy Laser Clinic is Delhi NCR's most trusted destination for non-surgical fat reduction and body contouring. Our FDA-cleared CoolSculpting® Elite technology permanently eliminates fat cells — no surgery, no downtime.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <b.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Content + Treatment Areas */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Why Choose CoolSculpting® for <em className="text-primary">Weight Loss in Delhi</em>?
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Diet and exercise are great for overall health, but they can't spot-reduce fat from specific areas. CoolSculpting® uses patented cryolipolysis technology to freeze and permanently destroy fat cells exactly where you need it — belly, love handles, thighs, double chin, and more.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Unlike crash diets that shrink fat cells temporarily, CoolSculpting® eliminates them forever. Adults don't produce new fat cells — once they're gone, they're gone. Results appear naturally over 2-3 months as your body processes the treated cells.
          </p>
          <div className="bg-card border border-primary/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Scale size={20} className="text-primary" />
              <h4 className="font-serif text-lg text-primary">The Science Behind Fat Freezing</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fat cells are more sensitive to cold than surrounding tissue. CoolSculpting® cools fat cells to -11°C, causing them to crystallize and undergo apoptosis (natural cell death). Your lymphatic system then naturally flushes these dead cells out over 2-3 months, revealing a slimmer, sculpted you.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-serif text-2xl text-foreground mb-6">Treatable Areas</h4>
          <div className="grid grid-cols-2 gap-3">
            {areas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors"
              >
                <Check size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{area}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
            <div className="text-center">
              <p className="font-serif text-3xl text-primary">27%</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">Fat Reduction</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-primary">12M+</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">Global Treatments</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl text-primary">0</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">Days Downtime</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="inline-flex flex-wrap justify-center gap-4">
          <Link
            to="/coolsculpting"
            className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Explore CoolSculpting® <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="border border-foreground/30 text-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
          >
            Book Free Body Assessment
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default WeightLossSection;
