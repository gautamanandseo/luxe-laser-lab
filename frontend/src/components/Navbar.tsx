import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EmpathyLogo from "./EmpathyLogo";

const services = [
  { name: "Laser Hair Removal", path: "/laser-hair-removal", icon: Zap },
  { name: "CoolSculpting®", path: "/coolsculpting", icon: Zap },
  { name: "Skin Treatments", path: "/skin-treatments", icon: Zap },
  { name: "ResurFX™ Skin Resurfacing", path: "/resurfx", icon: Zap },
  { name: "Botox & Fillers", path: "/botox-fillers", icon: Zap },
  { name: "Microdermabrasion", path: "/microdermabrasion", icon: Zap },
  { name: "Bridal Packages", path: "/bridal-packages", icon: Zap },
  { name: "Spa Services", path: "/spa-services", icon: Zap },
  { name: "Salon Services", path: "/salon-services", icon: Zap },
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
    const onScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Apple-like Premium Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/30 backdrop-blur-2xl border-b border-white/10" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <EmpathyLogo size="default" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map(link => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                          location.pathname.includes("service") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 pt-4"
                          >
                            <div className="bg-background/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 min-w-[320px]">
                              <div className="space-y-1">
                                {services.map((s, i) => (
                                  <motion.div
                                    key={s.path}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                  >
                                    <Link
                                      to={s.path}
                                      className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200 group"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                                        <span>{s.name}</span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors ${
                        location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex text-sm font-medium bg-primary text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              {/* Main Links */}
              {navLinks.filter(l => !l.hasDropdown).map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="pt-6 border-t border-border"
              >
                <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">Services</p>
                <div className="space-y-2">
                  {services.map((s, i) => (
                    <motion.div
                      key={s.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.04 }}
                    >
                      <Link
                        to={s.path}
                        className="text-foreground/80 hover:text-primary transition-colors block py-2"
                      >
                        {s.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-primary-foreground py-3 rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
