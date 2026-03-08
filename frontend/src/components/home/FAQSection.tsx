import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";

const faqs = [
  { q: "Is laser hair removal safe for Indian skin types?", a: "Absolutely. At Empathy Laser Clinic in Pitampura, Delhi, we use the Lumenis LightSheer Desire™ and Alma Soprano ICE Platinum™ — both USFDA cleared and specifically calibrated for Indian skin tones (Fitzpatrick types III-VI). These are the world's most advanced laser systems, proven safe for darker skin types. We serve clients from across Delhi NCR including Rohini, Shalimar Bagh, Noida, and Gurugram." },
  { q: "How many laser sessions will I need?", a: "Most clients see significant results in 6-8 sessions spaced 4-6 weeks apart. The number varies based on the treatment area, hair density, and hormonal factors. We create a personalized plan during your free consultation at our Delhi clinic." },
  { q: "What is CoolSculpting® and is there any downtime?", a: "CoolSculpting® is an FDA-cleared non-surgical fat reduction treatment that uses cryolipolysis (controlled cooling) to freeze and permanently eliminate stubborn fat cells. Empathy Laser Clinic is Delhi NCR's premier CoolSculpting provider. There is zero downtime — you can return to normal activities immediately after treatment." },
  { q: "When will I see results from CoolSculpting®?", a: "You may start noticing changes as early as 3 weeks after treatment, with the most dramatic results visible after 2-3 months. Your body continues to flush out fat cells for up to 6 months after treatment. Book a free body assessment at our Pitampura clinic." },
  { q: "What is the cost of laser hair removal in Delhi?", a: "The cost of laser hair removal in Delhi varies depending on the treatment area and number of sessions required. At Empathy Laser Clinic, we offer transparent, competitive pricing with flexible EMI options. Contact us for a personalized quote — we offer free consultations with no obligation." },
  { q: "Is Botox safe? Do you use genuine products?", a: "We exclusively use genuine Allergan Botox and premium FDA-approved dermal fillers (Juvederm, Restylane). All treatments are administered by certified aesthetic physicians at our Delhi clinic. We never use imitation products — your safety is our top priority." },
  { q: "Where is Empathy Laser Clinic located in Delhi?", a: "Empathy Laser Clinic is located in Pitampura, Delhi — conveniently accessible from Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, and the entire Delhi NCR region. We're near Pitampura Metro Station. Call 9811157787 for directions." },
  { q: "How early should I start bridal treatments?", a: "We recommend starting your bridal journey 6 months before your wedding date. This allows adequate time for laser hair removal sessions, skin treatments, and comprehensive prep. Our bridal packages in Delhi are customized for your timeline and goals." },
  { q: "Do you offer packages and EMI options?", a: "Yes! We offer comprehensive packages for all services with significant savings over individual sessions. We also provide flexible EMI options to make premium aesthetic treatments accessible to clients across Delhi NCR. Contact us for customized package details." },
  { q: "What areas in Delhi NCR do you serve?", a: "We serve clients from all over Delhi NCR including Pitampura, Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, Punjabi Bagh, Dwarka, Janakpuri, GTB Nagar, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad. We're conveniently located near Pitampura Metro Station." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema")?.remove(); };
  }, []);

  return (
    <section id="faq" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">Common Questions</p>
          <h2 className="section-heading">
            Frequently <em className="holographic-text" style={{ fontStyle: "italic" }}>Asked</em>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.03}>
              <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open === i ? "border-primary/30 bg-card/50 backdrop-blur-sm depth-shadow" : "border-border bg-card/20 hover:border-primary/15"}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left group"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`font-serif text-lg transition-colors ${open === i ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "bg-primary/10" : "bg-muted/50"}`}
                  >
                    <ChevronDown size={16} className={`transition-colors ${open === i ? "text-primary" : "text-muted-foreground"}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.2} className="text-center mt-14">
          <div className="bg-card/40 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 max-w-lg mx-auto">
            <MessageCircle size={28} className="text-primary mx-auto mb-3" />
            <h4 className="font-serif text-xl text-foreground mb-2">Still have questions?</h4>
            <p className="text-sm text-muted-foreground mb-5">Our specialists are happy to answer any questions about treatments, costs, or your specific concerns.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919811157787?text=Hi%2C%20I%20have%20a%20question%20about%20your%20treatments"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500/30 text-foreground px-5 py-2.5 text-xs font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center justify-center gap-2 hover:border-green-500/50 hover:text-green-400 transition-colors"
              >
                WhatsApp Us
              </a>
              <Link
                to="/contact"
                className="gold-shimmer text-primary-foreground px-5 py-2.5 text-xs font-sans uppercase tracking-[0.1em] rounded-full inline-flex items-center justify-center gap-2 shadow-[0_4px_15px_hsl(38,45%,60%,0.2)]"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
