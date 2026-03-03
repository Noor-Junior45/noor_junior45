import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: any;
  label: string;
  username?: string;
  href: string;
  color?: string;
  delay?: number;
}

export default function SocialButton({ icon: Icon, label, username, href, color = "bg-white", delay = 0 }: SocialButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples([...ripples, { x, y, id }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  };

  // Extract the color name (e.g., "emerald-500") from "bg-emerald-500" to use for other utilities if needed
  // For simplicity, we'll use the passed bg class for backgrounds and assume we can use it for borders/text via group-hover
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05, 
        rotateX: 5, 
        rotateY: -5,
        z: 30,
        boxShadow: "0px 10px 30px rgba(0,255,255,0.2), 0px -5px 15px rgba(255,255,255,0.1)" 
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group flex items-center p-4 mb-6
        backdrop-blur-md border border-white/10
        shadow-[0_0_15px_rgba(0,0,0,0.5)]
        hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]
        transition-all duration-300 ease-out
        w-full max-w-sm mx-auto
        overflow-visible
        bg-gradient-to-r from-slate-900/80 to-slate-800/80
      `}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        clipPath: "polygon(5% 0, 95% 0, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0 80%, 0 20%)", // Octagonal/Sci-fi shape
        borderRadius: "4px"
      }}
    >
      {/* Engine Glow (Bottom) */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-cyan-400 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Tech Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none border-t border-b border-white/5" />
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-white/10" />
      <div className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-white/10" />

      {/* Floating Content Wrapper */}
      <motion.div 
        className="flex items-center w-full relative z-10"
        animate={{ 
          y: [0, -4, 0],
          rotateZ: [0, 1, -1, 0] // Slight wobble like a hovering ship
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: Math.random() * 2 
        }}
      >
        {/* Icon Container - "Cockpit" */}
        <div className={`
          flex-shrink-0 w-12 h-12 flex items-center justify-center
          ${color} bg-opacity-20
          text-white
          mr-4
          group-hover:scale-110 group-hover:rotate-12 transition-all duration-300
          relative overflow-hidden
          border border-white/20
          rounded-lg
        `}>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
          <Icon size={24} strokeWidth={2} className="relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
        </div>

        {/* Text Content */}
        <div className="flex-grow text-left">
          <h3 className="font-display font-bold text-lg text-white tracking-widest uppercase group-hover:text-cyan-300 transition-colors drop-shadow-sm">
            {label}
          </h3>
          {username && (
            <p className="font-mono text-[10px] text-cyan-200/70 group-hover:text-cyan-100 transition-colors tracking-wider">
              {username}
            </p>
          )}
        </div>
      </motion.div>

      {/* Ripple Effect */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 20,
              height: 20,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>
    </motion.a>
  );
}
