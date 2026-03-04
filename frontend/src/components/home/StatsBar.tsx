import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 25000, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 12, suffix: "+", label: "Advanced Treatments" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const start = Date.now();
        const animate = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-serif text-4xl md:text-5xl text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsBar = () => (
  <section className="bg-secondary py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
        {stats.map((stat, i) => (
          <div key={i} className="text-center px-4">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
