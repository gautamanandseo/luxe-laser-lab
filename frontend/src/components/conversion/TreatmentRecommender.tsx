import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, Loader2, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type Rec = { title: string; slug: string; why: string; priority?: string };
type Result = { summary: string; recommendations: Rec[]; next_step: string };

const QUESTIONS = [
  {
    key: "goal",
    label: "What's your primary goal?",
    options: ["Permanent hair removal", "Reduce fat / body shape", "Glowing, even skin", "Anti-ageing & lift", "Hair loss / regrowth", "Bridal prep"],
  },
  {
    key: "area",
    label: "Which area concerns you most?",
    options: ["Face", "Full body", "Underarms / bikini", "Belly / thighs", "Scalp / hair", "Under-eyes"],
  },
  {
    key: "skin",
    label: "How would you describe your skin?",
    options: ["Oily / acne-prone", "Dry / dull", "Sensitive", "Pigmented / uneven tone", "Normal / combination"],
  },
  {
    key: "age",
    label: "Your age group?",
    options: ["Under 25", "25–34", "35–44", "45+"],
  },
  {
    key: "downtime",
    label: "Comfort with downtime?",
    options: ["Zero downtime only", "1–2 days OK", "Anything for best result"],
  },
] as const;

const TreatmentRecommender = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  // Auto-pop entry button after 4s
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const reset = () => { setStep(0); setAnswers({}); setResult(null); setLoading(false); };

  const pick = (val: string) => {
    const q = QUESTIONS[step];
    const next = { ...answers, [q.key]: val };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      submit(next);
    }
  };

  const submit = async (finalAnswers: Record<string, string>) => {
    setLoading(true);
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || "qwyywhdadnbacvwrupbl";
      const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3eXl3aGRhZG5iYWN2d3J1cGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODkwOTQsImV4cCI6MjA4ODU2NTA5NH0.njgz7S7KsJyAN-GzKtUtQfShlBnbWBrocyyb2etS73I";
      const url = `https://${projectId}.supabase.co/functions/v1/treatment-recommender`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${anonKey}`,
          apikey: anonKey,
        },
        body: JSON.stringify({ answers: finalAnswers }),
      });
      const data = await res.json();
      if (!res.ok || data?.error) throw new Error(data?.error || `Request failed (${res.status})`);
      setResult(data as Result);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Could not generate recommendations";
      toast.error(msg);
      setStep(QUESTIONS.length - 1);
    } finally {
      setLoading(false);
    }
  };

  const current = QUESTIONS[step];
  const progress = ((step + (result ? 1 : 0)) / QUESTIONS.length) * 100;

  return (
    <>
      {/* Floating entry */}
      <AnimatePresence>
        {shown && !open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(true)}
            className="fixed left-4 bottom-24 md:left-6 md:bottom-28 z-[55] group"
            aria-label="Open AI treatment recommender"
          >
            <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl group-hover:bg-primary/50 transition-colors" />
            <span className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground border border-primary/40 shadow-[0_8px_30px_hsl(38,45%,60%,0.35)] backdrop-blur-xl">
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-xs font-sans uppercase tracking-[0.18em] hidden sm:inline">AI Recommender</span>
              <span className="text-xs font-sans uppercase tracking-[0.18em] sm:hidden">AI</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", damping: 24, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-primary/20 bg-gradient-to-br from-background via-background to-background/80 shadow-[0_30px_80px_-20px_hsl(0,0%,0%,0.8),inset_0_1px_0_hsl(255,255%,255%,0.05)]"
            >
              {/* Aurora accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Header */}
              <div className="relative flex items-center justify-between p-5 border-b border-foreground/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Wand2 size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary">AI Treatment Concierge</p>
                    <h2 className="font-serif text-lg text-foreground">Find your perfect treatment</h2>
                  </div>
                </div>
                <button
                  onClick={() => { setOpen(false); setTimeout(reset, 300); }}
                  className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="Close"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Progress */}
              <div className="relative h-[2px] bg-foreground/5">
                <motion.div
                  className="h-full bg-primary shadow-[0_0_8px_hsl(38,45%,60%,0.5)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Body */}
              <div className="relative p-6 min-h-[280px]">
                {loading && (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <Loader2 size={32} className="text-primary animate-spin" />
                    <p className="text-sm text-foreground/70 font-sans">Analysing your profile…</p>
                  </div>
                )}

                {!loading && !result && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-xs font-sans uppercase tracking-[0.2em] text-foreground/50 mb-3">
                        Step {step + 1} of {QUESTIONS.length}
                      </p>
                      <h3 className="font-serif text-2xl text-foreground mb-5 leading-tight">{current.label}</h3>
                      <div className="grid gap-2">
                        {current.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => pick(opt)}
                            className="group text-left px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-between"
                          >
                            <span className="text-sm font-sans text-foreground/90 group-hover:text-foreground">{opt}</span>
                            <ArrowRight size={14} className="text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                      {step > 0 && (
                        <button
                          onClick={() => setStep(step - 1)}
                          className="mt-4 text-xs font-sans uppercase tracking-[0.18em] text-foreground/50 hover:text-primary transition-colors"
                        >
                          ← Back
                        </button>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}

                {!loading && result && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-xs font-sans uppercase tracking-[0.2em] text-primary mb-3">Your personalised plan</p>
                    <p className="font-serif text-lg text-foreground/90 italic mb-5 leading-snug">"{result.summary}"</p>

                    <div className="space-y-2.5 mb-5">
                      {result.recommendations?.map((r, i) => (
                        <motion.div
                          key={r.slug + i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="p-4 rounded-xl border border-primary/15 bg-primary/[0.03] hover:border-primary/40 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3 mb-1.5">
                            <h4 className="font-serif text-base text-foreground">{r.title}</h4>
                            {r.priority && (
                              <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-primary border border-primary/30 px-2 py-0.5 rounded-full whitespace-nowrap">
                                {r.priority}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-foreground/65 mb-3 leading-relaxed">{r.why}</p>
                          <Link
                            to={r.slug}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.15em] text-primary hover:gap-2.5 transition-all"
                          >
                            Explore treatment <ArrowRight size={12} />
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-foreground/5">
                      <Link
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="flex-1 min-w-[140px] gold-shimmer text-primary-foreground px-4 py-2.5 text-xs font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center justify-center gap-1.5 hover:scale-[1.02] transition-transform"
                      >
                        Book Consultation <ArrowRight size={12} />
                      </Link>
                      <button
                        onClick={reset}
                        className="px-4 py-2.5 text-xs font-sans uppercase tracking-[0.15em] text-foreground/60 hover:text-primary border border-foreground/10 hover:border-primary/40 rounded-full transition-colors"
                      >
                        Restart
                      </button>
                    </div>
                    <p className="text-[10px] text-foreground/40 mt-3 text-center italic">
                      AI-generated guidance · For accurate diagnosis please consult our doctors.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TreatmentRecommender;
