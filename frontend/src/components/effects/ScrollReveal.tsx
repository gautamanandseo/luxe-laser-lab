import { motion, type Variants } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

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

const getVariants = (direction: Direction, distance: number, reduced: boolean): Variants => {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

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
      // No blur on reduced motion - handled by the reduced check above
      hidden.filter = "blur(10px)";
      visible.scale = 1;
      visible.filter = "blur(0px)";
      break;
    case "none":
      break;
  }

  return { hidden, visible };
};

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  distance = 40,
}, ref) => {
  const reduced = useReducedMotion();
  const variants = getVariants(direction, distance, reduced);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration: reduced ? 0.3 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
