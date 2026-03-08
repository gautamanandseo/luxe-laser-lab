import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  image: string;
  alt: string;
  label?: string;
  className?: string;
}

const BeforeAfterSlider = ({ image, alt, label, className = "" }: BeforeAfterSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl cursor-col-resize select-none border border-primary/10 depth-shadow ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Full image (acts as "after") */}
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* "Before" overlay — grayscale/darker version clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover brightness-50 grayscale"
          draggable={false}
        />
        {/* Before label */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-[9px] font-sans uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-border">
          Before
        </div>
      </div>

      {/* After label */}
      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[9px] font-sans uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
        After
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
        style={{ left: `${position}%` }}
      >
        {/* Shadow glow on the line */}
        <div className="absolute inset-0 w-1 -translate-x-1/2 bg-primary/30 blur-sm" />
      </div>

      {/* Drag handle */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 z-20"
        style={{ left: `${position}%`, x: "-50%" }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        whileHover={{ scale: 1.15 }}
      >
        <div className="w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground flex items-center justify-center shadow-[0_0_20px_hsl(38,45%,60%,0.5)] cursor-grab active:cursor-grabbing">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary-foreground">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      {/* Treatment label */}
      {label && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm text-foreground text-xs font-sans px-4 py-2 rounded-full border border-primary/20 whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
