import { useEffect, useRef, useState } from "react";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/effects/ScrollReveal";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 25000, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 860, suffix: "+", label: "Google Reviews" },
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
    <div ref={ref} className="font-serif text-4xl md:text-5xl holographic-text inline-block">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsBar = () => (
  <section className="bg-secondary relative overflow-hidden py-16">
    {/* Grid background */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="relative z-10 container mx-auto px-6">
      {/* Google Rating Badge */}
      <ScrollReveal direction="scale" className="flex justify-center mb-10">
        <a
          href="https://www.google.com/maps/place/Empathy+Skin+%26+Laser+Hair+Removal+Clinic+Delhi+-+Coolsculpting+-+Skin+Treatments/@28.7013523,77.1246251,15z"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-card/80 backdrop-blur-sm border border-primary/10 hover:border-primary/40 rounded-2xl px-6 py-4 transition-all hover:shadow-[0_0_30px_hsl(38,45%,60%,0.1)]"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:shadow-[0_0_15px_hsl(38,45%,60%,0.2)] transition-all">
            <MapPin size={22} className="text-primary" />
          </div>
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground mb-1">Rated on Google</p>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl text-foreground font-semibold">4.9</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">860+ reviews</span>
            </div>
          </div>
          <span className="ml-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
        </a>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-primary/10">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 0.15}>
            <div className="text-center px-4">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs font-sans uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
