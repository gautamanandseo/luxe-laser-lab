import empathyLogo from "@/assets/empathy-logo.png";

const EmpathyLogo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "small" | "large" }) => {
  const sizes = {
    small: { width: 120, height: 40 },
    default: { width: 160, height: 52 },
    large: { width: 220, height: 72 },
  };

  const { width, height } = sizes[size];

  return (
    <img
      src={empathyLogo}
      alt="Empathy Laser Clinic - Rediscover Yourself"
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
};

export default EmpathyLogo;
