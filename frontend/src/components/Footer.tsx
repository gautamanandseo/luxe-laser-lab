import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, Twitter, Sparkles, Clock, ExternalLink } from "lucide-react";
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
  { icon: Instagram, href: "https://www.instagram.com/empathylaserclinic/", label: "Instagram", color: "hover:shadow-[0_0_20px_hsl(330,80%,60%,0.3)]" },
  { icon: Facebook, href: "https://www.facebook.com/empathylaserclinic", label: "Facebook", color: "hover:shadow-[0_0_20px_hsl(220,80%,60%,0.3)]" },
  { icon: Youtube, href: "https://www.youtube.com/user/tourismdentalindia", label: "YouTube", color: "hover:shadow-[0_0_20px_hsl(0,80%,50%,0.3)]" },
  { icon: Twitter, href: "https://twitter.com/delhilaser", label: "Twitter", color: "hover:shadow-[0_0_20px_hsl(200,80%,60%,0.3)]" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* === TOP CTA BAND === */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-primary/15 bg-background/40 backdrop-blur-xl depth-shadow">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
              >
                <Sparkles className="text-primary" size={20} />
              </motion.div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground">Ready to Transform?</h3>
                <p className="text-sm text-muted-foreground mt-1">Book a free consultation with our experts today</p>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium overflow-hidden group"
              >
                <div className="absolute inset-0 bg-primary rounded-full" />
                <div className="absolute inset-[1px] bg-gradient-to-b from-primary via-primary to-primary/80 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full" />
                <div className="absolute -inset-1 bg-primary/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-primary-foreground">Book Free Consultation</span>
                <ArrowRight size={16} className="relative z-10 text-primary-foreground/70 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === Divider === */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* === MAIN FOOTER === */}
      <div className="relative">
        {/* Multi-layered background */}
        <div className="absolute inset-0 bg-[hsl(0,0%,2%)]" />
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute inset-0 noise" />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[80px]" />

        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* === Grid: Brand + Services + Links + Contact === */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-3">
              <motion.div
                whileHover={{ scale: 1.03, rotateY: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: 800 }}
              >
                <EmpathyLogo size="default" className="mb-5" />
              </motion.div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Where Clinical Precision Meets Luxury Experience. Delhi NCR's most trusted aesthetic clinic since 2009.
              </p>

              {/* Social links - 3D hover cards */}
              <div className="flex gap-2">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3, rotateY: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-10 h-10 rounded-xl border border-primary/15 bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 ${social.color}`}
                    style={{ perspective: 600 }}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>

              {/* Clinic hours card */}
              <div className="mt-6 p-4 rounded-xl border border-primary/10 bg-muted/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={12} className="text-primary" />
                    <p className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Clinic Hours</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Mon: Closed | Tue–Sun: 10:00 AM – 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Services - 3 sub-columns */}
            <div className="lg:col-span-6">
              <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-primary/40" />
                Our Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {serviceColumns.map((col) => (
                  <div key={col.label}>
                    <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary/50 mb-3">{col.label}</p>
                    <ul className="space-y-1.5">
                      {col.items.map(s => (
                        <li key={s.path}>
                          <Link
                            to={s.path}
                            className="group flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-all duration-200"
                          >
                            <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                            <span>{s.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Links + Contact */}
            <div className="lg:col-span-3 space-y-8">
              {/* Quick Links */}
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-5 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary/40" />
                  Clinic
                </h4>
                <ul className="space-y-2">
                  {clinicLinks.map(l => (
                    <li key={l.path}>
                      <Link
                        to={l.path}
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        <ArrowRight size={11} className="text-primary/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info - cards */}
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-5 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary/40" />
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a href="tel:+919811157787" className="flex items-center gap-3 p-3 rounded-xl border border-primary/8 bg-muted/5 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={13} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/60">Call Us</p>
                      <p className="text-sm text-foreground/80">9811157787</p>
                    </div>
                  </a>
                  <a href="mailto:info@empathylaserclinic.com" className="flex items-center gap-3 p-3 rounded-xl border border-primary/8 bg-muted/5 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail size={13} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/60">Email</p>
                      <p className="text-sm text-foreground/80 truncate">info@empathylaserclinic.com</p>
                    </div>
                  </a>
                  <a href="https://share.google/SClHKya8GwuCKc0hp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-primary/8 bg-muted/5 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin size={13} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/60">Location</p>
                      <p className="text-sm text-foreground/80 flex items-center gap-1">Delhi NCR <ExternalLink size={10} className="opacity-40" /></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="relative z-10">
          {/* Multi-line divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
          <div className="h-px mt-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground/50">
              © {new Date().getFullYear()} Empathy Laser Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground/50 hover:text-primary/70 transition-colors">Privacy Policy</a>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
              <a href="#" className="text-xs text-muted-foreground/50 hover:text-primary/70 transition-colors">Terms of Service</a>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
              <a href="#" className="text-xs text-muted-foreground/50 hover:text-primary/70 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
