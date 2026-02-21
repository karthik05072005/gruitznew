import { motion } from "framer-motion";
import { Calendar, Users, Target, Heart, Eye, Award } from "lucide-react";

const leftColumnCards = [
  {
    icon: Calendar,
    title: "Founded in 2022",
    description: "A young and fast-growing software services company focused on digital innovation."
  },
  {
    icon: Users,
    title: "Global Collaboration",
    description: "Seamless teamwork across time zones to support businesses worldwide."
  },
  {
    icon: Target,
    title: "Skilled & Agile Team",
    description: "A focused team blending creativity, strategy, and technical expertise."
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "We prioritize transparency, clarity, and long-term relationships."
  }
];

const rightColumnCards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with simple, innovative, and scalable digital solutions that drive measurable growth."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become a trusted global technology partner known for quality, collaboration, and results."
  },
  {
    icon: Award,
    title: "Our Commitment",
    description: "Clear communication, reliable delivery, and long-term partnership at every stage of your growth."
  }
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="heading-lg text-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Grituz
          </motion.h2>
          <motion.p 
            className="body-md text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A growing software solutions partner built for modern businesses.
          </motion.p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Our Foundation */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {leftColumnCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="glass-card p-6 hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <card.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="heading-sm text-foreground">{card.title}</h4>
                    <p className="body-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Highlight Block */}
          <motion.div 
            className="lg:scale-110 lg:origin-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 border border-primary/20 hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              
              <div className="relative z-10 space-y-6">
                <motion.h3 
                  className="heading-md text-gradient"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Who We Are
                </motion.h3>
                <p className="body-md text-muted-foreground leading-relaxed">
                  Founded in 2022, Grituz is an emerging software solutions company helping small and medium 
                  businesses build, scale, and optimize their digital presence. We combine strategy, creativity, and 
                  technology to deliver reliable digital systems that create measurable and sustainable growth.
                </p>
                
                {/* Decorative element */}
                <motion.div 
                  className="w-16 h-1 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Purpose & Commitment */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {rightColumnCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="glass-card p-6 hover:shadow-glow transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <card.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="heading-sm text-foreground">{card.title}</h4>
                    <p className="body-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
