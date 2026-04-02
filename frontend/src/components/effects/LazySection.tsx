import { useRef, useState, useEffect, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  rootMargin?: string;
  fallback?: ReactNode;
}

const defaultFallback = (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

/**
 * Only mounts children when the placeholder enters (or is near) the viewport.
 * Once mounted, stays mounted to preserve state and avoid re-renders.
 */
const LazySection = ({ children, rootMargin = "200px", fallback = defaultFallback }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{mounted ? children : fallback}</div>;
};

export default LazySection;
