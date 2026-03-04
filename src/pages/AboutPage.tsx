import { motion } from "framer-motion";
import { Award, Heart, Users, Shield } from "lucide-react";

const values = [
  { icon: Heart, title: "Empathy First", desc: "The 'Empathy' in our name reflects our commitment to understanding every client's unique needs and concerns." },
  { icon: Shield, title: "Clinical Excellence", desc: "Only USFDA-cleared, genuinely sourced equipment and products. No compromises on safety or quality." },
  { icon: Users, title: "Expert Team", desc: "Board-certified physicians and trained technicians with decades of combined aesthetic experience." },
  { icon: Award, title: "Proven Results", desc: "25,000+ happy clients and counting. 98% satisfaction rate with transformative, lasting outcomes." },
];

const AboutPage = () => (
  <div className="pt-28">
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <p className="eyebrow mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">The</h1>
          <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-[0.95] mb-8">Empathy Difference</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded over 15 years ago, Empathy Laser Clinic was born from a simple belief: aesthetic treatments should be delivered with genuine care, clinical precision, and unwavering transparency. We are Delhi NCR's most trusted name in advanced aesthetics.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-card border border-border rounded-lg text-center group hover:border-primary/50 transition-colors">
              <v.icon size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="eyebrow mb-4">Our Mission</p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Where Clinical Precision Meets <em className="text-primary">Luxury Experience</em></h2>
        <p className="text-muted-foreground leading-relaxed">
          We believe that everyone deserves access to world-class aesthetic treatments in an environment that feels safe, luxurious, and genuinely caring. Our mission is to deliver transformative results using only the most advanced, clinically proven technologies — while treating every client with the empathy and respect they deserve.
        </p>
      </div>
    </section>
  </div>
);

export default AboutPage;
