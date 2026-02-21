import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function AwardStrip() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-background via-secondary/30 to-background border-y border-glass-border">
      <div className="container-custom">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-8 h-8 text-gradient" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="heading-md text-gradient"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Recognized as Best IT Services Start-Up – South India 2024
          </motion.h2>
          
          <motion.p 
            className="body-md text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Awarded by The Developer Awards, Innovation in Business
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
