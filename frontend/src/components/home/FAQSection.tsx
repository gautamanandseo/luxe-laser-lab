import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Search, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";

const faqCategories = [
  { key: "all", label: "All" },
  { key: "laser", label: "Laser" },
  { key: "coolsculpting", label: "CoolSculpting®" },
  { key: "skin", label: "Skin" },
  { key: "hair", label: "Hair" },
  { key: "general", label: "General" },
];

const faqs = [
  { q: "Is laser hair removal safe for Indian skin types?", a: "Absolutely. At Empathy Laser Clinic in Pitampura, Delhi, we use the Lumenis LightSheer Desire™ and Alma Soprano ICE Platinum™ — both USFDA cleared and specifically calibrated for Indian skin tones (Fitzpatrick types III-VI). These are the world's most advanced laser systems, proven safe for darker skin types. We serve clients from across Delhi NCR including Rohini, Shalimar Bagh, Noida, and Gurugram.", cat: "laser" },
  { q: "How many laser sessions will I need?", a: "Most clients see significant results in 6-8 sessions spaced 4-6 weeks apart. The number varies based on the treatment area, hair density, and hormonal factors. We create a personalized plan during your free consultation at our Delhi clinic.", cat: "laser" },
  { q: "Does laser hair removal hurt?", a: "With our Alma Soprano ICE Platinum™ system, the treatment is virtually painless. It uses a gradual heating method with a cooled applicator tip that keeps the skin comfortable throughout. Our LightSheer Desire™ also features a built-in vacuum mechanism that reduces sensation. Most clients describe the feeling as a warm massage.", cat: "laser" },
  { q: "What is CoolSculpting® and is there any downtime?", a: "CoolSculpting® is an FDA-cleared non-surgical fat reduction treatment that uses cryolipolysis (controlled cooling) to freeze and permanently eliminate stubborn fat cells. Empathy Laser Clinic is Delhi NCR's premier CoolSculpting provider. There is zero downtime — you can return to normal activities immediately after treatment.", cat: "coolsculpting" },
  { q: "When will I see results from CoolSculpting®?", a: "You may start noticing changes as early as 3 weeks after treatment, with the most dramatic results visible after 2-3 months. Your body continues to flush out fat cells for up to 6 months after treatment. Book a free body assessment at our Pitampura clinic.", cat: "coolsculpting" },
  { q: "How much fat can CoolSculpting® remove?", a: "Each CoolSculpting® session can reduce fat in the treated area by up to 27%. For optimal results, we typically recommend 1-3 cycles per area depending on your goals. The fat cells are permanently eliminated and do not return, making results long-lasting with a healthy lifestyle.", cat: "coolsculpting" },
  { q: "What is the cost of laser hair removal in Delhi?", a: "The cost of laser hair removal in Delhi varies depending on the treatment area and number of sessions required. At Empathy Laser Clinic, we offer transparent, competitive pricing with flexible EMI options. Contact us for a personalized quote — we offer free consultations with no obligation.", cat: "laser" },
  { q: "Is Botox safe? Do you use genuine products?", a: "We exclusively use genuine Allergan Botox and premium FDA-approved dermal fillers (Juvederm, Restylane). All treatments are administered by certified aesthetic physicians at our Delhi clinic. We never use imitation products — your safety is our top priority.", cat: "skin" },
  { q: "What treatments help with acne scars?", a: "We use a multi-modality approach for acne scars: ResurFX™ fractional laser for deep collagen remodeling, microneedling with PRP for surface texture, chemical peels for mild scarring, and subcision for stubborn tethered scars. We combine treatments based on your scar type for the best possible results.", cat: "skin" },
  { q: "How does PRP therapy work for hair loss?", a: "PRP (Platelet-Rich Plasma) therapy uses your own blood's growth factors to stimulate dormant hair follicles. We draw a small amount of blood, process it to concentrate platelets, and inject it into the scalp. Most patients see visible improvement after 3-4 sessions. It's natural, safe, and effective for both men and women.", cat: "hair" },
  { q: "What is FUE hair transplant and how long does it take?", a: "FUE (Follicular Unit Extraction) is an advanced hair transplant technique where individual hair follicles are extracted from the donor area and implanted in thinning areas. The procedure takes 4-8 hours depending on the number of grafts. There is no linear scar, recovery is quick, and results look completely natural.", cat: "hair" },
  { q: "Where is Empathy Laser Clinic located in Delhi?", a: "Empathy Laser Clinic is located in Pitampura, Delhi — conveniently accessible from Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, and the entire Delhi NCR region. We're near Pitampura Metro Station. Call 9811157787 for directions.", cat: "general" },
  { q: "How early should I start bridal treatments?", a: "We recommend starting your bridal journey 6 months before your wedding date. This allows adequate time for laser hair removal sessions, skin treatments, and comprehensive prep. Our bridal packages in Delhi are customized for your timeline and goals.", cat: "general" },
  { q: "Do you offer packages and EMI options?", a: "Yes! We offer comprehensive packages for all services with significant savings over individual sessions. We also provide flexible EMI options to make premium aesthetic treatments accessible to clients across Delhi NCR. Contact us for customized package details.", cat: "general" },
  { q: "What areas in Delhi NCR do you serve?", a: "We serve clients from all over Delhi NCR including Pitampura, Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, Punjabi Bagh, Dwarka, Janakpuri, GTB Nagar, Noida, Greater Noida, Gurugram, Ghaziabad, and Faridabad. We're conveniently located near Pitampura Metro Station.", cat: "general" },
  { q: "Is the first consultation really free?", a: "Yes, your first consultation is 100% free with no obligation whatsoever. Our specialist will examine your concern, explain suitable treatment options, provide transparent pricing, and answer all your questions. You can take your time to decide — there is absolutely zero pressure.", cat: "general" },
  { q: "What is HIFU and how does it compare to a surgical facelift?", a: "HIFU (High-Intensity Focused Ultrasound) targets the same SMAS layer that a surgical facelift addresses, but without any incisions, anesthesia, or downtime. It stimulates natural collagen production for gradual lifting and tightening over 2-3 months. Results last 12-18 months. It's ideal for jawline contouring, brow lifting, and neck tightening.", cat: "skin" },
  { q: "Can dark circles be permanently treated?", a: "While 'permanent' depends on the underlying cause, our dark circle treatments provide long-lasting improvement. We address pigmentation with chemical peels and laser toning, hollowness with hyaluronic acid fillers, and puffiness with targeted protocols. Many clients see dramatic improvement that lasts 12-18 months with periodic maintenance.", cat: "skin" },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCat = activeCat === "all" || faq.cat === activeCat;
    const matchesSearch = searchTerm === "" || faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
    <section id="faq" className="py-28 bg-velvet relative overflow-hidden vignette">
      <div className="absolute inset-0 grid-bg opacity-8" />
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-10">
          <p className="eyebrow mb-4">Common Questions</p>
          <h2 className="section-heading">
            Frequently <em className="holographic-text" style={{ fontStyle: "italic" }}>Asked</em>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            Everything you need to know about our treatments, pricing, and processes. Can't find your answer? WhatsApp us anytime.
          </p>
        </ScrollReveal>

        {/* Search + Category Filters */}
        <ScrollReveal direction="up" delay={0.05} className="max-w-3xl mx-auto mb-8">
          <div className="relative mb-4">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={e => { setSearchTerm(e.target.value); setOpen(null); }}
              className="w-full bg-card/30 backdrop-blur-sm border border-primary/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => { setActiveCat(cat.key); setOpen(null); }}
                className={`px-3.5 py-1.5 text-[10px] font-sans uppercase tracking-[0.12em] rounded-full border transition-all duration-300 ${
                  activeCat === cat.key
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(38,45%,60%,0.2)]"
                    : "border-primary/10 text-muted-foreground hover:border-primary/30 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle size={32} className="text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground">No questions match your search. Try a different keyword or <a href="https://wa.me/919811157787" className="text-primary hover:underline">WhatsApp us</a> directly.</p>
            </div>
          )}
          {filteredFaqs.map((faq, i) => (
            <ScrollReveal key={faq.q} direction="up" delay={i * 0.02}>
              <div className={`border rounded-xl overflow-hidden transition-all duration-500 ${open === i ? "border-primary/30 obsidian-panel" : "border-border/30 bg-card/10 hover:border-primary/15 hover:bg-card/20"}`}>
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
          <div className="obsidian-panel rounded-2xl p-8 max-w-lg mx-auto border-liquid-gold">
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
