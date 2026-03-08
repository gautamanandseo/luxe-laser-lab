import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowRight, Twitter, Sparkles, Clock, ExternalLink, Heart, Shield, Award, Star, ChevronRight, MessageCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import EmpathyLogo from "./EmpathyLogo";
import AuroraMesh from "./effects/AuroraMesh";

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
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "FAQ", path: "/#faq" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/empathylaserclinic/", label: "Instagram", color: "from-[#f09433] via-[#e6683c] to-[#bc1888]" },
  { icon: Facebook, href: "https://www.facebook.com/empathylaserclinic", label: "Facebook", color: "from-[#1877F2] to-[#0d65d9]" },
  { icon: Youtube, href: "https://www.youtube.com/user/tourismdentalindia", label: "YouTube", color: "from-[#FF0000] to-[#cc0000]" },
  { icon: Twitter, href: "https://twitter.com/delhilaser", label: "Twitter", color: "from-[#1DA1F2] to-[#0d8dd9]" },
];

const trustBadges = [
  { icon: Shield, label: "USFDA Cleared", detail: "Class II Medical Devices" },
  { icon: Award, label: "Allergan Certified", detail: "Official Partner" },
  { icon: Star, label: "4.9★ Google", detail: "1,200+ Reviews" },
  { icon: Heart, label: "25,000+ Clients", detail: "Since 2009" },
];

/* Floating particles for the CTA */
const FloatingParticle = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary-foreground/10"
    style={{ width: size, height: size, left: x }}
    animate={{
      y: [0, -60, -120],
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  />
);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    const el = footerRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* === TOP CTA BAND === */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-card" />
        <div className="absolute inset-0 noise opacity-30" />
        <div className="relative z-10 container mx-auto px-6 pt-16 pb-12">
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Multi-layer CTA background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(var(--gold-dark))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(0,0%,100%,0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(0,0%,0%,0.15),transparent_50%)]" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <div className="absolute inset-0 noise opacity-10" />

            {/* Animated floating particles */}
            <FloatingParticle delay={0} x="10%" size={6} />
            <FloatingParticle delay={1.2} x="25%" size={4} />
            <FloatingParticle delay={0.5} x="45%" size={8} />
            <FloatingParticle delay={2} x="65%" size={5} />
            <FloatingParticle delay={0.8} x="80%" size={7} />
            <FloatingParticle delay={1.6} x="92%" size={4} />

            {/* Animated shimmer sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            />

            <div className="relative z-10 p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="text-primary-foreground/80" size={24} />
                  </motion.div>
                  <motion.span
                    className="text-xs font-sans uppercase tracking-[0.25em] text-primary-foreground/60"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Begin Your Journey
                  </motion.span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-3 leading-tight">
                  Ready to Rediscover Yourself?
                </h3>
                <p className="text-primary-foreground/70 max-w-lg text-base leading-relaxed">
                  Book a complimentary consultation worth ₹500 and receive a personalized treatment plan from our expert team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold overflow-hidden group"
                    style={{
                      background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(0 0% 92%) 100%)',
                      boxShadow: '0 4px 24px -4px hsl(0 0% 0% / 0.5), 0 1px 0 0 hsl(0 0% 100% / 0.4) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.1) inset',
                      color: 'hsl(var(--primary))',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10 font-bold">Book Free Consultation</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href="https://wa.me/919811157787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges — animated cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-4 rounded-2xl text-center group overflow-hidden cursor-default"
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                  boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.04) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.15) inset, 0 4px 16px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.08)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <badge.icon size={18} className="text-primary" />
                </motion.div>
                <p className="text-sm font-medium text-foreground/80">{badge.label}</p>
                <p className="text-[10px] text-muted-foreground/50 mt-0.5">{badge.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* === Ornamental Divider with pulse === */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
          animate={{
            boxShadow: [
              "0 0 8px hsl(var(--primary))",
              "0 0 20px hsl(var(--primary))",
              "0 0 8px hsl(var(--primary))",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Side accent dots */}
        <div className="absolute left-1/4 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/30" />
        <div className="absolute right-1/4 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/30" />
      </div>

      {/* === MAIN FOOTER === */}
      <div className="relative">
        <div className="absolute inset-0 bg-[hsl(0,0%,2%)]" />
        <AuroraMesh intensity="subtle" className="opacity-30" />
        <div className="absolute inset-0 grid-bg opacity-8" />
        <div className="absolute inset-0 noise opacity-20" />

        {/* Mouse-following ambient glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-[800ms] ease-out"
          style={{
            left: mousePos.x - 250,
            top: mousePos.y - 250,
            background: "radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* === Grid: Brand + Services + Links + Contact === */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
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
              </motion.div>

              {/* Social links — with brand colors on hover */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.2, y: -4, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 group relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                      boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.04) inset, 0 -1px 0 0 hsl(0 0% 0% / 0.2) inset, 0 2px 8px -2px hsl(0 0% 0% / 0.4), 0 0 0 1px hsl(var(--primary) / 0.08)',
                    }}
                  >
                    {/* Brand color bg on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <social.icon size={16} className="relative z-10" />
                  </motion.a>
                ))}
              </div>

              {/* Clinic hours card — with animated border */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                  boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 2px 12px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.08)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                {/* Animated border glow */}
                <motion.div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.2), transparent 40%, transparent 60%, hsl(var(--primary) / 0.2))',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock size={14} className="text-primary" />
                    </motion.div>
                    <p className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary">Clinic Hours</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monday</span>
                      <motion.span
                        className="text-red-400/80 font-medium"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Closed
                      </motion.span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-primary/10 to-transparent" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tue – Sun</span>
                      <span className="text-foreground/80 font-medium flex items-center gap-1.5">
                        <Zap size={10} className="text-green-400" />
                        10 AM – 7 PM
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services - 3 sub-columns */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-8 flex items-center gap-3">
                <motion.span
                  className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/0 inline-block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
                Our Treatments
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1">
                {serviceColumns.map((col, colIdx) => (
                  <div key={col.label} className="mb-6">
                    <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary/40 mb-3 pb-2 border-b border-primary/8">{col.label}</p>
                    <ul className="space-y-0.5">
                      {col.items.map((s, sIdx) => (
                        <motion.li
                          key={s.path}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: colIdx * 0.05 + sIdx * 0.03 }}
                        >
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
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Links + Contact */}
            <motion.div
              className="lg:col-span-4 space-y-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Quick Links */}
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                  <motion.span
                    className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/0 inline-block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {clinicLinks.map((l, i) => (
                    <motion.div
                      key={l.path}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={l.path}
                        className="group flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground py-1.5 transition-all duration-200"
                      >
                        <ArrowRight size={11} className="text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        <span className="relative">
                          {l.name}
                          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary/30 transition-all duration-300" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact info — interactive cards with glow */}
              <div>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3">
                  <motion.span
                    className="w-8 h-px bg-gradient-to-r from-primary/60 to-primary/0 inline-block"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: Phone, href: "tel:+919811157787", label: "Call Us", value: "9811157787 / 9811157784", type: "a" as const },
                    { icon: Mail, href: "mailto:info@empathylaserclinic.com", label: "Email", value: "info@empathylaserclinic.com", type: "a" as const },
                    { icon: MapPin, href: "https://share.google/SClHKya8GwuCKc0hp", label: "Visit Us", value: "Pitampura, Delhi NCR", type: "a" as const, external: true },
                  ].map((contact, i) => (
                    <motion.a
                      key={i}
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group relative overflow-hidden block"
                      style={{
                        background: 'linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                        boxShadow: '0 1px 0 0 hsl(0 0% 100% / 0.03) inset, 0 2px 10px -4px hsl(0 0% 0% / 0.3), 0 0 0 1px hsl(var(--primary) / 0.06)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* Shimmer on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all relative z-10"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        style={{
                          boxShadow: '0 0 0 0 hsl(var(--primary) / 0)',
                        }}
                      >
                        <contact.icon size={16} className="text-primary" />
                      </motion.div>
                      <div className="relative z-10">
                        <p className="text-xs text-muted-foreground/50 uppercase tracking-wider">{contact.label}</p>
                        <p className="text-foreground/80 text-sm font-medium flex items-center gap-1">
                          {contact.value}
                          {contact.external && <ExternalLink size={10} className="opacity-30 group-hover:opacity-60 transition-opacity" />}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* === BOTTOM BAR === */}
        <div className="relative z-10">
          {/* Ornamental divider with shimmer */}
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent w-1/3"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-6 py-8">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-muted-foreground/40 order-2 md:order-1">
                © {new Date().getFullYear()} Empathy Laser Clinic. All rights reserved.
              </p>

              <motion.p
                className="text-xs text-muted-foreground/30 font-serif italic order-1 md:order-2 flex items-center gap-2"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Heart size={10} className="text-primary/40" />
                Trusted by 25,000+ Delhi NCR Clients Since 2009
              </motion.p>

              <div className="flex items-center gap-4 order-3">
                {["Privacy Policy", "Terms", "Sitemap"].map((text, i) => (
                  <span key={text} className="flex items-center gap-4">
                    {i > 0 && <span className="w-px h-3 bg-muted-foreground/15" />}
                    <a
                      href={text === "Sitemap" ? "/sitemap.xml" : "#"}
                      className="text-xs text-muted-foreground/40 hover:text-primary/60 transition-colors duration-300 relative group"
                    >
                      {text}
                      <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary/30 transition-all duration-300" />
                    </a>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
