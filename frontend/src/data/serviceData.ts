import { Sparkles, Snowflake, Sun, Heart, Flower2, Scissors, Syringe, Diamond, Clock, Shield, Award, Users, CheckCircle, Star, Zap, Target, Droplets, Gem } from "lucide-react";

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
  
  // Benefits section
  benefits: {
    title: string;
    description: string;
    icon: any;
  }[];
  
  // Process steps
  processSteps: ServiceStep[];
  
  // Treatment areas or features
  treatmentAreas: {
    name: string;
    description: string;
    duration?: string;
  }[];
  
  // Pricing
  pricing: PricingTier[];
  
  // FAQs
  faqs: FAQ[];
  
  // Gallery images
  galleryImages: string[];
  
  // Secondary images
  secondaryImage: string;
  processImage: string;
  
  // Stats
  stats: { value: string; label: string }[];
  
  // Testimonials
  testimonials: Testimonial[];
  
  // Why choose us points
  whyChooseUs: string[];
}

export const servicesData: Record<string, ServiceData> = {
  laser: {
    id: "laser",
    title: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "USFDA CLEARED · SAFE FOR ALL SKIN TYPES",
    tagline: "Experience Delhi NCR's most trusted laser hair removal",
    heroImage: "https://yspstvqinawnszuxdjhy.supabase.co/storage/v1/object/public/gallery-images/1770572844445-54z2sxh.jpg",
    heroOverlay: "from-background/95 via-background/70 to-background/30",
    description: "Our advanced Diode Laser technology is specifically calibrated for Indian skin tones, delivering permanent hair reduction with zero downtime.",
    longDescription: "Say goodbye to the endless cycle of waxing, shaving, and threading. Our state-of-the-art 808nm Diode Laser technology targets hair follicles at their root, disabling their ability to regrow. The result? Silky smooth skin that lasts a lifetime. Our FDA-cleared treatment is safe for all skin types, including the full range of Indian skin tones (Fitzpatrick I-VI).",
    icon: Sparkles,
    badge: "USFDA Cleared",
    
    benefits: [
      { title: "Permanent Results", description: "6-8 sessions for permanent hair reduction. No more recurring salon visits.", icon: CheckCircle },
      { title: "All Skin Types", description: "Safe & effective for Fitzpatrick skin types I-VI, including Indian skin.", icon: Shield },
      { title: "Zero Downtime", description: "Walk in during lunch, walk out ready for your evening plans.", icon: Clock },
      { title: "Precision Technology", description: "Advanced 808nm Diode targets hair follicles without damaging skin.", icon: Target },
      { title: "Full Body Coverage", description: "From face to full body — we treat all areas with equal expertise.", icon: Users },
      { title: "Cost Effective", description: "Lifetime savings compared to years of waxing and threading.", icon: Award },
    ],
    
    processSteps: [
      { number: "01", title: "Free Consultation", description: "Our experts assess your skin type, hair density, and create a personalized treatment plan." },
      { number: "02", title: "Patch Test", description: "A complimentary patch test ensures your skin responds perfectly to the treatment." },
      { number: "03", title: "Treatment Session", description: "Relax as our certified technicians perform the laser treatment with precision." },
      { number: "04", title: "Post-Care", description: "Simple aftercare instructions and scheduling your next session for optimal results." },
    ],
    
    treatmentAreas: [
      { name: "Full Face", description: "Upper lip, chin, sideburns, forehead", duration: "15-20 mins" },
      { name: "Underarms", description: "Complete underarm area", duration: "10-15 mins" },
      { name: "Full Arms", description: "Fingers to shoulders", duration: "30-40 mins" },
      { name: "Full Legs", description: "Toes to thighs", duration: "45-60 mins" },
      { name: "Bikini/Brazilian", description: "Standard or extended bikini line", duration: "20-30 mins" },
      { name: "Full Body", description: "Complete body treatment package", duration: "2-3 hours" },
    ],
    
    pricing: [
      { name: "Single Area", price: "₹1,999", description: "Perfect for trying out", features: ["Any single small area", "Free consultation", "Patch test included", "Aftercare kit"] },
      { name: "Full Face", price: "₹3,499", description: "Complete facial hair removal", features: ["Upper lip + Chin + Sideburns", "6-session package available", "Free touch-ups", "Premium aftercare"], popular: true },
      { name: "Full Body", price: "₹12,999", description: "Head to toe transformation", features: ["All body areas included", "Priority scheduling", "Dedicated therapist", "Complimentary spa session"] },
    ],
    
    faqs: [
      { question: "Is laser hair removal painful?", answer: "Most clients describe it as a mild snapping sensation, like a rubber band. Our advanced cooling system minimizes discomfort, making the treatment very tolerable." },
      { question: "How many sessions will I need?", answer: "Typically 6-8 sessions spaced 4-6 weeks apart for permanent results. This varies based on hair type, color, and treatment area." },
      { question: "Is it safe for Indian skin?", answer: "Absolutely! Our 808nm Diode Laser is specifically calibrated for Indian skin tones (Fitzpatrick III-VI) and is USFDA cleared for all skin types." },
      { question: "What's the downtime?", answer: "Zero downtime! You can resume normal activities immediately. We recommend avoiding sun exposure and hot showers for 24-48 hours." },
      { question: "Can I get laser during my period?", answer: "Yes, you can. However, skin may be more sensitive during this time. We recommend scheduling bikini/Brazilian treatments at other times for comfort." },
    ],
    
    galleryImages: [
      "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?w=800&q=80",
      "https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?w=800&q=80",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
      "https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=800&q=80",
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
      { name: "Priya M.", rating: 5, text: "After years of painful waxing, this was life-changing. Completely hair-free after 7 sessions!", treatment: "Full Body Laser" },
      { name: "Anjali S.", rating: 5, text: "The staff made me so comfortable. Zero pain with the cooling system. Highly recommend!", treatment: "Full Face" },
      { name: "Ritu K.", rating: 5, text: "Best investment I've made. No more monthly salon visits. My skin has never looked better.", treatment: "Underarms & Bikini" },
    ],
    
    whyChooseUs: [
      "USFDA cleared equipment with proven safety record",
      "Certified technicians with 5+ years experience",
      "Advanced cooling system for comfortable treatment",
      "Transparent pricing with no hidden costs",
      "Free consultation and patch test",
      "Premium aftercare products included",
    ],
  },
  
  coolsculpting: {
    id: "coolsculpting",
    title: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "FDA-CLEARED NON-SURGICAL BODY CONTOURING",
    tagline: "Freeze away stubborn fat — permanently",
    heroImage: "https://images.unsplash.com/photo-1731514721772-329626f84c8b?w=1920&q=80",
    heroOverlay: "from-[hsl(210,60%,5%)]/95 via-[hsl(210,60%,5%)]/70 to-transparent",
    description: "The world's #1 non-invasive fat reduction treatment uses patented cryolipolysis technology to freeze and permanently eliminate stubborn fat cells.",
    longDescription: "CoolSculpting® is the revolutionary fat-freezing treatment that targets and eliminates stubborn fat cells that resist diet and exercise. Using patented cryolipolysis technology, we precisely cool fat cells to trigger their natural death, which your body then eliminates naturally over time. The result? A sculpted, contoured body without surgery, needles, or downtime.",
    icon: Snowflake,
    badge: "FDA-Cleared",
    
    benefits: [
      { title: "27% Fat Reduction", description: "Clinically proven to reduce fat in treated areas by up to 27% per session.", icon: Target },
      { title: "Non-Surgical", description: "No incisions, no anesthesia, no needles. Just science-backed fat elimination.", icon: Shield },
      { title: "Permanent Results", description: "Frozen fat cells are gone forever. They don't regenerate or move elsewhere.", icon: CheckCircle },
      { title: "Zero Downtime", description: "Return to work, gym, and life immediately after your session.", icon: Clock },
      { title: "9 Treatment Areas", description: "From double chin to thighs — treat virtually any problem area.", icon: Users },
      { title: "DualSculpting", description: "Treat two areas simultaneously for faster results.", icon: Zap },
    ],
    
    processSteps: [
      { number: "01", title: "Body Assessment", description: "Our experts analyze your body composition and identify target areas for optimal results." },
      { number: "02", title: "Custom Plan", description: "We create a personalized treatment plan based on your goals and body type." },
      { number: "03", title: "Treatment", description: "Relax during the 35-60 minute session while the applicator freezes fat cells." },
      { number: "04", title: "Natural Elimination", description: "Over 2-3 months, your body naturally processes and eliminates the dead fat cells." },
    ],
    
    treatmentAreas: [
      { name: "Double Chin", description: "Eliminate submental fullness for a defined jawline", duration: "35 mins" },
      { name: "Abdomen", description: "Target stubborn belly fat for a flatter midsection", duration: "60 mins" },
      { name: "Love Handles", description: "Contour your flanks for a streamlined silhouette", duration: "35 mins" },
      { name: "Inner Thighs", description: "Reduce thigh fat for proportional legs", duration: "35 mins" },
      { name: "Upper Arms", description: "Sculpt and tone the upper arm area", duration: "35 mins" },
      { name: "Bra/Back Fat", description: "Smooth bulges around the bra line", duration: "35 mins" },
    ],
    
    pricing: [
      { name: "Single Area", price: "₹15,000", description: "Treat one problem area", features: ["One applicator session", "Body assessment", "Progress tracking", "Aftercare guidance"] },
      { name: "DualSculpting", price: "₹25,000", description: "Two areas, one session", features: ["Two areas simultaneously", "50% time savings", "Comprehensive assessment", "Dedicated specialist"], popular: true },
      { name: "Full Transformation", price: "₹75,000", description: "Complete body contouring", features: ["Up to 6 areas", "Multiple sessions included", "VIP scheduling", "Complimentary maintenance"] },
    ],
    
    faqs: [
      { question: "How does CoolSculpting work?", answer: "CoolSculpting uses cryolipolysis to freeze fat cells to -11°C. At this temperature, fat cells crystallize and die while surrounding tissues remain unharmed. Your body then naturally eliminates these dead cells over 2-3 months." },
      { question: "Is the fat loss permanent?", answer: "Yes! Once fat cells are eliminated, they're gone forever. Adults don't produce new fat cells, so the results are permanent as long as you maintain a stable weight." },
      { question: "How soon will I see results?", answer: "Initial results are visible in 3 weeks, with the most dramatic results appearing at 2-3 months as your body continues to flush out fat cells." },
      { question: "Does it hurt?", answer: "You may feel intense cold, tingling, or mild cramping for the first 5-10 minutes. This subsides as the area becomes numb. Most clients read, work, or nap during treatment." },
      { question: "Am I a good candidate?", answer: "CoolSculpting is ideal for people near their goal weight with stubborn fat pockets that resist diet and exercise. It's not a weight loss solution but a body contouring treatment." },
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
      { value: "8M+", label: "Treatments Worldwide" },
      { value: "9", label: "Treatment Areas" },
      { value: "0", label: "Downtime" },
    ],
    
    testimonials: [
      { name: "Kavita R.", rating: 5, text: "Finally got rid of my stubborn belly fat that no amount of gym could fix. Worth every penny!", treatment: "Abdomen" },
      { name: "Neha P.", rating: 5, text: "My love handles are completely gone after 2 sessions. The confidence boost is incredible.", treatment: "Love Handles" },
      { name: "Sneha M.", rating: 5, text: "Non-surgical and actually works! I can finally wear sleeveless tops confidently.", treatment: "Upper Arms" },
    ],
    
    whyChooseUs: [
      "Authentic CoolSculpting® machines — not imitations",
      "Certified CoolSculpting specialists",
      "DualSculpting capability for faster results",
      "Comprehensive body assessment included",
      "Proven track record with before/after results",
      "Comfortable, spa-like treatment environment",
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
    longDescription: "Your skin tells your story. Let us help you write a beautiful one. Our advanced skin treatments combine cutting-edge technology with proven clinical techniques to address every skin concern — from acne and pigmentation to aging and dullness. Each treatment is customized to your unique skin type and goals.",
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
      { name: "Express Glow", price: "₹2,499", description: "Quick radiance boost", features: ["Basic HydraFacial", "LED therapy add-on", "Hydrating mask", "Sunscreen application"] },
      { name: "Signature Facial", price: "₹4,999", description: "Complete skin transformation", features: ["Full HydraFacial", "Chemical peel", "LED therapy", "Custom serum infusion"], popular: true },
      { name: "Premium Package", price: "₹15,999", description: "4-session transformation", features: ["4 customized sessions", "Skin analysis included", "Home care kit", "Progress tracking"] },
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
  
  botox: {
    id: "botox",
    title: "Natural-Looking",
    accent: "Botox & Fillers",
    subtitle: "ALLERGAN CERTIFIED · GENUINE PRODUCTS ONLY",
    tagline: "Enhance your beauty, not change it",
    heroImage: "https://images.pexels.com/photos/3762661/pexels-photo-3762661.jpeg?w=1920&q=80",
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
      { name: "Botox - Single Area", price: "₹8,000", description: "Target one concern", features: ["One treatment area", "Genuine Allergan Botox", "Free consultation", "2-week follow-up"] },
      { name: "Botox - Full Face", price: "₹18,000", description: "Complete refresh", features: ["Forehead + Frown + Crow's feet", "Natural, balanced results", "Physician administered", "Touch-up if needed"], popular: true },
      { name: "Dermal Fillers", price: "₹25,000", description: "Per syringe", features: ["Premium Juvederm/Restylane", "Lips, cheeks, or jawline", "Results last 9-12 months", "Complimentary consultation"] },
    ],
    
    faqs: [
      { question: "Will I look frozen or unnatural?", answer: "No! Our philosophy is 'less is more.' We aim for natural-looking results that soften lines while preserving your expressions. You'll look refreshed, not frozen." },
      { question: "How long does Botox last?", answer: "Botox typically lasts 3-4 months. With regular treatments, many clients find results last longer over time as muscles become trained." },
      { question: "Is the procedure painful?", answer: "Most clients describe it as a slight pinch. We use very fine needles and can apply numbing cream for sensitive areas. The discomfort is minimal and brief." },
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
      "Transparent pricing, no hidden costs",
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
      { name: "Single Session", price: "₹1,999", description: "Try it out", features: ["Full face treatment", "Hydrating mask", "SPF application", "Aftercare guidance"] },
      { name: "Course of 4", price: "₹6,999", description: "Best results", features: ["4 sessions", "Progressive improvement", "Custom intensity", "Home care kit included"], popular: true },
      { name: "Premium Package", price: "₹12,999", description: "Complete transformation", features: ["8 sessions", "Face + Neck treatment", "LED therapy add-on", "Premium skincare kit"] },
    ],
    
    faqs: [
      { question: "What does microdermabrasion feel like?", answer: "Most describe it as a gentle scratching or suction sensation. It's comfortable and relaxing — many clients even fall asleep during treatment!" },
      { question: "How many sessions do I need?", answer: "For general maintenance, monthly sessions work well. For specific concerns like scarring or pigmentation, a course of 4-6 sessions every 2 weeks is recommended." },
      { question: "Is there any downtime?", answer: "No downtime at all! You may have mild redness for an hour or two, similar to a light workout flush. You can apply makeup immediately if needed." },
      { question: "Can I combine it with other treatments?", answer: "Absolutely! Microdermabrasion pairs beautifully with chemical peels, LED therapy, and facials. We'll create a customized protocol for your needs." },
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
      { name: "Essential Bride", price: "₹25,000", description: "Core treatments", features: ["Full face laser (6 sessions)", "4 HydraFacials", "Bridal glow facial", "Pre-wedding spa session"] },
      { name: "Radiant Bride", price: "₹75,000", description: "Complete transformation", features: ["Full body laser", "Monthly skin treatments", "CoolSculpting (2 areas)", "Spa package", "HD Bridal makeup"], popular: true },
      { name: "Royal Bride", price: "₹1,50,000", description: "Ultimate luxury", features: ["Everything in Radiant", "Premium skincare kit", "Bridesmaids packages (2)", "VIP scheduling", "Dedicated bridal coordinator"] },
    ],
    
    faqs: [
      { question: "When should I start my bridal prep?", answer: "Ideally 6 months before your wedding. This allows enough time for complete laser hair removal and gradual skin transformation. However, we have packages for shorter timelines too." },
      { question: "Can I customize my package?", answer: "Absolutely! Every bride is unique. We'll create a personalized plan based on your specific concerns, timeline, and budget." },
      { question: "Do you offer packages for the bridal party?", answer: "Yes! We have special rates for bridesmaids and mothers. Many brides book group spa days as pre-wedding bonding activities." },
      { question: "What if I have a skin reaction close to the wedding?", answer: "We schedule treatments carefully to allow recovery time. Your final facial will be 5-7 days before the wedding — enough time for maximum glow without risk." },
      { question: "Is the makeup included in all packages?", answer: "HD Bridal Makeup is included in Radiant and Royal packages. For Essential, it can be added separately. We also offer makeup trials." },
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
      { name: "Aisha K.", rating: 5, text: "Started my journey 6 months before and looked absolutely flawless on my wedding day. Best investment ever!", treatment: "Radiant Bride" },
      { name: "Rhea M.", rating: 5, text: "The team made me feel like a princess. My skin glowed in every photo. Thank you Empathy!", treatment: "Royal Bride" },
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
    longDescription: "Step into our serene spa sanctuary and leave the world behind. Our therapeutic spa treatments are designed to melt away stress, ease muscle tension, and restore your natural balance. Every treatment is performed by certified therapists using premium products in our tranquil, ambient environment.",
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
      { name: "Express Escape", price: "₹1,499", description: "Quick relaxation", features: ["30-min back massage", "Scalp massage", "Aromatherapy", "Herbal tea"] },
      { name: "Signature Spa", price: "₹3,999", description: "Complete relaxation", features: ["60-min full body massage", "Body scrub", "Head massage", "Post-spa refreshments"], popular: true },
      { name: "Ultimate Indulgence", price: "₹7,999", description: "Half-day retreat", features: ["90-min massage", "Body wrap", "Facial", "Manicure/Pedicure", "Lunch included"] },
    ],
    
    faqs: [
      { question: "What should I wear to the spa?", answer: "We provide robes, slippers, and disposable undergarments. You'll change into these upon arrival. Wear whatever is comfortable for your commute." },
      { question: "How early should I arrive?", answer: "We recommend arriving 15-20 minutes early to complete paperwork and start relaxing in our lounge before your treatment." },
      { question: "Can I request a specific therapist?", answer: "Absolutely! If you have a preferred therapist, let us know when booking. We'll do our best to accommodate your request." },
      { question: "What if I have a health condition?", answer: "Please inform us of any health conditions, allergies, or pregnancy when booking. Our therapists will customize your treatment accordingly." },
      { question: "Do you offer couple packages?", answer: "Yes! Our couple spa room allows you to enjoy treatments side-by-side. Perfect for anniversaries, date nights, or quality time with a friend." },
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
      { name: "Quick Groom", price: "₹499", description: "Essential touch-ups", features: ["Eyebrow threading", "Upper lip", "Basic facial cleanup", "Quick styling tips"] },
      { name: "Pamper Session", price: "₹1,999", description: "Complete refresh", features: ["Haircut & styling", "Manicure OR Pedicure", "Eyebrow shaping", "Mini facial"], popular: true },
      { name: "Total Makeover", price: "₹4,999", description: "Head to toe beauty", features: ["Haircut & colour", "Mani-Pedi combo", "Full waxing", "Party makeup"] },
    ],
    
    faqs: [
      { question: "Do I need an appointment?", answer: "We recommend booking in advance, especially for colour treatments and weekends. However, we do accommodate walk-ins based on availability." },
      { question: "What hair products do you use?", answer: "We use premium professional brands including L'Oreal Professional, Schwarzkopf, and Olaplex for all hair treatments." },
      { question: "Do you offer hair consultations?", answer: "Yes! Free consultations are available for major changes like colour or chemical treatments. Book online or just walk in." },
      { question: "Is your nail equipment sterilized?", answer: "Absolutely. We follow clinical-grade hygiene protocols. All metal tools are autoclaved, and single-use items are disposed of after each client." },
      { question: "Can I get makeup for my event?", answer: "Yes! We offer makeup services for all occasions. For weddings and large events, we recommend booking at least 2 weeks in advance." },
    ],
    
    galleryImages: [
      "https://images.pexels.com/photos/4783290/pexels-photo-4783290.jpeg?w=800&q=80",
      "https://images.unsplash.com/photo-1629380106682-6736d2c327ed?w=800&q=80",
      "https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=800&q=80",
      "https://images.unsplash.com/photo-1644641815757-37b5d1520bd7?w=800&q=80",
    ],
    
    secondaryImage: "https://images.unsplash.com/photo-1629380106682-6736d2c327ed?w=1200&q=80",
    processImage: "https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?w=1200&q=80",
    
    stats: [
      { value: "20K+", label: "Happy Clients" },
      { value: "15+", label: "Expert Stylists" },
      { value: "50+", label: "Services" },
      { value: "100%", label: "Hygiene" },
    ],
    
    testimonials: [
      { name: "Tanya G.", rating: 5, text: "Best haircut I've ever had! The stylist really understood what I wanted.", treatment: "Haircut & Styling" },
      { name: "Megha S.", rating: 5, text: "Love their gel manicures. Last for 3 weeks without chipping!", treatment: "Gel Manicure" },
      { name: "Kritika P.", rating: 5, text: "Got my party makeup done here. So many compliments! Will definitely return.", treatment: "Party Makeup" },
    ],
    
    whyChooseUs: [
      "Expert stylists with 5+ years experience",
      "Premium professional products only",
      "Clinical-grade hygiene standards",
      "Complimentary consultations",
      "Relaxed, luxurious ambiance",
      "Transparent pricing, no surprises",
    ],
  },
};

export default servicesData;
