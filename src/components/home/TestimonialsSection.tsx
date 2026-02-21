import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content:
      "Grituz transformed our online presence completely. Their attention to detail and commitment to quality is unmatched. Our website now generates 3x more leads!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, Fashion Hub",
    content:
      "The team at Grituz is incredibly talented and professional. They understood our vision perfectly and delivered a stunning e-commerce website that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Director, Finance Solutions",
    content:
      "Working with Grituz has been a game-changer for our business. Their digital marketing strategies have significantly increased our brand visibility and customer engagement.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Owner, Wellness Studio",
    content:
      "From design to development, Grituz handled everything seamlessly. Their support team is always available and responsive. Highly recommend their services!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal delay={0.2}>
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what our valued clients have to say about working with us."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.4} direction="up">
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  >
                    <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-center gap-1 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring" }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div 
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={next}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
