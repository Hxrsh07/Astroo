"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/9] md:aspect-[4/3]",
    caption: "Aero Testing",
  },
  {
    src: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "aspect-square md:aspect-[3/4]",
    caption: "Drivetrain",
  },
  {
    src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-6",
    aspect: "aspect-[4/3]",
    caption: "Mountain Ascent",
  },
  {
    src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2000&auto=format&fit=crop",
    colSpan: "col-span-12 md:col-span-6",
    aspect: "aspect-[4/3] md:aspect-square",
    caption: "Sunset Ride",
  },
];

export default function QuoteGallery() {
  return (
    <div className="bg-astroo-bg">
      {/* Quote Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-white max-w-5xl leading-tight mb-12 tracking-tight"
        >
          &quot;Every revolution begins with one pedal.&quot;
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-astroo-accent text-2xl tracking-[0.5em] uppercase font-mono relative"
        >
          ASTROO
          <div className="absolute inset-0 blur-2xl bg-astroo-accent/40 -z-10 rounded-full scale-150" />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-[1400px] mx-auto px-4 pb-32">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${image.colSpan} ${image.aspect} relative overflow-hidden group rounded-xl`}
            >
              <div className="absolute inset-0 bg-astroo-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10 flex items-end p-8">
                <p className="text-white font-mono tracking-widest uppercase text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
