"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden bg-astroo-bg flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ezgif-frame-025.jpg"
          alt="ASTROO Parallax"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-none"
        >
          Every Road.<br />
          Every Ride.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light"
        >
          Performance isn&apos;t measured by distance.<br />
          It&apos;s measured by how alive every kilometer feels.
        </motion.p>
      </div>
    </section>
  );
}
