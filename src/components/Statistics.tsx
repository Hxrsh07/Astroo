"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(from + easeProgress * (to - from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count % 1 === 0 ? count : count.toFixed(1)}{suffix}</span>;
}

export default function Statistics() {
  const stats = [
    { label: "Weight", value: 7.8, isNumber: true, suffix: " KG" },
    { label: "Top Speed", value: 68, isNumber: true, suffix: " KM/H" },
    { label: "Frame", value: "Carbon Fiber", isNumber: false },
    { label: "Range", value: "Unlimited", isNumber: false },
    { label: "Warranty", value: 10, isNumber: true, suffix: " Years" },
  ];

  return (
    <section className="bg-astroo-bg py-32 border-y border-astroo-border">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8 divide-x divide-astroo-border/0 md:divide-astroo-border">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start md:pl-8 first:pl-0 text-center md:text-left"
            >
              <div className="text-sm text-white/40 uppercase tracking-widest font-mono mb-4">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.isNumber ? (
                  <Counter from={0} to={stat.value as number} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
