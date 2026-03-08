import { motion } from "framer-motion";
import { ArrowRight, Check, Scale, Target, Zap, Shield, TrendingDown, Clock, Heart, Users, Dumbbell, Apple, Activity, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: TrendingDown, title: "Up to 27% Fat Reduction", desc: "Per session with CoolSculpting® Elite — clinically proven and FDA-cleared." },
  { icon: Shield, title: "No Surgery, No Needles", desc: "100% non-invasive. No anesthesia, no incisions, no scars, no stitches." },
  { icon: Clock, title: "Zero Downtime", desc: "Walk in during lunch, walk out and resume your day. No recovery period needed." },
  { icon: Target, title: "Targeted Spot Reduction", desc: "Freeze away fat exactly where you want — belly, love handles, chin, thighs, arms." },
];

const areas = [
  "Stubborn Belly Fat", "Love Handles & Flanks", "Double Chin", "Back & Bra Bulge",
  "Upper Arms", "Inner & Outer Thighs", "Male Chest", "Under Buttocks",
];

const whyDietsFail = [
  { icon: Activity, title: "Metabolic Resistance", desc: "Your body fights calorie restriction by slowing metabolism, making further weight loss increasingly difficult." },
  { icon: Zap, title: "Hormonal Imbalance", desc: "Cortisol, insulin resistance, and estrogen dominance cause fat to accumulate in specific stubborn areas." },
  { icon: Users, title: "Genetic Predisposition", desc: "Some fat deposits are genetically programmed to resist diet and exercise — they're biologically designed to persist." },
  { icon: Apple, title: "Alpha-2 Receptor Density", desc: "Stubborn fat areas have more alpha-2 receptors that inhibit fat breakdown, making them resistant to traditional methods." },
];

const healthBenefits = [
  "Improved cardiovascular health & lower blood pressure",
  "Reduced risk of Type 2 diabetes",
  "Better sleep quality — less sleep apnea",
  "Enhanced energy levels & stamina",
  "Improved mental well-being & confidence",
  "Reduced joint stress & better mobility",
  "Better hormonal balance",
  "Lower cholesterol & improved metabolic markers",
];

const WeightLossSection = () => (
  <section className="py-24 bg-secondary relative overflow-hidden">
    {/* Background decorations */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

    <div className="relative z-10 container mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="eyebrow mb-4">Weight Loss & Body Contouring Delhi</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">
          Delhi NCR's Premier <em className="text-primary">Weight Loss</em> Clinic
        </h2>
        <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
          Struggling with stubborn fat that won't budge despite diet and exercise? At Empathy Laser Clinic, Pitampura, Delhi, we offer clinically proven, non-surgical fat reduction using FDA-cleared CoolSculpting® Elite technology. Permanently eliminate fat cells — no surgery, no downtime, no compromises.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

      {/* Why Diets Fail Section */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Why Diets Fail — The <em className="text-primary">Science</em> Behind Stubborn Fat
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It's not a willpower problem — it's biology. Certain fat deposits are evolutionarily designed to resist diet and exercise.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyDietsFail.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card/50 border border-border/50 rounded-xl p-5"
            >
              <item.icon size={20} className="text-primary mb-3" />
              <h4 className="font-serif text-base text-foreground mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content + Treatment Areas */}
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
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
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unlike crash diets that shrink fat cells temporarily, CoolSculpting® eliminates them forever. Adults don't produce new fat cells — once they're gone, they're gone. Results appear naturally over 2-3 months as your body processes the treated cells.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Globally, over 12 million CoolSculpting® treatments have been performed. At Empathy Laser Clinic in Pitampura, Delhi, we use only authentic CoolSculpting® Elite machines with the latest C-shaped applicators — 18% more coverage and dual-area treatment capability for faster results.
          </p>

          <div className="bg-card border border-primary/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Scale size={20} className="text-primary" />
              <h4 className="font-serif text-lg text-primary">The Science Behind Fat Freezing</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fat cells are more sensitive to cold than surrounding tissue. CoolSculpting® cools fat cells to -11°C, causing them to crystallize and undergo apoptosis (natural cell death). Your lymphatic system then naturally flushes these dead cells over 2-3 months, revealing a slimmer, sculpted you. The surrounding skin, nerves, and muscle tissue remain completely unharmed.
            </p>
          </div>

          {/* Weight Loss for Men */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Dumbbell size={20} className="text-primary" />
              <h4 className="font-serif text-lg text-foreground">Weight Loss for Men</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CoolSculpting® is highly effective for men's common problem areas — belly fat, chest fat (pseudogynecomastia), love handles, and double chin. Male fat distribution tends to be more localised, making CoolSculpting® particularly effective. Discreet, painless, and zero downtime — many men return to work or the gym immediately.
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

          {/* Health Benefits */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <Heart size={20} className="text-primary" />
              <h4 className="font-serif text-xl text-foreground">Health Benefits Beyond Body Shape</h4>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {healthBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={12} className="text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Patient Journey */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-3xl md:text-4xl text-foreground">
            Your Weight Loss <em className="text-primary">Journey</em>
          </h3>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Free Body Assessment", desc: "Comprehensive body composition analysis, BMI assessment, and identification of target areas at our Pitampura clinic." },
            { step: "02", title: "Customised Treatment Plan", desc: "Based on your body goals, we determine optimal sessions, areas, and applicator combinations." },
            { step: "03", title: "CoolSculpting® Session", desc: "Relax as dual applicators precisely cool and destroy fat cells at -11°C. 35-60 minutes per area." },
            { step: "04", title: "Watch Fat Disappear", desc: "Your body naturally eliminates dead fat cells over 2-3 months. Results are permanent and natural-looking." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-5xl font-serif text-primary/20 mb-3">{item.step}</div>
              <h4 className="font-serif text-lg text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-8 -right-3 text-primary/30">→</div>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Serving Areas - Advanced 3D Area Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-16 rounded-2xl border border-primary/15 bg-card/50 backdrop-blur-sm overflow-hidden depth-shadow"
      >
        {/* Background effects */}
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] rounded-full blur-[80px]" />
        <div className="absolute inset-0 noise" />

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="eyebrow">Coverage Area</span>
            <h4 className="font-serif text-2xl md:text-3xl text-foreground mt-3 mb-3">Serving All of Delhi NCR</h4>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Located in <strong className="text-foreground">Pitampura, North Delhi</strong> — easily accessible within 25 km from all major localities across Delhi NCR.
            </p>
          </div>

          {/* Area zones */}
          {(() => {
            const zones = [
              {
                zone: "North Delhi",
                color: "from-primary/20 to-primary/5",
                borderColor: "border-primary/25 hover:border-primary/50",
                glowColor: "group-hover:shadow-[0_0_25px_hsl(38,45%,60%,0.15)]",
                areas: ["Pitampura", "Rohini", "Model Town", "Shalimar Bagh", "Ashok Vihar", "Civil Lines", "GTB Nagar", "Mukherjee Nagar", "Kingsway Camp", "Adarsh Nagar", "Azadpur", "Wazirpur", "Jahangirpuri"],
              },
              {
                zone: "West Delhi",
                color: "from-[hsl(280,40%,50%,0.15)] to-[hsl(280,40%,50%,0.03)]",
                borderColor: "border-[hsl(280,40%,50%,0.2)] hover:border-[hsl(280,40%,50%,0.4)]",
                glowColor: "group-hover:shadow-[0_0_25px_hsl(280,40%,50%,0.12)]",
                areas: ["Paschim Vihar", "Punjabi Bagh", "Rajouri Garden", "Janakpuri", "Dwarka", "Vikaspuri", "Tilak Nagar", "Moti Nagar", "Kirti Nagar", "Patel Nagar", "Karol Bagh", "Hari Nagar"],
              },
              {
                zone: "South Delhi",
                color: "from-[hsl(170,50%,40%,0.15)] to-[hsl(170,50%,40%,0.03)]",
                borderColor: "border-[hsl(170,50%,40%,0.2)] hover:border-[hsl(170,50%,40%,0.4)]",
                glowColor: "group-hover:shadow-[0_0_25px_hsl(170,50%,40%,0.12)]",
                areas: ["Vasant Kunj", "Vasant Vihar", "Saket", "Greater Kailash", "Defence Colony", "Hauz Khas", "Green Park", "Lajpat Nagar", "Chanakyapuri", "Mehrauli", "Malviya Nagar", "Safdarjung Enclave"],
              },
              {
                zone: "Central & East Delhi",
                color: "from-[hsl(35,70%,50%,0.15)] to-[hsl(35,70%,50%,0.03)]",
                borderColor: "border-[hsl(35,70%,50%,0.2)] hover:border-[hsl(35,70%,50%,0.4)]",
                glowColor: "group-hover:shadow-[0_0_25px_hsl(35,70%,50%,0.12)]",
                areas: ["Connaught Place", "Chandni Chowk", "Preet Vihar", "Laxmi Nagar", "Mayur Vihar", "IP Extension", "Shahdara", "Vivek Vihar", "Anand Vihar", "Karkardooma"],
              },
              {
                zone: "NCR – Gurgaon & Beyond",
                color: "from-[hsl(210,50%,50%,0.15)] to-[hsl(210,50%,50%,0.03)]",
                borderColor: "border-[hsl(210,50%,50%,0.2)] hover:border-[hsl(210,50%,50%,0.4)]",
                glowColor: "group-hover:shadow-[0_0_25px_hsl(210,50%,50%,0.12)]",
                areas: ["Gurgaon", "DLF Phase 1-5", "Sohna Road", "Golf Course Road", "MG Road Gurgaon", "Noida", "Greater Noida", "Faridabad", "Ghaziabad", "Indirapuram"],
              },
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {zones.map((z, zi) => (
                  <motion.div
                    key={z.zone}
                    initial={{ opacity: 0, y: 15, rotateX: -5 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: zi * 0.08 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`group relative rounded-xl border ${z.borderColor} bg-gradient-to-br ${z.color} p-5 transition-all duration-500 cursor-default ${z.glowColor}`}
                    style={{ perspective: 800, transformStyle: "preserve-3d" }}
                  >
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-gold-pulse" />
                        <h5 className="text-sm font-sans font-semibold text-foreground tracking-wide">{z.zone}</h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {z.areas.map((area) => (
                          <span
                            key={area}
                            className="inline-block px-2.5 py-1 text-[11px] rounded-full bg-background/40 border border-white/[0.06] text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Center highlight card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/[0.02] p-5 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_hsl(38,45%,60%,0.15)]"
                >
                  <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  <div className="relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mb-3 mx-auto bg-primary/5"
                    >
                      <MapPin className="text-primary" size={22} />
                    </motion.div>
                    <p className="text-2xl font-serif text-foreground mb-1">60+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Areas Covered</p>
                    <p className="text-[11px] text-muted-foreground mt-2">Within 25 km of Pitampura</p>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center">
        <div className="inline-flex flex-wrap justify-center gap-4">
          <Link
            to="/weight-loss-delhi"
            className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Explore Weight Loss Treatments <ArrowRight size={16} />
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
