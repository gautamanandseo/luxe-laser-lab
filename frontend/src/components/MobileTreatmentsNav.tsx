import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const treatmentCategories = [
  {
    label: "Laser & Light",
    items: [
      { name: "Laser Hair Removal Delhi", short: "Laser Hair Removal", path: "/laser-hair-removal-delhi" },
      { name: "Tattoo Removal Delhi", short: "Tattoo Removal", path: "/tattoo-removal-delhi" },
      { name: "ResurFX™ Resurfacing Delhi", short: "ResurFX™", path: "/resurfx-delhi" },
    ],
  },
  {
    label: "Face & Skin",
    items: [
      { name: "Skin Treatments Delhi", short: "Skin Clinic", path: "/skin-clinic-delhi" },
      { name: "Acne & Acne Scar Delhi", short: "Acne", path: "/acne-treatment-delhi" },
      { name: "Skin Lightening Delhi", short: "Skin Lightening", path: "/skin-lightening-delhi" },
      { name: "Anti-Ageing Delhi", short: "Anti-Ageing", path: "/anti-ageing-delhi" },
      { name: "HIFU Face Lift Delhi", short: "HIFU", path: "/hifu-treatment-delhi" },
      { name: "Dark Circles Delhi", short: "Dark Circles", path: "/dark-circles-treatment-delhi" },
      { name: "Skin Tightening Delhi", short: "Skin Tightening", path: "/skin-tightening-delhi" },
      { name: "Microdermabrasion Delhi", short: "Microdermabrasion", path: "/microdermabrasion-delhi" },
    ],
  },
  {
    label: "Body",
    items: [
      { name: "CoolSculpting® Delhi", short: "CoolSculpting®", path: "/coolsculpting-delhi" },
      { name: "Weight Loss Clinic Delhi", short: "Weight Loss", path: "/weight-loss-clinic-delhi" },
      { name: "Body Contouring Delhi", short: "Body Contouring", path: "/body-contouring-delhi" },
      { name: "Stretch Marks Delhi", short: "Stretch Marks", path: "/stretch-marks-delhi" },
      { name: "Mole & Wart Removal Delhi", short: "Mole & Wart", path: "/mole-wart-removal-delhi" },
    ],
  },
  {
    label: "Hair & Injectables",
    items: [
      { name: "Hair Loss & PRP Delhi", short: "Hair Loss & PRP", path: "/hair-loss-treatment-delhi" },
      { name: "Hair Transplant Delhi", short: "Hair Transplant", path: "/hair-transplant-delhi" },
      { name: "Botox & Fillers Delhi", short: "Botox & Fillers", path: "/botox-fillers-delhi" },
    ],
  },
  {
    label: "Luxury Experiences",
    items: [
      { name: "Bridal Packages Delhi", short: "Bridal", path: "/bridal-packages-delhi" },
      { name: "Facials & HydraFacial Delhi", short: "Facials", path: "/facials-delhi" },
      { name: "Salon Services Delhi", short: "Salon Services", path: "/salon-services-delhi" },
    ],
  },
];

const allTreatments = treatmentCategories.flatMap((c) => c.items);

const MobileTreatmentsNav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isTreatmentPage = useMemo(
    () => allTreatments.some((t) => t.path === pathname),
    [pathname]
  );

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!isTreatmentPage) return null;

  const current = allTreatments.find((t) => t.path === pathname);

  return (
    <>
      {/* Mobile-only treatments sub-nav */}
      <nav
        aria-label="Treatments navigation"
        className="lg:hidden fixed top-[68px] left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-b border-primary/15"
      >
        <div className="flex items-center gap-2 px-3 py-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open treatments menu"
            aria-expanded={open}
            aria-controls="mobile-treatments-menu"
            className="shrink-0 h-11 px-3 flex items-center gap-2 rounded-xl border border-primary/25 bg-card text-foreground"
          >
            <Menu size={18} className="text-primary shrink-0" />
            <span className="text-[11px] font-sans uppercase tracking-[0.15em]">Treatments</span>
          </button>

          <div className="flex-1 overflow-x-auto no-scrollbar">
            <ul className="flex items-center gap-2 w-max pr-2">
              {allTreatments.slice(0, 8).map((t) => (
                <li key={t.path}>
                  <Link
                    to={t.path}
                    className={`flex items-center h-11 px-3.5 rounded-full text-[12px] whitespace-nowrap border transition-colors ${
                      pathname === t.path
                        ? "border-primary/60 text-primary bg-primary/10"
                        : "border-border text-foreground/75 hover:text-primary hover:border-primary/40"
                    }`}
                    aria-current={pathname === t.path ? "page" : undefined}
                  >
                    {t.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* Spacer so page content is not hidden behind the sub-nav */}
      <div aria-hidden className="lg:hidden h-[60px]" />

      {/* Full treatments drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
            />
            <motion.div
              id="mobile-treatments-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="lg:hidden fixed inset-y-0 left-0 z-[61] w-[88%] max-w-sm bg-background border-r border-primary/20 overflow-y-auto"
            >
              <div className="sticky top-0 flex items-center justify-between gap-3 px-5 py-4 bg-background/95 backdrop-blur-xl border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" />
                  <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary">
                    All Treatments
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close treatments menu"
                  className="w-11 h-11 -mr-2 flex items-center justify-center rounded-xl text-foreground hover:text-primary"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-5 py-5 space-y-6">
                {current && (
                  <p className="text-xs text-muted-foreground">
                    Viewing: <span className="text-foreground">{current.name}</span>
                  </p>
                )}

                {treatmentCategories.map((cat) => (
                  <div key={cat.label}>
                    <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-primary/60 mb-2">
                      {cat.label}
                    </p>
                    <ul className="space-y-0.5">
                      {cat.items.map((t) => (
                        <li key={t.path}>
                          <Link
                            to={t.path}
                            className={`flex items-center gap-2 min-h-[44px] py-2 text-sm transition-colors ${
                              pathname === t.path
                                ? "text-primary"
                                : "text-foreground/75 hover:text-primary"
                            }`}
                            aria-current={pathname === t.path ? "page" : undefined}
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                            {t.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 min-h-[52px] rounded-2xl bg-primary text-primary-foreground font-medium"
                >
                  Book Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileTreatmentsNav;
