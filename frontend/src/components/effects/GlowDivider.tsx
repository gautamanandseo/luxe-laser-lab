import { motion } from "framer-motion";

const GlowDivider = ({ variant = "gold" }: { variant?: "gold" | "multi" | "subtle" }) => {
  return (
    <div className="relative h-[3px] w-full overflow-hidden">
      {/* Base gradient line */}
      <div className={`absolute inset-0 ${
        variant === "gold"
          ? "bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          : variant === "multi"
          ? "bg-gradient-to-r from-transparent via-[hsl(350,50%,55%,0.3)] via-primary/40 to-transparent"
          : "bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      }`} />

      {/* Top glow line */}
      <div className={`absolute inset-x-0 top-0 h-px ${
        variant === "gold"
          ? "bg-gradient-to-r from-transparent via-[hsl(38,55%,75%,0.6)] to-transparent"
          : variant === "multi"
          ? "bg-gradient-to-r from-transparent via-[hsl(350,50%,55%,0.4)] to-transparent"
          : "bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      }`} />

      {/* Animated traveling light */}
      <motion.div
        animate={{ x: ["-100%", "300%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        className="absolute top-0 h-full w-1/4"
        style={{
          background: variant === "multi"
            ? "linear-gradient(90deg, transparent, hsl(350 50% 55% / 0.5), hsl(38 55% 75% / 0.8), hsl(220 70% 55% / 0.4), transparent)"
            : "linear-gradient(90deg, transparent, hsl(38 55% 75% / 0.8), hsl(38 45% 60% / 0.4), transparent)",
        }}
      />

      {/* Center glow orb */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-6 h-6 rounded-full blur-md" style={{
        background: variant === "multi"
          ? "radial-gradient(circle, hsl(350 50% 55% / 0.4), hsl(38 45% 60% / 0.2), transparent)"
          : "radial-gradient(circle, hsl(38 45% 60% / 0.5), transparent)",
      }} />

      {/* Second traveling light (opposite direction) */}
      {variant !== "subtle" && (
        <motion.div
          animate={{ x: ["300%", "-100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          className="absolute top-0 h-full w-1/6"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(38 50% 75% / 0.5), transparent)",
          }}
        />
      )}
    </div>
  );
};

export default GlowDivider;