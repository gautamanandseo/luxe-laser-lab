import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            What Our Clients <em className="text-primary">Say</em>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
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
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-3 bg-foreground/20"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
