import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  glareEnabled?: boolean;
  maxTilt?: number;
}

const Tilt3DCard = ({ children, className = "", glareEnabled = true, maxTilt = 12 }: Tilt3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -cy * maxTilt, y: cx * maxTilt });
    setGlare({ x: (cx + 0.5) * 100, y: (cy + 0.5) * 100, opacity: 0.15 });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsla(38, 50%, 75%, ${glare.opacity}), transparent 60%)`,
            transition: "opacity 0.3s",
          }}
        />
      )}
    </motion.div>
  );
};

export default Tilt3DCard;
