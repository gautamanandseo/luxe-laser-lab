import { motion } from "framer-motion";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const serviceData: Record<string, { title: string; accent: string; subtitle: string; desc: string; features: string[]; price: string }> = {
  laser: {
    title: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "USFDA CLEARED · SAFE FOR ALL SKIN TYPES",
    desc: "Experience Delhi NCR's most trusted laser hair removal. Our advanced Diode Laser technology is specifically calibrated for Indian skin tones, delivering permanent hair reduction with zero downtime.",
    features: ["Advanced 808nm Diode Laser", "Safe for Fitzpatrick I-VI", "Full Face & Body treatments", "6-8 sessions for permanent results", "Zero downtime", "Free consultation & patch test"],
    price: "Starting from ₹1,999 per session",
  },
  coolsculpting: {
    title: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "FDA-CLEARED NON-SURGICAL BODY CONTOURING",
    desc: "The world's #1 non-invasive fat reduction treatment. CoolSculpting® uses patented cryolipolysis technology to freeze and permanently eliminate stubborn fat cells — no surgery, no needles, no downtime.",
    features: ["27% fat reduction per session", "9 treatable body areas", "DualSculpting capability", "FDA-cleared technology", "No surgery or needles", "Permanent fat cell elimination"],
    price: "Starting from ₹15,000 per area",
  },
  skin: {
    title: "Advanced Skin",
    accent: "Treatments",
    subtitle: "CLINICAL SKINCARE EXCELLENCE",
    desc: "From HydraFacials to chemical peels, LED therapy to skin boosters — our clinical-grade skin treatments address every concern with precision and care.",
    features: ["HydraFacial", "Chemical Peels", "LED Light Therapy", "Skin Boosters & Mesotherapy", "Vampire Facial (PRP)", "Pigmentation correction"],
    price: "Starting from ₹2,499",
  },
  botox: {
    title: "Natural-Looking",
    accent: "Botox & Fillers",
    subtitle: "ALLERGAN CERTIFIED · GENUINE PRODUCTS ONLY",
    desc: "Subtle, natural-looking results administered by certified aesthetic physicians. We exclusively use genuine Allergan Botox and premium dermal fillers.",
    features: ["Genuine Allergan Botox", "Juvederm & Restylane fillers", "Forehead & Crow's Feet", "Lip & Cheek enhancement", "Jawline contouring", "Certified physicians only"],
    price: "Starting from ₹8,000",
  },
  microdermabrasion: {
    title: "Reveal Radiant",
    accent: "Skin",
    subtitle: "ADVANCED SKIN RENEWAL TECHNOLOGY",
    desc: "Gently exfoliate and rejuvenate your skin with our advanced microdermabrasion treatments. Reduce fine lines, sun damage, and uneven texture for a radiant, youthful glow.",
    features: ["Diamond-tip technology", "Fine line reduction", "Sun damage repair", "Acne scar improvement", "Improved skin texture", "Course packages available"],
    price: "Starting from ₹1,999",
  },
  bridal: {
    title: "Your Most",
    accent: "Beautiful Day",
    subtitle: "COMPLETE LUXURY BRIDAL PACKAGES",
    desc: "Comprehensive pre-bridal treatments combining laser, skincare, spa, and salon services into a complete wedding transformation journey starting 6 months before your special day.",
    features: ["6-month prep programs", "Complete skin transformation", "Laser hair removal", "HD & Airbrush makeup", "Spa & wellness packages", "Bridesmaids packages"],
    price: "Starting from ₹25,000",
  },
  spa: {
    title: "Indulge in",
    accent: "Complete Wellness",
    subtitle: "THERAPEUTIC SPA TREATMENTS",
    desc: "Experience complete relaxation with our therapeutic spa treatments. From Swedish massage to detox wraps, rejuvenate your body and mind in our serene spa sanctuary.",
    features: ["Swedish & Deep Tissue Massage", "Aromatherapy", "Hot Stone Therapy", "Body Wraps & Scrubs", "Couple Spa packages", "Detox treatments"],
    price: "Starting from ₹1,499",
  },
  salon: {
    title: "Expert Beauty",
    accent: "Services",
    subtitle: "PREMIUM SALON EXPERIENCE",
    desc: "Expert hair, nail, makeup, and grooming services delivered with the same clinical precision and luxury experience that defines Empathy Laser Clinic.",
    features: ["Hair Styling & Colour", "Keratin Treatments", "Manicure & Pedicure", "Professional Makeup", "Waxing & Threading", "Nail Art & Gel Nails"],
    price: "Starting from ₹499",
  },
};

const ServicePage = ({ service }: { service: string }) => {
  const data = serviceData[service];
  if (!data) return null;

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="eyebrow mb-4">{data.subtitle}</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">{data.title}</h1>
            <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-[0.95] mb-8">{data.accent}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">{data.desc}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:+919811157787" className="border border-border text-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary hover:text-primary transition-colors">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">What's <em className="text-primary">Included</em></h2>
              <ul className="space-y-4">
                {data.features.map((f, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 text-foreground/80">
                    <Check size={16} className="text-primary flex-shrink-0" /> {f}
                  </motion.li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-2xl text-primary">{data.price}</p>
            </div>
            <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Treatment imagery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-primary-foreground/70 mb-8">Book your free consultation today. Call 9811157787.</p>
          <Link to="/contact" className="bg-primary-foreground text-primary px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
            Book Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
