import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !show) {
        const lastShown = localStorage.getItem("exit-popup-ts");
        if (lastShown && Date.now() - Number(lastShown) < 86400000) return; // 24h cooldown
        setShow(true);
        localStorage.setItem("exit-popup-ts", String(Date.now()));
      }
    },
    [dismissed, show]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-card border border-primary/20 rounded-3xl overflow-hidden depth-shadow"
          >
            {/* Glow top */}
            <div className="absolute top-0 left-0 right-0 h-1 gold-shimmer" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 radial-glow opacity-60" />

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors z-10"
            >
              <X size={14} />
            </button>

            <div className="p-8 pt-10 text-center">
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20"
              >
                <Gift size={28} className="text-primary" />
              </motion.div>

              <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-2">
                Wait — Don't Leave Yet!
              </h3>
              <p className="body-text mb-6">
                Get an exclusive <span className="text-primary font-medium">20% welcome discount</span> on your first treatment. Book a free consultation today.
              </p>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground mb-6">
                <Clock size={12} className="text-primary" />
                <span>Offer expires in 24 hours</span>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                onClick={close}
                className="gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_8px_30px_hsl(38,45%,60%,0.3)] w-full justify-center"
              >
                Claim 20% Off <ArrowRight size={16} />
              </Link>

              <button
                onClick={close}
                className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
