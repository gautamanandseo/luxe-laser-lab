import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, ChevronDown, Info } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";

const treatments = [
  {
    id: "laser-full",
    name: "Full Body Laser Hair Removal",
    sessions: [6, 8, 10],
    pricePerSession: [8000, 7500, 7000],
    popular: true,
  },
  {
    id: "laser-face",
    name: "Face Laser Hair Removal",
    sessions: [6, 8],
    pricePerSession: [2500, 2200],
  },
  {
    id: "laser-underarm",
    name: "Underarm Laser Hair Removal",
    sessions: [6, 8],
    pricePerSession: [1500, 1300],
  },
  {
    id: "coolsculpting",
    name: "CoolSculpting® (per area)",
    sessions: [1, 2, 3],
    pricePerSession: [25000, 22000, 20000],
    popular: true,
  },
  {
    id: "hydrafacial",
    name: "HydraFacial Signature",
    sessions: [1, 4, 6],
    pricePerSession: [5000, 4500, 4000],
  },
  {
    id: "botox",
    name: "Botox (per area)",
    sessions: [1, 2],
    pricePerSession: [8000, 7000],
  },
  {
    id: "prp-hair",
    name: "PRP Hair Treatment",
    sessions: [3, 6, 8],
    pricePerSession: [6000, 5500, 5000],
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    sessions: [1, 3, 6],
    pricePerSession: [3000, 2700, 2500],
  },
];

const TreatmentCalculator = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(0);
  const [selectedSession, setSelectedSession] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const treatment = treatments[selectedTreatment];
  const sessions = treatment.sessions[selectedSession];
  const pricePerSession = treatment.pricePerSession[selectedSession];
  const total = sessions * pricePerSession;

  const savings = useMemo(() => {
    if (selectedSession === 0) return 0;
    const baseTotal = treatment.sessions[selectedSession] * treatment.pricePerSession[0];
    return baseTotal - total;
  }, [selectedSession, treatment, total]);

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">Transparent Pricing</p>
          <h2 className="section-heading">
            Treatment <em className="holographic-text" style={{ fontStyle: "italic" }}>Calculator</em>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            Get an instant estimate for your treatment plan. Final pricing is personalized during your free consultation.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-primary/10 rounded-3xl overflow-hidden depth-shadow">
            {/* Header */}
            <div className="bg-secondary border-b border-primary/10 p-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">Cost Estimator</h3>
                <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
                  Indicative pricing only
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Treatment selector */}
              <div>
                <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                  Select Treatment
                </label>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between p-4 bg-secondary border border-primary/10 rounded-xl text-foreground text-sm hover:border-primary/30 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {treatment.name}
                      {treatment.popular && (
                        <span className="text-[8px] font-sans uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                    </span>
                    <ChevronDown size={16} className={`text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-card border border-primary/15 rounded-xl overflow-hidden z-20 depth-shadow max-h-64 overflow-y-auto"
                      >
                        {treatments.map((t, i) => (
                          <button
                            key={t.id}
                            onClick={() => {
                              setSelectedTreatment(i);
                              setSelectedSession(0);
                              setDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-secondary transition-colors ${
                              i === selectedTreatment ? "bg-secondary text-primary" : "text-foreground"
                            }`}
                          >
                            <span>{t.name}</span>
                            {t.popular && (
                              <span className="text-[8px] font-sans uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Session selector */}
              <div>
                <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                  Number of Sessions
                </label>
                <div className="flex gap-2">
                  {treatment.sessions.map((s, i) => (
                    <motion.button
                      key={s}
                      onClick={() => setSelectedSession(i)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                        i === selectedSession
                          ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(38,45%,60%,0.3)]"
                          : "bg-secondary border-primary/10 text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {s} {s === 1 ? "Session" : "Sessions"}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Price breakdown */}
              <div className="bg-secondary rounded-xl p-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Per session</span>
                  <span className="text-foreground">₹{pricePerSession.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sessions</span>
                  <span className="text-foreground">× {sessions}</span>
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">Package savings</span>
                    <span className="text-primary">- ₹{savings.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between items-end">
                  <span className="text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground">
                    Estimated Total
                  </span>
                  <motion.span
                    key={total}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-serif text-3xl holographic-text"
                  >
                    ₹{total.toLocaleString("en-IN")}
                  </motion.span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-[10px] text-muted-foreground">
                <Info size={12} className="shrink-0 mt-0.5" />
                <p>Prices are indicative. Final pricing is determined after a free in-clinic consultation based on your specific needs and treatment area.</p>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="gold-shimmer text-primary-foreground w-full py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_8px_30px_hsl(38,45%,60%,0.3)]"
              >
                Get Exact Quote — Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCalculator;
