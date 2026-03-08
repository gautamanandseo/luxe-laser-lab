import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Users } from "lucide-react";

interface LiveViewerCounterProps {
  pageName?: string;
  className?: string;
}

const LiveViewerCounter = ({ pageName = "this page", className = "" }: LiveViewerCounterProps) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Generate realistic base count (12-45)
    const base = 12 + Math.floor(Math.random() * 33);
    setCount(base);

    // Show after 3s
    const showTimer = setTimeout(() => setVisible(true), 3000);

    // Fluctuate count every 8-15s
    const interval = setInterval(() => {
      setCount((c) => {
        const delta = Math.floor(Math.random() * 7) - 3; // -3 to +3
        return Math.max(8, Math.min(55, c + delta));
      });
    }, 8000 + Math.random() * 7000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/10 rounded-full px-3 py-1.5 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-[10px] font-sans text-muted-foreground">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-foreground font-medium tabular-nums"
        >
          {count}
        </motion.span>
        {" "}people viewing {pageName}
      </span>
    </motion.div>
  );
};

export default LiveViewerCounter;
