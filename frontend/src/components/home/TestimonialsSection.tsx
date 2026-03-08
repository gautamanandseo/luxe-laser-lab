import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";

const testimonials = [
  {
    text: "It's my 7th sitting at the clinic for facial laser and the results have been amazing so far. The best clinic for facial hair removal in Delhi, planning to get other treatments from here as well. Do check it out! 🫶🏻",
    author: "Fanatic Capture",
    treatment: "Laser Hair Removal",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "I have been their happy customer since 2017. I really like their professional staff and the quality of services that they provide. Being satisfied with the full body laser results, I have recommended them to my family and friends.",
    author: "Pragya Sharma",
    treatment: "Full Body Laser",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "Today is my 3rd session and the results so far are really impressive. The organisation is really helpful and friendly. It is the best clinic for laser hair removal located in Pitampura, Delhi.",
    author: "Aashini Rajpal",
    treatment: "Laser Hair Removal",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "Great Clinic for Transformation. Dr Jyoti handles every client personally and transforms their life beautifully. The entire staff is very supportive. I would love to mention Ms. Poonam who has contributed a lot in my Transformative Journey.",
    author: "Dr Jyotsna Sinha",
    treatment: "Skin Transformation",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "Very effective and worth it treatment with good staff and customer relation. Me, my mother — all have found it very satisfactory and thus honestly recommend it.",
    author: "Surbhi Yadav",
    treatment: "Laser Treatment",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "Empathy is giving us the best services from last 5 years and I am very happy with their services and treatment. It's the best laser clinic for beard shaping.",
    author: "Pravesh Rao",
    treatment: "Beard Shaping",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "This is an excellent clinic for the treatment I got. Good and polite staff. No consultation fee and quality treatment.",
    author: "Rishabh Singla",
    treatment: "Skin Treatment",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "Satisfactory services with good result in no time. Moreover the staff is very cooperative. Proper hygiene is maintained in all the equipment. Value for money.",
    author: "Mudita Sharma",
    treatment: "Laser Treatment",
    location: "Delhi",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            What Our Clients <em className="holographic-text" style={{ fontStyle: "italic" }}>Say</em>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          {/* Decorative quote */}
          <Quote size={60} className="absolute -top-4 left-0 text-primary/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={16} className="fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground/90 italic leading-relaxed mb-8">
                "{testimonials[current].text}"
              </blockquote>
              <p className="font-sans text-sm font-semibold text-foreground">{testimonials[current].author}</p>
              <p className="text-xs text-primary mt-1">{testimonials[current].treatment} · {testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(38,45%,60%,0.2)] transition-all"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-primary shadow-[0_0_10px_hsl(38,45%,60%,0.4)]" : "w-3 bg-foreground/20"}`} />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(38,45%,60%,0.2)] transition-all"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
