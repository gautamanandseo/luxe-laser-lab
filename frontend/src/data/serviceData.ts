import { Sparkles, Snowflake, Sun, Heart, Flower2, Scissors, Syringe, Diamond, Clock, Shield, Award, Users, CheckCircle, Star, Zap, Target, Droplets, Gem, Scan } from "lucide-react";

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  treatment: string;
}

export interface ComparisonItem {
  method: string;
  duration: string;
  pain: string;
  results: string;
  cost: string;
  recommended: boolean;
}

export interface ServiceData {
  id: string;
  title: string;
  accent: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  heroOverlay: string;
  description: string;
  longDescription: string;
  icon: any;
  badge: string;
  benefits: { title: string; description: string; icon: any }[];
  processSteps: ServiceStep[];
  treatmentAreas: { name: string; description: string; duration?: string }[];
  pricing: PricingTier[];
  faqs: FAQ[];
  galleryImages: string[];
  secondaryImage: string;
  processImage: string;
  stats: { value: string; label: string }[];
  testimonials: Testimonial[];
  whyChooseUs: string[];
  comparison?: ComparisonItem[];
  detailedSections?: { title: string; content: string; image?: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  laser: {
    id: "laser",
    title: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "USFDA CLEARED · LUMENIS LIGHTSHEER · ALMA SOPRANO",
    tagline: "Experience Delhi NCR's most trusted laser hair removal",
    heroImage: "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1770572844445-54z2sxh.jpg",
    heroOverlay: "from-background/95 via-background/70 to-background/30",
    description: "Powered by the world's two most advanced laser systems — Lumenis LightSheer Desire™ and Alma Soprano ICE Platinum™ — our treatments are specifically calibrated for Indian skin tones, delivering permanent hair reduction with virtually zero pain and zero downtime.",
    longDescription: "At Empathy Laser Clinic in Delhi NCR, we use the world's gold-standard laser hair removal systems: the Lumenis LightSheer Desire™ (805nm diode with patented vacuum-assist technology) and the Alma Soprano ICE Platinum™ (triple-wavelength 755+810+1064nm with SHR and ICE™ cooling). The LightSheer Desire's vacuum-assist technology gently pulls skin closer to the laser, reducing pain by up to 90% while increasing efficacy. The Soprano ICE Platinum's revolutionary SHR (Super Hair Removal) mode delivers gradual heating with its IN-Motion™ technique — making it virtually painless, even on sensitive areas. Both systems are USFDA cleared and specifically calibrated for Indian skin tones (Fitzpatrick III-VI). We emphasize customized treatment plans and employ a multidisciplinary approach that targets hair follicles at their root, disabling their ability to regrow permanently.",
    icon: Sparkles,
    badge: "USFDA Cleared",
    benefits: [
      { title: "High Precision", description: "The Lumenis LightSheer Desire's 805nm wavelength selectively targets dark, coarse hairs while leaving surrounding skin undamaged. Patented vacuum-assist pulls skin closer for maximum efficacy.", icon: Target },
      { title: "Pain-Free Option", description: "The Alma Soprano ICE Platinum's SHR IN-Motion™ technology delivers gradual heating with ICE™ cooling — making treatment virtually painless, even on sensitive areas like bikini and upper lip.", icon: Clock },
      { title: "Permanent Results", description: "Expect permanent hair loss after 6-8 sessions with either LightSheer or Soprano technology. A long-term solution that frees you from monthly salon visits.", icon: CheckCircle },
      { title: "All Indian Skin Types", description: "Both Lumenis LightSheer and Alma Soprano are proven safe and effective for Fitzpatrick types III-VI — the full range of Indian skin tones.", icon: Shield },
      { title: "Dual Technology Advantage", description: "We select the optimal laser (LightSheer or Soprano) based on your specific skin type, hair density, and treatment area — giving you the best possible results.", icon: Zap },
      { title: "Cost Effective", description: "Calculate what you spend on waxing annually (₹2,000-4,000/month × 12 = ₹24,000-48,000/year). Laser pays for itself within the first year.", icon: Award },
    ],
    processSteps: [
      { number: "01", title: "Free Consultation", description: "Our experts assess your skin type, hair density, growth cycle stage, and create a fully personalized treatment plan — all at no cost." },
      { number: "02", title: "Patch Test", description: "A complimentary patch test ensures your skin responds perfectly. We calibrate the laser intensity specifically for your skin tone and hair type." },
      { number: "03", title: "Treatment Session", description: "Relax as our certified technicians perform the laser treatment. Our advanced cooling system ensures maximum comfort throughout." },
      { number: "04", title: "Post-Care & Follow-Up", description: "Simple aftercare instructions provided. Next session scheduled 4-6 weeks apart to catch the next hair growth cycle (anagen phase) for optimal results." },
    ],
    treatmentAreas: [
      { name: "Full Face", description: "Upper lip, chin, sideburns, forehead — complete facial smoothness", duration: "15-20 mins" },
      { name: "Underarms", description: "No more daily shaving or painful waxing — permanently smooth", duration: "10-15 mins" },
      { name: "Full Arms", description: "Fingers to shoulders — silky smooth arms year-round", duration: "30-40 mins" },
      { name: "Full Legs", description: "Toes to thighs — never worry about stubble again", duration: "45-60 mins" },
      { name: "Bikini / Brazilian", description: "Standard or extended bikini line — done with precision and privacy", duration: "20-30 mins" },
      { name: "Full Body", description: "Complete transformation package — head to toe freedom", duration: "2-3 hours" },
      { name: "Back & Chest (Men)", description: "Popular with men — clean, well-groomed look", duration: "40-60 mins" },
      { name: "Beard Shaping (Men)", description: "Precise neckline and cheek line definition", duration: "15-20 mins" },
    ],
    pricing: [
      { name: "Single Area", price: "Ask for Quote", description: "Perfect for trying out", features: ["Any single small area", "Free consultation", "Patch test included", "Aftercare kit"] },
      { name: "Full Face", price: "Ask for Quote", description: "Complete facial hair removal", features: ["Upper lip + Chin + Sideburns", "6-session package available", "Free touch-ups", "Premium aftercare"], popular: true },
      { name: "Full Body", price: "Ask for Quote", description: "Head to toe transformation", features: ["All body areas included", "Priority scheduling", "Dedicated therapist", "Complimentary spa session"] },
    ],
    faqs: [
      { question: "Is laser hair removal painful?", answer: "Most clients describe it as a mild snapping sensation, like a rubber band. Our advanced cooling system minimizes discomfort significantly. Many clients say it's far less painful than waxing!" },
      { question: "How many sessions will I need?", answer: "Typically 6-8 sessions spaced 4-6 weeks apart for permanent results. This varies based on hair type, color, density, and hormonal factors. Multiple sessions are needed because hair grows in cycles, and the laser is most effective during the anagen (active growth) phase." },
      { question: "Is it safe for Indian skin?", answer: "Absolutely! Both our Lumenis LightSheer Desire (805nm) and Alma Soprano ICE Platinum (triple-wavelength) are specifically calibrated for Indian skin tones (Fitzpatrick III-VI) and are USFDA cleared for all skin types. We've successfully treated 15,000+ Indian clients." },
      { question: "What's the downtime?", answer: "Zero downtime! You can resume normal activities immediately. We recommend avoiding sun exposure and hot showers for 24-48 hours post-treatment." },
      { question: "What laser technology do you use?", answer: "We use two world-leading systems: the Lumenis LightSheer Desire™ with patented vacuum-assist technology for maximum efficacy, and the Alma Soprano ICE Platinum™ with triple-wavelength SHR and ICE™ cooling for the most pain-free experience. Your specialist selects the optimal laser based on your skin type and treatment area." },
      { question: "Laser Hair Removal vs. Waxing — Which is better?", answer: "Waxing removes hair from the root but it regrows in 3-6 weeks. Laser hair removal can significantly reduce hair growth permanently over time, resulting in much longer-lasting results. Plus, no more ingrown hairs or skin darkening from waxing." },
      { question: "Does laser hair removal last forever?", answer: "After completing a full treatment series (6-8 sessions), most people remain hair-free for years to permanently. If hair returns due to hormonal changes, it's typically finer and lighter, requiring only occasional maintenance." },
      { question: "What should I do before getting laser hair removal?", answer: "Stop plucking and waxing at least 4 weeks before. Shave the area 24-48 hours before treatment. Avoid tanning and sun exposure. Inform us about any medications you're taking." },
    ],
    galleryImages: [
      "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1770572844445-54z2sxh.jpg",
      "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769536078267-epk3faf.png",
      "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501926134_8d1rt_images89jpg.jpg",
      "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769501925889_k94q0_LaserHairRemova.jpg",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
    stats: [
      { value: "15K+", label: "Happy Clients" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "6-8", label: "Sessions Needed" },
      { value: "0", label: "Downtime" },
    ],
    testimonials: [
      { name: "Priya M.", rating: 5, text: "After years of painful waxing, this was life-changing. Completely hair-free after 7 sessions! My skin has never been smoother.", treatment: "Full Body Laser" },
      { name: "Anjali S.", rating: 5, text: "The staff made me so comfortable. Zero pain with the cooling system. I've been going for over a year and recommend it to everyone!", treatment: "Full Face" },
      { name: "Ritu K.", rating: 5, text: "Best investment I've made. No more monthly ₹3,000 salon visits. My skin has never looked better and the confidence boost is incredible.", treatment: "Underarms & Bikini" },
      { name: "Rahul T.", rating: 5, text: "As a man, I was hesitant. But the back and chest treatment was quick, professional, and the results speak for themselves.", treatment: "Back & Chest" },
    ],
    whyChooseUs: [
      "USFDA cleared equipment with proven safety record",
      "Certified technicians with 5+ years experience",
      "Advanced cooling system for comfortable treatment",
      "Personalized treatment plans for every client",
      "Free consultation and patch test",
      "Premium aftercare products included",
      "15,000+ successful treatments completed",
      "Specifically calibrated for Indian skin tones",
    ],
    comparison: [
      { method: "Laser Hair Removal", duration: "15-60 mins", pain: "Minimal (rubber band snap)", results: "Permanent after 6-8 sessions", cost: "One-time investment", recommended: true },
      { method: "Waxing", duration: "30-90 mins", pain: "Moderate to High", results: "Regrows in 3-6 weeks", cost: "₹2,000-4,000/month recurring", recommended: false },
      { method: "Shaving", duration: "10-30 mins", pain: "Low (risk of cuts)", results: "Regrows in 1-3 days", cost: "Ongoing razor costs", recommended: false },
      { method: "Threading", duration: "15-30 mins", pain: "Moderate", results: "Regrows in 2-4 weeks", cost: "₹500-1,500/month recurring", recommended: false },
    ],
    detailedSections: [
      {
        title: "What Our Laser Actually Does",
        content: "We use the highly effective 808nm Diode Laser system — the gold standard for hair removal. Unlike older technologies, our diode laser delivers concentrated light energy that is absorbed by melanin in the hair follicle. This energy converts to heat, destroying the follicle's ability to produce new hair growth. The surrounding skin remains completely unaffected thanks to our integrated sapphire cooling tip that maintains skin surface temperature. Each pulse treats hundreds of hairs simultaneously, making treatments fast and efficient."
      },
      {
        title: "Why Multiple Sessions Are Needed",
        content: "Hair grows in three phases: Anagen (active growth), Catagen (transition), and Telogen (resting). Laser is only effective during the Anagen phase when the hair is connected to the follicle. Since only 20-30% of your hair is in the Anagen phase at any given time, multiple sessions are needed to catch all hairs during their growth cycle. This is why we space sessions 4-6 weeks apart — to target a new batch of actively growing hairs each time."
      },
    ],
  },

  coolsculpting: {
    id: "coolsculpting",
    title: "CoolSculpting® Elite",
    accent: "Fat Freezing",
    subtitle: "FDA-CLEARED · ADVANCED NON-SURGICAL BODY CONTOURING",
    tagline: "Freeze away stubborn fat — permanently, without surgery",
    heroImage: "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1769536099287-1ztzqc4.png",
    heroOverlay: "from-[hsl(210,60%,5%)]/95 via-[hsl(210,60%,5%)]/70 to-transparent",
    description: "Tired of diet and exercise not giving you the sculpted look you deserve? CoolSculpting Elite is the next generation of fat-freezing technology — clinically proven to target, freeze, and permanently eliminate stubborn fat cells without surgery, needles, or downtime.",
    longDescription: "CoolSculpting Elite is the latest advancement in non-surgical fat reduction, offering enhanced results over the original CoolSculpting. Using advanced cryolipolysis technology, it precisely cools fat cells to -11°C, triggering their natural death while surrounding tissues remain completely unharmed. The Elite system features redesigned applicators that cover up to 18% more surface area, allowing for faster and more effective sessions. With dual applicators, two areas can be treated simultaneously — significantly reducing overall treatment time. Your body then naturally eliminates these dead fat cells over 2-3 months. The result? A sculpted, contoured body that looks natural because the fat reduction happens gradually.",
    icon: Snowflake,
    badge: "FDA-Cleared Elite",
    benefits: [
      { title: "Up to 27% Fat Reduction", description: "Clinically proven to reduce fat in treated areas by up to 27% per session. Results are visible and measurable.", icon: Target },
      { title: "Completely Non-Invasive", description: "No needles. No incisions. No anesthesia. Just controlled cooling technology that works naturally with your body.", icon: Shield },
      { title: "Permanent Fat Elimination", description: "Once fat cells are frozen and eliminated, they're gone forever. Adults don't produce new fat cells — results are permanent with stable weight.", icon: CheckCircle },
      { title: "Zero Downtime", description: "Return to work, gym, and life immediately after your session. Most clients read, work on laptops, or nap during treatment.", icon: Clock },
      { title: "Elite Dual Applicators", description: "Treat two areas simultaneously for faster, more comprehensive body sculpting. 18% more coverage per applicator than standard.", icon: Zap },
      { title: "8+ Treatment Areas", description: "From double chin to thighs, abdomen to back fat — treat virtually any stubborn problem area on your body.", icon: Users },
    ],
    processSteps: [
      { number: "01", title: "Choose Your Target Area", description: "Select the area where stubborn fat hasn't responded to diet or exercise. Our experts confirm the best treatment plan based on your body goals." },
      { number: "02", title: "Freeze the Fat", description: "The CoolSculpting Elite applicator delivers controlled cooling that freezes fat cells beneath the skin. Elite technology treats two areas simultaneously." },
      { number: "03", title: "Resume Your Routine", description: "Once the 35-60 minute session is complete, return to work, errands, or daily activities right away. No surgery, no anesthesia, no downtime." },
      { number: "04", title: "Watch Fat Disappear", description: "Over 2-3 months, your body naturally processes and eliminates the treated fat cells. Results appear gradual and natural." },
    ],
    treatmentAreas: [
      { name: "Stomach & Abdomen", description: "Target stubborn belly fat for a flatter, toned midsection", duration: "60 mins" },
      { name: "Love Handles & Flanks", description: "Contour your flanks for a streamlined silhouette", duration: "35 mins" },
      { name: "Double Chin", description: "Eliminate submental fullness for a defined, sharp jawline", duration: "35 mins" },
      { name: "Inner & Outer Thighs", description: "Reduce thigh fat for proportional, sculpted legs", duration: "35 mins" },
      { name: "Upper Arms", description: "Sculpt and tone the upper arm area — no more 'bat wings'", duration: "35 mins" },
      { name: "Back & Bra Bulge", description: "Smooth bulges around the bra line and upper/lower back", duration: "35 mins" },
      { name: "Under Buttocks (Banana Roll)", description: "Define the crease between buttocks and thighs", duration: "35 mins" },
      { name: "Male Chest", description: "Reduce pseudogynecomastia for a flatter, masculine chest", duration: "35 mins" },
    ],
    pricing: [
      { name: "Single Area", price: "Ask for Quote", description: "Treat one problem area", features: ["One applicator session", "Body assessment", "Progress tracking", "Aftercare guidance"] },
      { name: "DualSculpting", price: "Ask for Quote", description: "Two areas, one session", features: ["Two areas simultaneously", "50% time savings", "Comprehensive assessment", "Dedicated specialist"], popular: true },
      { name: "Full Transformation", price: "Ask for Quote", description: "Complete body contouring", features: ["Up to 6 areas", "Multiple sessions included", "VIP scheduling", "Complimentary maintenance"] },
    ],
    faqs: [
      { question: "Does CoolSculpting Elite really work?", answer: "Yes! CoolSculpting Elite is a highly effective, FDA-cleared non-surgical fat reduction treatment. With improved applicators and dual treatment capability, Elite delivers more consistent results. Over 12 million treatments have been performed worldwide with proven results." },
      { question: "How does it work?", answer: "CoolSculpting uses cryolipolysis to freeze fat cells to -11°C. At this temperature, fat cells crystallize and die while surrounding tissues remain unharmed. Your body then naturally eliminates these dead cells through your metabolic system over 2-3 months." },
      { question: "Is the fat loss permanent?", answer: "Yes! Once fat cells are eliminated, they're gone forever. Adults don't produce new fat cells, so results are permanent as long as you maintain a stable weight and healthy lifestyle." },
      { question: "How soon will I see results?", answer: "Some people notice changes as early as 3 weeks after treatment. The most dramatic results appear at 2-3 months as your body continues to flush out fat cells. Results look natural because the reduction happens gradually." },
      { question: "Does it hurt?", answer: "You may feel intense cold, tingling, or mild cramping for the first 5-10 minutes. This subsides as the area becomes numb. Most clients read, work on their laptops, or nap during treatment." },
      { question: "Am I a good candidate?", answer: "CoolSculpting is ideal for people near their goal weight with stubborn fat pockets that resist diet and exercise. It's not a weight loss solution but a body contouring treatment. A personalized consultation helps determine if it's right for you." },
      { question: "Is there any downtime?", answer: "No! One of the biggest advantages is zero downtime. You can return to your normal activities — including the gym — right after treatment. Some mild redness, swelling, or tenderness may occur but resolves quickly." },
      { question: "What makes CoolSculpting Elite different from standard CoolSculpting?", answer: "Elite features redesigned applicators with 18% more surface coverage, dual applicators for treating two areas simultaneously, improved cooling technology for more uniform results, and faster treatment times." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1731514721772-329626f84c8b?w=800&q=80",
      "https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?w=800&q=80",
      "https://images.unsplash.com/photo-1762625570087-6d98fca29531?w=800&q=80",
      "https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1762625570087-6d98fca29531?w=1200&q=80",
    stats: [
      { value: "27%", label: "Fat Reduction" },
      { value: "12M+", label: "Treatments Worldwide" },
      { value: "8+", label: "Treatment Areas" },
      { value: "0", label: "Downtime" },
    ],
    testimonials: [
      { name: "Kavita R.", rating: 5, text: "Finally got rid of my stubborn belly fat that no amount of gym could fix. After 2 sessions my abdomen is visibly flatter. Worth every penny!", treatment: "Abdomen" },
      { name: "Neha P.", rating: 5, text: "My love handles are completely gone after 2 sessions. The confidence boost is incredible — I can finally wear fitted kurtas without feeling self-conscious.", treatment: "Love Handles" },
      { name: "Sneha M.", rating: 5, text: "Non-surgical and actually works! I treated my upper arms and can finally wear sleeveless tops confidently. The procedure was so comfortable I fell asleep!", treatment: "Upper Arms" },
      { name: "Amit K.", rating: 5, text: "As a man, I was skeptical. But the results on my chest and love handles are remarkable. No surgery, no downtime — I went to the office right after.", treatment: "Male Chest & Flanks" },
    ],
    whyChooseUs: [
      "Authentic CoolSculpting® Elite machines — not imitations",
      "Certified CoolSculpting specialists with extensive training",
      "DualSculpting capability for faster, comprehensive results",
      "Comprehensive body assessment and customized treatment plan",
      "18% more coverage with Elite applicators",
      "Comfortable, spa-like treatment environment",
      "Proven track record with documented before/after results",
      "Post-treatment follow-up and progress tracking",
    ],
    comparison: [
      { method: "CoolSculpting Elite", duration: "35-60 mins/area", pain: "Minimal (cold sensation)", results: "Permanent fat elimination, 2-3 months to see full results", cost: "One-time investment per area", recommended: true },
      { method: "Liposuction Surgery", duration: "1-3 hours + recovery", pain: "Surgical (anesthesia required)", results: "Immediate but 6-8 weeks recovery", cost: "Higher + hospital costs", recommended: false },
      { method: "Diet & Exercise Alone", duration: "Ongoing daily effort", pain: "None", results: "Cannot spot-reduce specific areas", cost: "Gym membership + time", recommended: false },
      { method: "Fat Dissolving Injections", duration: "15-30 mins", pain: "Moderate (multiple injections)", results: "Gradual, multiple sessions needed", cost: "Per-session recurring cost", recommended: false },
    ],
    detailedSections: [
      {
        title: "What Makes CoolSculpting Elite Superior",
        content: "CoolSculpting Elite represents the next evolution of body contouring. The redesigned C-shaped applicators conform better to your body's natural curves, providing more uniform cooling and consistent results. With 18% more tissue contact than the original, each session treats more fat cells. The dual applicator system means we can treat both love handles, both arms, or both thighs simultaneously — cutting your treatment time in half while delivering superior results."
      },
      {
        title: "The Science of Cryolipolysis",
        content: "Fat cells are more sensitive to cold than other types of cells. CoolSculpting exploits this by cooling fat cells to a precise temperature that triggers apoptosis (natural cell death) without affecting skin, nerves, or muscle tissue. Over the following weeks, your body's lymphatic system naturally processes and permanently eliminates these dead fat cells. This is why results appear gradually — your body is doing the work of removing the fat cells naturally."
      },
    ],
  },

  skin: {
    id: "skin",
    title: "Advanced Skin",
    accent: "Treatments",
    subtitle: "CLINICAL SKINCARE EXCELLENCE",
    tagline: "Transform your skin with medical-grade treatments",
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80",
    heroOverlay: "from-[hsl(150,40%,4%)]/95 via-[hsl(150,40%,4%)]/70 to-transparent",
    description: "From HydraFacials to chemical peels, LED therapy to skin boosters — our clinical-grade skin treatments address every concern with precision and care.",
    longDescription: "Your skin tells your story. Let us help you write a beautiful one. Our advanced skin treatments combine cutting-edge technology with proven clinical techniques to address every skin concern — from acne and pigmentation to aging and dullness. Each treatment is customized to your unique skin type and goals, with protocols specifically developed for Indian skin tones.",
    icon: Sun,
    badge: "Clinical Grade",
    benefits: [
      { title: "Instant Glow", description: "See visible radiance immediately after your first session.", icon: Star },
      { title: "Deep Cleansing", description: "Medical-grade extraction and purification for crystal-clear skin.", icon: Droplets },
      { title: "Anti-Aging", description: "Stimulate collagen production for firmer, younger-looking skin.", icon: Zap },
      { title: "Pigmentation Control", description: "Target and reduce dark spots, melasma, and uneven tone.", icon: Target },
      { title: "Customized Care", description: "Every treatment is tailored to your unique skin concerns.", icon: Users },
      { title: "No Downtime", description: "Most treatments let you return to daily activities immediately.", icon: Clock },
    ],
    processSteps: [
      { number: "01", title: "Skin Analysis", description: "Advanced skin scanner identifies your unique concerns and skin type." },
      { number: "02", title: "Custom Protocol", description: "Our dermatologists create a personalized treatment plan for your goals." },
      { number: "03", title: "Treatment", description: "Relax and enjoy your customized facial treatment in our serene clinic." },
      { number: "04", title: "Home Care", description: "Personalized skincare routine to maintain and enhance your results." },
    ],
    treatmentAreas: [
      { name: "HydraFacial", description: "Deep cleansing, extraction, and hydration in one", duration: "45 mins" },
      { name: "Chemical Peels", description: "Glycolic, salicylic, and TCA peels for skin renewal", duration: "30 mins" },
      { name: "LED Light Therapy", description: "Target acne, aging, and inflammation with light", duration: "20 mins" },
      { name: "Skin Boosters", description: "Hyaluronic acid injections for deep hydration", duration: "45 mins" },
      { name: "PRP Facial", description: "Vampire facial using your own growth factors", duration: "60 mins" },
      { name: "Carbon Laser", description: "Korean glass skin treatment for pore refinement", duration: "45 mins" },
    ],
    pricing: [
      { name: "Express Glow", price: "Ask for Quote", description: "Quick radiance boost", features: ["Basic HydraFacial", "LED therapy add-on", "Hydrating mask", "Sunscreen application"] },
      { name: "Signature Facial", price: "Ask for Quote", description: "Complete skin transformation", features: ["Full HydraFacial", "Chemical peel", "LED therapy", "Custom serum infusion"], popular: true },
      { name: "Premium Package", price: "Ask for Quote", description: "4-session transformation", features: ["4 customized sessions", "Skin analysis included", "Home care kit", "Progress tracking"] },
    ],
    faqs: [
      { question: "What is a HydraFacial?", answer: "HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts impurities, and hydrates skin using patented Vortex technology. It's suitable for all skin types and provides instant results." },
      { question: "How often should I get facials?", answer: "For maintenance, monthly facials are ideal. For specific concerns like acne or pigmentation, we may recommend treatments every 2 weeks initially." },
      { question: "Are chemical peels safe for dark skin?", answer: "Yes! We use carefully selected peels appropriate for Indian skin tones. Our dermatologists customize the peel strength and type for your skin." },
      { question: "What's the downtime for these treatments?", answer: "Most treatments have zero downtime. Chemical peels may cause mild peeling for 2-3 days. We'll advise you based on your specific treatment." },
      { question: "Can I wear makeup after treatment?", answer: "We recommend avoiding makeup for 24 hours after most treatments to let your skin breathe and absorb the benefits fully." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
      "https://images.unsplash.com/photo-1731514771613-991a02407132?w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      "https://images.unsplash.com/photo-1624819318229-f006595a4993?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
    stats: [
      { value: "10K+", label: "Facials Done" },
      { value: "6+", label: "Treatment Types" },
      { value: "98%", label: "Satisfaction" },
      { value: "1st", label: "Session Results" },
    ],
    testimonials: [
      { name: "Meera S.", rating: 5, text: "My skin has never looked better. The HydraFacial is now my monthly ritual!", treatment: "HydraFacial" },
      { name: "Pooja T.", rating: 5, text: "Years of pigmentation gone in just 4 sessions. The team really knows their stuff.", treatment: "Chemical Peels" },
      { name: "Divya R.", rating: 5, text: "Glass skin is real! The carbon laser treatment gave me the smoothest skin ever.", treatment: "Carbon Laser" },
    ],
    whyChooseUs: [
      "Medical-grade equipment and products only",
      "Dermatologist-supervised treatments",
      "Customized protocols for Indian skin",
      "Visible results from first session",
      "Comprehensive skin analysis included",
      "Aftercare and home routine guidance",
    ],
  },

  resurfx: {
    id: "resurfx",
    title: "ResurFX™ Laser",
    accent: "Skin Resurfacing",
    subtitle: "NON-ABLATIVE FRACTIONAL LASER TECHNOLOGY",
    tagline: "Reveal flawless, youthful skin with advanced fractional laser",
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=80",
    heroOverlay: "from-[hsl(200,50%,4%)]/95 via-[hsl(200,50%,4%)]/70 to-transparent",
    description: "ResurFX™ is a revolutionary non-ablative fractional laser that stimulates deep collagen remodeling to treat scars, wrinkles, stretch marks, and uneven skin texture — with minimal downtime.",
    longDescription: "ResurFX™ by Lumenis is a state-of-the-art non-ablative fractional laser that penetrates deep into the skin to stimulate new collagen and elastin production. Unlike ablative lasers that remove the top skin layer, ResurFX works beneath the surface — triggering powerful skin renewal while keeping the outer skin intact. This means faster healing, less discomfort, and outstanding results for acne scars, surgical scars, stretch marks, fine lines, wrinkles, and overall skin texture improvement.",
    icon: Scan,
    badge: "Lumenis Technology",
    benefits: [
      { title: "Collagen Remodeling", description: "Stimulates deep collagen and elastin production for lasting skin renewal.", icon: Zap },
      { title: "Non-Ablative", description: "Works beneath the skin surface — no wound, no peeling, faster recovery.", icon: Shield },
      { title: "Scar Reduction", description: "Highly effective for acne scars, surgical scars, and stretch marks.", icon: Target },
      { title: "Minimal Downtime", description: "Resume normal activities within 24-48 hours with mild redness.", icon: Clock },
      { title: "All Skin Types", description: "Safe and effective across all Fitzpatrick skin types including Indian skin.", icon: Users },
      { title: "Clinically Proven", description: "Backed by extensive clinical studies with FDA-cleared Lumenis technology.", icon: Award },
    ],
    processSteps: [
      { number: "01", title: "Consultation & Analysis", description: "Our specialists assess your skin, identify concerns, and create a customized ResurFX treatment plan." },
      { number: "02", title: "Skin Preparation", description: "Numbing cream is applied 30-40 minutes before treatment for maximum comfort." },
      { number: "03", title: "Laser Treatment", description: "The ResurFX handpiece delivers precise fractional laser energy to the target areas." },
      { number: "04", title: "Post-Care & Healing", description: "Cooling serums applied, aftercare instructions provided. Mild redness subsides in 24-48 hours." },
    ],
    treatmentAreas: [
      { name: "Acne Scars", description: "Reduce deep and shallow acne scarring", duration: "30-45 mins" },
      { name: "Fine Lines & Wrinkles", description: "Smooth periorbital and perioral lines", duration: "20-30 mins" },
      { name: "Stretch Marks", description: "Improve appearance of stretch marks on body", duration: "30-45 mins" },
      { name: "Surgical Scars", description: "Minimize appearance of surgical scarring", duration: "20-30 mins" },
      { name: "Skin Texture", description: "Overall texture refinement and pore reduction", duration: "30 mins" },
      { name: "Full Face Resurfacing", description: "Complete facial skin renewal and tightening", duration: "45-60 mins" },
    ],
    pricing: [
      { name: "Single Session", price: "Ask for Quote", description: "Target one concern area", features: ["One treatment session", "Free consultation", "Numbing cream included", "Post-care products"] },
      { name: "Course of 3", price: "Ask for Quote", description: "Recommended for best results", features: ["3 sessions (monthly)", "Comprehensive skin analysis", "Progress photography", "Home care guidance"], popular: true },
      { name: "Full Renewal", price: "Ask for Quote", description: "Complete skin transformation", features: ["5 sessions package", "Face + neck treatment", "Premium aftercare kit", "Priority scheduling"] },
    ],
    faqs: [
      { question: "What is ResurFX?", answer: "ResurFX is a non-ablative fractional laser by Lumenis that creates microscopic treatment zones deep in the skin to stimulate collagen production. Unlike ablative lasers, it preserves the skin surface for faster healing." },
      { question: "How many sessions are needed?", answer: "Most clients see significant improvement after 3-5 sessions spaced 4-6 weeks apart. The exact number depends on your concern — acne scars may need more sessions than general texture improvement." },
      { question: "Is it painful?", answer: "We apply numbing cream 30-40 minutes before treatment. Most clients describe it as a warm prickling sensation. The built-in cooling system further enhances comfort." },
      { question: "What's the downtime?", answer: "Minimal! Expect mild redness and warmth for 24-48 hours, similar to a mild sunburn. Most clients return to work the next day. Avoid sun exposure for 1 week." },
      { question: "Is ResurFX safe for Indian skin?", answer: "Yes! ResurFX is specifically designed to be safe for darker skin tones. The non-ablative technology significantly reduces the risk of post-inflammatory hyperpigmentation compared to ablative lasers." },
      { question: "Can ResurFX treat stretch marks?", answer: "Absolutely. ResurFX is one of the most effective treatments for stretch marks. It stimulates collagen remodeling in the deeper skin layers to improve both the texture and color of stretch marks." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      "https://images.unsplash.com/photo-1731514771613-991a02407132?w=800&q=80",
      "https://images.unsplash.com/photo-1624819318229-f006595a4993?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=1200&q=80",
    stats: [
      { value: "3-5", label: "Sessions Needed" },
      { value: "FDA", label: "Cleared Tech" },
      { value: "24hr", label: "Avg Recovery" },
      { value: "98%", label: "Satisfaction" },
    ],
    testimonials: [
      { name: "Isha V.", rating: 5, text: "My acne scars have reduced by 80% after just 4 sessions. This treatment is a game-changer!", treatment: "Acne Scars" },
      { name: "Radhika T.", rating: 5, text: "The fine lines around my eyes are virtually gone. My skin looks 10 years younger!", treatment: "Full Face" },
      { name: "Sonia M.", rating: 5, text: "Even my stretch marks from pregnancy have improved dramatically. So grateful for this technology.", treatment: "Stretch Marks" },
    ],
    whyChooseUs: [
      "Genuine Lumenis ResurFX technology",
      "Trained and certified laser specialists",
      "Safe for all Indian skin types",
      "Customizable treatment parameters",
      "Comprehensive pre and post-care protocol",
      "Proven clinical results with documentation",
    ],
  },

  botox: {
    id: "botox",
    title: "Natural-Looking",
    accent: "Botox & Fillers",
    subtitle: "ALLERGAN CERTIFIED · GENUINE PRODUCTS ONLY",
    tagline: "Enhance your beauty, not change it",
    heroImage: "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1770711500404-ywt79g6.jpg",
    heroOverlay: "from-[hsl(280,40%,4%)]/95 via-[hsl(280,40%,4%)]/70 to-transparent",
    description: "Subtle, natural-looking results administered by certified aesthetic physicians. We exclusively use genuine Allergan Botox and premium dermal fillers.",
    longDescription: "The art of injectables lies in enhancement, not transformation. Our certified aesthetic physicians specialize in natural-looking results that refresh your appearance while maintaining your unique features. We use only genuine Allergan Botox and premium dermal fillers like Juvederm and Restylane.",
    icon: Syringe,
    badge: "Allergan Certified",
    benefits: [
      { title: "Natural Results", description: "Subtle enhancements that look like you, just refreshed.", icon: Star },
      { title: "Genuine Products", description: "100% authentic Allergan Botox and premium fillers only.", icon: Shield },
      { title: "Certified Physicians", description: "Treatments by qualified aesthetic medicine specialists.", icon: Award },
      { title: "Quick Treatment", description: "Most procedures take just 15-30 minutes.", icon: Clock },
      { title: "Minimal Downtime", description: "Return to normal activities immediately.", icon: Zap },
      { title: "Long-Lasting", description: "Results that last 4-12 months depending on treatment.", icon: CheckCircle },
    ],
    processSteps: [
      { number: "01", title: "Consultation", description: "Discuss your goals and concerns with our aesthetic physician." },
      { number: "02", title: "Facial Analysis", description: "We analyze your facial structure to plan precise injection points." },
      { number: "03", title: "Treatment", description: "Quick, comfortable procedure with minimal discomfort." },
      { number: "04", title: "Follow-Up", description: "Two-week check-in to assess results and make any adjustments." },
    ],
    treatmentAreas: [
      { name: "Forehead Lines", description: "Smooth horizontal forehead wrinkles", duration: "10 mins" },
      { name: "Crow's Feet", description: "Soften lines around the eyes", duration: "10 mins" },
      { name: "Frown Lines", description: "Reduce the '11' lines between brows", duration: "10 mins" },
      { name: "Lip Enhancement", description: "Natural volume and definition", duration: "20 mins" },
      { name: "Cheek Sculpting", description: "Restore volume and contour", duration: "20 mins" },
      { name: "Jawline Definition", description: "Sharpen and define the jaw", duration: "30 mins" },
    ],
    pricing: [
      { name: "Botox - Single Area", price: "Ask for Quote", description: "Target one concern", features: ["One treatment area", "Genuine Allergan Botox", "Free consultation", "2-week follow-up"] },
      { name: "Botox - Full Face", price: "Ask for Quote", description: "Complete refresh", features: ["Forehead + Frown + Crow's feet", "Natural, balanced results", "Physician administered", "Touch-up if needed"], popular: true },
      { name: "Dermal Fillers", price: "Ask for Quote", description: "Per syringe", features: ["Premium Juvederm/Restylane", "Lips, cheeks, or jawline", "Results last 9-12 months", "Complimentary consultation"] },
    ],
    faqs: [
      { question: "Will I look frozen or unnatural?", answer: "No! Our philosophy is 'less is more.' We aim for natural-looking results that soften lines while preserving your expressions." },
      { question: "How long does Botox last?", answer: "Botox typically lasts 3-4 months. With regular treatments, many clients find results last longer over time." },
      { question: "Is the procedure painful?", answer: "Most clients describe it as a slight pinch. We use very fine needles and can apply numbing cream for sensitive areas." },
      { question: "When will I see results?", answer: "Botox takes 3-7 days to show full effect. Fillers show immediate results, though slight swelling may occur for 24-48 hours." },
      { question: "Are there any side effects?", answer: "Minor bruising or swelling may occur but typically resolves within a few days. Serious side effects are rare when performed by qualified physicians." },
    ],
    galleryImages: [
      "https://images.pexels.com/photos/3762661/pexels-photo-3762661.jpeg?w=800&q=80",
      "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg?w=800&q=80",
      "https://images.unsplash.com/photo-1624819318229-f006595a4993?w=800&q=80",
      "https://images.unsplash.com/photo-1683408640631-2c99fff964d7?w=800&q=80",
    ],
    secondaryImage: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1624819318229-f006595a4993?w=1200&q=80",
    stats: [
      { value: "5K+", label: "Procedures Done" },
      { value: "100%", label: "Genuine Products" },
      { value: "4-6", label: "Months Results" },
      { value: "15min", label: "Avg Treatment" },
    ],
    testimonials: [
      { name: "Sunita K.", rating: 5, text: "Finally found someone who understands 'natural.' My friends just think I look well-rested!", treatment: "Full Face Botox" },
      { name: "Aarti M.", rating: 5, text: "The lip filler looks so natural. Enhanced but still me. The doctor has amazing skills.", treatment: "Lip Fillers" },
      { name: "Rekha P.", rating: 5, text: "I was nervous about looking overdone but the results are perfect. Just smoother and fresher.", treatment: "Forehead Botox" },
    ],
    whyChooseUs: [
      "Only genuine Allergan Botox used",
      "Certified aesthetic medicine physicians",
      "Natural-looking results guaranteed",
      "Comprehensive facial analysis",
      "Touch-up included if needed",
      "Personalized treatment approach",
    ],
  },

  microdermabrasion: {
    id: "microdermabrasion",
    title: "Reveal Radiant",
    accent: "Skin",
    subtitle: "ADVANCED SKIN RENEWAL TECHNOLOGY",
    tagline: "Unveil your skin's natural brilliance",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80",
    heroOverlay: "from-[hsl(30,40%,4%)]/95 via-[hsl(30,40%,4%)]/70 to-transparent",
    description: "Gently exfoliate and rejuvenate your skin with our advanced microdermabrasion treatments. Reduce fine lines, sun damage, and uneven texture for a radiant glow.",
    longDescription: "Microdermabrasion is the gold standard in non-invasive skin resurfacing. Using diamond-tip technology, we gently remove the outermost layer of dead skin cells to reveal the fresh, youthful skin beneath. Perfect for addressing fine lines, sun damage, acne scars, and uneven texture.",
    icon: Diamond,
    badge: "Skin Renewal",
    benefits: [
      { title: "Instant Radiance", description: "See brighter, smoother skin immediately after treatment.", icon: Star },
      { title: "Non-Invasive", description: "No needles, no chemicals, just gentle exfoliation.", icon: Shield },
      { title: "All Skin Types", description: "Safe and effective for every skin type and tone.", icon: Users },
      { title: "Zero Downtime", description: "Return to your day immediately with glowing skin.", icon: Clock },
      { title: "Collagen Boost", description: "Stimulates natural collagen production over time.", icon: Zap },
      { title: "Enhanced Absorption", description: "Skincare products penetrate deeper after treatment.", icon: Droplets },
    ],
    processSteps: [
      { number: "01", title: "Cleanse", description: "Thorough cleansing to remove makeup, oil, and impurities." },
      { number: "02", title: "Exfoliation", description: "Diamond-tip wand gently buffs away dead skin cells." },
      { number: "03", title: "Extraction", description: "Vacuum suction removes debris and unclogs pores." },
      { number: "04", title: "Hydration", description: "Nourishing serums and moisturizers seal in the glow." },
    ],
    treatmentAreas: [
      { name: "Full Face", description: "Complete facial rejuvenation", duration: "30 mins" },
      { name: "Neck & Décolletage", description: "Often-neglected sun damage areas", duration: "20 mins" },
      { name: "Hands", description: "Reduce age spots and texture", duration: "15 mins" },
      { name: "Back", description: "Address back acne and scarring", duration: "30 mins" },
      { name: "Arms", description: "Smooth rough, sun-damaged skin", duration: "20 mins" },
      { name: "Full Body", description: "Complete body skin renewal", duration: "60 mins" },
    ],
    pricing: [
      { name: "Single Session", price: "Ask for Quote", description: "Try it out", features: ["Full face treatment", "Hydrating mask", "SPF application", "Aftercare guidance"] },
      { name: "Course of 4", price: "Ask for Quote", description: "Best results", features: ["4 sessions", "Progressive improvement", "Custom intensity", "Home care kit included"], popular: true },
      { name: "Premium Package", price: "Ask for Quote", description: "Complete transformation", features: ["8 sessions", "Face + Neck treatment", "LED therapy add-on", "Premium skincare kit"] },
    ],
    faqs: [
      { question: "What does microdermabrasion feel like?", answer: "Most describe it as a gentle scratching or suction sensation. It's comfortable and relaxing — many clients even fall asleep during treatment!" },
      { question: "How many sessions do I need?", answer: "For general maintenance, monthly sessions work well. For specific concerns like scarring or pigmentation, a course of 4-6 sessions every 2 weeks is recommended." },
      { question: "Is there any downtime?", answer: "No downtime at all! You may have mild redness for an hour or two, similar to a light workout flush." },
      { question: "Can I combine it with other treatments?", answer: "Absolutely! Microdermabrasion pairs beautifully with chemical peels, LED therapy, and facials." },
      { question: "Is it safe for sensitive skin?", answer: "Yes, we adjust the intensity based on your skin sensitivity. Our diamond-tip technology is gentler than traditional crystal microdermabrasion." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=800&q=80",
      "https://images.unsplash.com/photo-1683408640631-2c99fff964d7?w=800&q=80",
      "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1683408640631-2c99fff964d7?w=1200&q=80",
    stats: [
      { value: "8K+", label: "Treatments" },
      { value: "100%", label: "Safe & Gentle" },
      { value: "0", label: "Downtime" },
      { value: "Instant", label: "Results" },
    ],
    testimonials: [
      { name: "Anita G.", rating: 5, text: "My skin literally glows after every session. It's become my monthly self-care ritual.", treatment: "Full Face" },
      { name: "Prerna S.", rating: 5, text: "Finally found something that helps with my acne scars without being harsh. Love it!", treatment: "Course of 4" },
      { name: "Shalini R.", rating: 5, text: "The texture improvement is incredible. My makeup goes on so smoothly now.", treatment: "Full Face" },
    ],
    whyChooseUs: [
      "Medical-grade diamond-tip technology",
      "Customizable intensity levels",
      "Combined with hydrating treatments",
      "Safe for all skin types",
      "Immediate visible results",
      "No harsh chemicals or crystals",
    ],
  },

  bridal: {
    id: "bridal",
    title: "Your Most",
    accent: "Beautiful Day",
    subtitle: "COMPLETE LUXURY BRIDAL PACKAGES",
    tagline: "Glow on your special day and beyond",
    heroImage: "https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?w=1920&q=80",
    heroOverlay: "from-[hsl(350,40%,4%)]/95 via-[hsl(350,40%,4%)]/70 to-transparent",
    description: "Comprehensive pre-bridal treatments combining laser, skincare, spa, and salon services into a complete wedding transformation journey.",
    longDescription: "Your wedding day deserves nothing less than perfection. Our luxury bridal packages are designed to transform you from the inside out, starting 6 months before your special day. We combine our best treatments — laser hair removal, skin rejuvenation, body contouring, and spa therapies — into a comprehensive bridal journey.",
    icon: Heart,
    badge: "Premium Packages",
    benefits: [
      { title: "Complete Transformation", description: "Head-to-toe beauty prep from skin to hair to body.", icon: Star },
      { title: "6-Month Journey", description: "Gradual, lasting results that build over time.", icon: Clock },
      { title: "Customized Plans", description: "Every package tailored to your specific needs and timeline.", icon: Users },
      { title: "Stress-Free Planning", description: "We handle your beauty schedule so you can focus on wedding prep.", icon: CheckCircle },
      { title: "Bridal Suite", description: "Private treatment room for you and your bridal party.", icon: Gem },
      { title: "HD-Ready Skin", description: "Flawless skin that photographs beautifully.", icon: Zap },
    ],
    processSteps: [
      { number: "01", title: "Bridal Consultation", description: "6 months before: Complete skin and body assessment, personalized plan creation." },
      { number: "02", title: "Treatment Phase", description: "Months 5-2: Laser hair removal, skin treatments, body contouring as needed." },
      { number: "03", title: "Final Prep", description: "Final month: Facials, hydration treatments, final touch-ups." },
      { number: "04", title: "Wedding Week", description: "Bridal glow facial, spa day, makeup trial and final look." },
    ],
    treatmentAreas: [
      { name: "Laser Hair Removal", description: "Full body permanent hair removal", duration: "6 months" },
      { name: "Skin Transformation", description: "Monthly facials and peels for flawless skin", duration: "6 months" },
      { name: "Body Contouring", description: "CoolSculpting for picture-perfect silhouette", duration: "3 months" },
      { name: "Spa Treatments", description: "Relaxation and de-stress therapies", duration: "Ongoing" },
      { name: "Bridal Glow Facial", description: "Week-of intensive hydration treatment", duration: "1 session" },
      { name: "HD Makeup", description: "Airbrush bridal makeup for the big day", duration: "D-Day" },
    ],
    pricing: [
      { name: "Essential Bride", price: "Ask for Quote", description: "Core treatments", features: ["Full face laser (6 sessions)", "4 HydraFacials", "Bridal glow facial", "Pre-wedding spa session"] },
      { name: "Radiant Bride", price: "Ask for Quote", description: "Complete transformation", features: ["Full body laser", "Monthly skin treatments", "CoolSculpting (2 areas)", "Spa package", "HD Bridal makeup"], popular: true },
      { name: "Royal Bride", price: "Ask for Quote", description: "Ultimate luxury", features: ["Everything in Radiant", "Premium skincare kit", "Bridesmaids packages (2)", "VIP scheduling", "Dedicated bridal coordinator"] },
    ],
    faqs: [
      { question: "When should I start my bridal prep?", answer: "Ideally 6 months before your wedding. This allows enough time for complete laser hair removal and gradual skin transformation." },
      { question: "Can I customize my package?", answer: "Absolutely! Every bride is unique. We'll create a personalized plan based on your specific concerns, timeline, and budget." },
      { question: "Do you offer packages for the bridal party?", answer: "Yes! We have special rates for bridesmaids and mothers. Many brides book group spa days as pre-wedding bonding activities." },
      { question: "What if I have a skin reaction close to the wedding?", answer: "We schedule treatments carefully. Your final facial will be 5-7 days before the wedding — enough time for maximum glow without risk." },
      { question: "Is the makeup included in all packages?", answer: "HD Bridal Makeup is included in Radiant and Royal packages. For Essential, it can be added separately." },
    ],
    galleryImages: [
      "https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?w=800&q=80",
      "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=800&q=80",
      "https://images.unsplash.com/photo-1624819318229-f006595a4993?w=800&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1624819318229-f006595a4993?w=1200&q=80",
    stats: [
      { value: "500+", label: "Happy Brides" },
      { value: "6", label: "Month Journey" },
      { value: "100%", label: "HD-Ready Skin" },
      { value: "5★", label: "Reviews" },
    ],
    testimonials: [
      { name: "Aisha K.", rating: 5, text: "Started my journey 6 months before and looked absolutely flawless on my wedding day!", treatment: "Radiant Bride" },
      { name: "Rhea M.", rating: 5, text: "The team made me feel like a princess. My skin glowed in every photo!", treatment: "Royal Bride" },
      { name: "Simran P.", rating: 5, text: "My bridesmaids and I had the best spa day here. Perfect pre-wedding bonding!", treatment: "Group Package" },
    ],
    whyChooseUs: [
      "Dedicated bridal beauty coordinator",
      "Private bridal suite available",
      "Flexible scheduling around wedding prep",
      "Customizable packages for any budget",
      "HD-camera ready skin guarantee",
      "Bridesmaids and family packages",
    ],
  },

  spa: {
    id: "spa",
    title: "Indulge in",
    accent: "Complete Wellness",
    subtitle: "THERAPEUTIC SPA TREATMENTS",
    tagline: "Rejuvenate your body, refresh your mind",
    heroImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80",
    heroOverlay: "from-[hsl(180,40%,4%)]/95 via-[hsl(180,40%,4%)]/70 to-transparent",
    description: "Experience complete relaxation with our therapeutic spa treatments. From Swedish massage to detox wraps, rejuvenate your body and mind.",
    longDescription: "Step into our serene spa sanctuary and leave the world behind. Our therapeutic spa treatments are designed to melt away stress, ease muscle tension, and restore your natural balance. Every treatment is performed by certified therapists using premium products.",
    icon: Flower2,
    badge: "Wellness",
    benefits: [
      { title: "Stress Relief", description: "Melt away tension with therapeutic massage techniques.", icon: Star },
      { title: "Muscle Recovery", description: "Ease aches and improve flexibility with targeted treatments.", icon: Zap },
      { title: "Detoxification", description: "Eliminate toxins with our body wraps and scrubs.", icon: Droplets },
      { title: "Better Sleep", description: "Relaxation treatments that improve sleep quality.", icon: Clock },
      { title: "Skin Nourishment", description: "Body treatments that leave skin soft and glowing.", icon: Star },
      { title: "Mental Clarity", description: "Clear your mind and boost your mood.", icon: CheckCircle },
    ],
    processSteps: [
      { number: "01", title: "Arrive & Unwind", description: "Start with herbal tea in our relaxation lounge." },
      { number: "02", title: "Consultation", description: "Discuss your needs and customize your treatment." },
      { number: "03", title: "Treatment", description: "Enjoy your spa experience in our serene treatment room." },
      { number: "04", title: "Afterglow", description: "Relax post-treatment with refreshments before departing." },
    ],
    treatmentAreas: [
      { name: "Swedish Massage", description: "Classic relaxation massage", duration: "60-90 mins" },
      { name: "Deep Tissue", description: "Intensive muscle relief", duration: "60-90 mins" },
      { name: "Hot Stone Therapy", description: "Heated stones for deep relaxation", duration: "75 mins" },
      { name: "Aromatherapy", description: "Essential oil infused massage", duration: "60 mins" },
      { name: "Body Scrub & Wrap", description: "Exfoliation and nourishment", duration: "90 mins" },
      { name: "Couple Spa", description: "Side-by-side relaxation", duration: "90 mins" },
    ],
    pricing: [
      { name: "Express Escape", price: "Ask for Quote", description: "Quick relaxation", features: ["30-min back massage", "Scalp massage", "Aromatherapy", "Herbal tea"] },
      { name: "Signature Spa", price: "Ask for Quote", description: "Complete relaxation", features: ["60-min full body massage", "Body scrub", "Head massage", "Post-spa refreshments"], popular: true },
      { name: "Ultimate Indulgence", price: "Ask for Quote", description: "Half-day retreat", features: ["90-min massage", "Body wrap", "Facial", "Manicure/Pedicure", "Lunch included"] },
    ],
    faqs: [
      { question: "What should I wear to the spa?", answer: "We provide robes, slippers, and disposable undergarments. Wear whatever is comfortable for your commute." },
      { question: "How early should I arrive?", answer: "We recommend arriving 15-20 minutes early to complete paperwork and start relaxing." },
      { question: "Can I request a specific therapist?", answer: "Absolutely! Let us know when booking and we'll accommodate your preference." },
      { question: "What if I have a health condition?", answer: "Please inform us of any health conditions, allergies, or pregnancy when booking." },
      { question: "Do you offer couple packages?", answer: "Yes! Our couple spa room allows you to enjoy treatments side-by-side." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
      "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?w=800&q=80",
      "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=800&q=80",
      "https://images.unsplash.com/photo-1769253523308-f7bff35c60b1?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=1200&q=80",
    stats: [
      { value: "12K+", label: "Spa Sessions" },
      { value: "20+", label: "Treatments" },
      { value: "100%", label: "Relaxation" },
      { value: "5★", label: "Experience" },
    ],
    testimonials: [
      { name: "Deepika S.", rating: 5, text: "The hot stone massage was heavenly. Best spa experience in Delhi hands down.", treatment: "Hot Stone Therapy" },
      { name: "Nisha R.", rating: 5, text: "My husband and I loved the couple spa. Perfect anniversary celebration!", treatment: "Couple Spa" },
      { name: "Pallavi M.", rating: 5, text: "I come here monthly for my stress relief. The ambiance is so calming.", treatment: "Swedish Massage" },
    ],
    whyChooseUs: [
      "Certified, experienced therapists",
      "Premium aromatherapy products",
      "Serene, ambient treatment rooms",
      "Couple spa suite available",
      "Complimentary refreshments",
      "Flexible booking and packages",
    ],
  },

  salon: {
    id: "salon",
    title: "Expert Beauty",
    accent: "Services",
    subtitle: "PREMIUM SALON EXPERIENCE",
    tagline: "Where expertise meets elegance",
    heroImage: "https://images.pexels.com/photos/4783290/pexels-photo-4783290.jpeg?w=1920&q=80",
    heroOverlay: "from-[hsl(320,40%,4%)]/95 via-[hsl(320,40%,4%)]/70 to-transparent",
    description: "Expert hair, nail, makeup, and grooming services delivered with clinical precision and luxury experience.",
    longDescription: "Our premium salon brings the same level of excellence and attention to detail you expect from Empathy Laser Clinic to everyday beauty services. From precision haircuts to artistic nail designs, every service is performed by trained professionals using premium products.",
    icon: Scissors,
    badge: "Expert Stylists",
    benefits: [
      { title: "Expert Stylists", description: "Trained professionals with years of experience.", icon: Award },
      { title: "Premium Products", description: "Only the best brands for your hair and nails.", icon: Star },
      { title: "Hygienic Practices", description: "Clinical-grade hygiene and sterilization.", icon: Shield },
      { title: "Customized Looks", description: "Styles tailored to your face shape and preferences.", icon: Users },
      { title: "Latest Trends", description: "Stay current with the newest styles and techniques.", icon: Zap },
      { title: "Relaxing Environment", description: "Enjoy your salon visit in comfort and style.", icon: Clock },
    ],
    processSteps: [
      { number: "01", title: "Consultation", description: "Discuss your desired look and get expert recommendations." },
      { number: "02", title: "Preparation", description: "Hair wash, scalp massage, or nail prep as needed." },
      { number: "03", title: "Service", description: "Expert execution of your chosen service." },
      { number: "04", title: "Finishing", description: "Styling touches and maintenance tips for home." },
    ],
    treatmentAreas: [
      { name: "Haircut & Styling", description: "Precision cuts and blowouts", duration: "30-60 mins" },
      { name: "Hair Colour", description: "Global, highlights, balayage", duration: "2-4 hours" },
      { name: "Keratin Treatment", description: "Smooth, frizz-free hair", duration: "2-3 hours" },
      { name: "Manicure & Pedicure", description: "Classic to gel options", duration: "30-60 mins" },
      { name: "Professional Makeup", description: "Day, party, or bridal looks", duration: "30-90 mins" },
      { name: "Waxing & Threading", description: "Full face and body hair removal", duration: "15-60 mins" },
    ],
    pricing: [
      { name: "Quick Groom", price: "Ask for Quote", description: "Essential touch-ups", features: ["Eyebrow threading", "Upper lip", "Basic facial cleanup", "Quick styling tips"] },
      { name: "Pamper Session", price: "Ask for Quote", description: "Complete refresh", features: ["Haircut & styling", "Manicure OR Pedicure", "Eyebrow shaping", "Mini facial"], popular: true },
      { name: "Total Makeover", price: "Ask for Quote", description: "Head to toe beauty", features: ["Haircut & colour", "Mani-Pedi combo", "Full waxing", "Party makeup"] },
    ],
    faqs: [
      { question: "Do I need an appointment?", answer: "We recommend booking in advance, especially for colour treatments and weekends. We do accommodate walk-ins based on availability." },
      { question: "What hair products do you use?", answer: "We use premium professional brands including L'Oreal Professional, Schwarzkopf, and Olaplex." },
      { question: "Can you match a hairstyle from a photo?", answer: "Yes! Bring reference images and our stylists will advise on how to best adapt the look for your hair type and face shape." },
      { question: "How long does hair colour last?", answer: "Permanent colour lasts until it grows out (touch-ups every 4-6 weeks). Semi-permanent fades over 6-8 washes." },
      { question: "Do you offer men's grooming?", answer: "Absolutely! We offer men's haircuts, beard grooming, facials, and grooming packages." },
    ],
    galleryImages: [
      "https://images.pexels.com/photos/4783290/pexels-photo-4783290.jpeg?w=800&q=80",
      "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=800&q=80",
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
      "https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?w=800&q=80",
    ],
    secondaryImage: "https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=1200&q=80",
    stats: [
      { value: "10K+", label: "Happy Clients" },
      { value: "15+", label: "Services" },
      { value: "Premium", label: "Products Only" },
      { value: "5★", label: "Rated" },
    ],
    testimonials: [
      { name: "Kriti S.", rating: 5, text: "Best haircut I've ever had in Delhi. The stylist really understood what I wanted.", treatment: "Haircut & Styling" },
      { name: "Megha R.", rating: 5, text: "My balayage looks exactly like the celebrity photo I showed. Amazing skills!", treatment: "Hair Colour" },
      { name: "Tanvi M.", rating: 5, text: "The gel pedicure lasted 3 weeks without chipping. Great products and service.", treatment: "Mani-Pedi" },
    ],
    whyChooseUs: [
      "Senior stylists with salon expertise",
      "Premium professional product brands",
      "Clinical-grade hygiene standards",
      "Comfortable, modern salon space",
      "Trend-forward styling techniques",
      "Men's and women's services available",
    ],
  },
};
