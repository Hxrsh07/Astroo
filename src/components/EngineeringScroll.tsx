"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bike, Cog, Shield, Zap, CircleDashed, Maximize } from "lucide-react";

const cards = [
  { num: "01", title: "Carbon Frame", desc: "Aerospace grade composite for ultimate stiffness to weight ratio.", icon: Bike },
  { num: "02", title: "Integrated Cockpit", desc: "Seamless aerodynamic profile with concealed cable routing.", icon: Maximize },
  { num: "03", title: "Tubeless Wheels", desc: "Lower rolling resistance and enhanced puncture protection.", icon: CircleDashed },
  { num: "04", title: "Smart Suspension", desc: "Adaptive damping that reads the road 1000 times per second.", icon: Zap },
  { num: "05", title: "Hydraulic Brakes", desc: "Heat-dissipating rotors for fade-free stopping power.", icon: Shield },
  { num: "06", title: "Race Geometry", desc: "Aggressive yet compliant positioning for long-distance speed.", icon: Cog },
];

export default function EngineeringScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;
    
    if (!section || !scrollContainer) return;

    // Calculate how far to scroll
    const getScrollAmount = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      return -(scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(scrollContainer, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${getScrollAmount() * -1}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col justify-center bg-astroo-bg overflow-hidden">
      <div className="absolute top-20 left-12 md:left-24 z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Engineering</h2>
        <p className="text-astroo-accent font-mono tracking-widest uppercase">The Anatomy of Speed</p>
      </div>

      <div ref={scrollRef} className="flex gap-8 px-12 md:px-24 mt-32 w-max items-center h-[50vh]">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index}
              className="w-[300px] md:w-[450px] h-[350px] md:h-[450px] shrink-0 bg-astroo-card border border-astroo-border rounded-2xl p-8 flex flex-col justify-between group hover:border-astroo-accent/50 transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="text-5xl font-light text-white/20 group-hover:text-astroo-accent transition-colors duration-500">
                  {card.num}
                </span>
                <Icon className="w-8 h-8 text-white/40 group-hover:text-astroo-accent transition-colors duration-500" />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
