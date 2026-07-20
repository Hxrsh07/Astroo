"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-astroo-bg">
      {/* Background Image Matching the Sequence */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/images/ezgif-frame-001.jpg"
          alt="ASTROO Bike"
          className="w-full h-full object-cover opacity-80"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-astroo-bg/20 via-transparent to-astroo-bg" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[12px] uppercase tracking-[0.3em] text-white/40 mb-6 font-mono"
        >
          ASTROO PERFORMANCE SERIES
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-[100px] lg:text-[120px] font-bold leading-[0.9] tracking-tight text-white/90 mb-8"
        >
          Ride Beyond
          <br />
          Gravity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12"
        >
          Designed for riders who chase speed, precision, and freedom. ASTROO
          combines lightweight engineering with futuristic performance to redefine
          every journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-astroo-accent to-astroo-highlight text-white rounded-full font-medium tracking-wide transition-transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,106,0,0.5)]">
            Explore
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium tracking-wide hover:bg-white/5 transition-colors">
            Watch Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}
