import { motion } from "framer-motion";
import { Search, Lightbulb, Palette, Code, TrendingUp } from "lucide-react";

const frameworkSteps = [
  {
    icon: Search,
    title: "Discovery & Insight",
    description: "We begin by understanding your business goals, audience behavior, technical landscape, and growth opportunities to create a clear digital direction."
  },
  {
    icon: Lightbulb,
    title: "Strategy & Architecture",
    description: "We design digital strategies, brand systems, marketing funnels, automation workflows, and scalable technology frameworks aligned with your objectives."
  },
  {
    icon: Palette,
    title: "Design & Development",
    description: "We build high-performance websites, mobile applications, branding assets, and intelligent automation systems focused on usability, speed, and scalability."
  },
  {
    icon: TrendingUp,
    title: "Optimization & Growth",
    description: "We monitor performance, provide ongoing web support and maintenance, refine strategies, and continuously improve digital outcomes to ensure sustainable growth."
  }
];

export default function GrowthFramework() {
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
            className="heading-lg text-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Grituz Digital Growth Framework
          </motion.h2>
          <motion.p 
            className="body-lg max-w-4xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We transform ideas into scalable digital solutions through a structured strategy, design, and technology 
            process built for measurable business growth.
          </motion.p>
        </motion.div>

        {/* Framework Steps */}
        <div className="grid lg:grid-cols-2 gap-12">
          {frameworkSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex gap-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              {/* Icon */}
              <motion.div 
                className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              
              {/* Content */}
              <div className="space-y-4">
                <motion.h3 
                  className="heading-md text-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.title}
                </motion.h3>
                <p className="body-md text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
