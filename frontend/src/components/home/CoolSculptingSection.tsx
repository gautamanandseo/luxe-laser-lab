import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import coolsculptingBody from "@/assets/coolsculpting-body.png";

const zones = [
  { id: "chin", label: "Double Chin", desc: "Eliminate submental fullness for a defined jawline.", sessions: "1-2", position: { top: "14%", left: "50%" } },
  { id: "arms", label: "Upper Arms", desc: "Reduce stubborn arm fat for toned, sculpted arms.", sessions: "1-2", position: { top: "34%", left: "18%" } },
  { id: "bra", label: "Bra Fat", desc: "Smooth away bulges around the bra line.", sessions: "1-2", position: { top: "32%", left: "82%" } },
  { id: "abdomen", label: "Abdomen", desc: "Target belly fat for a flatter, contoured midsection.", sessions: "2-3", position: { top: "45%", left: "50%" } },
  { id: "love", label: "Love Handles", desc: "Eliminate flanks for a streamlined silhouette.", sessions: "1-2", position: { top: "48%", left: "24%" } },
  { id: "back", label: "Lower Back", desc: "Smooth and contour the lower back area.", sessions: "1-2", position: { top: "48%", left: "76%" } },
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Click on the areas below to see how CoolSculpting® freezes away stubborn fat.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left zones */}
          <div className="space-y-3 order-2 lg:order-1">
            {zones.slice(0, 5).map(z => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeZone === z.id ? "border-primary bg-primary/10 shadow-lg shadow-primary/5" : "border-border hover:border-primary/40 bg-card"
                }`}
              >
                <p className={`text-sm font-semibold ${activeZone === z.id ? "text-primary" : "text-foreground"}`}>{z.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{z.sessions} sessions recommended</p>
              </button>
            ))}
          </div>

          {/* Body silhouette with real image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[300px]">
              <img
                src={coolsculptingBody}
                alt="CoolSculpting Treatment Areas"
                className="w-full h-auto"
              />
              {/* Hotspots */}
              {zones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id)}
                  className={`absolute w-5 h-5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeZone === z.id ? "bg-primary animate-gold-pulse scale-150 z-10" : "bg-primary/60 hover:bg-primary hover:scale-125"
                  }`}
                  style={{ top: z.position.top, left: z.position.left }}
                  title={z.label}
                >
                  <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
                </button>
              ))}

              {/* Detail panel */}
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[280px] bg-card/95 backdrop-blur-md border border-primary/30 rounded-xl p-5 shadow-xl"
                >
                  <h4 className="font-serif text-xl text-primary">{active.label}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{active.desc}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">{active.sessions} sessions</span>
                    <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">27% fat reduction</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right zones */}
          <div className="space-y-3 order-3">
            {zones.slice(5).map(z => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeZone === z.id ? "border-primary bg-primary/10 shadow-lg shadow-primary/5" : "border-border hover:border-primary/40 bg-card"
                }`}
              >
                <p className={`text-sm font-semibold ${activeZone === z.id ? "text-primary" : "text-foreground"}`}>{z.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{z.sessions} sessions recommended</p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-border">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl text-primary">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/coolsculpting"
            className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Explore CoolSculpting® <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoolSculptingSection;
