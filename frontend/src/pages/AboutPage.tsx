import { motion } from "framer-motion";
import { Award, Heart, Users, Shield, Star, CheckCircle, Sparkles, Target, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import galleryClinic2 from "@/assets/gallery-clinic-2.jpg";
import galleryClinic1 from "@/assets/gallery-clinic-1.jpg";
import AuroraMesh from "@/components/effects/AuroraMesh";
import Tilt3DCard from "@/components/effects/Tilt3DCard";
import GlowDivider from "@/components/effects/GlowDivider";
import ParticleField from "@/components/effects/ParticleField";

const values = [
  { icon: Heart, title: "Empathy First", desc: "The 'Empathy' in our name reflects our commitment to understanding every client's unique needs and concerns." },
  { icon: Shield, title: "Clinical Excellence", desc: "Only USFDA-cleared, genuinely sourced equipment and products. No compromises on safety or quality." },
  { icon: Users, title: "Expert Team", desc: "Board-certified physicians and trained technicians with decades of combined aesthetic experience." },
  { icon: Award, title: "Proven Results", desc: "25,000+ happy clients and counting. 98% satisfaction rate with transformative, lasting outcomes." },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "25K+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "50+", label: "Expert Staff", icon: Award },
];

const milestones = [
  { year: "2009", title: "Foundation in Delhi", desc: "Empathy Laser Clinic was established in Pitampura, Delhi with a vision to bring world-class aesthetic treatments to Delhi NCR. From day one, we committed to USFDA-cleared technology and genuine products." },
  { year: "2012", title: "Technology Leader", desc: "Became one of the first clinics in North Delhi and Delhi NCR to invest in Lumenis LightSheer Desire — the world's gold standard for laser hair removal. Patients from Rohini, Shalimar Bagh, and across North Delhi began choosing us for painless, permanent hair reduction." },
  { year: "2016", title: "Best Clinic in Delhi NCR", desc: "Recognized as the Best Aesthetic Clinic in Delhi NCR. Added Alma Soprano ICE Platinum for pain-free laser treatments. Expanded services to include Botox, fillers, and advanced dermatology." },
  { year: "2020", title: "CoolSculpting Elite Delhi", desc: "Introduced CoolSculpting® Elite for non-surgical weight loss and body contouring, making Empathy the premier fat reduction and weight loss clinic in Delhi NCR." },
  { year: "2024", title: "25K Milestone", desc: "Celebrated 25,000+ successful treatments. Expanded our team to 50+ trained professionals. Patients from Delhi, Noida, Gurugram, Ghaziabad, and Faridabad trust us for their aesthetic needs." },
];

const team = [
  { name: "Dr. Jyoti Anand", role: "Director" },
  { name: "Dr. Rajnish Anand", role: "Director" },
];

const certifications = [
  "USFDA Cleared Equipment",
  "Allergan Certified Clinic",
  "CoolSculpting® Certified",
  "ISO 9001:2015 Quality",
  "NABH Compliant",
  "Premium Dermal Fillers",
];

const AboutPage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative min-h-[70vh] flex items-center overflow-hidden scanlines">
      <div className="absolute inset-0">
        <img src={galleryClinic2} alt="Empathy Laser Clinic" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      <AuroraMesh intensity="subtle" className="z-[2]" />
      <ParticleField count={15} className="z-[3] opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Est. 2009</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">The</h1>
          <h1 className="font-serif text-5xl md:text-7xl italic leading-[0.95] mb-8">
            <span className="holographic-text">Empathy Difference</span>
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mb-8">
            Founded over 15 years ago in Pitampura, Delhi, Empathy Laser Clinic was born from a simple belief: aesthetic treatments should be delivered with genuine care, clinical precision, and unwavering transparency. Today, we are Delhi NCR's most trusted name in laser hair removal, CoolSculpting, weight loss, and advanced skin treatments.
          </p>
          <p className="text-foreground/60 leading-relaxed max-w-2xl">
            Serving over 25,000 clients from across Delhi NCR — including Rohini, Shalimar Bagh, Model Town, Noida, and Gurugram — we are the region's leading aesthetic clinic where USFDA-cleared science meets luxury experience.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/80" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="text-center"
            >
              <stat.icon size={24} className="text-primary-foreground/60 mx-auto mb-2" />
              <p className="font-serif text-4xl text-primary-foreground drop-shadow-[0_0_15px_hsl(0,0%,100%,0.3)]">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* Our Values */}
    <section className="py-24 bg-background relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What We Stand For</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Our Core <em className="holographic-text" style={{ fontStyle: "italic" }}>Values</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt3DCard className="h-full" maxTilt={10}>
                <div className="group p-8 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl text-center hover:border-primary/40 transition-all duration-500 h-full depth-shadow shimmer-sweep overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_hsl(38,45%,60%,0.3)] transition-all"
                    >
                      <v.icon size={28} className="text-primary" />
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

    {/* Our Story Timeline */}
    <section className="py-24 bg-secondary relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            15 Years of <em className="holographic-text" style={{ fontStyle: "italic" }}>Excellence</em>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.15, boxShadow: "0 0 30px hsl(38 45% 60% / 0.4)" }}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 depth-shadow"
                >
                  <span className="font-serif text-lg text-primary-foreground">{m.year}</span>
                </motion.div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/10 mt-4" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">{m.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="subtle" />

    {/* Meet Our Team */}
    <section className="py-24 bg-background relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Experts</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Meet Our <em className="holographic-text" style={{ fontStyle: "italic" }}>Team</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our team of board-certified doctors and trained specialists are dedicated to delivering exceptional results with the utmost care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Tilt3DCard maxTilt={8}>
                <div className="p-8 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl text-center depth-shadow shimmer-sweep overflow-hidden relative hover:border-primary/40 transition-all">
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary text-lg font-medium">{member.role}</p>
                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* Certifications */}
    <section className="py-16 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-full px-5 py-2.5 depth-shadow hover:border-primary/40 transition-all"
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
    <section className="py-24 bg-background relative overflow-hidden">
      <AuroraMesh intensity="subtle" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-square rounded-2xl overflow-hidden relative depth-shadow">
              <img src={galleryClinic1} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow mb-4">Our Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Where Clinical Precision Meets <em className="holographic-text" style={{ fontStyle: "italic" }}>Luxury Experience</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We believe that everyone deserves access to world-class aesthetic treatments in an environment that feels safe, luxurious, and genuinely caring.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to deliver transformative results using only the most advanced, clinically proven technologies — while treating every client with the empathy and respect they deserve.
            </p>
            <ul className="space-y-3">
              {["Personalized treatment plans for every client", "Only genuine, USFDA-cleared products", "Transparent pricing with no hidden costs", "Continuous investment in latest technology"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <Target size={16} className="text-primary flex-shrink-0 drop-shadow-[0_0_4px_hsl(38,45%,60%,0.4)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <GlowDivider variant="gold" />

    {/* CTA Section */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <AuroraMesh intensity="subtle" className="mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the 25,000+ clients who have transformed their lives with Empathy Laser Clinic.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 transition-transform shadow-[0_8px_30px_hsl(0,0%,0%,0.3)]"
            >
              Book Your Free Consultation <TrendingUp size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default AboutPage;
