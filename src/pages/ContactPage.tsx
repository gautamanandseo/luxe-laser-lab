import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const update = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }));

  return (
    <div className="pt-28">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-4">Contact <em className="text-primary">Us</em></h1>
            <p className="text-muted-foreground">We'd love to hear from you. Reach out for a free consultation or any questions about our treatments.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-6">Clinic Details</h3>
                <div className="space-y-4">
                  <a href="tel:+919811157787" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"><Phone size={16} className="text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Phone</p><p className="font-medium">9811157787 / 9811157784</p></div>
                  </a>
                  <a href="mailto:info@empathylaserclinic.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"><Mail size={16} className="text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Email</p><p className="font-medium">info@empathylaserclinic.com</p></div>
                  </a>
                  <a href="https://maps.app.goo.gl/DQ6ALz6CcUeS557f9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"><MapPin size={16} className="text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Location</p><p className="font-medium">Delhi NCR, India</p></div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"><Clock size={16} className="text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">Hours</p><p className="font-medium">Mon-Sat: 10AM-7PM · Sun: By Appointment</p></div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <a href="https://maps.app.goo.gl/DQ6ALz6CcUeS557f9" target="_blank" rel="noopener noreferrer" className="block aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center hover:border-primary transition-colors">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Open in Google Maps</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-2xl text-foreground mb-6">Send Us a Message</h3>
              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                  <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                  <h4 className="font-serif text-2xl text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <input type="text" placeholder="Full Name" required value={form.name} onChange={e => update("name", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                  <input type="tel" placeholder="Phone / WhatsApp" required value={form.phone} onChange={e => update("phone", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                  <input type="email" placeholder="Email" value={form.email} onChange={e => update("email", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                  <select value={form.service} onChange={e => update("service", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                    <option value="">Select Service Interest</option>
                    <option>Laser Hair Removal</option>
                    <option>CoolSculpting®</option>
                    <option>Skin Treatments</option>
                    <option>Botox & Fillers</option>
                    <option>Bridal Package</option>
                    <option>Spa Services</option>
                    <option>Salon Services</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Your Message" rows={4} value={form.message} onChange={e => update("message", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" />
                  <button type="submit" className="w-full gold-shimmer text-primary-foreground py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
