import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, X } from "lucide-react";
import { Link } from "react-router-dom";

const getEndTime = () => {
  const stored = localStorage.getItem("countdown-end");
  if (stored) {
    const end = Number(stored);
    if (end > Date.now()) return end;
  }
  // Set 4-hour countdown
  const end = Date.now() + 4 * 60 * 60 * 1000;
  localStorage.setItem("countdown-end", String(end));
  return end;
};

const CountdownTimer = () => {
  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past hero
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

  if (dismissed || !visible) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-[150] hidden lg:block"
    >
      <div className="bg-card/95 backdrop-blur-xl border-b border-primary/15 px-4 py-2">
        <div className="container mx-auto flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-sans uppercase tracking-[0.15em] text-foreground">
              Flash Offer — 20% Off All Treatments
            </span>
          </div>

          {/* Timer digits */}
          <div className="flex items-center gap-1">
            {[
              { val: pad(timeLeft.h), label: "HRS" },
              { val: pad(timeLeft.m), label: "MIN" },
              { val: pad(timeLeft.s), label: "SEC" },
            ].map((unit, i) => (
              <div key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-primary font-bold mx-0.5">:</span>}
                <div className="bg-secondary border border-primary/10 rounded-md px-2 py-1 min-w-[36px] text-center">
                  <span className="text-sm font-mono font-bold text-primary tabular-nums">
                    {unit.val}
                  </span>
                  <span className="block text-[7px] uppercase tracking-widest text-muted-foreground -mt-0.5">
                    {unit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="gold-shimmer text-primary-foreground px-5 py-1.5 text-[10px] font-sans uppercase tracking-[0.15em] rounded-full hover:scale-105 transition-transform"
          >
            Book Now
          </Link>

          <button
            onClick={() => setDismissed(true)}
            className="text-muted-foreground hover:text-foreground transition-colors ml-2"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
