const EmpathyLogo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "small" | "large" }) => {
  const sizes = {
    small: { width: 120, height: 40 },
    default: { width: 160, height: 52 },
    large: { width: 220, height: 72 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      viewBox="0 0 220 72"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Decorative stethoscope-like icon */}
      <g transform="translate(10, 8)">
        <path
          d="M12 0 C12 0, 8 4, 8 10 C8 16, 12 18, 12 24 C12 30, 8 32, 8 38"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <circle cx="12" cy="4" r="3" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
      </g>

      {/* EMPATHY text */}
      <text
        x="36"
        y="35"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="28"
        fontWeight="400"
        letterSpacing="6"
        fill="hsl(var(--primary))"
      >
        EMPATHY
      </text>

      {/* REDISCOVER YOURSELF tagline */}
      <text
        x="36"
        y="52"
        fontFamily="'Montserrat', sans-serif"
        fontSize="7"
        fontWeight="300"
        letterSpacing="4"
        fill="hsl(var(--foreground))"
        opacity="0.6"
      >
        REDISCOVER YOURSELF
      </text>
    </svg>
  );
};

export default EmpathyLogo;
