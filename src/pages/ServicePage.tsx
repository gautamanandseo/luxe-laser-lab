import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, ChevronDown, Star, Users, Clock, Zap, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ServiceDataType {
  title: string;
  accent: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  features: string[];
  benefits: { title: string; desc: string; icon: string }[];
  price: string;
  process: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  testimonials: { name: string; role: string; text: string; rating: number }[];
  gallery: { title: string; desc: string }[];
  highlights: { icon: string; title: string; value: string; desc: string }[];
}

const serviceData: Record<string, ServiceDataType> = {
  laser: {
    title: "Permanent Laser",
    accent: "Hair Removal",
    subtitle: "USFDA CLEARED · SAFE FOR ALL SKIN TYPES",
    desc: "Experience Delhi NCR's most trusted laser hair removal with advanced Diode Laser technology specifically calibrated for Indian skin tones.",
    longDesc: "Our FDA-approved 808nm Diode Laser represents the pinnacle of hair removal technology. Specifically calibrated for Indian skin types (Fitzpatrick I-VI), it delivers permanent hair reduction without the risks of IPL or outdated technologies. Each session uses advanced cooling technology to ensure absolute comfort while precision targets hair follicles at the root.",
    features: [
      "Advanced 808nm Diode Laser",
      "Safe for Fitzpatrick I-VI",
      "Full Face & Body treatments",
      "6-8 sessions for permanent results",
      "Zero downtime",
      "Free consultation & patch test",
    ],
    benefits: [
      {
        icon: "⚡",
        title: "Permanent Reduction",
        desc: "Unlike temporary solutions, achieve 80-90% permanent hair reduction after completing the treatment course.",
      },
      {
        icon: "🛡️",
        title: "Skin Safe",
        desc: "Advanced cooling technology protects your skin while the laser works on hair follicles with precision.",
      },
      {
        icon: "⏰",
        title: "Quick Sessions",
        desc: "Full leg or back treatment completed in 30-45 minutes. Get back to your routine immediately.",
      },
      {
        icon: "💎",
        title: "Smooth Results",
        desc: "Silky smooth skin that lasts. Schedule maintenance sessions annually to maintain results.",
      },
    ],
    price: "Starting from ₹1,999 per session",
    process: [
      {
        step: 1,
        title: "Consultation & Patch Test",
        desc: "Our experts assess your skin type, hair color, and density to create a personalized treatment plan. A free patch test ensures compatibility.",
      },
      {
        step: 2,
        title: "Pre-Treatment Prep",
        desc: "Avoid sun exposure and shaving for 24 hours. Arrive with clean, dry skin. Light numbing cream applied if needed.",
      },
      {
        step: 3,
        title: "Laser Treatment",
        desc: "Advanced cooling handpiece glides over treatment area. You'll feel gentle pulses and light snapping sensation. Completely painless for most patients.",
      },
      {
        step: 4,
        title: "Post-Care & Follow-Up",
        desc: "Apply SPF 50 sunscreen and avoid hot water for 48 hours. Schedule next session 4-6 weeks apart. Visible hair shedding within 1-2 weeks.",
      },
    ],
    faqs: [
      {
        q: "Is laser hair removal safe for Indian skin?",
        a: "Absolutely! Our 808nm Diode Laser is specifically designed for darker skin types (Fitzpatrick III-VI). It's FDA-cleared and has zero risk of burns or hyperpigmentation when used correctly.",
      },
      {
        q: "How many sessions do I need?",
        a: "Most clients see permanent results after 6-8 sessions, spaced 4-6 weeks apart. Hair growth cycles vary, so some areas may need 1-2 additional sessions.",
      },
      {
        q: "Is there any downtime?",
        a: "Zero downtime! You can resume normal activities immediately. Avoid sun exposure, hot water, and swimming for 48 hours.",
      },
      {
        q: "Does it work on fine or light hair?",
        a: "Our laser works best on dark, thick hair. Fine or very light hair (blonde, white) may require alternative treatments. We'll assess during your free consultation.",
      },
      {
        q: "Can I combine with other treatments?",
        a: "Yes! Laser pairs well with skin treatments after 1-2 weeks. Avoid other treatments during active laser course.",
      },
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Delhi",
        text: "Finally free from the endless shaving routine! After 7 sessions, my legs are permanently smooth. Best decision ever.",
        rating: 5,
      },
      {
        name: "Anjali Verma",
        role: "Noida",
        text: "The entire process was painless and professional. The staff explained everything and I saw results from the second session itself!",
        rating: 5,
      },
      {
        name: "Sneha Patel",
        role: "Gurgaon",
        text: "I was skeptical about laser on my darker skin, but the technician's expertise made all the difference. Highly recommend!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Full Leg Treatment", desc: "From thigh to toe" },
      { title: "Underarm & Bikini", desc: "Sensitive areas handled with care" },
      { title: "Face & Upper Lip", desc: "Precision facial hair removal" },
      { title: "Back & Shoulders", desc: "Complete body transformation" },
      { title: "Before Treatment", desc: "Starting your journey" },
      { title: "After 6 Sessions", desc: "Permanent smooth skin" },
    ],
    highlights: [
      { icon: "🎯", title: "Success Rate", value: "92%", desc: "Permanent hair reduction achieved" },
      { icon: "⚡", title: "Sessions Required", value: "6-8", desc: "For permanent results" },
      { icon: "⏱️", title: "Session Duration", value: "30-45 mins", desc: "Quick and efficient" },
      { icon: "🌟", title: "Client Satisfaction", value: "99%", desc: "Highly rated treatment" },
    ],
  },
  coolsculpting: {
    title: "CoolSculpting®",
    accent: "Fat Freezing",
    subtitle: "FDA-CLEARED NON-SURGICAL BODY CONTOURING",
    desc: "The world's #1 non-invasive fat reduction treatment using patented cryolipolysis technology to freeze and permanently eliminate stubborn fat cells.",
    longDesc: "CoolSculpting® is the only FDA-cleared, non-surgical fat reduction procedure that uses controlled cooling to eliminate stubborn fat cells. With zero downtime and no injections or invasive procedures, it's perfect for those looking to enhance their body contours without surgery.",
    features: [
      "27% fat reduction per session",
      "9 treatable body areas",
      "DualSculpting capability",
      "FDA-cleared technology",
      "No surgery or needles",
      "Permanent fat cell elimination",
    ],
    benefits: [
      {
        icon: "❄️",
        title: "Non-Surgical Solution",
        desc: "No incisions, anesthesia, or recovery time. Results without the risks of liposuction.",
      },
      {
        icon: "🎯",
        title: "Targeted Fat Loss",
        desc: "Precisely targets stubborn fat deposits on abdomen, flanks, thighs, and arms.",
      },
      {
        icon: "⏳",
        title: "Natural Results",
        desc: "Gradual fat cell elimination over 3 months. Results look completely natural, not sudden.",
      },
      {
        icon: "♻️",
        title: "Permanent",
        desc: "Eliminated fat cells are gone forever. Maintain results with healthy lifestyle.",
      },
    ],
    price: "Starting from ₹15,000 per area",
    process: [
      {
        step: 1,
        title: "Body Assessment",
        desc: "Detailed consultation to identify target areas. 3D imaging helps visualize potential results.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        desc: "Customized plan based on your goals. Single or dual-applicator sessions available.",
      },
      {
        step: 3,
        title: "CoolSculpting Session",
        desc: "Applicator applied to skin. You'll feel initial cold sensation followed by numbness. Relax for 35-60 minutes.",
      },
      {
        step: 4,
        title: "Results & Follow-Up",
        desc: "Fat cell elimination begins immediately. Peak results visible after 3 months. Maintenance sessions every 12 months.",
      },
    ],
    faqs: [
      {
        q: "Is CoolSculpting safe?",
        a: "Absolutely! FDA-cleared since 2010. Over 10 million treatments worldwide with excellent safety profile. No surgery means no risks.",
      },
      {
        q: "Can I do multiple areas at once?",
        a: "Yes! Our DualSculpting technology allows simultaneous treatment of two areas, cutting treatment time in half.",
      },
      {
        q: "When will I see results?",
        a: "Changes begin immediately, but peak results appear after 8-12 weeks as your body naturally eliminates frozen fat cells.",
      },
      {
        q: "Is it painful?",
        a: "No pain! You'll feel cold initially, then numbness. Most clients read, work, or nap during the procedure.",
      },
      {
        q: "How much fat can be reduced?",
        a: "Studies show 20-25% fat reduction per session. Multiple sessions can achieve greater results. Results are permanent.",
      },
    ],
    testimonials: [
      {
        name: "Rohit Kapoor",
        role: "Delhi",
        text: "Finally got rid of my stubborn love handles without surgery! Non-invasive and the results are fantastic.",
        rating: 5,
      },
      {
        name: "Meera Singh",
        role: "Gurgaon",
        text: "No downtime, no pain, amazing results. Best investment for body confidence!",
        rating: 5,
      },
      {
        name: "Arjun Desai",
        role: "Noida",
        text: "The entire process was smooth. The staff made me feel comfortable. Results exceeded expectations!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Abdominal Contouring", desc: "Reduce belly fat" },
      { title: "Love Handle Removal", desc: "Side flank reduction" },
      { title: "Inner Thigh Sculpting", desc: "Thigh toning" },
      { title: "Arm Definition", desc: "Arm fat reduction" },
      { title: "Before Sculpting", desc: "Starting consultation" },
      { title: "After 3 Months", desc: "Visible transformation" },
    ],
    highlights: [
      { icon: "🏥", title: "FDA Approval", value: "Since 2010", desc: "Gold standard treatment" },
      { icon: "👥", title: "Global Clients", value: "10M+", desc: "Trusted worldwide" },
      { icon: "⏱️", title: "Per Session", value: "35-60 mins", desc: "Quick procedure" },
      { icon: "📈", title: "Fat Reduction", value: "20-25%", desc: "Per treatment" },
    ],
  },
  skin: {
    title: "Advanced Skin",
    accent: "Treatments",
    subtitle: "CLINICAL SKINCARE EXCELLENCE",
    desc: "From HydraFacials to chemical peels and LED therapy, our clinical-grade treatments address every skin concern with precision.",
    longDesc: "Our comprehensive skin treatment portfolio combines the latest technologies and proven methodologies to address acne, pigmentation, aging, and texture issues. Each treatment is customized to your unique skin profile for maximum efficacy.",
    features: [
      "HydraFacial with Vortex Technology",
      "Professional Chemical Peels",
      "LED Light Therapy",
      "Skin Boosters & Mesotherapy",
      "Vampire Facial (PRP)",
      "Pigmentation correction",
    ],
    benefits: [
      {
        icon: "✨",
        title: "Visible Radiance",
        desc: "Glow from within with treatments that enhance natural luminosity and even skin tone.",
      },
      {
        icon: "🎯",
        title: "Targeted Solutions",
        desc: "Address specific concerns: acne, scars, pigmentation, fine lines, or dullness.",
      },
      {
        icon: "🔄",
        title: "Progressive Results",
        desc: "Each session builds on previous results. Treatment courses ensure sustained improvement.",
      },
      {
        icon: "👌",
        title: "Minimal Downtime",
        desc: "Most treatments allow immediate makeup application. Resume routine confidently.",
      },
    ],
    price: "Starting from ₹2,499",
    process: [
      {
        step: 1,
        title: "Skin Analysis",
        desc: "Professional assessment identifies your skin type, concerns, and sensitivities.",
      },
      {
        step: 2,
        title: "Personalized Plan",
        desc: "Customized treatment selection based on your specific goals and skin condition.",
      },
      {
        step: 3,
        title: "Treatment Session",
        desc: "Relaxing experience with professional-grade products and advanced technology.",
      },
      {
        step: 4,
        title: "Aftercare & Maintenance",
        desc: "Detailed home care instructions and recommended maintenance schedule.",
      },
    ],
    faqs: [
      {
        q: "Which treatment is best for acne scars?",
        a: "Chemical peels combined with LED therapy provide excellent results. Severe scars may benefit from multiple sessions or combination treatments.",
      },
      {
        q: "Can I do skin treatments with laser hair removal?",
        a: "Yes, but space them 2-3 weeks apart. Our experts will guide optimal sequencing.",
      },
      {
        q: "How often should I do HydraFacial?",
        a: "Monthly for maintenance and continuous improvement. Every 2-3 weeks for addressing active concerns.",
      },
      {
        q: "Is LED therapy safe for all skin types?",
        a: "Yes! LED is non-invasive and safe for all skin types, including sensitive skin.",
      },
      {
        q: "When will I see results?",
        a: "HydraFacial shows immediate glow. Chemical peels reveal results after 5-7 days. LED therapy requires 6-8 sessions.",
      },
    ],
    testimonials: [
      {
        name: "Divya Malhotra",
        role: "Delhi",
        text: "My acne scars have significantly faded. The skin treatments combined with proper guidance transformed my complexion!",
        rating: 5,
      },
      {
        name: "Neha Chatterjee",
        role: "Noida",
        text: "HydraFacial is my secret to glowing skin. Regular sessions keep my complexion radiant and healthy.",
        rating: 5,
      },
      {
        name: "Isha Reddy",
        role: "Gurgaon",
        text: "Professional treatments with knowledgeable staff. My pigmentation issues are finally under control!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "HydraFacial", desc: "Instant hydration & glow" },
      { title: "Chemical Peel", desc: "Deep skin renewal" },
      { title: "LED Therapy", desc: "Light-based healing" },
      { title: "Skin Boosters", desc: "Radiance enhancement" },
      { title: "Before Treatment", desc: "Starting journey" },
      { title: "After Course", desc: "Transformed skin" },
    ],
    highlights: [
      { icon: "💧", title: "Hydration Level", value: "80%+", desc: "Increased skin hydration" },
      { icon: "✨", title: "Glow Duration", value: "2-3 weeks", desc: "From single session" },
      { icon: "📊", title: "Improvement", value: "70%", desc: "After 6 sessions" },
      { icon: "⭐", title: "Client Rating", value: "4.9/5", desc: "Highly satisfied clients" },
    ],
  },
  botox: {
    title: "Natural-Looking",
    accent: "Botox & Fillers",
    subtitle: "ALLERGAN CERTIFIED · GENUINE PRODUCTS ONLY",
    desc: "Subtle, natural-looking results administered by certified aesthetic physicians using genuine Allergan products exclusively.",
    longDesc: "Enhance your natural beauty with our Allergan-certified Botox and premium dermal fillers. Our certified physicians specialize in creating subtle, proportionate results that enhance your features while maintaining your unique expression.",
    features: [
      "Genuine Allergan Botox",
      "Juvederm & Restylane fillers",
      "Forehead & Crow's Feet treatment",
      "Lip & Cheek enhancement",
      "Jawline contouring",
      "Certified physicians only",
    ],
    benefits: [
      {
        icon: "🎭",
        title: "Natural Expression",
        desc: "Subtle results that enhance features without the 'frozen' look. Your expressions remain authentic.",
      },
      {
        icon: "⏱️",
        title: "Quick Procedure",
        desc: "30-minute appointment with no downtime. Return to work immediately.",
      },
      {
        icon: "👨‍⚕️",
        title: "Expert Physicians",
        desc: "Only certified aesthetic physicians perform treatments. Years of experience and training.",
      },
      {
        icon: "📈",
        title: "Gradual Results",
        desc: "Results appear over 7-14 days. Full effects visible after 2 weeks. Lasts 3-4 months.",
      },
    ],
    price: "Starting from ₹8,000",
    process: [
      {
        step: 1,
        title: "Aesthetic Assessment",
        desc: "Detailed consultation about your goals. Physician explains what's achievable for your facial structure.",
      },
      {
        step: 2,
        title: "Treatment Design",
        desc: "Customized injection plan created to enhance your features subtly.",
      },
      {
        step: 3,
        title: "Treatment",
        desc: "Quick, precise injections using finest needles. Minimal discomfort. No numbing needed.",
      },
      {
        step: 4,
        title: "Results Unfold",
        desc: "Results appear gradually over 7-14 days. Full results by day 14. Lasts 3-4 months.",
      },
    ],
    faqs: [
      {
        q: "Will I look frozen?",
        a: "Not with our approach! We use conservative doses focused on subtle enhancement. Your expressions remain natural.",
      },
      {
        q: "Can I combine Botox and fillers?",
        a: "Yes! Many clients benefit from combination treatments. Botox relaxes muscles; fillers add volume. Creates balanced results.",
      },
      {
        q: "At what age should I start?",
        a: "It's preventative if you're in your 20s-30s. Corrective if you're in your 40s+. Consult our physician for recommendations.",
      },
      {
        q: "Are there side effects?",
        a: "Minimal. Slight redness or bruising at injection sites (fades in 24-48 hours). Very safe when administered by certified physicians.",
      },
      {
        q: "How long do results last?",
        a: "Botox lasts 3-4 months. Fillers last 9-12 months depending on type. Regular maintenance keeps results optimal.",
      },
    ],
    testimonials: [
      {
        name: "Priya Kapoor",
        role: "Delhi",
        text: "Look refreshed but still like myself! The physician's expertise really shows in the natural results.",
        rating: 5,
      },
      {
        name: "Seema Patel",
        role: "Gurgaon",
        text: "Perfect combination of Botox and fillers. Subtle yet noticeable improvement in my appearance.",
        rating: 5,
      },
      {
        name: "Anamika Roy",
        role: "Noida",
        text: "Finally found someone who understands 'natural.' My friends asked what I'm doing differently!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Forehead Botox", desc: "Smooth expression lines" },
      { title: "Crow's Feet", desc: "Eye area rejuvenation" },
      { title: "Lip Enhancement", desc: "Volume and definition" },
      { title: "Cheek Fillers", desc: "Lifted appearance" },
      { title: "Before Treatment", desc: "Initial consultation" },
      { title: "After Results", desc: "Radiant transformation" },
    ],
    highlights: [
      { icon: "✅", title: "Certification", value: "Allergan", desc: "Official partner" },
      { icon: "👨‍⚕️", title: "Physician Led", value: "100%", desc: "Only certified doctors" },
      { icon: "⏰", title: "Session Time", value: "30 mins", desc: "Quick treatment" },
      { icon: "😊", title: "Natural Look", value: "99%", desc: "Authentic results" },
    ],
  },
  microdermabrasion: {
    title: "Reveal Radiant",
    accent: "Skin",
    subtitle: "ADVANCED SKIN RENEWAL TECHNOLOGY",
    desc: "Gently exfoliate and rejuvenate your skin with advanced microdermabrasion. Reduce fine lines, sun damage, and uneven texture.",
    longDesc: "Microdermabrasion is a non-invasive mechanical exfoliation technique using diamond-tip technology to gently remove the outer layer of dead skin cells, revealing fresh, radiant skin beneath. Perfect for texture improvement and anti-aging.",
    features: [
      "Diamond-tip technology",
      "Fine line reduction",
      "Sun damage repair",
      "Acne scar improvement",
      "Improved skin texture",
      "Course packages available",
    ],
    benefits: [
      {
        icon: "🌟",
        title: "Instant Radiance",
        desc: "Immediate glow after single treatment. Skin appears brighter and smoother.",
      },
      {
        icon: "🎯",
        title: "Texture Improvement",
        desc: "Reduces pore size, smooths bumpy texture, and improves overall skin quality.",
      },
      {
        icon: "⏳",
        title: "Anti-Aging",
        desc: "Stimulates collagen production. Reduces fine lines and improves skin elasticity.",
      },
      {
        icon: "🛡️",
        title: "Scar & Damage Repair",
        desc: "Effectively reduces acne scars, surgical scars, and sun damage.",
      },
    ],
    price: "Starting from ₹1,999",
    process: [
      {
        step: 1,
        title: "Skin Consultation",
        desc: "Assessment of skin sensitivity and conditions to customize treatment intensity.",
      },
      {
        step: 2,
        title: "Preparation",
        desc: "Face is cleansed and prepped. No numbing needed as process is gentle.",
      },
      {
        step: 3,
        title: "Microdermabrasion",
        desc: "Diamond-tip handpiece gently exfoliates skin in circular motions. Painless and soothing.",
      },
      {
        step: 4,
        title: "Soothing & SPF",
        desc: "Hydrating serum applied. Sunscreen recommended. Continue daily SPF application.",
      },
    ],
    faqs: [
      {
        q: "Is microdermabrasion painful?",
        a: "Not at all! It's gentle and soothing. Most clients find it relaxing.",
      },
      {
        q: "How many sessions do I need?",
        a: "For maintenance, monthly sessions. For addressing concerns, 6-8 sessions spaced 2 weeks apart.",
      },
      {
        q: "Can it be done on sensitive skin?",
        a: "Yes! We adjust intensity based on your sensitivity. Safe for most skin types.",
      },
      {
        q: "Will my skin be red after?",
        a: "Mild pinkness that fades within hours. No peeling or severe redness.",
      },
      {
        q: "Can I combine with other treatments?",
        a: "Yes, with timing. Space it 1-2 weeks from laser or chemical peels.",
      },
    ],
    testimonials: [
      {
        name: "Kavya Sharma",
        role: "Delhi",
        text: "My skin looks smoother and brighter. The results are visible after each session!",
        rating: 5,
      },
      {
        name: "Pooja Singh",
        role: "Noida",
        text: "Perfect for maintaining skin health. My acne scars have faded considerably.",
        rating: 5,
      },
      {
        name: "Ritika Joshi",
        role: "Gurgaon",
        text: "Gentle yet effective. No downtime, and results exceed expectations!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Facial Microdermabrasion", desc: "Full face treatment" },
      { title: "Scar Reduction", desc: "Acne scar improvement" },
      { title: "Texture Refinement", desc: "Pore minimization" },
      { title: "Sun Damage Repair", desc: "Pigmentation treatment" },
      { title: "Before Session", desc: "Starting skin" },
      { title: "After Course", desc: "Refined radiant skin" },
    ],
    highlights: [
      { icon: "💎", title: "Technology", value: "Diamond-tip", desc: "Advanced exfoliation" },
      { icon: "⏱️", title: "Session Time", value: "30-45 mins", desc: "Quick treatment" },
      { icon: "📊", title: "Improvement", value: "60%", desc: "After 6 sessions" },
      { icon: "✨", title: "Glow", value: "Immediate", desc: "After first session" },
    ],
  },
  bridal: {
    title: "Your Most",
    accent: "Beautiful Day",
    subtitle: "COMPLETE LUXURY BRIDAL PACKAGES",
    desc: "Comprehensive pre-bridal transformation combining laser, skincare, spa, and salon services into a complete wedding journey.",
    longDesc: "Your wedding day is one of the most important moments of your life. Our comprehensive 6-month bridal packages ensure you look and feel absolutely radiant. From laser hair removal to skin treatments, spa services to professional makeup, we handle every detail.",
    features: [
      "6-month prep programs",
      "Complete skin transformation",
      "Laser hair removal",
      "HD & Airbrush makeup",
      "Spa & wellness packages",
      "Bridesmaids packages",
    ],
    benefits: [
      {
        icon: "💒",
        title: "Complete Transformation",
        desc: "Holistic approach covering skin, hair, body, and wellness for ultimate bridal confidence.",
      },
      {
        icon: "⏰",
        title: "Scheduled Perfection",
        desc: "6-month timeline ensures all treatments complete before wedding. Adequate recovery and results visibility.",
      },
      {
        icon: "👭",
        title: "Bridesmaids Included",
        desc: "Special packages for your entire bridal party. Coordinated beauty for your big day.",
      },
      {
        icon: "✨",
        title: "Professional Support",
        desc: "Dedicated beauty consultant guides you through every step. Personalized recommendations.",
      },
    ],
    price: "Starting from ₹25,000",
    process: [
      {
        step: 1,
        title: "Bridal Consultation",
        desc: "Comprehensive assessment of skin, hair, body goals. 6-month timeline created.",
      },
      {
        step: 2,
        title: "Treatment Initiation",
        desc: "Laser hair removal begins (6-8 sessions). Skin treatments commence based on concerns.",
      },
      {
        step: 3,
        title: "Monthly Refinement",
        desc: "Monthly check-ins with beauty consultant. Adjustments made based on progress.",
      },
      {
        step: 4,
        title: "Pre-Wedding Final Touch",
        desc: "Final treatments scheduled 2 weeks before wedding. Makeup trial and coordination.",
      },
    ],
    faqs: [
      {
        q: "When should I start my bridal preparation?",
        a: "Ideally 6 months before wedding. This allows complete laser course, skin transformation, and wellness buildup.",
      },
      {
        q: "Can I include my bridesmaids?",
        a: "Absolutely! Special discounted packages available for bridal party members.",
      },
      {
        q: "What if I have multiple concerns?",
        a: "Our comprehensive program addresses everything: laser, acne, pigmentation, body contouring, spa wellness.",
      },
      {
        q: "Do you provide makeup services?",
        a: "Yes! Professional HD and airbrush makeup with trial sessions before wedding day.",
      },
      {
        q: "Is there a payment plan?",
        a: "Yes! Flexible payment options available. Discuss with our consultant.",
      },
    ],
    testimonials: [
      {
        name: "Avni Desai",
        role: "Delhi Bride",
        text: "Best decision ever! Felt absolutely confident and beautiful on my wedding day. Everyone complimented my glow!",
        rating: 5,
      },
      {
        name: "Priya Malhotra",
        role: "Gurgaon Bride",
        text: "The entire bridal package was worth every penny. Professional guidance made the journey stress-free!",
        rating: 5,
      },
      {
        name: "Shreya Iyer",
        role: "Noida Bride",
        text: "Complete transformation inside and out. My confidence on wedding day was next level!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Pre-Bridal Consultation", desc: "Customized plan creation" },
      { title: "Laser Hair Removal", desc: "Silky smooth skin" },
      { title: "Bridal Skin Treatment", desc: "Radiant complexion" },
      { title: "Body Contouring", desc: "Figure enhancement" },
      { title: "Makeup Trial", desc: "HD & airbrush application" },
      { title: "Wedding Ready", desc: "Radiant bride" },
    ],
    highlights: [
      { icon: "📅", title: "Timeline", value: "6 months", desc: "Comprehensive prep" },
      { icon: "✅", title: "Full Coverage", value: "8 services", desc: "Complete package" },
      { icon: "👥", title: "Bridesmaids", value: "Special rates", desc: "Group packages" },
      { icon: "😍", title: "Confidence", value: "100%", desc: "Bride satisfaction" },
    ],
  },
  spa: {
    title: "Indulge in",
    accent: "Complete Wellness",
    subtitle: "THERAPEUTIC SPA TREATMENTS",
    desc: "Experience complete relaxation with therapeutic spa treatments. From Swedish massage to detox wraps, rejuvenate body and mind.",
    longDesc: "Step into our serene spa sanctuary and experience therapeutic treatments designed to rejuvenate your body, relax your mind, and restore your spirit. Our expert therapists use premium products and proven techniques.",
    features: [
      "Swedish & Deep Tissue Massage",
      "Aromatherapy",
      "Hot Stone Therapy",
      "Body Wraps & Scrubs",
      "Couple Spa packages",
      "Detox treatments",
    ],
    benefits: [
      {
        icon: "🧘",
        title: "Stress Relief",
        desc: "Melt away tension and stress. Release endorphins for improved mental wellbeing.",
      },
      {
        icon: "💪",
        title: "Muscle Recovery",
        desc: "Deep tissue massage improves circulation, reduces soreness, and enhances flexibility.",
      },
      {
        icon: "✨",
        title: "Skin Rejuvenation",
        desc: "Exfoliating scrubs and hydrating wraps leave skin soft, glowing, and refreshed.",
      },
      {
        icon: "⚡",
        title: "Energy Boost",
        desc: "Detox treatments eliminate toxins. Aromatherapy balances energy and mood.",
      },
    ],
    price: "Starting from ₹1,499",
    process: [
      {
        step: 1,
        title: "Wellness Consultation",
        desc: "Discuss your needs, preferences, and any physical concerns.",
      },
      {
        step: 2,
        title: "Personalized Selection",
        desc: "Therapist recommends specific treatments based on consultation.",
      },
      {
        step: 3,
        title: "Relaxing Treatment",
        desc: "Immerse yourself in luxury experience. Soft ambiance, premium products, expert hands.",
      },
      {
        step: 4,
        title: "Post-Treatment Wellness",
        desc: "Herbal tea and relaxation space. Take-home recommendations for continued wellness.",
      },
    ],
    faqs: [
      {
        q: "How often should I get a massage?",
        a: "Monthly for maintenance and stress relief. Bi-weekly if addressing specific muscle tension.",
      },
      {
        q: "What's the difference between Swedish and deep tissue?",
        a: "Swedish is gentler and relaxing. Deep tissue targets muscle tension more intensely.",
      },
      {
        q: "Are couple massages available?",
        a: "Yes! Romantic and rejuvenating experience perfect for couples.",
      },
      {
        q: "Do you use organic products?",
        a: "Yes! Premium, skin-friendly products. We disclose all ingredients.",
      },
      {
        q: "Can I do detox treatments regularly?",
        a: "Yes, monthly detox treatments support ongoing wellness and toxin elimination.",
      },
    ],
    testimonials: [
      {
        name: "Kavya Nair",
        role: "Delhi",
        text: "My sanctuary! Professional therapists and premium products. I feel rejuvenated after every visit.",
        rating: 5,
      },
      {
        name: "Sneha Trivedi",
        role: "Gurgaon",
        text: "Best massage experience in Delhi NCR. The therapists truly understand therapeutic work.",
        rating: 5,
      },
      {
        name: "Rini Chakraborty",
        role: "Noida",
        text: "Couple massage with my husband was incredible. We'll definitely come back regularly!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Swedish Massage", desc: "Relaxing full body" },
      { title: "Deep Tissue", desc: "Therapeutic muscle work" },
      { title: "Hot Stone Therapy", desc: "Warmth and relaxation" },
      { title: "Aromatherapy", desc: "Sensory wellness" },
      { title: "Body Scrub", desc: "Skin exfoliation" },
      { title: "Detox Wrap", desc: "Complete rejuvenation" },
    ],
    highlights: [
      { icon: "🧘", title: "Relaxation", value: "Complete", desc: "Full stress relief" },
      { icon: "💆", title: "Session Time", value: "60-90 mins", desc: "Indulgent experience" },
      { icon: "🌿", title: "Products", value: "Premium", desc: "Organic & natural" },
      { icon: "⭐", title: "Satisfaction", value: "99%", desc: "Highly appreciated" },
    ],
  },
  salon: {
    title: "Expert Beauty",
    accent: "Services",
    subtitle: "PREMIUM SALON EXPERIENCE",
    desc: "Expert hair, nail, makeup, and grooming services delivered with clinical precision and luxury experience.",
    longDesc: "From expert hair styling and coloring to professional makeup and premium nail services, our salon delivers salon-quality services with medical-grade standards. Perfect complement to your clinical beauty treatments.",
    features: [
      "Hair Styling & Colour",
      "Keratin Treatments",
      "Manicure & Pedicure",
      "Professional Makeup",
      "Waxing & Threading",
      "Nail Art & Gel Nails",
    ],
    benefits: [
      {
        icon: "💇",
        title: "Expert Stylists",
        desc: "Trained professionals with years of experience. Latest trends and techniques.",
      },
      {
        icon: "💅",
        title: "Premium Products",
        desc: "Professional-grade products that deliver superior results and durability.",
      },
      {
        icon: "🎨",
        title: "Custom Services",
        desc: "Personalized approach to each client. Consultation-based recommendations.",
      },
      {
        icon: "🌟",
        title: "Complete Package",
        desc: "Coordinate all services seamlessly with your medical beauty treatments.",
      },
    ],
    price: "Starting from ₹499",
    process: [
      {
        step: 1,
        title: "Consultation",
        desc: "Discuss desired look, hair type, skin tone, and maintenance preferences.",
      },
      {
        step: 2,
        title: "Professional Application",
        desc: "Expert stylist or makeup artist applies treatments with precision.",
      },
      {
        step: 3,
        title: "Styling & Finishing",
        desc: "Perfect finishing touches. Recommendations for home maintenance.",
      },
      {
        step: 4,
        title: "Aftercare Guidance",
        desc: "Detailed care instructions for longevity of services.",
      },
    ],
    faqs: [
      {
        q: "How often should I get hair color?",
        a: "Roots touch-up every 4-6 weeks. Full color every 8-12 weeks depending on hair growth.",
      },
      {
        q: "Do you offer keratin treatments?",
        a: "Yes! Professional keratin that smooths and straightens hair. Lasts 2-3 months.",
      },
      {
        q: "Can you do bridal makeup?",
        a: "Absolutely! Specialized bridal makeup with trial sessions and wedding day coordination.",
      },
      {
        q: "Are gel nails safe?",
        a: "Yes! Professional application and removal. We ensure nail health throughout.",
      },
      {
        q: "Do you do nail art?",
        a: "Yes! Creative designs and extensions available. Gel and acrylic options.",
      },
    ],
    testimonials: [
      {
        name: "Aditi Puri",
        role: "Delhi",
        text: "Best hair color I've ever had! The expert advice and professional service is unmatched.",
        rating: 5,
      },
      {
        name: "Sophia Das",
        role: "Gurgaon",
        text: "My go-to salon for all beauty needs. Consistent quality and amazing staff.",
        rating: 5,
      },
      {
        name: "Tanya Gupta",
        role: "Noida",
        text: "Professional makeup artist made me feel beautiful. Wedding makeup was flawless!",
        rating: 5,
      },
    ],
    gallery: [
      { title: "Hair Styling", desc: "Expert styling expertise" },
      { title: "Hair Coloring", desc: "Vibrant color expertise" },
      { title: "Professional Makeup", desc: "Artistry & precision" },
      { title: "Nail Art", desc: "Creative designs" },
      { title: "Threading & Waxing", desc: "Precision hair removal" },
      { title: "Complete Transformation", desc: "Head-to-toe beauty" },
    ],
    highlights: [
      { icon: "💇", title: "Stylists", value: "Expert trained", desc: "Years of experience" },
      { icon: "🏆", title: "Quality", value: "Premium grade", desc: "Professional products" },
      { icon: "🎨", title: "Artistry", value: "Custom designs", desc: "Personalized services" },
      { icon: "😍", title: "Satisfaction", value: "98%", desc: "Happy clients" },
    ],
  },
};

const ServicePage = ({ service }: { service: string }) => {
  const data = serviceData[service];
  const [activeGallery, setActiveGallery] = useState(0);
  if (!data) return null;

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="eyebrow mb-4">{data.subtitle}</p>
            <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">{data.title}</h1>
            <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-[0.95] mb-8">{data.accent}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">{data.longDesc}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="premium-btn gold-shimmer text-primary-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:+919811157787" className="accent-border text-foreground px-8 py-3.5 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.highlights.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center service-card-hover p-4 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="text-4xl mb-3 inline-block">{h.icon}</div>
                <h3 className="font-serif text-2xl text-primary mb-2 stat-number">{h.value}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">{h.title}</p>
                <p className="text-xs text-muted-foreground leading-tight">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Why Choose This</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              <em className="text-primary">Benefits</em> & Results
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {data.benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="service-card-hover service-feature bg-secondary rounded-lg p-8 border border-border">
                <div className="text-5xl mb-4 inline-block">{b.icon}</div>
                <h3 className="font-serif text-xl text-foreground mb-3 mt-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Treatment <em className="text-primary">Process</em>
            </h2>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12 md:space-y-8">
              {data.process.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`process-step md:grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className="relative">
                    {i % 2 === 0 ? (
                      <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition-colors relative z-10 service-card-hover">
                        <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-lg shadow-lg">{p.step}</div>
                        <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                  <div className="relative">
                    {i % 2 === 1 ? (
                      <div className="bg-background rounded-lg p-8 border border-border hover:border-primary transition-colors relative z-10 service-card-hover">
                        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-lg shadow-lg">{p.step}</div>
                        <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Inclusions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Treatment Details</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                What's <em className="text-primary">Included</em>
              </h2>
              <ul className="space-y-4">
                {data.features.map((f, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="service-feature flex items-center gap-3 text-foreground/80 px-3 py-2 rounded">
                    <Check size={18} className="text-primary flex-shrink-0 min-w-fit" /> <span className="text-sm">{f}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-2xl text-primary">{data.price}</p>
            </div>
            <div className="bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="flex items-center justify-center gap-4 text-muted-foreground text-center p-8">
                <p className="text-sm">Premium treatment imagery showcasing results and professional environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Visual Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Treatment <em className="text-primary">Gallery</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.gallery.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onClick={() => setActiveGallery(i)} className={`gallery-item cursor-pointer rounded-lg overflow-hidden aspect-square relative group transition-all border border-border hover:border-primary ${activeGallery === i ? "md:col-span-2 md:row-span-2" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 group-hover:from-primary/20 group-hover:to-primary/50 transition-all" />
                <div className="h-full bg-gradient-to-br from-secondary via-background to-secondary flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">{g.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground relative z-10">{g.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Client Reviews</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Loved by <em className="text-primary">Clients</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="testimonial-card bg-secondary rounded-lg p-8 border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic font-light">{t.text}</p>
                <div className="relative z-10">
                  <p className="font-serif text-foreground font-semibold">{t.name}</p>
                  <p className="text-xs text-primary uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              <em className="text-primary">FAQ</em> About This Treatment
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="hover:text-primary">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">
              Ready to Begin Your <em className="italic">Transformation</em>?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Book your free consultation today and let our experts create a personalized treatment plan just for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="premium-btn bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform font-semibold">
                Book Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:+919811157787" className="accent-border border-2 border-primary-foreground text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:bg-primary-foreground/10 transition-colors">
                <Phone size={16} /> Call 9811157787
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
