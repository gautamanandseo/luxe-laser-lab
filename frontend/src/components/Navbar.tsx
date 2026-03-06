import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EmpathyLogo from "./EmpathyLogo";

const services = [
  { name: "Laser Hair Removal", path: "/laser-hair-removal" },
  { name: "CoolSculpting®", path: "/coolsculpting" },
  { name: "Skin Treatments", path: "/skin-treatments" },
  { name: "ResurFX™ Skin Resurfacing", path: "/resurfx" },
  { name: "Botox & Fillers", path: "/botox-fillers" },
  { name: "Microdermabrasion", path: "/microdermabrasion" },
  { name: "Bridal Packages", path: "/bridal-packages" },
  { name: "Spa Services", path: "/spa-services" },
  { name: "Salon Services", path: "/salon-services" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#", hasDropdown: true },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Secondary top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+919811157787" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Phone size={12} /> 9811157787
            </a>
            <a href="https://wa.me/919811157787" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.39-.234-3.307 1.109 1.109-3.307-.234-.39A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp
            </a>
          </div>
          <Link to="/contact" className="text-xs font-sans uppercase tracking-[0.15em] bg-primary text-primary-foreground px-4 py-1.5 rounded-full hover:bg-gold-light transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-primary/20" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <EmpathyLogo size="default" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-sans uppercase tracking-[0.15em] transition-colors hover:text-primary ${location.pathname.includes("service") ? "text-primary" : "text-foreground/80"}`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-sans uppercase tracking-[0.15em] transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground/80"}`}
                  >
                    {link.name}
                  </Link>
                )}

                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                )}

                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                  >
                    <div className="glass border border-border rounded-lg p-4 min-w-[280px]">
                      {services.map(s => (
                        <Link key={s.path} to={s.path} className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/contact" className="hidden lg:block text-sm font-sans uppercase tracking-[0.15em] border border-primary text-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
            Book Now
          </Link>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 pt-28 px-6 overflow-y-auto"
          >
            <div className="flex justify-center mb-8">
              <EmpathyLogo size="large" />
            </div>
            <div className="space-y-2">
              {navLinks.filter(l => !l.hasDropdown).map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link to={link.path} className="block font-serif text-4xl text-foreground py-3 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <p className="font-serif text-4xl text-foreground py-3">Services</p>
              </motion.div>
              {services.map((s, i) => (
                <motion.div key={s.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}>
                  <Link to={s.path} className="block text-lg text-muted-foreground pl-4 py-2 hover:text-primary transition-colors border-l border-border">
                    {s.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
