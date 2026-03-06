import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Trust info */}
          <div>
            <p className="eyebrow mb-4">Get Started</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Book Your Free <em className="text-primary">Consultation</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Take the first step toward your transformation. Our specialists will assess your needs and create a personalized treatment plan — completely free of charge.
            </p>
            <div className="space-y-4">
              {["Free skin & body analysis", "Personalized treatment plan", "No-obligation consultation", "Transparent pricing"].map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle size={16} className="text-primary" /> {p}
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-secondary rounded-lg border border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Call Us Directly</p>
              <a href="tel:+919811157787" className="font-serif text-2xl text-foreground hover:text-primary transition-colors block">9811157787</a>
              <a href="tel:+919811157784" className="font-serif text-2xl text-foreground hover:text-primary transition-colors block">9811157784</a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            {submitted ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll contact you within 24 hours to confirm your consultation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" required value={form.firstName} onChange={e => update("firstName", e.target.value)} className="bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                  <input type="text" placeholder="Last Name" required value={form.lastName} onChange={e => update("lastName", e.target.value)} className="bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                </div>
                <input type="tel" placeholder="Phone / WhatsApp" required value={form.phone} onChange={e => update("phone", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                <input type="email" placeholder="Email" value={form.email} onChange={e => update("email", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" />
                <select value={form.service} onChange={e => update("service", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select Service Interest</option>
                  <option>Laser Hair Removal</option>
                  <option>CoolSculpting®</option>
                  <option>Skin Treatments</option>
                  <option>ResurFX™ Skin Resurfacing</option>
                  <option>Botox & Fillers</option>
                  <option>Microdermabrasion</option>
                  <option>Bridal Package</option>
                  <option>Spa Services</option>
                  <option>Salon Services</option>
                </select>
                <input type="date" value={form.date} onChange={e => update("date", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                <textarea placeholder="Your Message (optional)" rows={3} value={form.message} onChange={e => update("message", e.target.value)} className="w-full bg-muted border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" />
                <button type="submit" className="w-full gold-shimmer text-primary-foreground py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  Book Consultation <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
