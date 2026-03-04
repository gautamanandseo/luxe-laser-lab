import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Laser Hair Removal", path: "/laser-hair-removal" },
  { name: "CoolSculpting®", path: "/coolsculpting" },
  { name: "Skin Treatments", path: "/skin-treatments" },
  { name: "Botox & Fillers", path: "/botox-fillers" },
  { name: "Microdermabrasion", path: "/microdermabrasion" },
  { name: "Bridal Packages", path: "/bridal-packages" },
  { name: "Spa Services", path: "/spa-services" },
  { name: "Salon Services", path: "/salon-services" },
];

const clinicLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/#gallery" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "FAQ", path: "/#faq" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl text-primary mb-4">Empathy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Where Clinical Precision Meets Luxury Experience. Delhi NCR's most trusted aesthetic clinic since 2009.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon size={16} />
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
              <a href="https://maps.app.goo.gl/DQ6ALz6CcUeS557f9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
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

      <div className="border-t border-border">
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
