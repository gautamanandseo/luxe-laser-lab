import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import EmpathyLogo from "@/components/EmpathyLogo";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 6 + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase("exit"), 500);
      setTimeout(onComplete, 1400);
    }
  }, [progress, onComplete]);

  const clampedProgress = Math.min(progress, 100);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Deep background */}
          <div className="absolute inset-0 bg-[hsl(0,0%,2%)]" />

          {/* Radial gold burst */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-primary/[0.12] blur-[40px]" />
          </motion.div>

          {/* Rotating golden ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <circle cx="150" cy="150" r="140" fill="none" stroke="hsl(38 45% 60%)" strokeWidth="0.5" strokeDasharray="6 12" opacity="0.2" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px]"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 220 220" className="w-full h-full">
              <circle cx="110" cy="110" r="100" fill="none" stroke="hsl(38 45% 60%)" strokeWidth="0.3" strokeDasharray="3 9" opacity="0.15" />
            </svg>
          </motion.div>

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(38 45% 60% / 0.4), hsl(38 55% 75% / 0.6), hsl(38 45% 60% / 0.4), transparent)" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner brackets */}
          {[
            "top-6 left-6 border-t-2 border-l-2",
            "top-6 right-6 border-t-2 border-r-2",
            "bottom-6 left-6 border-b-2 border-l-2",
            "bottom-6 right-6 border-b-2 border-r-2",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute w-10 h-10 border-primary/20 ${pos}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, type: "spring" }}
            />
          ))}

          {/* Center content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-10"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Logo with glow */}
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 20px hsl(38 45% 60% / 0.2))",
                  "drop-shadow(0 0 40px hsl(38 45% 60% / 0.4))",
                  "drop-shadow(0 0 20px hsl(38 45% 60% / 0.2))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <EmpathyLogo size="large" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-[10px] tracking-[0.5em] uppercase text-primary/50 font-sans"
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 0.5, letterSpacing: "0.5em" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Where Precision Meets Luxury
            </motion.p>

            {/* Progress */}
            <div className="w-56 flex flex-col items-center gap-3">
              <div className="w-full h-[2px] bg-muted/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{
                    width: `${clampedProgress}%`,
                    background: "linear-gradient(90deg, hsl(38 45% 60% / 0.5), hsl(38 55% 75%), hsl(38 45% 60% / 0.8))",
                  }}
                  transition={{ duration: 0.1 }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/30 blur-lg"
                  style={{ left: `${clampedProgress}%` }}
                />
              </div>
              <span className="text-[10px] text-primary/40 font-mono tabular-nums tracking-widest">
                {Math.round(clampedProgress)}%
              </span>
            </div>
          </motion.div>

          {/* Floating particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;