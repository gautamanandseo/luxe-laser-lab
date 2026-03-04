import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Free Consultation", desc: "Meet our specialists to discuss your goals and create a personalized treatment plan." },
  { num: "02", title: "Skin Analysis", desc: "Advanced clinical analysis to determine the perfect treatment protocol for your unique needs." },
  { num: "03", title: "Treatment", desc: "Experience precision-driven treatments in our state-of-the-art clinic with complete comfort." },
  { num: "04", title: "Results & Aftercare", desc: "See transformative results with dedicated aftercare guidance for lasting outcomes." },
];

const whyChoose = [
  { num: "01", title: "Certified Specialists", desc: "Board-certified physicians and trained technicians with years of aesthetic experience." },
  { num: "02", title: "Genuine Technology", desc: "Only USFDA-cleared, CE-marked equipment. No imitations, no compromises." },
  { num: "03", title: "All Skin Types", desc: "Treatments calibrated for Indian skin tones across all Fitzpatrick phototypes." },
  { num: "04", title: "Zero Downtime", desc: "Return to your daily routine immediately after most treatments." },
  { num: "05", title: "Compassionate Care", desc: "The 'Empathy' in our name reflects our commitment to your comfort and confidence." },
  { num: "06", title: "Transparent Pricing", desc: "No hidden charges. Clear pricing with flexible payment plans available." },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Our Process */}
      <section ref={sectionRef} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground">
              Our <em className="text-primary">Process</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary flex items-center justify-center bg-background relative z-10 group hover:bg-primary transition-colors">
                  <span className="font-serif text-xl text-primary group-hover:text-primary-foreground transition-colors">{step.num}</span>
                </div>
                <h4 className="font-serif text-xl text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Empathy */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">The Empathy Difference</p>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground">
              Why Choose <em className="text-primary">Empathy</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg group hover:border-primary/50 transition-all relative overflow-hidden"
              >
                {/* Top border sweep on hover */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
                <span className="font-serif text-3xl text-primary/20 group-hover:text-primary/40 transition-colors">{item.num}</span>
                <h4 className="font-serif text-xl text-foreground mt-2 mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
