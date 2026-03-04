import { useState } from "react";
import { motion } from "framer-motion";

const zones = [
  { id: "chin", label: "Double Chin", desc: "Eliminate submental fullness for a defined jawline.", sessions: "1-2", position: { top: "18%", left: "50%" } },
  { id: "arms", label: "Upper Arms", desc: "Reduce stubborn arm fat for toned, sculpted arms.", sessions: "1-2", position: { top: "38%", left: "22%" } },
  { id: "bra", label: "Bra Fat", desc: "Smooth away bulges around the bra line.", sessions: "1-2", position: { top: "35%", left: "78%" } },
  { id: "abdomen", label: "Abdomen", desc: "Target belly fat for a flatter, contoured midsection.", sessions: "2-3", position: { top: "48%", left: "50%" } },
  { id: "love", label: "Love Handles", desc: "Eliminate flanks for a streamlined silhouette.", sessions: "1-2", position: { top: "52%", left: "28%" } },
  { id: "back", label: "Lower Back", desc: "Smooth and contour the lower back area.", sessions: "1-2", position: { top: "52%", left: "72%" } },
  { id: "inner", label: "Inner Thighs", desc: "Reduce inner thigh fat for proportional legs.", sessions: "1-2", position: { top: "68%", left: "42%" } },
  { id: "outer", label: "Outer Thighs", desc: "Smooth saddle bags for balanced proportions.", sessions: "1-2", position: { top: "65%", left: "72%" } },
  { id: "knees", label: "Above Knees", desc: "Target knee-area fat for sleeker leg contour.", sessions: "1", position: { top: "78%", left: "42%" } },
];

const stats = [
  { value: "27%", label: "Fat Reduction" },
  { value: "0", label: "Downtime" },
  { value: "9", label: "Treatment Areas" },
  { value: "FDA", label: "Cleared" },
];

const CoolSculptingSection = () => {
  const [activeZone, setActiveZone] = useState<string | null>("abdomen");
  const active = zones.find(z => z.id === activeZone);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Non-Surgical Fat Reduction</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            CoolSculpting® — <em className="text-primary">Choose</em> Your Area
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left zones */}
          <div className="space-y-3 order-2 lg:order-1">
            {zones.slice(0, 5).map(z => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  activeZone === z.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                }`}
              >
                <p className={`text-sm font-semibold ${activeZone === z.id ? "text-primary" : "text-foreground"}`}>{z.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{z.sessions} sessions recommended</p>
              </button>
            ))}
          </div>

          {/* Body silhouette */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-[420px]">
              {/* Simple body outline */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 120 300" className="w-full h-full" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.3">
                  <ellipse cx="60" cy="30" rx="20" ry="25" />
                  <line x1="60" y1="55" x2="60" y2="160" />
                  <line x1="60" y1="80" x2="20" y2="130" />
                  <line x1="60" y1="80" x2="100" y2="130" />
                  <line x1="60" y1="160" x2="35" y2="280" />
                  <line x1="60" y1="160" x2="85" y2="280" />
                </svg>
              </div>
              {/* Hotspots */}
              {zones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id)}
                  className={`absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all ${
                    activeZone === z.id ? "bg-primary animate-gold-pulse scale-150" : "bg-primary/50 hover:bg-primary"
                  }`}
                  style={{ top: z.position.top, left: z.position.left }}
                />
              ))}
            </div>

            {/* Detail panel */}
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-card border border-border rounded-lg p-4"
              >
                <h4 className="font-serif text-xl text-primary">{active.label}</h4>
                <p className="text-sm text-muted-foreground mt-1">{active.desc}</p>
                <p className="text-xs text-primary mt-2">{active.sessions} sessions · 27% fat reduction</p>
              </motion.div>
            )}
          </div>

          {/* Right zones */}
          <div className="space-y-3 order-3">
            {zones.slice(5).map(z => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  activeZone === z.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                }`}
              >
                <p className={`text-sm font-semibold ${activeZone === z.id ? "text-primary" : "text-foreground"}`}>{z.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{z.sessions} sessions recommended</p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-3xl text-primary">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoolSculptingSection;
