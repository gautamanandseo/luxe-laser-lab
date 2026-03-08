import { motion } from "framer-motion";
import { Award, Heart, Users, Shield, Star, CheckCircle, Sparkles, Target, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import galleryClinic2 from "@/assets/gallery-clinic-2.jpg";
import galleryClinic1 from "@/assets/gallery-clinic-1.jpg";
import { Link } from "react-router-dom";

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
  { year: "2009", title: "Foundation", desc: "Empathy Laser Clinic was established with a vision to bring world-class aesthetic treatments to Delhi NCR." },
  { year: "2012", title: "Expansion", desc: "Introduced CoolSculpting® and became one of the first clinics in North India to offer FDA-cleared fat freezing." },
  { year: "2016", title: "Excellence Award", desc: "Recognized as the Best Aesthetic Clinic in Delhi NCR for outstanding client satisfaction and results." },
  { year: "2020", title: "Advanced Tech", desc: "Upgraded to the latest generation of Diode Laser and added comprehensive bridal packages." },
  { year: "2024", title: "25K Milestone", desc: "Celebrated 25,000+ successful treatments and expanded our team to 50+ trained professionals." },
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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={galleryClinic2}
          alt="Empathy Laser Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary">Est. 2009</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-[0.95] mb-2">The</h1>
          <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-[0.95] mb-8">Empathy Difference</h1>

          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mb-8">
            Founded over 15 years ago, Empathy Laser Clinic was born from a simple belief: aesthetic treatments should be delivered with genuine care, clinical precision, and unwavering transparency.
          </p>

          <p className="text-foreground/60 leading-relaxed max-w-2xl">
            We are Delhi NCR's most trusted name in advanced aesthetics — a sanctuary where science meets luxury, and every client is treated like family.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon size={24} className="text-primary-foreground/60 mx-auto mb-2" />
              <p className="font-serif text-4xl text-primary-foreground">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Values */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What We Stand For</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Our Core <em className="text-primary">Values</em>
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
              className="group p-8 bg-card border border-border rounded-2xl text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <v.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Story Timeline */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Our Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            15 Years of <em className="text-primary">Excellence</em>
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
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="font-serif text-lg text-primary-foreground">{m.year}</span>
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 h-full bg-primary/20 mt-4" />
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

    {/* Meet Our Team */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Experts</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Meet Our <em className="text-primary">Team</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our team of board-certified doctors and trained specialists are dedicated to delivering exceptional results with the utmost care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-card border border-border rounded-2xl text-center"
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">{member.name}</h3>
              <p className="text-primary text-lg font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5"
            >
              <CheckCircle size={14} className="text-primary" />
              <span className="text-sm text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1683408640631-2c99fff964d7?w=800&q=80"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-4">Our Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Where Clinical Precision Meets <em className="text-primary">Luxury Experience</em>
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
                  <Target size={16} className="text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the 25,000+ clients who have transformed their lives with Empathy Laser Clinic.
          </p>
          <Link
            to="/contact"
            className="bg-primary-foreground text-primary px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
          >
            Book Your Free Consultation <TrendingUp size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default AboutPage;
