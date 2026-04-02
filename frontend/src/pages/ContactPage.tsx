import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar, ArrowRight, Sparkles, Instagram, Facebook, Shield, Star, Users, Award, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/use-page-meta";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import GlowDivider from "@/components/effects/GlowDivider";
import ParticleField from "@/components/effects/ParticleField";

const contactMethods = [
  { icon: Phone, title: "Call Us", value: "9811157787", subValue: "Also: 9811157784", href: "tel:+919811157787", color: "bg-green-500/10 text-green-500", hoverGlow: "group-hover:shadow-[0_0_20px_hsl(120,60%,40%,0.15)]" },
  { icon: MessageCircle, title: "WhatsApp", value: "Instant Response", subValue: "Chat with our team now", href: "https://wa.me/919811157787", color: "bg-emerald-500/10 text-emerald-500", hoverGlow: "group-hover:shadow-[0_0_20px_hsl(150,60%,40%,0.15)]" },
  { icon: Mail, title: "Email Us", value: "info@empathylaserclinic.com", subValue: "We reply within 24hrs", href: "mailto:info@empathylaserclinic.com", color: "bg-blue-500/10 text-blue-500", hoverGlow: "group-hover:shadow-[0_0_20px_hsl(220,60%,50%,0.15)]" },
  { icon: MapPin, title: "Visit Us", value: "Pitampura, Delhi NCR", subValue: "Near Pitampura Metro", href: "https://share.google/SClHKya8GwuCKc0hp", color: "bg-red-500/10 text-red-500", hoverGlow: "group-hover:shadow-[0_0_20px_hsl(0,60%,50%,0.15)]" },
];

const services = [
  "Laser Hair Removal", "CoolSculpting® Body Contouring", "Weight Loss & Fat Reduction", "Skin Treatments & Facials",
  "ResurFX™ Skin Resurfacing", "Botox & Dermal Fillers", "Microdermabrasion", "Bridal Packages",
  "HIFU Face Lift", "Hair Loss & PRP Therapy", "Hair Transplant (FUE)", "Acne & Scar Treatment",
  "Skin Lightening / Brightening", "Anti-Ageing Treatments", "Dark Circle Treatment", "Tattoo Removal",
  "Salon Services", "Other / General Inquiry",
];

const faqs = [
  { q: "How do I book an appointment?", a: "You can book through our contact form above, call us directly at 9811157787, or message us on WhatsApp. Our team confirms appointments within 2 hours during clinic hours (Tue-Sun, 10AM-7PM)." },
  { q: "Is the first consultation really free?", a: "Absolutely! Your first consultation is 100% free with no obligation. Our doctor will assess your concerns, recommend suitable treatments, and provide a clear cost estimate — with zero pressure to proceed." },
  { q: "What are your clinic hours?", a: "We are open Tuesday through Sunday, 10:00 AM to 7:00 PM. Monday is our rest day. For special appointments outside these hours, please call us to discuss availability." },
  { q: "Where exactly are you located?", a: "We're in Pitampura, North Delhi — conveniently located near Pitampura Metro Station. We serve clients from all across Delhi NCR including Rohini, Shalimar Bagh, Model Town, Paschim Vihar, Dwarka, Noida, Gurugram, and beyond." },
  { q: "Do you offer EMI or payment plans?", a: "Yes! We understand that aesthetic treatments are an investment. We offer flexible payment options including EMI plans to make our services accessible. Ask our team for details during your consultation." },
  { q: "How long do treatments typically take?", a: "It varies by treatment. Laser hair removal sessions take 15-60 minutes depending on the area. CoolSculpting takes 35-60 minutes per area. Facials take about 45-60 minutes. We'll give you exact timings during your consultation." },
  { q: "Is parking available?", a: "Yes, we have convenient parking available near our clinic. Our team can guide you with specific directions when you book your appointment." },
  { q: "Can I bring someone with me?", a: "Of course! You're welcome to bring a friend or family member to your consultation or treatment. We want you to feel as comfortable as possible." },
];

const trustPoints = [
  { icon: Shield, label: "USFDA Cleared Equipment" },
  { icon: Award, label: "Allergan Certified Clinic" },
  { icon: Star, label: "4.9★ on Google Reviews" },
  { icon: Users, label: "25,000+ Satisfied Clients" },
  { icon: Heart, label: "Free First Consultation" },
  { icon: Zap, label: "Latest Technology" },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "", preferredTime: "", preferredDate: "" });

  usePageMeta({
    title: "Contact Empathy Laser Clinic Delhi | Book Free Consultation",
    description: "Book a free consultation at Empathy Laser Clinic, Pitampura, Delhi. Call 9811157787. Laser hair removal, CoolSculpting, skin treatments & more. Walk-ins welcome.",
    canonical: "https://empathylaserclinic.com/contact",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const update = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }));

  const inputClass = "w-full bg-muted/30 backdrop-blur-sm border border-primary/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:shadow-[0_0_20px_hsl(38,45%,60%,0.08)] transition-all duration-300";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden scanlines">
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
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Free Consultation</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
              Let's <em className="holographic-text" style={{ fontStyle: "italic" }}>Connect</em>
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed mb-4">
              Book a complimentary consultation worth ₹500 with our expert team. No obligation, no pressure — just honest advice and a personalized treatment plan.
            </p>
            <p className="text-foreground/50 max-w-lg mx-auto text-sm">
              Serving all of Delhi NCR — Pitampura, Rohini, Shalimar Bagh, Model Town, Noida, Gurugram & beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <GlowDivider variant="gold" />

      {/* Contact Methods */}
      <section className="py-14 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
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
                className={`group flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 ${method.hoverGlow}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color} transition-all`}>
                  <method.icon size={22} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{method.title}</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{method.value}</p>
                  <p className="text-xs text-muted-foreground/60">{method.subValue}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider variant="multi" />

      {/* Main Content */}
      <section className="py-28 bg-background relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="eyebrow mb-4">Visit Our Clinic</p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Experience the <em className="holographic-text" style={{ fontStyle: "italic" }}>Empathy</em> Difference
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Step into our state-of-the-art facility in Pitampura, Delhi where luxury meets clinical excellence. Conveniently located near Pitampura Metro Station, we are easily accessible from across Delhi NCR.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  Whether you're from Rohini, Shalimar Bagh, Model Town, Paschim Vihar, Dwarka, Noida, Gurugram, or any other part of Delhi NCR — our clinic is designed to be your sanctuary for transformation. From the moment you walk through our doors, you'll experience the difference that 15+ years of dedicated care creates.
                </p>
              </motion.div>

              {/* Trust Points */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3 mb-8">
                {trustPoints.map((tp, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 bg-card/30 border border-primary/8 rounded-xl">
                    <tp.icon size={16} className="text-primary flex-shrink-0" />
                    <span className="text-xs text-foreground/70">{tp.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Clinic Hours */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 mb-8 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={20} className="text-primary" />
                  <h3 className="font-serif text-xl text-foreground">Clinic Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2.5 border-b border-primary/8">
                    <span className="text-foreground">Monday</span>
                    <span className="text-red-400/80 font-medium text-sm">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-primary/8">
                    <span className="text-foreground">Tuesday – Saturday</span>
                    <span className="text-primary font-medium text-sm">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-foreground">Sunday</span>
                    <span className="text-primary font-medium text-sm">10:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-primary/10"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8!2d77.1315!3d28.6969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e742f5a9a1%3A0x6e3b1d3a1c8e9f0a!2sEmpathy+Laser+Clinic%2C+Pitampura%2C+Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Empathy Laser Clinic Location — Pitampura, Delhi NCR" className="absolute inset-0"
                />
              </motion.div>

              {/* Social Links */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-3 mt-8">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/empathylaserclinic/", label: "Instagram" },
                  { Icon: Facebook, href: "https://www.facebook.com/empathylaserclinic", label: "Facebook" },
                  { Icon: MessageCircle, href: "https://wa.me/919811157787", label: "WhatsApp" },
                ].map(({ Icon, href, label }, i) => (
                  <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden sticky top-24"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/20 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 rounded-tr-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar size={20} className="text-primary" />
                  <h3 className="font-serif text-2xl text-foreground">Book Your Free Consultation</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-8">Fill out the form and we'll confirm your appointment within 2 hours.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(38,45%,60%,0.3)]"
                      >
                        <CheckCircle size={40} className="text-primary" />
                      </motion.div>
                      <h4 className="font-serif text-2xl text-foreground mb-2">Thank You!</h4>
                      <p className="text-muted-foreground mb-4">Your consultation request has been received. Our team will contact you within 2 hours to confirm your appointment.</p>
                      <p className="text-xs text-muted-foreground/60 mb-6">Can't wait? Call us directly at <a href="tel:+919811157787" className="text-primary">9811157787</a></p>
                      <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "", preferredTime: "", preferredDate: "" }); }} className="text-primary text-sm underline hover:no-underline">
                        Book another consultation
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Full Name *</label>
                          <input type="text" placeholder="Your name" required value={form.name} onChange={e => update("name", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Phone / WhatsApp *</label>
                          <input type="tel" placeholder="Your phone number" required value={form.phone} onChange={e => update("phone", e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Email Address</label>
                        <input type="email" placeholder="your@email.com" value={form.email} onChange={e => update("email", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Service Interest</label>
                        <select value={form.service} onChange={e => update("service", e.target.value)} className={`${inputClass} appearance-none`}>
                          <option value="">Select a service...</option>
                          {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Preferred Date</label>
                          <input type="date" value={form.preferredDate} onChange={e => update("preferredDate", e.target.value)} className={inputClass} />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Preferred Time</label>
                          <select value={form.preferredTime} onChange={e => update("preferredTime", e.target.value)} className={`${inputClass} appearance-none`}>
                            <option value="">Select time...</option>
                            <option>Morning (10AM – 12PM)</option>
                            <option>Afternoon (12PM – 3PM)</option>
                            <option>Evening (3PM – 7PM)</option>
                            <option>Flexible — Any Time</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-2 block">Tell Us About Your Goals</label>
                        <textarea placeholder="Describe your concerns, goals, or questions..." rows={4} value={form.message} onChange={e => update("message", e.target.value)} className={`${inputClass} resize-none`} />
                      </div>
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full py-4 text-sm font-sans font-semibold uppercase tracking-[0.15em] rounded-2xl flex items-center justify-center gap-2 relative overflow-hidden group"
                        style={{
                          background: 'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--gold-dark)) 100%)',
                          boxShadow: '0 1px 0 0 hsl(var(--gold-light) / 0.3) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.2) inset, 0 4px 20px -4px hsl(var(--primary) / 0.4)',
                          color: 'hsl(var(--primary-foreground))',
                        }}
                      >
                        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/15 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative z-10">Book Free Consultation</span>
                        <Send size={16} className="relative z-10" />
                      </motion.button>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/50">
                        <Shield size={12} />
                        <span>Your information is 100% safe. We never share your details.</span>
                      </div>
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
      <section className="py-28 bg-secondary relative overflow-hidden">
        <AuroraMesh intensity="subtle" />
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Quick Answers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Frequently Asked <em className="holographic-text" style={{ fontStyle: "italic" }}>Questions</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about visiting Empathy Laser Clinic. Can't find your answer? Call us at 9811157787.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="border border-primary/10 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-all"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4 text-sm">{faq.q}</span>
                  <ArrowRight size={16} className={`text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">{faq.a}</div>
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
      <section className="py-20 bg-primary relative overflow-hidden">
        <AuroraMesh intensity="subtle" className="mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl text-primary-foreground mb-2">Prefer to Talk Directly?</h3>
              <p className="text-primary-foreground/70">Our friendly team is available Tue–Sun, 10AM–7PM</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="tel:+919811157787"
                className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(0,0%,0%,0.3)]"
              >
                <Phone size={16} /> Call 9811157787
              </motion.a>
              <a href="https://wa.me/919811157787" target="_blank" rel="noopener noreferrer"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all"
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
