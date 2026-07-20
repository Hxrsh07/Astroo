"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Wrench } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Performance",
    description: "Built for professionals. Every watt is transferred efficiently to the road.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    description: "Future-ready engineering. Smarter components for a connected ride.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    description: "Hand-finished perfection. Meticulous attention to every micro-detail.",
  },
];

export default function WhyAstroo() {
  return (
    <section className="bg-astroo-bg py-32 border-t border-astroo-border">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Why ASTROO
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full bg-astroo-card border border-astroo-border flex items-center justify-center mb-8 group-hover:border-astroo-accent transition-colors duration-500 relative">
                  <div className="absolute inset-0 bg-astroo-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="w-8 h-8 text-white group-hover:text-astroo-accent transition-colors duration-500 relative z-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/60 text-lg max-w-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
