import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuroraBackground from "@/components/ui/AuroraBackground";
import EnergyFieldAnimation from "@/components/ui/EnergyFieldAnimation";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-aurora">
      <AuroraBackground />
      <EnergyFieldAnimation />
      
      <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border"
              style={{ borderColor: 'hsl(var(--glass-border))' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-gradient">
                Premium Web Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              className="heading-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Best Web Design Agency in{" "}
              <motion.span 
                className="text-gradient font-extrabold inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                India
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="body-lg max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Helping small businesses build powerful online presence with
              stunning websites and result-driven marketing strategies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" className="bg-gradient-cta hover:shadow-glow transition-all duration-300" asChild>
                  <Link to="/get-quote">
                    Get A Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="heroOutline" size="lg" className="hover:bg-glass-bg transition-all duration-300" 
                  style={{ borderColor: 'hsl(var(--glass-border))' }} asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient animate-pulse-glow">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient animate-pulse-glow">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Done</div>
              </motion.div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-gradient animate-pulse-glow">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}
