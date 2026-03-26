"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
      {/* Dynamic CRT grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 238, 252, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 238, 252, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%)'
        }}
      />
      
      {/* Scanner line going from top to bottom */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-primary-neon opacity-50 blur-[2px]"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
