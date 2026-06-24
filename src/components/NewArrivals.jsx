import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function NewArrivals() {
  const sliderRef = useRef(null);
    const navigate = useNavigate();
const openProduct = (product) => {
  navigate(`/product/${product.id}`);
};
  const products = [
    {
      id: 56,
      title: "Auralux Nova X",
      tag: "NEW",
      image:
       "https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Premium wireless headphones with immersive audio and adaptive noise cancellation.",
    },
    {
      id: 57,
      title: "Auralux Phantom",
      tag: "TRENDING",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.TZyNyA8ZeY5VME3fxXKZQwHaE7?pid=Api&h=220&P=0",
      description:
        "Studio-quality sound engineered for creators, professionals and music lovers.",
    },
    {
      id: 58,
      title: "Auralux Infinity",
      tag: "BEST SELLER",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1600",
      description:
        "Crystal-clear audio, deep bass and luxury comfort for all-day listening.",
    },
    {
      id: 59,
      title: "Auralux Titan",
      tag: "LIMITED",
      image:
        "https://i5.walmartimages.com/asr/342e29f7-9356-4905-a482-1f63533f1281.8cc55996f4a411da73f75277909ceaae.jpeg",
      description:
        "Flagship performance with premium materials and ultra-modern design.",
    },
    {
      id: 60,
      title: "Auralux Elite",
      tag: "NEW",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1600",
      description:
        "Built for audiophiles seeking precision, comfort and powerful sound.",
    },
  ];



  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Animated Background */}
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-300/20 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-300/20 blur-[180px] rounded-full"
      />

      <div className="max-w-[1700px] mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm mb-5">
               Latest Collection
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
                text-4xl
                md:text-4xl
                lg:text-5xl
                font-black
                bg-gradient-to-r
                from-fuchsia-600
                via-violet-600
                to-cyan-500
                bg-clip-text
                
                text-transparent
              "
            >
              New Arrivals
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="
                mt-6
                text-slate-600
                text-md
                max-w-3xl
              "
            >
              Explore the newest generation of Auralux
              premium headphones crafted with advanced
              technology, luxury materials and immersive
              sound engineered for modern lifestyles.
            </motion.p>
          </div>

          {/* Arrows */}
         <div className="flex gap-2 md:gap-4">
           <button
  onClick={scrollLeft}
  className="
    w-10 h-10
    md:w-14 md:h-14
    rounded-full
    bg-white
    shadow-lg
    border border-slate-200
    flex items-center justify-center
    hover:scale-110 transition
  "
>
  <ChevronLeft size={19} />
</button>

<button
  onClick={scrollRight}
  className="
    w-10 h-10
    md:w-14 md:h-14
    rounded-full
    bg-white
    shadow-lg
    border border-slate-200
    flex items-center justify-center
    hover:scale-110 transition
  "
>
  <ChevronRight size={18} />
</button>
          </div>
        </motion.div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            pb-4
            scrollbar-hide
          "
        >
          {products.map((item, index) => (
            <motion.div
  key={item.id}
  onClick={() => openProduct(item)}
  initial={{
    opacity: 0,
    y: 100,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.8,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -15,
    scale: 1.02,
  }}
  className="relative w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[520px] xl:w-[580px] h-[420px] sm:h-[500px] md:h-[580px] lg:h-[650px] rounded-[28px] overflow-hidden shadow-2xl flex-shrink-0 cursor-pointer"
>
              <img
                src={item.image}
                alt={item.name}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/10
                  via-black/20
                  to-black/80
                "
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                 p-5 sm:p-7 md:p-8 lg:p-10
                  flex
                  flex-col
                  justify-end
                  text-white
                "
              >
                <span
                  className="
                    w-fit
                    px-4
                    py-2
                    rounded-full
                    bg-white/20
                    backdrop-blur-xl
                    text-sm
                    font-semibold
                    mb-4
                  "
                >
                  {item.tag}
                </span>

                <h3
                className="
  text-2xl
  sm:text-1xl
  md:text-2xl
  lg:text-2xl
  font-black
  leading-tight
"
                >
                  {item.title}
                </h3>

                <p
                  className="
  mt-3
  text-white/90
  text-sm
  sm:text-base
  lg:text-sm
  leading-relaxed
  max-w-md
"
                >
                  {item.description}
                </p>

                <div className="mt-8 flex gap-4">
                  <button 
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-white
                      text-black
                      font-semibold
                      hover:scale-105
                      transition
                    "
                  >
                    Buy Now
                  </button>

                  <button
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white/20
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar{
            display:none;
          }

          .scrollbar-hide{
            scrollbar-width:none;
          }
        `}
      </style>
      
    </section>
  );
}