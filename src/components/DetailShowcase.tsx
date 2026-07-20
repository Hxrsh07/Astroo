"use client";

import { motion } from "framer-motion";

const details = [
  {
    id: "carbon",
    title: "Carbon Texture",
    subtitle: "Flawless Weave",
    image: "https://images.unsplash.com/photo-1596700868846-5ec5e1bba8f0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "wheel",
    title: "Aero Wheels",
    subtitle: "Cut through the wind",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "gear",
    title: "Gear Mechanism",
    subtitle: "Zero-loss power transfer",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "brake",
    title: "Disc Brakes",
    subtitle: "Absolute stopping power",
    image: "./images/disk-bake.png",
  }
];

export default function DetailShowcase() {
  return (
    <div className="bg-astroo-bg">
      {details.map((detail) => (
        <section key={detail.id} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute inset-0 z-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-astroo-bg via-transparent to-astroo-bg" />
          </motion.div>

          <div className="relative z-10 text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-astroo-accent font-mono tracking-[0.2em] uppercase text-sm mb-4"
            >
              {detail.subtitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter"
            >
              {detail.title}
            </motion.h2>
          </div>
        </section>
      ))}
    </div>
  );
}
