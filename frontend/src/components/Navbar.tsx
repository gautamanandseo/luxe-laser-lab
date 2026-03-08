import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EmpathyLogo from "./EmpathyLogo";

const services = [
  { name: "Laser Hair Removal", path: "/laser-hair-removal", icon: Zap },
  { name: "CoolSculpting®", path: "/coolsculpting", icon: Zap },
  { name: "Weight Loss Delhi", path: "/weight-loss-delhi", icon: Zap },
  { name: "Skin Treatments", path: "/skin-treatments", icon: Zap },
  { name: "Acne & Acne Scar", path: "/acne-treatment", icon: Zap },
  { name: "Skin Lightening & Pigmentation", path: "/skin-lightening", icon: Zap },
  { name: "Anti-Ageing", path: "/anti-ageing", icon: Zap },
  { name: "HIFU Face Lift", path: "/hifu-treatment", icon: Zap },
  { name: "Dark Circles", path: "/dark-circles", icon: Zap },
  { name: "Skin Tightening", path: "/skin-tightening", icon: Zap },
  { name: "Stretch Marks Removal", path: "/stretch-marks", icon: Zap },
  { name: "Tattoo Removal", path: "/tattoo-removal", icon: Zap },
  { name: "Mole & Wart Removal", path: "/mole-wart-removal", icon: Zap },
  { name: "Hair Loss & PRP", path: "/hair-loss-treatment", icon: Zap },
  { name: "Hair Transplant", path: "/hair-transplant", icon: Zap },
  { name: "Body Contouring & Inch Loss", path: "/body-contouring", icon: Zap },
  { name: "ResurFX™ Skin Resurfacing", path: "/resurfx", icon: Zap },
  { name: "Botox & Fillers", path: "/botox-fillers", icon: Zap },
  { name: "Microdermabrasion", path: "/microdermabrasion", icon: Zap },
  { name: "Bridal Packages", path: "/bridal-packages", icon: Zap },
  { name: "Facials & HydraFacial", path: "/facials", icon: Zap },
  { name: "Salon Services", path: "/salon-services", icon: Zap },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#", hasDropdown: true },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/20 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_hsl(38,45%,60%,0.05)]"
            : "bg-transparent"
        }`}
      >
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
                        className={`flex items-center gap-1.5 text-sm font-medium transition-colors relative group ${
                          location.pathname.includes("service") ? "text-primary" : "text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                        {/* Hover underline glow */}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_8px_hsl(38,45%,60%,0.5)]" />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute top-full left-0 pt-4"
                          >
                            <div className="bg-background/80 backdrop-blur-2xl border border-primary/10 rounded-2xl shadow-2xl shadow-primary/5 p-2 min-w-[640px] grid-bg">
                              <div className="grid grid-cols-2 gap-x-2">
                                {services.map((s, i) => (
                                  <motion.div
                                    key={s.path}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.02 }}
                                  >
                                    <Link
                                      to={s.path}
                                      className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 group"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(38,45%,60%,0.5)] transition-all" />
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
                      className={`text-sm font-medium transition-colors relative group ${
                        location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                      <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 shadow-[0_0_8px_hsl(38,45%,60%,0.5)] ${
                        location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex text-sm font-medium bg-primary text-primary-foreground px-6 py-2 rounded-full hover:shadow-[0_0_20px_hsl(38,45%,60%,0.4)] transition-all duration-300 hover:scale-105"
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
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.filter(l => !l.hasDropdown).map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="pt-6 border-t border-primary/10"
              >
                <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">Services</p>
                <div className="space-y-2">
                  {services.map((s, i) => (
                    <motion.div
                      key={s.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.03 }}
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

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-primary-foreground py-3 rounded-full font-medium hover:shadow-[0_0_20px_hsl(38,45%,60%,0.4)] transition-all"
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
