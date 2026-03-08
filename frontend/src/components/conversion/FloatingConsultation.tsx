import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingConsultation = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Attention pulse every 30s for first 3 times
  useEffect(() => {
    if (!visible || open || pulseCount >= 3) return;
    const timer = setInterval(() => {
      setPulseCount((c) => c + 1);
    }, 30000);
    return () => clearInterval(timer);
  }, [visible, open, pulseCount]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[95] hidden lg:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-80 bg-card border border-primary/15 rounded-2xl overflow-hidden depth-shadow mb-2"
          >
            {/* Header */}
            <div className="bg-secondary border-b border-primary/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-foreground">Free Consultation</h4>
                  <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
                    We typically reply instantly
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              {/* Simulated message */}
              <div className="bg-secondary rounded-xl rounded-tl-sm p-3">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Hi! 👋 I'm here to help you find the right treatment. How can I assist you today?
                </p>
                <p className="text-[9px] text-muted-foreground mt-1">Dr. Team · Just now</p>
              </div>

              {/* Quick actions */}
              <div className="space-y-2">
                <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
                  Quick actions
                </p>

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-3 bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/10 rounded-xl transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Calendar size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">Book Free Consultation</p>
                    <p className="text-[10px] text-muted-foreground">Get personalized treatment plan</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>

                <a
                  href="tel:+919811157787"
                  className="flex items-center gap-3 p-3 bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/10 rounded-xl transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">Call Us Now</p>
                    <p className="text-[10px] text-muted-foreground">+91 98111 57787</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://wa.me/919811157787?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/10 rounded-xl transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Send size={16} className="text-emerald-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">WhatsApp Us</p>
                    <p className="text-[10px] text-muted-foreground">Quick response guaranteed</p>
                  </div>
                  <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border/50 p-3 text-center">
              <p className="text-[9px] text-muted-foreground font-sans uppercase tracking-[0.1em]">
                🔒 Your information is 100% confidential
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full gold-shimmer text-primary-foreground flex items-center justify-center shadow-[0_8px_30px_hsl(38,45%,60%,0.4)]"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Attention ring */}
        {!open && pulseCount < 3 && (
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-primary"
          />
        )}

        {/* Unread badge */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center border-2 border-card">
            <span className="text-[9px] font-bold text-destructive-foreground">1</span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingConsultation;
