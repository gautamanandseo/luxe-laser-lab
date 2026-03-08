import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Urgency strip */}
          <div className="bg-primary/90 backdrop-blur-sm text-center py-1.5 px-4">
            <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-primary-foreground font-semibold">
              ✨ Limited Offer — Free Consultation + 20% Off First Session
            </p>
          </div>

          {/* CTA buttons */}
          <div className="bg-background/95 backdrop-blur-xl border-t border-primary/20 px-4 py-3 flex items-center gap-2 shadow-[0_-8px_30px_hsl(0,0%,0%,0.5)]">
            <button
              onClick={() => setDismissed(true)}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>

            <a
              href="tel:+919811157787"
              className="flex-1 flex items-center justify-center gap-2 bg-card border border-primary/20 rounded-full py-2.5 text-foreground text-xs font-sans uppercase tracking-[0.1em] hover:border-primary/50 transition-colors"
            >
              <Phone size={14} className="text-primary" />
              Call Now
            </a>

            <a
              href="https://wa.me/919811157787?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-card border border-green-500/30 rounded-full py-2.5 text-foreground text-xs font-sans uppercase tracking-[0.1em] hover:border-green-500/50 transition-colors"
            >
              <MessageCircle size={14} className="text-green-500" />
              WhatsApp
            </a>

            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-2 gold-shimmer text-primary-foreground rounded-full py-2.5 text-xs font-sans uppercase tracking-[0.1em] shadow-[0_0_15px_hsl(38,45%,60%,0.3)]"
            >
              <Calendar size={14} />
              Book Free
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
