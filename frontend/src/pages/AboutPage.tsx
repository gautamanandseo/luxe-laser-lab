import { motion } from "framer-motion";
import { Award, Heart, Users, Shield, Star, CheckCircle, Sparkles, Target, Clock, TrendingUp, Zap, Eye, Gem, Leaf, Globe, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import galleryClinic2 from "@/assets/gallery-clinic-2.jpg";
import galleryClinic1 from "@/assets/gallery-clinic-1.jpg";
import usePageMeta from "@/hooks/use-page-meta";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import GlowDivider from "@/components/effects/GlowDivider";
import ParticleField from "@/components/effects/ParticleField";

const values = [
  { icon: Heart, title: "Empathy First", desc: "The 'Empathy' in our name is our philosophy. We listen first, diagnose second. Every treatment plan begins with understanding your unique goals, lifestyle, and concerns — because no two clients are the same." },
  { icon: Shield, title: "Clinical Excellence", desc: "Only USFDA-cleared, genuinely sourced equipment. Lumenis LightSheer Desire, Alma Soprano ICE Platinum, CoolSculpting Elite — we invest in the gold standards, not compromises." },
  { icon: Users, title: "Expert Team", desc: "Board-certified physicians, trained laser technicians, and dedicated care coordinators with decades of combined aesthetic experience across 50+ professionals." },
  { icon: Award, title: "Proven Results", desc: "25,000+ successful treatments and a 98% client satisfaction rate. Our results speak volumes — visible, measurable, and lasting transformations." },
  { icon: Eye, title: "Transparency Always", desc: "Honest consultations, realistic expectations, and transparent pricing. We tell you what works, what doesn't, and never push unnecessary treatments." },
  { icon: Gem, title: "Luxury Experience", desc: "From the moment you walk through our doors, every touchpoint is designed for comfort. Premium interiors, gentle care, and an experience that feels as good as the results look." },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "25K+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "50+", label: "Expert Staff", icon: Award },
  { value: "22+", label: "Treatments Offered", icon: Zap },
  { value: "60+", label: "Areas Served", icon: Globe },
];

const milestones = [
  { year: "2009", title: "Foundation in Delhi", desc: "Empathy Laser Clinic was established in Pitampura, Delhi with a singular vision: bring world-class aesthetic treatments to Delhi NCR in an environment built on trust, clinical precision, and genuine care. From day one, we committed to only USFDA-cleared technology and genuine products — a promise we've never broken." },
  { year: "2012", title: "Technology Pioneer", desc: "Became one of the first clinics in North Delhi to invest in Lumenis LightSheer Desire — the world's gold standard for laser hair removal. Patients from Rohini, Shalimar Bagh, Model Town, and across North Delhi began choosing us for painless, permanent hair reduction with a machine trusted by the world's best clinics." },
  { year: "2015", title: "Comprehensive Skin Care", desc: "Expanded our services beyond laser to include advanced dermatological treatments — chemical peels, microdermabrasion, acne scar treatment, and anti-ageing protocols. Added Alma Soprano ICE Platinum for truly pain-free laser treatments across all skin types." },
  { year: "2018", title: "Best Clinic Recognition", desc: "Recognized as the Best Aesthetic Clinic in Delhi NCR. Our reputation for results and care attracted clients from South Delhi, Noida, and Gurugram. Introduced Botox, dermal fillers, HIFU face lift, and PRP therapy — all performed by board-certified physicians." },
  { year: "2020", title: "CoolSculpting Elite", desc: "Introduced CoolSculpting® Elite — the world's #1 non-surgical fat reduction system. Became Delhi NCR's premier destination for non-invasive body contouring and weight loss treatments. Clients could now freeze stubborn fat with zero surgery and zero downtime." },
  { year: "2023", title: "Hair Restoration Centre", desc: "Launched comprehensive hair restoration services including FUE hair transplant, advanced PRP therapy, and scalp mesotherapy. Addressed Delhi's growing hair loss crisis caused by hard water, pollution, and stress with science-backed solutions." },
  { year: "2025", title: "25,000 Milestone", desc: "Celebrated 25,000+ successful treatments across 22+ service categories. Expanded our team to 50+ trained professionals. Today, patients from across Delhi, Noida, Gurugram, Ghaziabad, and Faridabad trust Empathy for their most important aesthetic decisions." },
];

const whyChoose = [
  { icon: Shield, title: "Genuine Equipment Only", desc: "We use only USFDA-cleared, manufacturer-supplied equipment. No grey market imports, no refurbished machines. Lumenis, Alma, Allergan — direct from the source." },
  { icon: Heart, title: "No-Pressure Consultations", desc: "Our consultations are free, honest, and completely obligation-free. If a treatment isn't right for you, we'll tell you — even if it means recommending you don't need us." },
  { icon: Target, title: "Customized Protocols", desc: "We don't believe in one-size-fits-all. Every treatment is calibrated to your skin type, concern level, and personal goals. Indian skin requires specialized expertise — and we have it." },
  { icon: Leaf, title: "Aftercare That Cares", desc: "Treatment doesn't end when you leave the clinic. We provide detailed aftercare instructions, follow-up calls, and complimentary review appointments to ensure optimal results." },
  { icon: Building2, title: "Premium Environment", desc: "Step into a clinic that feels like a luxury lounge. Thoughtfully designed interiors, private treatment rooms, and a welcoming atmosphere that puts you at ease from the first moment." },
  { icon: TrendingUp, title: "Results-Driven Approach", desc: "We measure success by your results, not our revenue. Before-and-after documentation, progress tracking, and honest assessments at every stage of your journey." },
];


const certifications = [
  "USFDA Cleared Equipment",
  "Allergan Certified Clinic",
  "CoolSculpting® Certified Provider",
  "ISO 9001:2015 Quality Standards",
  "NABH Compliant Facility",
  "Lumenis Authorized Centre",
  "Alma Lasers Certified",
  "Premium Dermal Filler Partner",
];

const AboutPage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative min-h-[75vh] flex items-center overflow-hidden scanlines">
      <div className="absolute inset-0">
        <img src={galleryClinic2} alt="Empathy Laser Clinic Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>
      <AuroraMesh intensity="subtle" className="z-[2]" />
      <ParticleField count={15} className="z-[3] opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Est. 2009 · Pitampura, Delhi</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">The</h1>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-[0.95] mb-8">
            <span className="holographic-text">Empathy Difference</span>
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mb-6">
            Founded over 15 years ago in Pitampura, Delhi, Empathy Laser Clinic was born from a simple belief: <em className="text-primary">aesthetic treatments should be delivered with genuine care, clinical precision, and unwavering transparency.</em>
          </p>
          <p className="text-foreground/60 leading-relaxed max-w-2xl mb-4">
            Today, we are Delhi NCR's most trusted name in laser hair removal, CoolSculpting, skin treatments, Botox, hair restoration, and over 22 specialized services. Our 25,000+ clients — from Pitampura and Rohini to Noida, Gurugram, and Greater Noida — trust us because we deliver results, not promises.
          </p>
          <p className="text-foreground/50 leading-relaxed max-w-2xl">
            Every day, our team of 50+ experts works with a single goal: to help you rediscover yourself — safely, beautifully, and on your own terms.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-14 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-[hsl(var(--gold-dark))]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="text-center"
            >
              <stat.icon size={22} className="text-primary-foreground/50 mx-auto mb-2" />
              <p className="font-serif text-3xl md:text-4xl text-primary-foreground drop-shadow-[0_0_15px_hsl(0,0%,100%,0.3)]">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* Our Values */}
    <section className="py-28 bg-background relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What Drives Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Core <em className="holographic-text" style={{ fontStyle: "italic" }}>Values</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            These aren't just words on a wall — they're the principles behind every consultation, every treatment, and every follow-up call.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Tilt3DCard className="h-full" maxTilt={8}>
                <div className="group p-8 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(38,45%,60%,0.25)] transition-all"
                    >
                      <v.icon size={24} className="text-primary" />
                    </motion.div>
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="multi" />

    {/* Why Choose Empathy */}
    <section className="py-28 bg-secondary relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Empathy Advantage</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Why <em className="holographic-text" style={{ fontStyle: "italic" }}>25,000+ Clients</em> Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In a city full of options, here's why Delhi NCR's most discerning clients choose Empathy Laser Clinic for their most important aesthetic decisions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex gap-5 p-6 bg-card/30 backdrop-blur-sm border border-primary/8 rounded-xl hover:border-primary/25 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(38,45%,60%,0.2)] transition-all">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* Our Story Timeline */}
    <section className="py-28 bg-background relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            15+ Years of <em className="holographic-text" style={{ fontStyle: "italic" }}>Excellence</em>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From a single clinic in Pitampura to Delhi NCR's most trusted aesthetic brand — here's how Empathy has evolved to serve you better.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 md:gap-8 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.15, boxShadow: "0 0 30px hsl(38 45% 60% / 0.4)" }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  <span className="font-serif text-lg text-primary-foreground">{m.year}</span>
                </motion.div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/5 mt-4" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">{m.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* Certifications */}
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Trust & Credentials</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Certifications & <em className="holographic-text" style={{ fontStyle: "italic" }}>Partnerships</em>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-2.5 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-full px-6 py-3 hover:border-primary/30 transition-all"
            >
              <CheckCircle size={14} className="text-primary drop-shadow-[0_0_4px_hsl(38,45%,60%,0.4)]" />
              <span className="text-sm text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="multi" />

    {/* Mission Section */}
    <section className="py-28 bg-secondary relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img src={galleryClinic1} alt="Empathy Laser Clinic — Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl px-6 py-4">
                <p className="font-serif text-2xl text-primary">15+</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Years of Trust</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-4">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Where Clinical Precision Meets <em className="holographic-text" style={{ fontStyle: "italic" }}>Luxury Experience</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that everyone in Delhi NCR deserves access to world-class aesthetic treatments — from laser hair removal and CoolSculpting to Botox, advanced skin treatments, and hair restoration — in an environment that feels safe, luxurious, and genuinely caring.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our mission is to deliver transformative results using only the most advanced, clinically proven technologies — while treating every client from Pitampura, Rohini, Noida, Gurugram, and beyond with the empathy and respect they deserve.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When you choose Empathy, you're not just choosing a clinic — you're choosing a partner in your transformation journey. A team that celebrates your wins, addresses your concerns honestly, and never cuts corners on your safety.
            </p>
            <ul className="space-y-4">
              {[
                "Personalized treatment plans — no cookie-cutter approaches",
                "Only genuine, USFDA-cleared products and equipment",
                "Transparent pricing with no hidden costs or surprises",
                "Continuous investment in the latest clinical technology",
                "Free consultations and complimentary follow-up reviews",
                "Flexible scheduling including evenings and weekends",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <Target size={16} className="text-primary flex-shrink-0 mt-0.5 drop-shadow-[0_0_4px_hsl(38,45%,60%,0.4)]" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* CTA Section */}
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <AuroraMesh intensity="subtle" className="mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.25em] mb-6">Your Transformation Starts Here</p>
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Ready to Experience<br />the Empathy Difference?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the 25,000+ Delhi NCR clients who have transformed their confidence, their skin, and their lives with Empathy Laser Clinic. Your free consultation is just a click away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="bg-primary-foreground text-primary px-10 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 transition-transform shadow-[0_8px_30px_hsl(0,0%,0%,0.3)]"
              >
                Book Free Consultation <TrendingUp size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:+919811157787"
                className="border-2 border-primary-foreground/30 text-primary-foreground px-10 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all"
              >
                Call 9811157787
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default AboutPage;
