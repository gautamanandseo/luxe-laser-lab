/**
 * Centralized SEO metadata for every service route.
 * Each key matches the `service` prop passed to ServicePage.
 */
const BASE = "https://empathylaserclinic.com";

export interface ServiceSEO {
  title: string;
  description: string;
  canonical: string;
}

export const serviceSeoData: Record<string, ServiceSEO> = {
  laser: {
    title: "Laser Hair Removal Delhi | Lumenis LightSheer & Alma Soprano | Empathy Clinic",
    description: "Best laser hair removal in Delhi NCR with Lumenis LightSheer Desire & Alma Soprano ICE Platinum. USFDA cleared, painless, permanent. Book free consultation at Empathy Laser Clinic Pitampura.",
    canonical: `${BASE}/laser-hair-removal-delhi`,
  },
  coolsculpting: {
    title: "CoolSculpting Delhi | Fat Freezing Treatment | Empathy Laser Clinic",
    description: "CoolSculpting® Elite in Delhi NCR — #1 FDA-cleared non-surgical fat freezing. 27% fat reduction per session. Best CoolSculpting clinic in Delhi. Book body assessment today.",
    canonical: `${BASE}/coolsculpting-delhi`,
  },
  weightloss: {
    title: "Weight Loss Clinic Delhi | Non-Surgical Fat Reduction | Empathy Clinic",
    description: "Delhi NCR's top weight loss clinic offering non-surgical fat reduction, CoolSculpting, body contouring & medically supervised weight loss programs. Call 9811157787.",
    canonical: `${BASE}/weight-loss-clinic-delhi`,
  },
  skin: {
    title: "Skin Clinic Delhi | Advanced Skin Treatments | Empathy Laser Clinic",
    description: "Best skin clinic in Delhi NCR for pigmentation, skin lightening, anti-ageing, acne scars & facial rejuvenation. USFDA cleared technology. Visit Empathy Clinic Pitampura.",
    canonical: `${BASE}/skin-clinic-delhi`,
  },
  resurfx: {
    title: "ResurFX Laser Skin Resurfacing Delhi | Empathy Laser Clinic",
    description: "ResurFX™ non-ablative fractional laser for acne scars, wrinkles & skin texture in Delhi. Minimal downtime, visible results. Book at Empathy Clinic Pitampura.",
    canonical: `${BASE}/resurfx`,
  },
  botox: {
    title: "Botox & Fillers Delhi | Anti-Wrinkle Injections | Empathy Laser Clinic",
    description: "Expert Botox & dermal filler treatments in Delhi NCR. Allergan-certified clinic. Natural-looking anti-wrinkle, lip fillers & facial contouring. Book at Empathy Clinic.",
    canonical: `${BASE}/botox-fillers-delhi`,
  },
  microdermabrasion: {
    title: "Microdermabrasion Delhi | Skin Polishing Treatment | Empathy Clinic",
    description: "Crystal-free microdermabrasion in Delhi for glowing, smooth skin. Reduce fine lines, pigmentation & dullness. Best skin polishing at Empathy Laser Clinic Pitampura.",
    canonical: `${BASE}/microdermabrasion`,
  },
  bridal: {
    title: "Bridal Packages Delhi | Pre-Wedding Skin & Beauty | Empathy Clinic",
    description: "Luxury bridal beauty packages in Delhi NCR. Laser, facial, skin glow, body contouring & complete pre-wedding makeover. Best bridal clinic in Delhi. Book now.",
    canonical: `${BASE}/bridal-packages-delhi`,
  },
  facials: {
    title: "HydraFacial & Premium Facials Delhi | Empathy Laser Clinic",
    description: "HydraFacial, gold facials & premium facial treatments in Delhi NCR. Deep cleansing, hydration & glow. Best facial clinic in Pitampura Delhi. Book appointment.",
    canonical: `${BASE}/facials`,
  },
  salon: {
    title: "Salon Services Delhi | Hair & Beauty | Empathy Laser Clinic",
    description: "Premium salon services in Delhi NCR — hair styling, waxing, threading & beauty treatments at Empathy Laser Clinic Pitampura. Book appointment.",
    canonical: `${BASE}/salon-services`,
  },
  acne: {
    title: "Acne Treatment Delhi | Acne Scar Removal | Empathy Laser Clinic",
    description: "Best acne treatment & scar removal in Delhi NCR. Chemical peels, laser, PRP for acne scars. Clear skin guaranteed at Empathy Clinic Pitampura. Book consultation.",
    canonical: `${BASE}/acne-treatment-delhi`,
  },
  skinlightening: {
    title: "Skin Lightening Delhi | Pigmentation Treatment | Empathy Clinic",
    description: "Advanced skin lightening & pigmentation removal in Delhi NCR. Laser, chemical peels & glutathione treatments. Safe for Indian skin. Empathy Clinic Pitampura.",
    canonical: `${BASE}/skin-lightening-delhi`,
  },
  antiageing: {
    title: "Anti-Ageing Treatment Delhi | Wrinkle Reduction | Empathy Clinic",
    description: "Best anti-ageing treatments in Delhi NCR — Botox, HIFU, PRP, collagen therapy & skin tightening. Look 10 years younger. Empathy Laser Clinic Pitampura.",
    canonical: `${BASE}/anti-ageing-delhi`,
  },
  hifu: {
    title: "HIFU Face Lift Delhi | Non-Surgical Face Lift | Empathy Clinic",
    description: "HIFU face lift treatment in Delhi NCR — non-surgical skin tightening & lifting. No downtime, visible results in one session. Book at Empathy Clinic Pitampura.",
    canonical: `${BASE}/hifu-treatment-delhi`,
  },
  darkcircles: {
    title: "Dark Circles Treatment Delhi | Under Eye Treatment | Empathy Clinic",
    description: "Best dark circles treatment in Delhi NCR. PRP, fillers, laser & chemical peels for under-eye dark circles. Visible results at Empathy Clinic Pitampura.",
    canonical: `${BASE}/dark-circles-treatment-delhi`,
  },
  skintightening: {
    title: "Skin Tightening Delhi | Non-Surgical Firming | Empathy Clinic",
    description: "Advanced skin tightening in Delhi NCR — HIFU, RF & laser for face and body firming. Non-surgical, no downtime. Book at Empathy Laser Clinic Pitampura.",
    canonical: `${BASE}/skin-tightening-delhi`,
  },
  stretchmarks: {
    title: "Stretch Marks Treatment Delhi | Laser Removal | Empathy Clinic",
    description: "Effective stretch mark removal in Delhi NCR with fractional laser, microneedling & PRP. Reduce stretch marks by 70-90%. Empathy Clinic Pitampura.",
    canonical: `${BASE}/stretch-marks`,
  },
  tattooremoval: {
    title: "Tattoo Removal Delhi | Laser Tattoo Removal | Empathy Clinic",
    description: "Q-switched laser tattoo removal in Delhi NCR. Safe removal of all ink colors. Best tattoo removal clinic in Delhi. Book at Empathy Clinic Pitampura.",
    canonical: `${BASE}/tattoo-removal-delhi`,
  },
  molewart: {
    title: "Mole & Wart Removal Delhi | Safe Removal | Empathy Clinic",
    description: "Safe mole & wart removal in Delhi NCR with RF cautery & laser. Scarless, painless procedure. Book at Empathy Laser Clinic Pitampura Delhi.",
    canonical: `${BASE}/mole-wart-removal`,
  },
  hairloss: {
    title: "Hair Loss Treatment Delhi | PRP & Hair Therapy | Empathy Clinic",
    description: "Best hair loss treatment in Delhi NCR — PRP therapy, mesotherapy, scalp treatment for hair fall. Combat Delhi's hard water damage. Empathy Clinic Pitampura.",
    canonical: `${BASE}/hair-loss-treatment-delhi`,
  },
  hairtransplant: {
    title: "Hair Transplant Delhi | FUE Hair Transplant | Empathy Clinic",
    description: "Expert FUE hair transplant in Delhi NCR by MDS surgeon. Natural results, minimal scarring. Best hair transplant clinic in Delhi. Book at Empathy Clinic.",
    canonical: `${BASE}/hair-transplant-delhi`,
  },
  bodycontouring: {
    title: "Body Contouring Delhi | Non-Surgical Body Shaping | Empathy Clinic",
    description: "Non-surgical body contouring in Delhi NCR — CoolSculpting, RF, ultrasound body shaping. Sculpt your ideal body without surgery. Empathy Clinic Pitampura.",
    canonical: `${BASE}/body-contouring-delhi`,
  },
};
