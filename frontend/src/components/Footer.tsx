import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import EmpathyLogo from "./EmpathyLogo";

const services = [
  { name: "Laser Hair Removal", path: "/laser-hair-removal" },
  { name: "CoolSculpting®", path: "/coolsculpting" },
  { name: "Skin Treatments", path: "/skin-treatments" },
  { name: "Acne & Acne Scar", path: "/acne-treatment" },
  { name: "Skin Lightening", path: "/skin-lightening" },
  { name: "Anti-Ageing", path: "/anti-ageing" },
  { name: "HIFU Face Lift", path: "/hifu-treatment" },
  { name: "Dark Circles", path: "/dark-circles" },
  { name: "Skin Tightening", path: "/skin-tightening" },
  { name: "Stretch Marks", path: "/stretch-marks" },
  { name: "Tattoo Removal", path: "/tattoo-removal" },
  { name: "Mole & Wart Removal", path: "/mole-wart-removal" },
  { name: "Hair Loss & PRP", path: "/hair-loss-treatment" },
  { name: "Hair Transplant", path: "/hair-transplant" },
  { name: "Body Contouring", path: "/body-contouring" },
  { name: "ResurFX™ Resurfacing", path: "/resurfx" },
  { name: "Botox & Fillers", path: "/botox-fillers" },
  { name: "Microdermabrasion", path: "/microdermabrasion" },
  { name: "Bridal Packages", path: "/bridal-packages" },
  { name: "Spa Services", path: "/spa-services" },
  { name: "Salon Services", path: "/salon-services" },
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

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-xl border-t border-white/10 relative overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <EmpathyLogo size="default" className="mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Where Clinical Precision Meets Luxury Experience. Delhi NCR's most trusted aesthetic clinic since 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-6">Clinic</h4>
            <ul className="space-y-3">
              {clinicLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919811157787" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" /> 9811157787
              </a>
              <a href="tel:+919811157784" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" /> 9811157784
              </a>
              <a href="mailto:info@empathylaserclinic.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> info@empathylaserclinic.com
              </a>
              <a href="https://share.google/SClHKya8GwuCKc0hp" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MapPin size={14} className="text-primary mt-0.5" /> Delhi NCR, India
              </a>
            </div>
            <div className="mt-6 p-4 bg-muted rounded text-xs text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Clinic Hours</p>
              <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Empathy Laser Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
