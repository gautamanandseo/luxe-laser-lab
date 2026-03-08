import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"logo" | "bars" | "exit">("logo");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setPhase("exit"), 400);
      setTimeout(onComplete, 1200);
    }
  }, [progress, onComplete]);

  const clampedProgress = Math.min(progress, 100);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Radial glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[60px]" />
        </div>

        {/* Scanning line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Corner brackets */}
        {[
          "top-8 left-8 border-t border-l",
          "top-8 right-8 border-t border-r",
          "bottom-8 left-8 border-b border-l",
          "bottom-8 right-8 border-b border-r",
        ].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 border-primary/30 ${pos}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Logo / brand */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hexagonal ring */}
          <motion.div className="relative w-24 h-24 flex items-center justify-center">
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeDasharray="8 4"
                opacity="0.4"
              />
            </motion.svg>
            <motion.svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.3"
                strokeDasharray="4 8"
                opacity="0.3"
              />
            </motion.svg>

            {/* Center diamond pulse */}
            <motion.div
              className="w-3 h-3 rotate-45 bg-primary/80"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8],
                boxShadow: [
                  "0 0 10px hsl(var(--primary) / 0.3)",
                  "0 0 30px hsl(var(--primary) / 0.6)",
                  "0 0 10px hsl(var(--primary) / 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Brand text */}
          <div className="flex flex-col items-center gap-2">
            <motion.h1
              className="text-2xl md:text-3xl font-display tracking-[0.3em] uppercase text-foreground"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              EMPATHY
            </motion.h1>
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Laser & Skin Clinic
            </motion.p>
          </div>

          {/* Progress bar */}
          <div className="w-48 md:w-64 flex flex-col items-center gap-3 mt-4">
            <div className="w-full h-[1px] bg-muted-foreground/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60"
                style={{ width: `${clampedProgress}%` }}
                transition={{ duration: 0.1 }}
              />
              {/* Glow tip */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/40 blur-md"
                style={{ left: `${clampedProgress}%` }}
              />
            </div>
            <div className="flex justify-between w-full items-center">
              <motion.span
                className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-mono"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Initializing
              </motion.span>
              <span className="text-[10px] text-primary/60 font-mono tabular-nums">
                {Math.round(clampedProgress)}%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Floating data fragments */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[8px] font-mono text-primary/20 tracking-widest"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {["SYS.READY", "LOADING", "◈◈◈", "INIT", "SCAN", "OK"][i]}
          </motion.div>
        ))}
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
