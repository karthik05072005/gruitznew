import { motion } from "framer-motion";
import { MessageSquare, Zap, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: MessageSquare,
    title: "We Listen First",
    description: "Your business has its own challenges, goals, and vision. We take the time to understand your journey before designing, developing, or marketing anything. Every solution begins with clarity."
  },
  {
    icon: Zap,
    title: "We Build With Purpose",
    description: "From websites and branding to digital marketing and automation, everything we create is designed to support real business growth — not just to look good online."
  },
  {
    icon: TrendingUp,
    title: "We Grow With You",
    description: "Your success does not end at launch. Through ongoing support, optimization, and continuous improvement, we stay by your side as your business evolves and scales."
  }
];

export default function AdvantageSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="heading-xl text-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Helping Small Businesses Dream Bigger
          </motion.h2>
          <motion.p 
            className="body-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At Grituz Software Services, we believe every growing business deserves more than just a website. 
            We partner with you to build strong digital foundations that create real opportunities, steady growth, 
            and long-term success.
          </motion.p>
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              {/* Icon */}
              <motion.div 
                className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <advantage.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              
              {/* Content */}
              <div className="space-y-4">
                <motion.h3 
                  className="heading-md text-foreground"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {advantage.title}
                </motion.h3>
                <p className="body-md text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "200px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-1 bg-gradient-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
