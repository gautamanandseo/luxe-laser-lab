import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Empathy Laser Clinic transformed my skin completely. After just 4 sessions of laser hair removal, I have smooth, hair-free skin. The staff is incredibly professional and the clinic feels like a luxury spa.",
    author: "Priya Sharma",
    treatment: "Laser Hair Removal",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "I was skeptical about CoolSculpting, but the results speak for themselves. Lost 2 inches off my waist without any surgery. Dr. and team made me feel completely comfortable throughout the process.",
    author: "Ananya Mehta",
    treatment: "CoolSculpting®",
    location: "Noida",
    rating: 5,
  },
  {
    text: "My bridal package at Empathy was the best decision I made for my wedding prep. Started 6 months before and on my wedding day, my skin was absolutely glowing. Every bride deserves this experience.",
    author: "Kavya Reddy",
    treatment: "Bridal Package",
    location: "Gurgaon",
    rating: 5,
  },
  {
    text: "The Botox results are incredibly natural — nobody can tell I had anything done, they just say I look refreshed. Only genuine Allergan products used here. Trust is everything in aesthetics.",
    author: "Deepika Jain",
    treatment: "Botox & Fillers",
    location: "Delhi",
    rating: 5,
  },
  {
    text: "I've been coming to Empathy for their HydraFacials for over a year now. My acne scars have faded dramatically and my skin texture is completely transformed. Highly recommend their skin treatments!",
    author: "Ritu Agarwal",
    treatment: "Skin Treatments",
    location: "Faridabad",
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
