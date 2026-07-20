"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImageSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // We have 51 frames available
    const frameCount = 51;
    const currentFrame = (index: number) =>
      `/images/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    const airpods = {
      frame: 0,
    };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      // Resize canvas logic to cover, keeping aspect ratio
      const img = images[airpods.frame];
      if (!img || !img.complete) return;

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    images[0].onload = render;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resize);
    resize();

    // Setup GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: "+=400%", // Scroll distance
      },
    });

    tl.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

    // Text animations based on scroll progress (0 to 1)
    tl.to("#text-1", { opacity: 0, duration: 0.1 }, 0.1);
    tl.to("#text-2", { opacity: 1, duration: 0.1 }, 0.2);
    tl.to("#text-2", { opacity: 0, duration: 0.1 }, 0.4);
    tl.to("#text-3", { opacity: 1, duration: 0.1 }, 0.5);
    tl.to("#text-3", { opacity: 0, duration: 0.1 }, 0.7);
    tl.to("#text-4", { opacity: 1, duration: 0.1 }, 0.8);

    return () => {
      window.removeEventListener("resize", resize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-astroo-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay Text Content that fades in/out based on scroll */}
      {/* We can use mix-blend-mode or just absolute positioning */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 text-center">
        {/* Frame 1 Equivalent (Start) */}
        <div className="text-overlay opacity-100 transition-opacity duration-500 absolute" id="text-1">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">Built for Motion</h2>
        </div>
        {/* Frame 15 Equivalent */}
        <div className="text-overlay opacity-0 transition-opacity duration-500 absolute" id="text-2">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">Carbon Precision</h2>
        </div>
        {/* Frame 30 Equivalent */}
        <div className="text-overlay opacity-0 transition-opacity duration-500 absolute" id="text-3">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">Engineered for Speed</h2>
        </div>
        {/* Frame 45 Equivalent */}
        <div className="text-overlay opacity-0 transition-opacity duration-500 absolute" id="text-4">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tight">Own Every Road</h2>
        </div>
      </div>
    </section>
  );
}
