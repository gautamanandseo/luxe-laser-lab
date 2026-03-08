import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Shield, Star, Phone, Clock } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ParticleField from "@/components/effects/ParticleField";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const inputClass = "w-full bg-muted/50 border border-primary/10 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:shadow-[0_0_15px_hsl(38,45%,60%,0.1)] transition-all duration-300";

  return (
    <section id="booking" className="py-28 bg-cosmic relative overflow-hidden light-rays">
      <ParticleField count={20} className="opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Urgency banner */}
        <ScrollReveal direction="up" className="text-center mb-12">
          <motion.div
            animate={{ boxShadow: ["0 0 20px hsl(38,45%,60%,0.1)", "0 0 40px hsl(38,45%,60%,0.2)", "0 0 20px hsl(38,45%,60%,0.1)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-2.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-sans uppercase tracking-[0.15em] text-primary font-semibold">
              Limited Slots — Free Consultation + 20% Off First Session
            </span>
          </motion.div>
          <p className="eyebrow mb-4">Get Started</p>
          <h2 className="section-heading">
            Book Your Free <em className="holographic-text" style={{ fontStyle: "italic" }}>Consultation</em>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Trust info */}
          <ScrollReveal direction="right">
            <div>
              <p className="body-text mb-8">
                Take the first step toward your transformation. Our specialists will assess your needs and create a personalized treatment plan — completely free of charge.
              </p>
              <div className="space-y-4 mb-8">
                {["Free skin & body analysis", "Personalized treatment plan", "No-obligation consultation", "Transparent pricing — no hidden fees"].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle size={12} className="text-primary" />
                    </div>
                    {p}
                  </motion.div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["USFDA Cleared", "4.9★ Google", "15+ Years", "25K+ Clients"].map((badge, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-card/50 border border-primary/10 rounded-full px-3 py-1.5 text-[10px] font-sans uppercase tracking-[0.1em] text-muted-foreground">
                    <Shield size={10} className="text-primary" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-4 bg-secondary/50 rounded-xl border border-primary/10">
                  <Phone size={16} className="text-primary mb-2" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Call Us</p>
                  <a href="tel:+919811157787" className="font-serif text-lg text-foreground hover:text-primary transition-colors block">9811157787</a>
                  <a href="tel:+919811157784" className="font-serif text-lg text-foreground hover:text-primary transition-colors block">9811157784</a>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl border border-primary/10">
                  <Clock size={16} className="text-primary mb-2" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Clinic Hours</p>
                  <p className="text-sm text-foreground">Mon–Sat: 10 AM – 8 PM</p>
                  <p className="text-sm text-foreground">Sunday: By Appointment</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-primary/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6!2d77.1349249!3d28.7013527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d017f3a0a9a4d%3A0x206ceda8ce510bc4!2sEmpathy%20Skin%20%26%20Laser%20Hair%20Removal%20Clinic%20Delhi%20-%20Coolsculpting%20-%20Skin%20Treatments!5e0!3m2!1sen!2sin!4v1709900000000"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Empathy Laser Clinic Location - Pitampura, Delhi"
                />
                <div className="p-3 bg-secondary/50 flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={12} className="text-primary" />
                  HD-6, First Floor, Main Road, Opp Metro Pillar 362, Pitampura, Delhi
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="left">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 border-futuristic sticky top-24">
              {/* Social proof mini-bar */}
              <div className="flex items-center justify-center gap-3 mb-6 pb-6 border-b border-border">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center text-[10px] text-primary font-semibold">
                      {["P", "A", "S", "R"][i - 1]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[10px] text-muted-foreground">Trusted by 25,000+ clients</p>
                </div>
              </div>

              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-4">We'll contact you within 24 hours to confirm your consultation.</p>
                  <p className="text-xs text-primary">🎉 Your 20% welcome discount has been reserved</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name *" required value={form.firstName} onChange={e => update("firstName", e.target.value)} className={inputClass} />
                    <input type="text" placeholder="Last Name *" required value={form.lastName} onChange={e => update("lastName", e.target.value)} className={inputClass} />
                  </div>
                  <input type="tel" placeholder="Phone / WhatsApp *" required value={form.phone} onChange={e => update("phone", e.target.value)} className={inputClass} />
                  <input type="email" placeholder="Email (optional)" value={form.email} onChange={e => update("email", e.target.value)} className={inputClass} />
                  <select value={form.service} onChange={e => update("service", e.target.value)} className={inputClass}>
                    <option value="">Select Service Interest</option>
                    <option>Laser Hair Removal</option>
                    <option>CoolSculpting®</option>
                    <option>Weight Loss</option>
                    <option>Skin Treatments</option>
                    <option>Acne & Scar Treatment</option>
                    <option>Skin Lightening</option>
                    <option>Anti-Ageing</option>
                    <option>HIFU Face Lift</option>
                    <option>Dark Circles</option>
                    <option>Skin Tightening</option>
                    <option>Stretch Marks</option>
                    <option>Tattoo Removal</option>
                    <option>Mole & Wart Removal</option>
                    <option>ResurFX™ Skin Resurfacing</option>
                    <option>Botox & Fillers</option>
                    <option>Microdermabrasion</option>
                    <option>Bridal Package</option>
                    <option>Facials & HydraFacial</option>
                    <option>Salon Services</option>
                    <option>Hair Loss & PRP</option>
                    <option>Hair Transplant</option>
                    <option>Body Contouring</option>
                  </select>
                  <input type="date" value={form.date} onChange={e => update("date", e.target.value)} className={inputClass} />
                  <textarea placeholder="Your Message (optional)" rows={3} value={form.message} onChange={e => update("message", e.target.value)} className={`${inputClass} resize-none`} />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px hsl(38, 45%, 60%, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gold-shimmer text-primary-foreground py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2"
                  >
                    Book Free Consultation <Send size={16} />
                  </motion.button>
                  <p className="text-center text-[10px] text-muted-foreground">
                    🔒 Your information is 100% secure · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
