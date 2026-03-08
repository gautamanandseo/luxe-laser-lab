import { motion } from "framer-motion";

const GlowDivider = ({ variant = "gold" }: { variant?: "gold" | "multi" | "subtle" }) => {
  return (
    <div className="relative h-[5px] w-full overflow-hidden">
      {/* Ambient glow above and below */}
      <div className={`absolute inset-x-0 -top-8 h-16 ${
        variant === "gold"
          ? "bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent"
          : variant === "multi"
          ? "bg-gradient-to-b from-transparent via-[hsl(350,50%,55%,0.03)] to-transparent"
          : "bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
      }`} />

      {/* Base gradient line */}
      <div className={`absolute inset-0 ${
        variant === "gold"
          ? "bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          : variant === "multi"
          ? "bg-gradient-to-r from-transparent via-[hsl(350,50%,55%,0.4)] via-primary/50 to-transparent"
          : "bg-gradient-to-r from-transparent via-primary/25 to-transparent"
      }`} />

      {/* Top highlight line */}
      <div className={`absolute inset-x-0 top-0 h-px ${
        variant === "gold"
          ? "bg-gradient-to-r from-transparent via-[hsl(38,55%,75%,0.8)] to-transparent"
          : variant === "multi"
          ? "bg-gradient-to-r from-transparent via-[hsl(350,50%,55%,0.5)] to-transparent"
          : "bg-gradient-to-r from-transparent via-primary/25 to-transparent"
      }`} />

      {/* Bottom glow line */}
      <div className={`absolute inset-x-0 bottom-0 h-px ${
        variant === "gold"
          ? "bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          : "bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      }`} />

      {/* Animated traveling light */}
      <motion.div
        animate={{ x: ["-100%", "300%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
        className="absolute top-0 h-full w-1/4"
        style={{
          background: variant === "multi"
            ? "linear-gradient(90deg, transparent, hsl(350 50% 55% / 0.6), hsl(38 55% 75% / 1), hsl(220 70% 55% / 0.5), transparent)"
            : "linear-gradient(90deg, transparent, hsl(38 55% 75% / 1), hsl(38 45% 60% / 0.5), transparent)",
        }}
      />

      {/* Center diamond glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-10 h-10 rounded-full blur-lg" style={{
        background: variant === "multi"
          ? "radial-gradient(circle, hsl(350 50% 55% / 0.5), hsl(38 45% 60% / 0.3), transparent)"
          : "radial-gradient(circle, hsl(38 45% 60% / 0.6), transparent)",
      }} />

      {/* Second traveling light (opposite direction) */}
      {variant !== "subtle" && (
        <motion.div
          animate={{ x: ["300%", "-100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
          className="absolute top-0 h-full w-1/6"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(38 50% 75% / 0.7), transparent)",
          }}
        />
      )}

      {/* Edge sparkle dots */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/60 blur-[1px]" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/60 blur-[1px]" />
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-0.5 h-0.5 rounded-full bg-primary/40" />
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-0.5 h-0.5 rounded-full bg-primary/40" />
    </div>
  );
};

export default GlowDivider;
