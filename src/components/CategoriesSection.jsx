import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Auralux Nova X",
    subtitle: "Premium Wireless Headphones with Adaptive Noise Cancellation",
    image:
      "https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    title: "Studio Pro Headphones",
    subtitle: "Professional Studio Sound for Creators and Musicians",
    image:
      "https://cdn.mos.cms.futurecdn.net/RSzvmgfYZ44VjcdhqK5NsW.jpg",
  },

  {
    title: "Gaming Headset Elite",
    subtitle: "Immersive Surround Sound for Competitive Gaming",
    image:
      "https://wallpaperaccess.com/full/2068799.jpg",
  },

  {
    title: "Bass Master X",
    subtitle: "Deep Bass Performance with Luxury Comfort",
    image:
      "https://img.freepik.com/premium-photo/headphone-image_862462-1956.jpg",
  },

  {
    title: "Auralux Air",
    subtitle: "Ultra-Light Design for All-Day Listening",
    image:
      "https://hobbieshighlight.com/wp-content/uploads/2024/10/top_headphones_picks_2024.jpg",
  },

  {
    title: "Phantom Wireless",
    subtitle: "Crystal Clear Audio and Seamless Connectivity",
    image:
      "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg",
  },

  {
    title: "Titan Noise Cancelling",
    subtitle: "Block Distractions and Focus on Pure Sound",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/875/623/small_2x/ai-generated-headphones-isolated-on-a-wooden-table-on-a-dark-background-photo.jpg",
  },

  {
    title: "Infinity Audio Pro",
    subtitle: "Premium Audio Experience with Modern Design",
    image:
      "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Headphones-Lead-Image.png",
  },

  {
    title: "Quantum Beats",
    subtitle: "Powerful Drivers for Rich and Dynamic Sound",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.O6lPxdNXc7d4fXThCR4FswHaE7?pid=Api&h=220&P=0",
  },

  {
    title: "Nebula X Wireless",
    subtitle: "Luxury Build with Next Generation Audio Technology",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
  },
];

export default function CategoriesSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categories.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Ultra Premium Background Glow */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-fuchsia-400/20 rounded-full blur-[160px]"
      />

      <motion.div
        animate={{ x: [40, -40, 40], y: [20, -20, 20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[160px]"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl   font-black bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            Ultra Premium Tech Collection
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Explore cutting-edge gadgets, smart devices and modern accessories designed for a futuristic lifestyle.
          </p>
        </motion.div>

        {/* Main Showcase */}
        <motion.div
          className="relative h-[650px] md:h-[780px] lg:h-[860px] rounded-[45px] overflow-hidden shadow-[0_50px_150px_rgba(0,0,0,0.2)] border border-white/30"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={categories[current].image}
              src={categories[current].image}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dark Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Text Content */}
          <div className="absolute bottom-10 left-6 md:left-14 text-white max-w-3xl">
            <motion.h3
              key={categories[current].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              {categories[current].title}
            </motion.h3>

            <motion.p
              key={categories[current].subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-white/85 text-lg md:text-xl"
            >
              {categories[current].subtitle}
            </motion.p>
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}