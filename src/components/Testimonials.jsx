import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Chen",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    review: "The sound quality is absolutely incredible. Auralux transformed my studio experience.",
  },
  {
    name: "James Wilson",
    role: "Professional Gamer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    review: "Ultra-low latency and premium comfort. Perfect for long gaming sessions.",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    review: "Crystal-clear audio and beautiful design. Easily my favorite headphones.",
  },
  {
    name: "Michael Brown",
    role: "Audio Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    review: "Professional-grade sound with premium comfort. Outstanding quality.",
  },
  {
    name: "Olivia Parker",
    role: "DJ & Producer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    review: "Noise cancellation is exceptional. Perfect for travel and studio work.",
  },
  {
    name: "Daniel Lee",
    role: "Tech Reviewer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    review: "One of the most premium headphone experiences I have ever tested.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

      {/* Glow Effects */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-fuchsia-400/20 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{ x: [40, -40, 40], y: [20, -20, 20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-cyan-400/20 blur-[180px] rounded-full"
      />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm">
            Customer Reviews
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-black  bg-clip-text ">
            Loved By Thousands
          </h2>

          <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto">
            Discover why creators, gamers, and professionals trust Auralux
            for premium sound experiences.
          </p>

        </div>

        {/* Featured + Side Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* Featured Review */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[40px]
            bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-400
            text-white p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.15)]"
          >

            <div className="absolute top-6 right-8 text-8xl opacity-20">
              "
            </div>

            <div className="text-xl mb-5">⭐⭐⭐⭐⭐</div>

            <p className="text-xl md:text-2xl leading-relaxed">
              {testimonials[current].review}
            </p>

            <div className="flex items-center gap-4 mt-10">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full border-4 border-white object-cover"
              />

              <div>
                <h3 className="font-bold text-xl">
                  {testimonials[current].name} ✓
                </h3>
                <p className="text-white/80">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Reviews */}
          <div className="grid gap-6">
            {testimonials
              .slice(current + 1)
              .concat(testimonials.slice(0, current + 1))
              .slice(0, 2)
              .map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/70 backdrop-blur-xl
                  border border-white rounded-[30px]
                  p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                >
                  <div className="text-yellow-400 text-xl mb-4">
                    ★★★★★
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.review}
                  </p>

                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-slate-800">
                        {item.name}
                      </h3>

                      <p className="text-slate-500 text-sm">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

        </div>

        {/* Marquee */}
        <div className="overflow-hidden mt-20">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[
              "Amazing Sound ",
              "Premium Quality ",
              "Fast Shipping ",
              "Best Headphones ",
              "Worth Every Penny ",
              "5 Star Experience ",
              "Amazing Sound ",
              "Premium Quality ",
              "Fast Shipping ",
              "Best Headphones ",
            ].map((item, i) => (
              <div
                key={i}
                className="px-8 py-4 bg-white rounded-full shadow-lg border border-slate-100"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg text-center">
            <h3 className="text-4xl font-black text-violet-600">50K+</h3>
            <p className="mt-2 text-slate-600">Happy Customers</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg text-center">
            <h3 className="text-4xl font-black text-cyan-600">4.9★</h3>
            <p className="mt-2 text-slate-600">Average Rating</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg text-center">
            <h3 className="text-4xl font-black text-fuchsia-600">120+</h3>
            <p className="mt-2 text-slate-600">Countries Served</p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-lg text-center">
            <h3 className="text-4xl font-black text-violet-600">99%</h3>
            <p className="mt-2 text-slate-600">Satisfaction Rate</p>
          </div>

        </div>

      </div>
    </section>
  );
}