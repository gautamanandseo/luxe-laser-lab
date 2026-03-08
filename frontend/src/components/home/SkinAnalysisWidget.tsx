import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Upload, Loader2, Sparkles, ArrowRight, Star, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";

interface AnalysisResult {
  skinType: string;
  observations: string[];
  score: number;
  recommendedTreatments: { name: string; reason: string; link: string }[];
  tips: string[];
  summary: string;
}

const SkinAnalysisWidget = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [concerns, setConcerns] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be under 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setImage(dataUrl);
      setImageBase64(dataUrl.split(",")[1]);
      setError(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const analyze = async () => {
    if (!imageBase64) return;
    setLoading(true);
    setError(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("skin-analysis", {
        body: { imageBase64, concerns },
      });

      if (fnError) {
        throw new Error(fnError.message || "Analysis failed");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setResult(data as AnalysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setImageBase64(null);
    setResult(null);
    setError(null);
    setConcerns("");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">AI-Powered</p>
          <h2 className="section-heading">
            Instant Skin <em className="holographic-text" style={{ fontStyle: "italic" }}>Analysis</em>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            Upload a selfie and our AI will analyze your skin, identify concerns, and recommend personalized treatments — all in seconds.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-primary/10 rounded-3xl overflow-hidden depth-shadow">
            {/* Header */}
            <div className="bg-secondary border-b border-primary/10 p-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">AI Skin Analyzer</h3>
                <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-muted-foreground">
                  Powered by AI · 100% confidential
                </p>
              </div>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    {/* Upload area */}
                    <div
                      onClick={() => fileRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                        image
                          ? "border-primary/40 bg-primary/5"
                          : "border-primary/15 hover:border-primary/30 hover:bg-secondary/50"
                      }`}
                    >
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                      />

                      {image ? (
                        <div className="relative inline-block">
                          <img
                            src={image}
                            alt="Uploaded selfie"
                            className="w-32 h-32 rounded-xl object-cover mx-auto border border-primary/20"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setImage(null);
                              setImageBase64(null);
                            }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground"
                          >
                            <X size={12} />
                          </button>
                          <p className="text-xs text-muted-foreground mt-3">Click to change photo</p>
                        </div>
                      ) : (
                        <>
                          <Camera size={32} className="text-primary mx-auto mb-3" />
                          <p className="text-sm text-foreground mb-1">Upload a clear selfie</p>
                          <p className="text-[10px] text-muted-foreground">
                            JPG, PNG or WebP · Max 5MB · Good lighting recommended
                          </p>
                        </>
                      )}
                    </div>

                    {/* Concerns input */}
                    <div>
                      <label className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                        Your concerns (optional)
                      </label>
                      <input
                        type="text"
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="e.g., acne scars, dark circles, pigmentation..."
                        className="w-full bg-secondary border border-primary/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                        <AlertCircle size={16} />
                        {error}
                      </div>
                    )}

                    {/* Analyze button */}
                    <button
                      onClick={analyze}
                      disabled={!imageBase64 || loading}
                      className="gold-shimmer text-primary-foreground w-full py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-[0_8px_30px_hsl(38,45%,60%,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Analyzing Your Skin...
                        </>
                      ) : (
                        <>
                          <Sparkles size={16} />
                          Analyze My Skin
                        </>
                      )}
                    </button>

                    <p className="text-[9px] text-muted-foreground text-center">
                      🔒 Your photo is analyzed securely and never stored. This is for informational purposes only — not a medical diagnosis.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5"
                  >
                    {/* Score */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 bg-secondary rounded-2xl px-6 py-4 border border-primary/10">
                        <div className="font-serif text-4xl holographic-text">{result.score}/10</div>
                        <div className="text-left">
                          <p className="text-xs font-sans uppercase tracking-[0.15em] text-muted-foreground">
                            Skin Health Score
                          </p>
                          <p className="text-sm text-foreground font-medium">{result.skinType} Skin</p>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="body-text text-center">{result.summary}</p>

                    {/* Observations */}
                    <div>
                      <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Key Observations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.observations.map((obs, i) => (
                          <span
                            key={i}
                            className="bg-secondary border border-primary/10 text-foreground/80 text-xs px-3 py-1.5 rounded-full"
                          >
                            {obs}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Treatments */}
                    <div>
                      <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Recommended Treatments
                      </h4>
                      <div className="space-y-2">
                        {result.recommendedTreatments.map((t, i) => (
                          <Link
                            key={i}
                            to={t.link || "/contact"}
                            className="flex items-center gap-3 p-3 bg-secondary/50 hover:bg-secondary border border-transparent hover:border-primary/10 rounded-xl transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <Star size={14} className="text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-foreground font-medium">{t.name}</p>
                              <p className="text-[10px] text-muted-foreground truncate">{t.reason}</p>
                            </div>
                            <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Tips */}
                    {result.tips.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          Skincare Tips
                        </h4>
                        <ul className="space-y-2">
                          {result.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span className="text-primary mt-0.5">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={reset}
                        className="flex-1 py-3 border border-primary/20 text-foreground text-sm font-sans uppercase tracking-[0.1em] rounded-full hover:border-primary/40 transition-colors"
                      >
                        Analyze Again
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 gold-shimmer text-primary-foreground py-3 text-sm font-sans uppercase tracking-[0.1em] rounded-full flex items-center justify-center gap-2 shadow-[0_4px_20px_hsl(38,45%,60%,0.25)]"
                      >
                        Book Consultation <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinAnalysisWidget;
