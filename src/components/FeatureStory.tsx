"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Ultra Lightweight Frame",
    description:
      "Crafted using aerospace-grade carbon composite, delivering unmatched strength while reducing every unnecessary gram.",
  },
  {
    num: "02",
    title: "Precision Gear System",
    description:
      "Every shift is immediate, responsive, and engineered for maximum efficiency on every terrain.",
  },
  {
    num: "03",
    title: "Hydraulic Control",
    description:
      "Responsive braking power with confident control whether climbing mountains or descending at speed.",
  },
];

export default function FeatureStory() {
  return (
    <section className="bg-astroo-bg text-white py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        {/* Left Side: Sticky Heading */}
        <div className="lg:w-1/2">
          <div className="sticky top-40">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Engineering <br />
              <span className="text-astroo-accent">The Future</span>
            </motion.h2>
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="lg:w-1/2 flex flex-col gap-32 pt-16 lg:pt-32 pb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-150px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="text-astroo-accent font-mono text-sm tracking-widest uppercase">
                Feature {feature.num}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white/90">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
