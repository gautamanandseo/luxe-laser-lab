import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, Check } from "lucide-react";
import coolsculptingBody from "@/assets/coolsculpting-body.png";
import AuroraMesh from "@/components/effects/AuroraMesh";

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

/* Apple-style 3D button */
const ZoneButton = ({ zone, isActive, onClick }: { zone: typeof zones[0]; isActive: boolean; onClick: () => void }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      whileHover={{ y: -3, scale: 1.03 }}
      animate={{
        scale: pressed ? 0.96 : 1,
        rotateX: pressed ? 4 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ perspective: 600, transformStyle: "preserve-3d" }}
      className={`relative px-3 py-3.5 rounded-xl text-left transition-all duration-300 overflow-hidden ${
        isActive
          ? "border-primary/60 bg-gradient-to-b from-primary/15 to-primary/5"
          : "border-border/50 bg-gradient-to-b from-card/80 to-card/40 hover:border-primary/30"
      } border backdrop-blur-sm`}
    >
      {/* Top highlight (Apple-style inner glow) */}
      <div className={`absolute inset-x-0 top-0 h-[1px] ${
        isActive
          ? "bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
      }`} />

      {/* Bottom shadow line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      {/* Inner shadow for 3D depth */}
      <div className={`absolute inset-0 rounded-xl ${
        isActive
          ? "shadow-[inset_0_-3px_6px_hsl(38,45%,60%,0.1),inset_0_1px_2px_hsl(0,0%,100%,0.05)]"
          : "shadow-[inset_0_-3px_6px_hsl(0,0%,0%,0.15),inset_0_1px_2px_hsl(0,0%,100%,0.04)]"
      }`} />

      <div className="relative z-10">
        <p className={`text-xs md:text-sm font-semibold font-sans leading-tight ${
          isActive ? "text-primary" : "text-foreground"
        }`}>
          {zone.label}
        </p>
        <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">
          {zone.sessions} sessions
        </p>
      </div>

      {isActive && (
        <motion.div
          layoutId="zone-indicator"
          className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full shadow-[0_0_8px_hsl(38,45%,60%,0.5)]"
        />
      )}
    </motion.button>
  );
};

const CoolSculptingSection = () => {
  const [activeZone, setActiveZone] = useState("abdomen");
  const active = zones.find(z => z.id === activeZone)!;

  return (
    <section className="py-28 bg-velvet relative overflow-hidden light-rays vignette">
      <AuroraMesh intensity="medium" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[hsl(220,70%,55%)] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Non-Surgical Fat Reduction</p>
          <h2 className="section-heading">
            CoolSculpting® — <em className="holographic-text not-italic" style={{ fontStyle: "normal" }}>Choose</em> Your Area
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            Select a treatment area to learn how CoolSculpting® Elite permanently freezes and eliminates stubborn fat cells.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[360px]">
              <img
                src={coolsculptingBody}
                alt="CoolSculpting Treatment Areas — 9 FDA-cleared body zones"
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              {zones.map(z => {
                const pos = hotspotPositions[z.id];
                const isActive = activeZone === z.id;
                return (
                  <button
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`absolute w-4 h-4 md:w-5 md:h-5 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group ${
                      isActive
                        ? "bg-primary scale-[1.8] z-20 ring-4 ring-primary/30 shadow-[0_0_20px_hsl(38,45%,60%,0.4)]"
                        : "bg-primary/50 hover:bg-primary hover:scale-150 z-10 hover:shadow-[0_0_12px_hsl(38,45%,60%,0.3)]"
                    }`}
                    style={{ top: pos.top, left: pos.left }}
                    aria-label={`Select ${z.label}`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '2s' }} />
                    )}
                    {!isActive && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm text-foreground text-[10px] font-sans px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-primary/20 shadow-lg">
                        {z.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            {/* 3D Apple-style zone buttons */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {zones.map(z => (
                <ZoneButton
                  key={z.id}
                  zone={z}
                  isActive={activeZone === z.id}
                  onClick={() => setActiveZone(z.id)}
                />
              ))}
            </div>

            {/* Info card with depth */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-gradient-to-b from-card/90 to-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 md:p-8 depth-shadow relative overflow-hidden"
              >
                {/* Top highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                {/* Shimmer */}
                <div className="shimmer-sweep absolute inset-0 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Snowflake size={16} className="text-primary drop-shadow-[0_0_6px_hsl(38,45%,60%,0.4)]" />
                        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary">
                          CoolSculpting® Elite
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                        {active.label}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-3xl md:text-4xl holographic-text">{active.reduction}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">fat reduction</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    {active.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[`${active.sessions} sessions recommended`, "Zero downtime", "35-min per cycle", "Results in 8-12 weeks"].map((text, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <Check size={14} className="text-primary shrink-0 drop-shadow-[0_0_4px_hsl(38,45%,60%,0.4)]" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/coolsculpting-delhi"
                    className="inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-[0.1em] hover:gap-3 transition-all group"
                  >
                    Learn more about {active.label} treatment
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats with glow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl holographic-text">{s.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.label}</p>
              <p className="text-[10px] text-muted-foreground/60 mt-0.5">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/coolsculpting-delhi"
              className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)] hover:shadow-[0_12px_40px_hsl(38,45%,60%,0.4)] transition-shadow"
            >
              Explore CoolSculpting® <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoolSculptingSection;
