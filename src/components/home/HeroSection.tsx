import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuroraBackground from "@/components/ui/AuroraBackground";
import EnergyFieldAnimation from "@/components/ui/EnergyFieldAnimation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-aurora">
      <AuroraBackground />
      <EnergyFieldAnimation />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-glass-border"
            style={{ borderColor: 'hsl(var(--glass-border))' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-gradient">
              Digital Solutions Engineered for Growth
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="heading-xl text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Digital Solutions Engineered for 
            <motion.span 
              className="text-gradient font-extrabold block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Business Growth
            </motion.span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            className="body-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            At Grituz, we build custom websites, mobile apps, digital marketing strategies, branding systems, 
            reliable web support and maintenance, and practical AI automation tools that help growing businesses 
            move faster, work smarter, and create a strong digital foundation for long-term success.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="hero" size="lg" className="bg-gradient-cta hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/services">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="heroOutline" size="lg" className="border-glass-border hover:bg-glass-bg transition-all duration-300" 
                style={{ borderColor: 'hsl(var(--glass-border))' }} asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
