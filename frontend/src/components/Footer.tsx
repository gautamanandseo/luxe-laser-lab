import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, Twitter, Sparkles, Clock, ExternalLink, Heart, Shield, Award, Star, ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EmpathyLogo from "./EmpathyLogo";

const serviceColumns = [
  {
    label: "Laser & Skin",
    items: [
      { name: "Laser Hair Removal", path: "/laser-hair-removal" },
      { name: "CoolSculpting®", path: "/coolsculpting" },
      { name: "Skin Treatments", path: "/skin-treatments" },
      { name: "Acne & Acne Scar", path: "/acne-treatment" },
      { name: "Skin Lightening", path: "/skin-lightening" },
      { name: "Anti-Ageing", path: "/anti-ageing" },
      { name: "HIFU Face Lift", path: "/hifu-treatment" },
    ],
  },
  {
    label: "Body & Hair",
    items: [
      { name: "Dark Circles", path: "/dark-circles" },
      { name: "Skin Tightening", path: "/skin-tightening" },
      { name: "Stretch Marks", path: "/stretch-marks" },
      { name: "Tattoo Removal", path: "/tattoo-removal" },
      { name: "Hair Loss & PRP", path: "/hair-loss-treatment" },
      { name: "Hair Transplant", path: "/hair-transplant" },
      { name: "Body Contouring", path: "/body-contouring" },
    ],
  },
  {
    label: "Premium",
    items: [
      { name: "ResurFX™ Resurfacing", path: "/resurfx" },
      { name: "Botox & Fillers", path: "/botox-fillers" },
      { name: "Microdermabrasion", path: "/microdermabrasion" },
      { name: "Bridal Packages", path: "/bridal-packages" },
      { name: "Facials & HydraFacial", path: "/facials" },
      { name: "Salon Services", path: "/salon-services" },
      { name: "Mole & Wart Removal", path: "/mole-wart-removal" },
    ],
  },
];

const clinicLinks = [
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/#gallery" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "FAQ", path: "/#faq" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/empathylaserclinic/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/empathylaserclinic", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/user/tourismdentalindia", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/delhilaser", label: "Twitter" },
];

const trustBadges = [
  { icon: Shield, label: "USFDA Cleared" },
  { icon: Award, label: "Allergan Certified" },
  { icon: Star, label: "4.9★ Google" },
  { icon: Heart, label: "25,000+ Clients" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* === TOP CTA BAND === */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-card" />
        <div className="absolute inset-0 noise opacity-30" />
        <div className="relative z-10 container mx-auto px-6 pt-16 pb-12">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Multi-layer CTA background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(var(--gold-dark))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(0,0%,100%,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(0,0%,0%,0.15),transparent_50%)]" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-0 noise opacity-10" />

            <div className="relative z-10 p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="text-primary-foreground/80" size={24} />
                  </motion.div>
                  <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary-foreground/60">Begin Your Journey</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-3 leading-tight">
                  Ready to Rediscover Yourself?
                </h3>
                <p className="text-primary-foreground/70 max-w-lg text-base leading-relaxed">
                  Book a complimentary consultation worth ₹500 and receive a personalized treatment plan from our expert team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold overflow-hidden group"
                    style={{
                      background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 0% 92%) 100%)',
                      boxShadow: '0 4px 20px -4px hsl(0 0% 0% / 0.4), 0 1px 0 0 hsl(0 0% 100% / 0.3) inset',
                      color: 'hsl(var(--primary))',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Book Free Consultation</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="https://wa.me/919811157787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2.5 text-muted-foreground"
              >
                <badge.icon size={16} className="text-primary" />
                <span className="text-sm">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* === Ornamental Divider === */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
      </div>

      {/* === MAIN FOOTER === */}
      <div className="relative">
        <div className="absolute inset-0 bg-[hsl(0,0%,2%)]" />
        <div className="absolute inset-0 grid-bg opacity-8" />
        <div className="absolute inset-0 noise opacity-20" />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-primary/[0.03] rounded-full blur-[100px]" />

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* === Grid: Brand + Services + Links + Contact === */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <EmpathyLogo size="large" className="mb-6" />
              </motion.div>
              <p className="font-serif text-lg italic text-foreground/50 mb-4">
                "Where Clinical Precision Meets Luxury Experience"
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Delhi NCR's most trusted aesthetic clinic since 2009. Over 25,000 clients served with world-class laser, skin, body contouring, and anti-ageing treatments.
              </p>

              {/* Social links — refined */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 group relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                      boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.04) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.2) inset, 0 2px 6px -2px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.08)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <social.icon size={16} className="relative z-10" />
                  </motion.a>
                ))}
              </div>

              {/* Clinic hours card — refined */}
              <div className="p-5 rounded-2xl relative overflow-hidden group" style={{
                background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 2px 12px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.08)',
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Clock size={14} className="text-primary" />
                    <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary">Clinic Hours</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monday</span>
                      <span className="text-red-400/80 font-medium">Closed</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-primary/10 to-transparent" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tue – Sun</span>
                      <span className="text-foreground/80 font-medium">10 AM – 7 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services - 3 sub-columns */}
            <div className="lg:col-span-5">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/0" />
                Our Treatments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1">
                {serviceColumns.map((col) => (
                  <div key={col.label} className="mb-6">
                    <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary/40 mb-3 pb-2 border-b border-primary/8">{col.label}</p>
                    <ul className="space-y-0.5">
                      {col.items.map(s => (
                        <li key={s.path}>
                          <Link
                            to={s.path}
                            className="group flex items-center gap-1.5 text-[13px] text-muted-foreground/70 hover:text-foreground py-1 transition-all duration-200"
                          >
                            <ChevronRight size={10} className="text-primary/0 group-hover:text-primary/60 -ml-3 group-hover:ml-0 transition-all duration-300" />
                            <span className="relative">
                              {s.name}
                              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary/30 transition-all duration-300" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Links + Contact */}
            <div className="lg:col-span-4 space-y-10">
              {/* Quick Links */}
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/0" />
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {clinicLinks.map(l => (
                    <Link
                      key={l.path}
                      to={l.path}
                      className="group flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground py-1.5 transition-all duration-200"
                    >
                      <ArrowRight size={11} className="text-primary/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      <span className="relative">
                        {l.name}
                        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary/30 transition-all duration-300" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact info — elevated cards */}
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/0" />
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  {/* Phone */}
                  <a href="tel:+919811157787" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden" style={{
                    background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                    boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 2px 10px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.06)',
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all relative z-10">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">Call Us</p>
                      <p className="text-foreground font-medium">9811157787 / 9811157784</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@empathylaserclinic.com" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden" style={{
                    background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                    boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 2px 10px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.06)',
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all relative z-10">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">Email</p>
                      <p className="text-foreground/80 text-sm">info@empathylaserclinic.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <a href="https://share.google/SClHKya8GwuCKc0hp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden" style={{
                    background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                    boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 2px 10px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.06)',
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all relative z-10">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div className="relative z-10 flex-1">
                      <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">Visit Us</p>
                      <p className="text-foreground/80 text-sm flex items-center gap-1">
                        Pitampura, Delhi NCR
                        <ExternalLink size={10} className="opacity-30 group-hover:opacity-60 transition-opacity" />
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="relative z-10">
          {/* Ornamental divider */}
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          </div>

          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left - Copyright */}
              <p className="text-xs text-muted-foreground/40 order-2 md:order-1">
                © {new Date().getFullYear()} Empathy Laser Clinic. All rights reserved.
              </p>

              {/* Center - Trust line */}
              <p className="text-xs text-muted-foreground/30 font-serif italic order-1 md:order-2">
                Trusted by 25,000+ Delhi NCR Clients Since 2009
              </p>

              {/* Right - Legal */}
              <div className="flex items-center gap-4 order-3">
                <a href="#" className="text-xs text-muted-foreground/40 hover:text-primary/60 transition-colors">Privacy Policy</a>
                <span className="w-px h-3 bg-muted-foreground/15" />
                <a href="#" className="text-xs text-muted-foreground/40 hover:text-primary/60 transition-colors">Terms</a>
                <span className="w-px h-3 bg-muted-foreground/15" />
                <a href="/sitemap.xml" className="text-xs text-muted-foreground/40 hover:text-primary/60 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
