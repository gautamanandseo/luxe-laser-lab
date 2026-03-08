import { motion } from "framer-motion";

const GlowDivider = ({ variant = "gold" }: { variant?: "gold" | "multi" | "subtle" }) => {
  const gradients = {
    gold: "from-transparent via-primary/40 to-transparent",
    multi: "from-transparent via-primary/30 to-transparent",
    subtle: "from-transparent via-primary/15 to-transparent",
  };

  return (
    <div className="relative h-px w-full overflow-hidden">
      {/* Base line */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradients[variant]}`} />
      {/* Animated sweep */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        className="absolute top-0 h-full w-1/3"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(38 50% 75% / 0.6), transparent)",
        }}
      />
      {/* Center glow dot */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-primary/40 blur-sm" />
    </div>
  );
};

export default GlowDivider;
