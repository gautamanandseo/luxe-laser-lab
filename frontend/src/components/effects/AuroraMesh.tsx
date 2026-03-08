/**
 * AuroraMesh — Pure CSS aurora effect (zero JS animation overhead).
 * Uses CSS @keyframes for GPU-composited transforms instead of framer-motion JS animations.
 */
interface AuroraMeshProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

const AuroraMesh = ({ className = "", intensity = "medium" }: AuroraMeshProps) => {
  const opacityMap = { subtle: 0.12, medium: 0.22, strong: 0.4 };
  const op = opacityMap[intensity];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full animate-aurora-1"
        style={{
          background: `radial-gradient(ellipse, hsla(38, 45%, 60%, ${op}) 0%, hsla(38, 50%, 75%, ${op * 0.3}) 40%, transparent 70%)`,
          filter: "blur(80px)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full animate-aurora-2"
        style={{
          background: `radial-gradient(ellipse, hsla(350, 40%, 50%, ${op * 0.6}) 0%, hsla(280, 30%, 40%, ${op * 0.3}) 40%, transparent 70%)`,
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-[50%] h-[50%] rounded-full animate-aurora-3"
        style={{
          background: `radial-gradient(ellipse, hsla(30, 60%, 55%, ${op * 0.5}) 0%, transparent 60%)`,
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default AuroraMesh;
