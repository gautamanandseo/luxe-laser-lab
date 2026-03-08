import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar, ArrowRight, Sparkles, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const contactMethods = [
  { icon: Phone, title: "Call Us", value: "9811157787", subValue: "9811157784", href: "tel:+919811157787", color: "bg-green-500/10 text-green-500" },
  { icon: MessageCircle, title: "WhatsApp", value: "Quick Response", subValue: "Chat with us", href: "https://wa.me/919811157787", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Mail, title: "Email Us", value: "info@empathylaserclinic.com", subValue: "We reply within 24hrs", href: "mailto:info@empathylaserclinic.com", color: "bg-blue-500/10 text-blue-500" },
  { icon: MapPin, title: "Visit Us", value: "Delhi NCR, India", subValue: "Get directions", href: "https://maps.app.goo.gl/DQ6ALz6CcUeS557f9", color: "bg-red-500/10 text-red-500" },
];

const services = [
  "Laser Hair Removal",
  "CoolSculpting®",
  "Skin Treatments",
  "ResurFX™ Skin Resurfacing",
  "Botox & Fillers",
  "Microdermabrasion",
  "Bridal Packages",
  "Spa Services",
  "Salon Services",
  "Other / General Inquiry",
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
        <img
            src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=1920&q=80"
            alt="Contact Empathy Laser Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Get In Touch</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4">
              Let's <em className="text-primary">Connect</em>
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              We'd love to hear from you. Reach out for a free consultation or any questions about our treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
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
                className="group flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
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

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="eyebrow mb-4">Visit Our Clinic</p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  Experience the <em className="text-primary">Empathy</em> Difference
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Step into our state-of-the-art facility where luxury meets clinical excellence. Our friendly team is ready to welcome you and guide you through your transformation journey.
                </p>
              </motion.div>

              {/* Clinic Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-primary" />
                  <h3 className="font-serif text-xl text-foreground">Clinic Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Monday - Friday</span>
                    <span className="text-primary font-medium">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Saturday</span>
                    <span className="text-primary font-medium">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-foreground">Sunday</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-xl overflow-hidden border border-border"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6844!2d77.0266!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e5a8b35c8b%3A0x9d41e35b5c41bcf8!2sEmpathy%20Laser%20Clinic!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Empathy Laser Clinic Location - Delhi NCR"
                  className="absolute inset-0"
                />
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 mt-8"
              >
                <a href="#" className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/919811157787" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <MessageCircle size={20} />
                </a>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={20} className="text-primary" />
                <h3 className="font-serif text-2xl text-foreground">Book Your Free Consultation</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-8">Fill out the form and we'll get back to you within 2 hours.</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-primary" />
                    </div>
                    <h4 className="font-serif text-2xl text-foreground mb-2">Thank You!</h4>
                    <p className="text-muted-foreground mb-6">Your message has been sent successfully. We'll contact you within 2 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "", preferredTime: "" }); }}
                      className="text-primary text-sm underline hover:no-underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-5"
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          required
                          value={form.name}
                          onChange={e => update("name", e.target.value)}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          placeholder="Your phone number"
                          required
                          value={form.phone}
                          onChange={e => update("phone", e.target.value)}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => update("email", e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Service Interest</label>
                        <select
                          value={form.service}
                          onChange={e => update("service", e.target.value)}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Preferred Time</label>
                        <select
                          value={form.preferredTime}
                          onChange={e => update("preferredTime", e.target.value)}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                        >
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
                      <textarea
                        placeholder="Tell us about your goals or any questions you have..."
                        rows={4}
                        value={form.message}
                        onChange={e => update("message", e.target.value)}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-shimmer text-primary-foreground py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
                    >
                      Book Free Consultation <Send size={16} />
                    </button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Quick Answers</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Common <em className="text-primary">Questions</em>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.q}</span>
                  <ArrowRight
                    size={18}
                    className={`text-primary flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl text-primary-foreground mb-2">Prefer to call directly?</h3>
              <p className="text-primary-foreground/70">Our team is available Mon-Sat, 10AM-7PM</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919811157787"
                className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Phone size={16} /> Call 9811157787
              </a>
              <a
                href="https://wa.me/919811157787"
                target="_blank"
                rel="noopener noreferrer"
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
