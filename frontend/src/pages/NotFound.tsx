import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="font-serif text-9xl md:text-[150px] font-light text-foreground leading-none mb-4 gradient-text">
              404
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-8" />
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Page Not <span className="text-primary">Found</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We couldn't find the page you're looking for. It might have been moved or deleted, but don't worry — you can always head back to our website.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <Home size={16} /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="border border-primary text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
            >
              Get Support <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-foreground/50 mt-12"
          >
            Error Code: {location.pathname}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
