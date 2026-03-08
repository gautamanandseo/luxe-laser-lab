import type { ReactNode } from "react";

const GlowingBorder = ({
  children,
  className = "",
  glowColor = "primary",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) => (
  <div className={`relative group ${className}`}>
    {/* Animated glow border */}
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    {/* Content */}
    <div className="relative">{children}</div>
  </div>
);

export default GlowingBorder;
