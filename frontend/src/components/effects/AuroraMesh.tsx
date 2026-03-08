import { motion } from "framer-motion";

interface AuroraMeshProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

const AuroraMesh = ({ className = "", intensity = "medium" }: AuroraMeshProps) => {
  const opacityMap = { subtle: 0.15, medium: 0.3, strong: 0.5 };
  const op = opacityMap[intensity];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary aurora blob */}
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, -20, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsla(38, 45%, 60%, ${op}) 0%, hsla(38, 50%, 75%, ${op * 0.3}) 40%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
      {/* Secondary aurora blob */}
      <motion.div
        animate={{
          x: [0, -60, 40, -80, 0],
          y: [0, 40, -30, 60, 0],
          scale: [1, 0.8, 1.3, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsla(350, 40%, 50%, ${op * 0.6}) 0%, hsla(280, 30%, 40%, ${op * 0.3}) 40%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />
      {/* Tertiary warm accent */}
      <motion.div
        animate={{
          x: [0, 40, -60, 20, 0],
          y: [0, -80, 20, -40, 0],
          scale: [1, 1.1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-[50%] h-[50%] rounded-full"
        style={{
          background: `radial-gradient(ellipse, hsla(30, 60%, 55%, ${op * 0.5}) 0%, transparent 60%)`,
          filter: "blur(90px)",
        }}
      />
    </div>
  );
};

export default AuroraMesh;
