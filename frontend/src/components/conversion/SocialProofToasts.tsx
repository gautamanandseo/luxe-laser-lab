import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const proofItems = [
  { name: "Priya S.", location: "Pitampura", service: "Laser Hair Removal", time: "2 min ago" },
  { name: "Rahul M.", location: "Rohini", service: "CoolSculpting®", time: "5 min ago" },
  { name: "Ananya K.", location: "Punjabi Bagh", service: "HydraFacial", time: "8 min ago" },
  { name: "Deepika R.", location: "Model Town", service: "Botox Treatment", time: "12 min ago" },
  { name: "Vikram T.", location: "Shalimar Bagh", service: "Hair Loss PRP", time: "15 min ago" },
  { name: "Meera J.", location: "Paschim Vihar", service: "Bridal Package", time: "18 min ago" },
  { name: "Amit P.", location: "Netaji Subhash Place", service: "HIFU Face Lift", time: "22 min ago" },
  { name: "Kavita S.", location: "Ashok Vihar", service: "Skin Lightening", time: "25 min ago" },
];

const SocialProofToasts = () => {
  const [current, setCurrent] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start after 15s, then show every 30-45s
    const initialDelay = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 15000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (current < 0) return;

    // Hide after 5s
    const hideTimer = setTimeout(() => setVisible(false), 5000);

    // Show next after 30-45s
    const nextTimer = setTimeout(() => {
      setCurrent((c) => (c + 1) % proofItems.length);
      setVisible(true);
    }, 30000 + Math.random() * 15000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [current]);

  if (current < 0) return null;
  const item = proofItems[current];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-24 left-4 z-[90] max-w-xs hidden lg:block"
        >
          <div className="bg-card/95 backdrop-blur-xl border border-primary/15 rounded-2xl p-4 depth-shadow">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0 border border-primary/20">
                <span className="text-sm font-serif text-primary font-medium">
                  {item.name.charAt(0)}
                </span>
              </div>

              <div className="min-w-0">
                <p className="text-sm text-foreground font-medium leading-tight">
                  {item.name} just booked
                </p>
                <p className="text-xs text-primary font-medium mt-0.5">{item.service}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <MapPin size={9} /> {item.location}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock size={9} /> {item.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Verified badge */}
            <div className="mt-2 pt-2 border-t border-border/50">
              <p className="text-[9px] font-sans uppercase tracking-[0.15em] text-muted-foreground flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified booking · Empathy Laser Clinic
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofToasts;
