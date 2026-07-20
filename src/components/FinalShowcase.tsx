"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FinalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-[#020202] flex flex-col items-center justify-center overflow-hidden py-32">
      {/* Orange Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-astroo-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        
        <motion.div
          style={{ rotate, scale }}
          className="w-full max-w-4xl mb-24"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/ezgif-frame-001.jpg" 
            alt="ASTROO Final" 
            className="w-full h-auto object-contain mix-blend-lighten"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
        >
          Designed to Move <br/> You Forward
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 mb-16 space-y-2 font-light"
        >
          <p>Minimal weight.</p>
          <p>Maximum confidence.</p>
          <p className="text-white">Pure riding experience.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-gradient-to-r from-astroo-accent to-astroo-highlight text-white rounded-full font-bold tracking-widest uppercase shadow-[0_10px_40px_-10px_rgba(255,106,0,0.6)]"
        >
          Pre-Order Now
        </motion.button>
      </div>
    </section>
  );
}
