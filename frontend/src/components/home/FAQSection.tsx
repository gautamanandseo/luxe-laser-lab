import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is laser hair removal safe for Indian skin types?",
    a: "Absolutely. At Empathy Laser Clinic in Pitampura, Delhi, we use the Lumenis LightSheer Desire™ and Alma Soprano ICE Platinum™ — both USFDA cleared and specifically calibrated for Indian skin tones (Fitzpatrick types III-VI). These are the world's most advanced laser systems, proven safe for darker skin types. We serve clients from across Delhi NCR including Rohini, Shalimar Bagh, Noida, and Gurugram."
  },
  {
    q: "How many laser sessions will I need?",
    a: "Most clients see significant results in 6-8 sessions spaced 4-6 weeks apart. The number varies based on the treatment area, hair density, and hormonal factors. We create a personalized plan during your free consultation at our Delhi clinic."
  },
  {
    q: "What is CoolSculpting® and is there any downtime?",
    a: "CoolSculpting® is an FDA-cleared non-surgical fat reduction treatment that uses cryolipolysis (controlled cooling) to freeze and permanently eliminate stubborn fat cells. Empathy Laser Clinic is Delhi NCR's premier CoolSculpting provider. There is zero downtime — you can return to normal activities immediately after treatment."
  },
  {
    q: "When will I see results from CoolSculpting®?",
    a: "You may start noticing changes as early as 3 weeks after treatment, with the most dramatic results visible after 2-3 months. Your body continues to flush out fat cells for up to 6 months after treatment. Book a free body assessment at our Pitampura clinic."
  },
  {
    q: "What is the cost of laser hair removal in Delhi?",
    a: "The cost of laser hair removal in Delhi varies depending on the treatment area and number of sessions required. At Empathy Laser Clinic, we offer transparent, competitive pricing with flexible EMI options. Contact us for a personalized quote — we offer free consultations with no obligation."
  },
  {
    q: "Is Botox safe? Do you use genuine products?",
    a: "We exclusively use genuine Allergan Botox and premium FDA-approved dermal fillers (Juvederm, Restylane). All treatments are administered by certified aesthetic physicians at our Delhi clinic. We never use imitation products — your safety is our top priority."
  },
  {
    q: "Where is Empathy Laser Clinic located in Delhi?",
    a: "Empathy Laser Clinic is located in Pitampura, Delhi — conveniently accessible from Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, and the entire Delhi NCR region. We're near Pitampura Metro Station. Call 9811157787 for directions."
  },
  {
    q: "How early should I start bridal treatments?",
    a: "We recommend starting your bridal journey 6 months before your wedding date. This allows adequate time for laser hair removal sessions, skin treatments, and comprehensive prep. Our bridal packages in Delhi are customized for your timeline and goals."
  },
  {
    q: "Do you offer packages and EMI options?",
    a: "Yes! We offer comprehensive packages for all services with significant savings over individual sessions. We also provide flexible EMI options to make premium aesthetic treatments accessible to clients across Delhi NCR. Contact us for customized package details."
  },
  {
    q: "What areas in Delhi NCR do you serve?",
    a: "We serve clients from all over Delhi NCR including Pitampura, Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, Punjabi Bagh, Dwarka, Janakpuri, GTB Nagar, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad. We're conveniently located near Pitampura Metro Station."
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Common Questions</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Frequently <em className="text-primary">Asked</em>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-serif text-lg text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
