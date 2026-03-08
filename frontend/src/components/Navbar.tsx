import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EmpathyLogo from "./EmpathyLogo";

const serviceCategories = [
  {
    label: "Laser & Light",
    items: [
      { name: "Laser Hair Removal", path: "/laser-hair-removal" },
      { name: "Tattoo Removal", path: "/tattoo-removal" },
      { name: "ResurFX™ Resurfacing", path: "/resurfx" },
    ],
  },
  {
    label: "Face & Skin",
    items: [
      { name: "Skin Treatments", path: "/skin-treatments" },
      { name: "Acne & Acne Scar", path: "/acne-treatment" },
      { name: "Skin Lightening", path: "/skin-lightening" },
      { name: "Anti-Ageing", path: "/anti-ageing" },
      { name: "HIFU Face Lift", path: "/hifu-treatment" },
      { name: "Dark Circles", path: "/dark-circles" },
      { name: "Skin Tightening", path: "/skin-tightening" },
      { name: "Microdermabrasion", path: "/microdermabrasion" },
    ],
  },
  {
    label: "Body",
    items: [
      { name: "CoolSculpting®", path: "/coolsculpting" },
      { name: "Weight Loss Delhi", path: "/weight-loss-delhi" },
      { name: "Body Contouring", path: "/body-contouring" },
      { name: "Stretch Marks", path: "/stretch-marks" },
      { name: "Mole & Wart Removal", path: "/mole-wart-removal" },
    ],
  },
  {
    label: "Hair & Injectables",
    items: [
      { name: "Hair Loss & PRP", path: "/hair-loss-treatment" },
      { name: "Hair Transplant", path: "/hair-transplant" },
      { name: "Botox & Fillers", path: "/botox-fillers" },
    ],
  },
  {
    label: "Luxury Experiences",
    items: [
      { name: "Bridal Packages", path: "/bridal-packages" },
      { name: "Facials & HydraFacial", path: "/facials" },
      { name: "Salon Services", path: "/salon-services" },
    ],
  },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "py-1"
            : "py-2"
        }`}
      >
        {/* 3D layered background */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          scrolled
            ? "bg-background/60 backdrop-blur-2xl shadow-[0_8px_32px_hsl(0,0%,0%,0.4),0_0_0_1px_hsl(38,45%,60%,0.08),inset_0_1px_0_hsl(255,255%,255%,0.05)]"
            : "bg-transparent"
        }`} />
        {/* Gold accent line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: scrolled
              ? "linear-gradient(90deg, transparent, hsl(38 45% 60% / 0.3), hsl(38 50% 75% / 0.5), hsl(38 45% 60% / 0.3), transparent)"
              : "transparent",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo with 3D hover */}
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: 800 }}
              >
                <EmpathyLogo size="default" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <motion.button
                        whileHover={{ y: -2, scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-300 relative group ${
                          location.pathname.includes("service") || servicesOpen
                            ? "text-primary"
                            : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        <span className="relative z-10">{link.name}</span>
                        <ChevronDown size={13} className={`relative z-10 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                        {/* Apple 3D hover pill */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            background: 'linear-gradient(180deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.04) 100%)',
                            boxShadow: '0 2px 8px hsl(var(--primary) / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.06)',
                            border: '1px solid hsl(var(--primary) / 0.15)',
                          }}
                        />
                      </motion.button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, rotateX: -8 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, y: 8, rotateX: -5 }}
                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                            style={{ perspective: 1200 }}
                          >
                            {/* Mega menu container */}
                            <div className="relative min-w-[780px] rounded-2xl overflow-hidden depth-shadow">
                              {/* Layered backgrounds */}
                              <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />
                              <div className="absolute inset-0 grid-bg opacity-30" />
                              <div className="absolute inset-0 noise" />
                              {/* Top gold line */}
                              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                              {/* Corner accents */}
                              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
                              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
                              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
                              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

                              <div className="relative z-10 p-6">
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-primary/10">
                                  <Sparkles size={14} className="text-primary" />
                                  <span className="text-xs font-sans uppercase tracking-[0.25em] text-primary">Our Treatments</span>
                                </div>

                                {/* Categories grid */}
                                <div className="grid grid-cols-3 gap-6">
                                  {serviceCategories.map((cat, ci) => (
                                    <motion.div
                                      key={cat.label}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: ci * 0.05 }}
                                    >
                                      <h5 className="text-[11px] font-sans uppercase tracking-[0.2em] text-primary/70 mb-3 flex items-center gap-2">
                                        <span className="w-4 h-px bg-primary/30" />
                                        {cat.label}
                                      </h5>
                                      <div className="space-y-0.5">
                                        {cat.items.map((s, si) => (
                                          <motion.div
                                            key={s.path}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: ci * 0.05 + si * 0.02 }}
                                          >
                                            <Link
                                              to={s.path}
                                              className="group flex items-center gap-2 px-3 py-2 text-[13px] text-foreground/70 hover:text-foreground rounded-lg hover:bg-primary/5 transition-all duration-200"
                                            >
                                              <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_6px_hsl(38,45%,60%,0.6)] transition-all duration-300" />
                                              <span>{s.name}</span>
                                              <ArrowRight size={10} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
                                            </Link>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Bottom CTA */}
                                <div className="mt-5 pt-4 border-t border-primary/10 flex items-center justify-between">
                                  <p className="text-xs text-muted-foreground">22+ Treatments Available</p>
                                  <Link
                                    to="/contact"
                                    className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1 group transition-colors"
                                  >
                                    Book a Free Consultation
                                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="relative group"
                    >
                      <motion.span
                        whileHover={{ y: -1 }}
                        className={`block px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                          location.pathname === link.path ? "text-primary" : "text-foreground/70 hover:text-foreground"
                        }`}
                      >
                        {link.name}
                      </motion.span>
                      {/* Active indicator - 3D dot */}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="active-nav"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_hsl(38,45%,60%,0.6)]"
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - 3D */}
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:block"
            >
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-2xl overflow-hidden group"
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--gold-dark)) 100%)',
                  boxShadow: '0 1px 0 0 hsl(var(--gold-light) / 0.4) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.2) inset, 0 4px 16px -4px hsl(var(--primary) / 0.4), 0 1px 3px hsl(0 0% 0% / 0.3)',
                }}
              >
                {/* Top highlight for 3D depth */}
                <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl" />
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {/* Glow on hover */}
                <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-primary-foreground font-semibold">Book Consultation</span>
                <Sparkles size={14} className="relative z-10 text-primary-foreground/80" />
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-2xl text-foreground hover:text-primary transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.06) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.3) inset, 0 2px 8px -2px hsl(0 0% 0% / 0.4), 0 0 0 1px hsl(var(--primary) / 0.12)',
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - fullscreen 3D */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 32px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 32px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 top-0 z-40 bg-background/98 backdrop-blur-2xl overflow-y-auto"
          >
            {/* Ambient effects */}
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10 container mx-auto px-6 pt-24 pb-8 space-y-2">
              {navLinks.filter(l => !l.hasDropdown).map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, ease: "easeOut" }}
                >
                  <Link
                    to={link.path}
                    className={`block text-2xl font-serif py-3 transition-colors ${
                      location.pathname === link.path ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Services accordion */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center gap-2 text-2xl font-serif py-3 text-foreground/80 hover:text-primary transition-colors w-full text-left"
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-4 space-y-4">
                        {serviceCategories.map((cat) => (
                          <div key={cat.label}>
                            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary/60 mb-2">{cat.label}</p>
                            <div className="space-y-1">
                              {cat.items.map(s => (
                                <Link
                                  key={s.path}
                                  to={s.path}
                                  className="block text-sm text-foreground/70 hover:text-primary py-1.5 transition-colors"
                                >
                                  {s.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  className="block text-center bg-primary text-primary-foreground py-4 rounded-2xl font-medium text-lg shadow-[0_8px_30px_hsl(38,45%,60%,0.3)] hover:shadow-[0_12px_40px_hsl(38,45%,60%,0.4)] transition-all"
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
