import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Blog() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHighlight(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-violet-600 z-50"
      />

    

      {/* HERO */}
      <section className="relative h-[85vh] sm:h-[100vh] flex items-center justify-center text-center px-4 overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2026/02/28/337122_large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-xl"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            The Future of Premium Audio Experience
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mt-4">
            A deep dive into sound innovation, AI audio systems, and Auralux technology.
          </p>
        </motion.div>
      </section>

      {/* ARTICLE */}
      
    </div>
  );
}

/* PARALLAX IMAGE */
function ParallaxImage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, -100]);

  return (
    <motion.div
      style={{ y }}
      className="my-10 sm:my-14 rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80"
        className="w-full h-[200px] sm:h-[280px] object-cover"
      />
    </motion.div>
  );
}