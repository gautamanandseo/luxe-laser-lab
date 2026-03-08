import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar, ArrowRight, Sparkles, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import GlowDivider from "@/components/effects/GlowDivider";
import ParticleField from "@/components/effects/ParticleField";

const contactMethods = [
  { icon: Phone, title: "Call Us", value: "9811157787", subValue: "9811157784", href: "tel:+919811157787", color: "bg-green-500/10 text-green-500" },
  { icon: MessageCircle, title: "WhatsApp", value: "Quick Response", subValue: "Chat with us", href: "https://wa.me/919811157787", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Mail, title: "Email Us", value: "info@empathylaserclinic.com", subValue: "We reply within 24hrs", href: "mailto:info@empathylaserclinic.com", color: "bg-blue-500/10 text-blue-500" },
  { icon: MapPin, title: "Visit Us", value: "Pitampura, Delhi", subValue: "Get directions", href: "https://share.google/SClHKya8GwuCKc0hp", color: "bg-red-500/10 text-red-500" },
];

const services = [
  "Laser Hair Removal", "CoolSculpting®", "Weight Loss & Body Contouring", "Skin Treatments",
  "ResurFX™ Skin Resurfacing", "Botox & Fillers", "Microdermabrasion", "Bridal Packages",
  "Spa Services", "Salon Services", "Other / General Inquiry",
];

const faqs = [
  { q: "How do I book an appointment?", a: "You can book through our contact form, call us directly, or message us on WhatsApp. We'll confirm your appointment within 2 hours." },
  { q: "Is the consultation free?", a: "Yes! Your first consultation is completely free. We'll assess your needs and create a personalized treatment plan with no obligation." },
  { q: "What are your clinic hours?", a: "Monday to Saturday: 10:00 AM - 7:00 PM. Sundays are by appointment only for special requests." },
  { q: "Where are you located?", a: "We're conveniently located in Delhi NCR. Click on 'Get Directions' above for the exact location and navigation." },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "", preferredTime: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const update = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }));

  const inputClass = "w-full bg-muted/30 backdrop-blur-sm border border-primary/10 rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(38,45%,60%,0.1)] transition-all";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden scanlines">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=1920&q=80" alt="Contact Empathy Laser Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <AuroraMesh intensity="subtle" className="z-[2]" />
        <ParticleField count={12} className="z-[3] opacity-20" />

        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Get In Touch</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
              Let's <em className="holographic-text" style={{ fontStyle: "italic" }}>Connect</em>
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Visit Empathy Laser Clinic in Pitampura, Delhi for a free consultation. We serve clients from across Delhi NCR — Rohini, Shalimar Bagh, Model Town, Noida, and Gurugram.
            </p>
          </motion.div>
        </div>
      </section>

      <GlowDivider variant="gold" />

      {/* Contact Methods */}
      <section className="py-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/40 transition-all depth-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color}`}>
                  <method.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{method.title}</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">{method.value}</p>
                  <p className="text-xs text-muted-foreground">{method.subValue}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider variant="multi" />

      {/* Main Content */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="eyebrow mb-4">Visit Our Clinic</p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Experience the <em className="holographic-text" style={{ fontStyle: "italic" }}>Empathy</em> Difference
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Step into our state-of-the-art facility in Pitampura, Delhi where luxury meets clinical excellence. Conveniently located near Pitampura Metro Station, we serve clients from Rohini, Shalimar Bagh, Model Town, Ashok Vihar, Paschim Vihar, Noida, Gurugram, and the entire Delhi NCR region. Our friendly team is ready to guide you through your transformation journey.
                </p>
              </motion.div>

              {/* Clinic Hours */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 mb-8 depth-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-primary drop-shadow-[0_0_6px_hsl(38,45%,60%,0.4)]" />
                  <h3 className="font-serif text-xl text-foreground">Clinic Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-primary/10">
                    <span className="text-foreground">Monday</span>
                    <span className="text-red-400 font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-primary/10">
                    <span className="text-foreground">Tuesday - Sunday</span>
                    <span className="text-primary font-medium">10:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative aspect-video rounded-xl overflow-hidden border border-primary/10 depth-shadow"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8!2d77.1315!3d28.6969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e742f5a9a1%3A0x6e3b1d3a1c8e9f0a!2sEmpathy+Laser+Clinic%2C+Pitampura%2C+Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Empathy Laser Clinic Location - Delhi NCR" className="absolute inset-0"
                />
              </motion.div>

              {/* Social Links */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4 mt-8">
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                  <motion.a key={i} href={i === 2 ? "https://wa.me/919811157787" : "#"} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(38 45% 60% / 0.3)" }}
                    className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-xl border border-primary/10 rounded-2xl p-8 lg:p-10 depth-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="shimmer-sweep absolute inset-0 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar size={20} className="text-primary drop-shadow-[0_0_6px_hsl(38,45%,60%,0.4)]" />
                  <h3 className="font-serif text-2xl text-foreground">Book Your Free Consultation</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Fill out the form and we'll get back to you within 2 hours.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(38,45%,60%,0.3)]"
                      >
                        <CheckCircle size={40} className="text-primary" />
                      </motion.div>
                      <h4 className="font-serif text-2xl text-foreground mb-2">Thank You!</h4>
                      <p className="text-muted-foreground mb-6">Your message has been sent successfully. We'll contact you within 2 hours.</p>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "", preferredTime: "" }); }} className="text-primary text-sm underline hover:no-underline">
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Full Name *</label>
                          <input type="text" placeholder="Your name" required value={form.name} onChange={e => update("name", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Phone / WhatsApp *</label>
                          <input type="tel" placeholder="Your phone number" required value={form.phone} onChange={e => update("phone", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email Address</label>
                        <input type="email" placeholder="your@email.com" value={form.email} onChange={e => update("email", e.target.value)} className={inputClass} />
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Service Interest</label>
                          <select value={form.service} onChange={e => update("service", e.target.value)} className={`${inputClass} appearance-none`}>
                            <option value="">Select a service</option>
                            {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Preferred Time</label>
                          <select value={form.preferredTime} onChange={e => update("preferredTime", e.target.value)} className={`${inputClass} appearance-none`}>
                            <option value="">Select time</option>
                            <option>Morning (10AM - 12PM)</option>
                            <option>Afternoon (12PM - 3PM)</option>
                            <option>Evening (3PM - 7PM)</option>
                            <option>Flexible</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Your Message</label>
                        <textarea placeholder="Tell us about your goals..." rows={4} value={form.message} onChange={e => update("message", e.target.value)} className={`${inputClass} resize-none`} />
                      </div>
                      <motion.button type="submit" whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(38 45% 60% / 0.4)" }} whileTap={{ scale: 0.98 }}
                        className="w-full gold-shimmer text-primary-foreground py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)]"
                      >
                        Book Free Consultation <Send size={16} />
                      </motion.button>
                      <p className="text-xs text-center text-muted-foreground">By submitting, you agree to our privacy policy. We'll never share your information.</p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <GlowDivider variant="subtle" />

      {/* FAQ Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Quick Answers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Common <em className="holographic-text" style={{ fontStyle: "italic" }}>Questions</em>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-primary/10 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm depth-shadow"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.q}</span>
                  <ArrowRight size={18} className={`text-primary flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider variant="gold" />

      {/* CTA Banner */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <AuroraMesh intensity="subtle" className="mix-blend-overlay" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl text-primary-foreground mb-2">Prefer to call directly?</h3>
              <p className="text-primary-foreground/70">Our team is available Mon-Sat, 10AM-7PM</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="tel:+919811157787"
                className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(0,0%,0%,0.3)]"
              >
                <Phone size={16} /> Call 9811157787
              </motion.a>
              <a href="https://wa.me/919811157787" target="_blank" rel="noopener noreferrer"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
