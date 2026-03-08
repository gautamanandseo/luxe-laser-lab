import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import AuroraMesh from "@/components/effects/AuroraMesh";
import ParticleField from "@/components/effects/ParticleField";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AuroraMesh intensity="medium" />
      <ParticleField count={20} className="opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-8">
            <h1 className="font-serif text-9xl md:text-[150px] font-light text-foreground leading-none mb-4 holographic-text">
              404
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-8 shadow-[0_0_15px_hsl(38,45%,60%,0.5)]" />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Page Not <span className="holographic-text">Found</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We couldn't find the page you're looking for. It might have been moved or deleted, but don't worry — you can always head back to our website.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link to="/" className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center justify-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)]">
                <Home size={16} /> Back to Home
              </Link>
            </motion.div>
            <Link to="/contact" className="btn-neon text-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center justify-center gap-2 hover:text-primary transition-colors">
              Get Support <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-sm text-foreground/50 mt-12">
            Error Code: {location.pathname}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
