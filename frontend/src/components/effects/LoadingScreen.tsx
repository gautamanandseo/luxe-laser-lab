import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import EmpathyLogo from "@/components/EmpathyLogo";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    // Fast progress: ~1.2s total
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating curve
        const speed = p < 60 ? 8 : p < 85 ? 6 : 4;
        return Math.min(p + speed + Math.random() * 4, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase("exit"), 200);
      setTimeout(onComplete, 800);
    }
  }, [progress, onComplete]);

  const clampedProgress = Math.min(progress, 100);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Deep background */}
          <div className="absolute inset-0 bg-[hsl(0,0%,2%)]" />

          {/* Radial gold burst — pure CSS */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/[0.08] blur-[60px]" />

          {/* Single rotating ring — CSS animation */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] animate-spin"
            style={{ animationDuration: "20s" }}
          >
            <svg viewBox="0 0 260 260" className="w-full h-full">
              <circle cx="130" cy="130" r="120" fill="none" stroke="hsl(38 45% 60%)" strokeWidth="0.5" strokeDasharray="6 12" opacity="0.2" />
            </svg>
          </div>

          {/* Center content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="drop-shadow-[0_0_30px_hsl(38_45%_60%/0.3)]">
              <EmpathyLogo size="large" />
            </div>

            {/* Tagline */}
            <p className="text-[10px] tracking-[0.5em] uppercase text-primary/50 font-sans">
              Where Precision Meets Luxury
            </p>

            {/* Progress */}
            <div className="w-48 flex flex-col items-center gap-3">
              <div className="w-full h-[2px] bg-muted/10 relative overflow-hidden rounded-full">
                <div
                  className="absolute inset-y-0 left-0 transition-[width] duration-75"
                  style={{
                    width: `${clampedProgress}%`,
                    background: "linear-gradient(90deg, hsl(38 45% 60% / 0.5), hsl(38 55% 75%), hsl(38 45% 60% / 0.8))",
                  }}
                />
              </div>
              <span className="text-[10px] text-primary/40 font-mono tabular-nums tracking-widest">
                {Math.round(clampedProgress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
