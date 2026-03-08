import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, Check } from "lucide-react";
import coolsculptingBody from "@/assets/coolsculpting-body.png";

const zones = [
  { id: "chin", label: "Double Chin", desc: "Eliminate submental fullness for a sharper, more defined jawline without surgery.", sessions: "1-2", reduction: "20-25%" },
  { id: "arms", label: "Upper Arms", desc: "Reduce stubborn arm fat for toned, sculpted arms you'll love showing off.", sessions: "1-2", reduction: "20-25%" },
  { id: "bra", label: "Bra Fat", desc: "Smooth away bulges around the bra line for a sleeker silhouette.", sessions: "1-2", reduction: "20-25%" },
  { id: "abdomen", label: "Abdomen", desc: "Target belly fat for a flatter, contoured midsection — the most popular treatment area.", sessions: "2-3", reduction: "27%" },
  { id: "love", label: "Love Handles", desc: "Eliminate flanks for a streamlined, balanced torso profile.", sessions: "1-2", reduction: "20-25%" },
  { id: "back", label: "Lower Back", desc: "Smooth and contour the lower back for a seamless transition.", sessions: "1-2", reduction: "20-25%" },
  { id: "inner", label: "Inner Thighs", desc: "Reduce inner thigh fat for proportional, gap-free legs.", sessions: "1-2", reduction: "20-25%" },
  { id: "outer", label: "Outer Thighs", desc: "Smooth saddle bags for balanced, feminine proportions.", sessions: "1-2", reduction: "20-25%" },
  { id: "knees", label: "Above Knees", desc: "Target knee-area fat for sleeker, more defined leg contour.", sessions: "1", reduction: "20%" },
];

const hotspotPositions: Record<string, { top: string; left: string }> = {
  chin: { top: "14%", left: "50%" },
  arms: { top: "34%", left: "18%" },
  bra: { top: "32%", left: "82%" },
  abdomen: { top: "45%", left: "50%" },
  love: { top: "48%", left: "24%" },
  back: { top: "48%", left: "76%" },
  inner: { top: "68%", left: "42%" },
  outer: { top: "65%", left: "72%" },
  knees: { top: "78%", left: "42%" },
};

const stats = [
  { value: "27%", label: "Fat Reduction", sub: "per session" },
  { value: "0", label: "Downtime", sub: "walk-in walk-out" },
  { value: "9", label: "Treatment Areas", sub: "head to knee" },
  { value: "FDA", label: "Cleared", sub: "since 2010" },
];

const CoolSculptingSection = () => {
  const [activeZone, setActiveZone] = useState("abdomen");
  const active = zones.find(z => z.id === activeZone)!;

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-primary blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Non-Surgical Fat Reduction</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            CoolSculpting® — <em className="text-primary not-italic">Choose</em> Your Area
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Select a treatment area to learn how CoolSculpting® Elite permanently freezes and eliminates stubborn fat cells.
          </p>
        </div>

        {/* Main content: 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left: Body image with hotspots */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[360px]">
              <img
                src={coolsculptingBody}
                alt="CoolSculpting Treatment Areas — 9 FDA-cleared body zones"
                className="w-full h-auto"
              />
              {/* Hotspots */}
              {zones.map(z => {
                const pos = hotspotPositions[z.id];
                const isActive = activeZone === z.id;
                return (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`absolute w-4 h-4 md:w-5 md:h-5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group ${
                      isActive
                        ? "bg-primary scale-[1.8] z-20 ring-4 ring-primary/30"
                        : "bg-primary/50 hover:bg-primary hover:scale-150 z-10"
                    }`}
                    style={{ top: pos.top, left: pos.left }}
                    aria-label={`Select ${z.label}`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '2s' }} />
                    )}
                    {/* Tooltip on hover for non-active */}
                    {!isActive && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card text-foreground text-[10px] font-sans px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
                        {z.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Treatment area selector + detail */}
          <div>
            {/* Zone grid */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {zones.map(z => (
                <button
                  key={z.id}
                  onClick={() => setActiveZone(z.id)}
                  className={`relative px-3 py-3 rounded-lg text-left transition-all duration-300 border ${
                    activeZone === z.id
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border bg-card/50 hover:border-primary/40 hover:bg-card"
                  }`}
                >
                  <p className={`text-xs md:text-sm font-semibold font-sans leading-tight ${
                    activeZone === z.id ? "text-primary" : "text-foreground"
                  }`}>
                    {z.label}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">
                    {z.sessions} sessions
                  </p>
                  {activeZone === z.id && (
                    <motion.div
                      layoutId="zone-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Active zone detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Snowflake size={16} className="text-primary" />
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary">
                        CoolSculpting® Elite
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      {active.label}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl md:text-4xl text-primary">{active.reduction}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">fat reduction</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {active.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>{active.sessions} sessions recommended</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>Zero downtime</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>35-min per cycle</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={14} className="text-primary shrink-0" />
                    <span>Results in 8-12 weeks</span>
                  </div>
                </div>

                <Link
                  to="/coolsculpting"
                  className="inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-[0.1em] hover:gap-3 transition-all"
                >
                  Learn more about {active.label} treatment <ArrowRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl text-primary">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</p>
              <p className="text-[10px] text-muted-foreground/60 mt-0.5">{s.sub}</p>
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
