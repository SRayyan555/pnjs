"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  // overlay opacity instead of image opacity
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.3]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">

      {/* IMAGE */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <img
          src="/assets/heroImg.png"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY (fix) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />

      {/* TEXT */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-[80px] md:text-[120px] font-serif font-semibold tracking-tight">
          Professionals Network
        </h1>
      </div>

    </section>
  );
}