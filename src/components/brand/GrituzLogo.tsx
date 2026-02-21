import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/grituz-logo.png';

export default function GrituzLogo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      {/* G Logo Image with subtle animation */}
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Logo Image */}
        <motion.img
          src={logoImage}
          alt="Grituz Logo"
          className="w-full h-full object-contain relative z-10"
          animate={{
            filter: [
              "drop-shadow(0 0 2px rgba(139, 92, 246, 0.3))",
              "drop-shadow(0 0 4px rgba(139, 92, 246, 0.5))",
              "drop-shadow(0 0 2px rgba(139, 92, 246, 0.3))"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle glow background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-md"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-bold text-foreground tracking-tight"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          GRITUZ
        </motion.span>
        <span className="text-xs text-muted-foreground tracking-wider font-medium">
          Redefining Horizons
        </span>
      </div>
    </Link>
  );
}
