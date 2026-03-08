import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Shield, CheckCircle, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/effects/ScrollReveal";
import AuroraMesh from "@/components/effects/AuroraMesh";

const testimonials = [
  { text: "It's my 7th sitting at the clinic for facial laser and the results have been amazing so far. The best clinic for facial hair removal in Delhi, planning to get other treatments from here as well. Do check it out! 🫶🏻", author: "Fanatic Capture", treatment: "Laser Hair Removal", location: "Pitampura, Delhi", rating: 5 },
  { text: "I have been their happy customer since 2017. I really like their professional staff and the quality of services that they provide. Being satisfied with the full body laser results, I have recommended them to my family and friends.", author: "Pragya Sharma", treatment: "Full Body Laser", location: "Rohini, Delhi", rating: 5 },
  { text: "Today is my 3rd session and the results so far are really impressive. The organisation is really helpful and friendly. It is the best clinic for laser hair removal located in Pitampura, Delhi.", author: "Aashini Rajpal", treatment: "Laser Hair Removal", location: "Delhi", rating: 5 },
  { text: "Great Clinic for Transformation. Dr Jyoti handles every client personally and transforms their life beautifully. The entire staff is very supportive. I would love to mention Ms. Poonam who has contributed a lot in my Transformative Journey.", author: "Dr Jyotsna Sinha", treatment: "Skin Transformation", location: "Model Town, Delhi", rating: 5 },
  { text: "Very effective and worth it treatment with good staff and customer relation. Me, my mother — all have found it very satisfactory and thus honestly recommend it.", author: "Surbhi Yadav", treatment: "Laser Treatment", location: "Shalimar Bagh, Delhi", rating: 5 },
  { text: "Empathy is giving us the best services from last 5 years and I am very happy with their services and treatment. It's the best laser clinic for beard shaping.", author: "Pravesh Rao", treatment: "Beard Shaping", location: "Ashok Vihar, Delhi", rating: 5 },
  { text: "This is an excellent clinic for the treatment I got. Good and polite staff. No consultation fee and quality treatment.", author: "Rishabh Singla", treatment: "Skin Treatment", location: "Paschim Vihar, Delhi", rating: 5 },
  { text: "Satisfactory services with good result in no time. Moreover the staff is very cooperative. Proper hygiene is maintained in all the equipment. Value for money.", author: "Mudita Sharma", treatment: "Laser Treatment", location: "Delhi", rating: 5 },
  { text: "I got my CoolSculpting done here and the results are visible. Lost 2 inches from my belly area. The staff explained everything before the procedure and made me feel comfortable throughout.", author: "Ankit Verma", treatment: "CoolSculpting®", location: "Noida", rating: 5 },
  { text: "Had amazing experience with their bridal package. Started 4 months before my wedding and my skin was glowing on the big day. All my relatives asked for the secret! Highly recommended for brides-to-be.", author: "Priya Mehra", treatment: "Bridal Package", location: "Gurugram", rating: 5 },
  { text: "The PRP treatment for my hair loss has shown incredible results. After 6 sessions, I can see visible hair regrowth. The doctors here are genuinely caring and don't push unnecessary treatments.", author: "Rahul Kapoor", treatment: "PRP Hair Therapy", location: "Dwarka, Delhi", rating: 5 },
  { text: "I was skeptical about HIFU but after seeing the before and after photos of other clients, I decided to try it. One session and my jawline looks so much more defined. No needles, no downtime!", author: "Neha Agarwal", treatment: "HIFU Face Lift", location: "Greater Noida", rating: 5 },
  { text: "Been coming here for acne scar treatment for the past 3 months. The chemical peels combined with ResurFX laser have dramatically improved my skin texture. Finally confident without makeup!", author: "Simran Kaur", treatment: "Acne Scar Treatment", location: "Janakpuri, Delhi", rating: 5 },
  { text: "My dark circles were my biggest insecurity. After 4 sessions of their under-eye treatment protocol, the improvement is remarkable. The staff is gentle and the clinic ambiance is very calming.", author: "Divya Rastogi", treatment: "Dark Circles", location: "Pitampura, Delhi", rating: 5 },
];

const highlights = [
  { icon: Users, value: "25,000+", label: "Clients Treated" },
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: CheckCircle, value: "860+", label: "Verified Reviews" },
  { icon: Heart, value: "98%", label: "Satisfaction" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, current]);

  return (
    <section id="testimonials" className="py-28 bg-velvet relative overflow-hidden light-rays vignette">
      <AuroraMesh intensity="medium" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="section-heading">
            What Our Clients <em className="holographic-text" style={{ fontStyle: "italic" }}>Say</em>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            Real reviews from real people. Every testimonial is from a verified Google review — no fabrications, no paid endorsements.
          </p>
        </ScrollReveal>

        {/* Stats highlight row */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-wrap justify-center gap-8 md:gap-14 mb-14">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <h.icon size={18} className="text-primary mx-auto mb-1.5" />
              <div className="font-serif text-2xl text-foreground font-semibold">{h.value}</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">{h.label}</div>
            </motion.div>
          ))}
        </ScrollReveal>

        {/* Google Rating Hero Badge */}
        <ScrollReveal direction="scale" className="flex justify-center mb-12">
          <a
            href="https://www.google.com/maps/place/Empathy+Skin+%26+Laser+Hair+Removal+Clinic+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-card/60 backdrop-blur-xl border border-primary/15 hover:border-primary/40 rounded-2xl px-6 py-4 transition-all depth-shadow"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:shadow-[0_0_25px_hsl(38,45%,60%,0.3)] transition-all">
              <MapPin size={24} className="text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-serif text-3xl text-foreground font-semibold">4.9</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary drop-shadow-[0_0_4px_hsl(38,45%,60%,0.5)]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">860+ verified reviews on Google</p>
            </div>
            <Shield size={18} className="text-primary/40 group-hover:text-primary transition-colors ml-2" />
          </a>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Quote size={80} className="absolute -top-6 -left-4 text-primary/10 drop-shadow-[0_0_30px_hsl(38,45%,60%,0.2)]" />
          </motion.div>

          <div className="relative obsidian-panel rounded-3xl p-10 md:p-14 overflow-hidden border-liquid-gold">
            <div className="shimmer-sweep absolute inset-0 rounded-3xl" />
            <div className="absolute inset-0 radial-glow opacity-30 rounded-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                    >
                      <Star size={18} className="fill-primary text-primary drop-shadow-[0_0_8px_hsl(38,45%,60%,0.5)]" />
                    </motion.div>
                  ))}
                </div>
                <blockquote className="font-serif text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-8">
                  "{testimonials[current].text}"
                </blockquote>
                <p className="font-sans text-sm font-semibold text-foreground">{testimonials[current].author}</p>
                <p className="text-xs text-primary mt-1">{testimonials[current].treatment} · {testimonials[current].location}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.15, boxShadow: "0 0 20px hsl(38 45% 60% / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-card/30 backdrop-blur-sm"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-primary shadow-[0_0_12px_hsl(38,45%,60%,0.5)]" : "w-2 bg-foreground/20 hover:bg-foreground/40"}`} />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.15, boxShadow: "0 0 20px hsl(38 45% 60% / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all bg-card/30 backdrop-blur-sm"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        {/* CTA after testimonials */}
        <ScrollReveal direction="up" delay={0.3} className="text-center mt-14">
          <p className="text-muted-foreground text-sm mb-4">Join 25,000+ happy clients across Delhi NCR</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="gold-shimmer text-primary-foreground px-8 py-4 text-sm font-sans uppercase tracking-[0.15em] rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_hsl(38,45%,60%,0.25)] hover:shadow-[0_12px_40px_hsl(38,45%,60%,0.4)] transition-shadow"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
