import { motion, type Variants } from "framer-motion";
import { forwardRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
}

const getVariants = (direction: Direction, distance: number): Variants => {
  const hidden: Record<string, unknown> = { opacity: 0 };
  const visible: Record<string, unknown> = { opacity: 1 };

  switch (direction) {
    case "up":
      hidden.y = distance;
      visible.y = 0;
      break;
    case "down":
      hidden.y = -distance;
      visible.y = 0;
      break;
    case "left":
      hidden.x = distance;
      visible.x = 0;
      break;
    case "right":
      hidden.x = -distance;
      visible.x = 0;
      break;
    case "scale":
      hidden.scale = 0.85;
      hidden.filter = "blur(10px)";
      visible.scale = 1;
      visible.filter = "blur(0px)";
      break;
    case "none":
      break;
  }

  return { hidden, visible };
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  distance = 40,
}: ScrollRevealProps) => {
  const variants = getVariants(direction, distance);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
