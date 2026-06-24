import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingBag,
} from "lucide-react";
const title = "Top Sellers";
import { useNavigate } from "react-router-dom";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const products = [
  {
  id: 41,
  name: "Auralux Pro X",
  price: "$349",
  rating: 4.9,
  image: "https://m.media-amazon.com/images/I/71wJqHHazrL.jpg",
  description: "Professional-grade sound quality crafted for premium users."
},
{
  id: 42,
  name: "Studio Max",
  price: "$279",
  rating: 4.8,
  image: "https://www.bhphotovideo.com/images/images2500x2500/hp_hph200_h200_wired_stereo_gaming_1599010.jpg",
  description: "Studio-inspired headphones with detailed sound and modern aesthetics."
},
{
  id: 43,
  name: "Elite Sound",
  price: "$299",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1600",
  description: "Premium audio headset built for superior sound quality and comfort."
},
{
  id: 44,
  name: "Bass Pro",
  price: "$239",
  rating: 4.6,
  image: "https://staticg.sportskeeda.com/editor/2022/04/5e2ac-16505143586730-1920.jpg",
  description: "Powerful bass-focused headphones designed for music lovers."
},
{
  id: 45,
  name: "Noise Master",
  price: "$329",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1600",
  description: "Premium noise-isolation headphones delivering immersive audio."
},
{
  id: 46,
  name: "Auralux Air",
  price: "$219",
  rating: 4.9,
  image: "https://img.freepik.com/premium-photo/3d-wireless-headphone-image_1222055-1884.jpg",
  description: "Compact and lightweight headphones with crystal-clear audio quality."
},
{
  id: 47,
  name: "Phantom Beats",
  price: "$289",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1600",
  description: "Elegant wireless headphones offering balanced sound and comfort."
},
{
  id: 48,
  name: "Quantum Audio",
  price: "$359",
  rating: 4.7,
  image: "https://i.pinimg.com/originals/2b/30/f3/2b30f3ad353eb44521d5cc4813380cb0.jpg",
  description: "Premium audio technology combined with modern wireless performance."
},
{
  id: 49,
  name: "Nebula X",
  price: "$399",
  rating: 4.9,
  image: "https://i5.walmartimages.com/asr/ad78c0bb-180b-4df3-9a1f-dbad547a818d_1.5ee3a5db8e981ed584153d5d9562005e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  description: "Luxury headphones with immersive sound and premium craftsmanship."
},
{
  id: 50,
  name: "Titan Sound",
  price: "$319",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1600",
  description: "Rich audio performance with modern design and wireless convenience."
},
{
  id: 51,
  name: "Echo Prime",
  price: "$249",
  rating: 4.6,
  image: "https://m.media-amazon.com/images/I/712fHsfyIFL._AC_.jpg",
  description: "Versatile headphones offering balanced sound and everyday comfort."
},
{
  id: 52,
  name: "Auralux Ultra",
  price: "$499",
  rating: 5.0,
  image: "https://tse1.mm.bing.net/th/id/OIP.C28V_SExaS35XoDDnbMLkQHaHa?pid=Api&h=220&P=0",
  description: "Top-tier flagship model delivering audiophile-grade sound quality."
},
{
  id: 53,
  name: "Crystal Bass",
  price: "$269",
  rating: 4.8,
  image: "https://i5.walmartimages.com/asr/342e29f7-9356-4905-a482-1f63533f1281.8cc55996f4a411da73f75277909ceaae.jpeg",
  description: "Enhanced bass technology combined with crystal-clear sound output."
},
{
  id: 54,
  name: "Velocity Pro",
  price: "$339",
  rating: 4.7,
  image: "https://i5.walmartimages.com/asr/e5fd8613-5a78-4ed1-bf6b-affb2c4abf16.184ac25495f7a0f1a3d98d5e16fa96f6.png",
  description: "Professional-grade wireless headphones built for performance and style."
},
{
  id: 55,
  name: "Infinity Sound",
  price: "$429",
  rating: 4.9,
  image: "https://m.media-amazon.com/images/I/71xNjrzG69L._AC_UF1000,1000_QL80_.jpg",
  description: "Luxury audio experience with premium sound quality and comfort."
},

  ];
export default function TopSellers() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

const openProduct = (product) => {
  navigate(`/product/${product.id}`);
};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-violet-60 min-h-screen">

    <motion.div
  animate={{
    x: [0, 150, 0, -150, 0],
    y: [0, -80, 80, -80, 0],
    scale: [1, 1.3, 1],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-400/30 blur-[160px] rounded-full"
/>

<motion.div
  animate={{
    x: [0, -150, 0, 150, 0],
    y: [0, 80, -80, 80, 0],
    scale: [1, 1.25, 1],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/30 blur-[160px] rounded-full"
/>

<motion.div
  animate={{
    rotate: [0, 360],
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-fuchsia-300/20 rounded-full blur-[220px]"
/>

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
<motion.h2
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.8,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{
    once: true,
    amount: 0.4,
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="
    text-5xl
    md:text-5xl
    font-black
    bg-gradient-to-r
    from-fuchsia-600
    via-violet-600
    to-cyan-500
  
    bg-clip-text
    text-transparent
  "
>
  Top Sellers
</motion.h2>
      <motion.p
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.4,
  }}
  transition={{
    duration: 0.8,
    delay: 0.8,
  }}
  className="
    mt-4
    text-slate-600
    max-w-3xl
    mx-auto
  "
>
             Experience the perfect blend of innovation,
  performance and premium design. Explore our
  best-selling headphones, wireless earbuds,
  fast chargers, gaming accessories and smart
  gadgets trusted by thousands of customers
  worldwide.
          </motion.p>

        </div>

        

        
        <div
          className="
          relative
          h-[420px]
          sm:h-[500px]
          md:h-[650px]
          lg:h-[780px]
          flex
          items-center
          justify-center
          overflow-visible
          "
        >
                      {products.map((product, index) => {

            const offset =
              (index - current + products.length) %
              products.length;

            let position = offset;

            if (position > products.length / 2) {
              position -= products.length;
            }

            return (
              <motion.div
               
                key={index}
                animate={{
                  x:
                    window.innerWidth < 640
                      ? position * 90
                      : window.innerWidth < 1024
                      ? position * 240
                      : position * 420,

                  scale:
                    position === 0
                      ? 1
                      : 0.82,

                  opacity:
                    position === 0
                      ? 1
                      : 0.8,

                  y:
                    position === 0
                      ? [-8, 8, -8]
                      : 0,
                }}
                transition={{
                  duration: 4,
                  repeat:
                    position === 0
                      ? Infinity
                      : 0,
                }}
                className="
                absolute

                w-[220px]
                sm:w-[280px]
                md:w-[420px]
                lg:w-[520px]

                h-[300px]
                sm:h-[380px]
                md:h-[560px]
                lg:h-[700px]
                "
                style={{
                  zIndex:
                    position === 0
                      ? 20
                      : 10,
                }}
              >

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  onClick={() => openProduct(product)}
                  className="
                  relative
                  w-full
                  h-full

                  overflow-hidden
                  cursor-pointer
                  rounded-[30px]
                  md:rounded-[40px]

                  shadow-[0_40px_120px_rgba(0,0,0,0.15)]

                  bg-white
                  "
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                    w-full
                    h-full
                    object-cover

                    hover:scale-110
                    transition-all
                    duration-700
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-white/5
                    "
                  />

                  {/* Rating */}

                  <div
                    className="
                    absolute
                    top-4
                    right-4

                    px-4
                    py-2

                    rounded-full

                    bg-white/95

                    flex
                    items-center
                    gap-2
                    "
                  >
                    <Star
                      size={16}
                      fill="#facc15"
                      color="#facc15"
                    />

                    <span className="font-semibold text-sm">
                      {product.rating}
                    </span>
                  </div>

                  {/* Category */}

                  <div
                    className="
                    absolute
                    top-4
                    left-4

                    px-4
                    py-2

                    rounded-full

                    bg-white/20
                    backdrop-blur-xl

                    text-white
                    text-sm
                    "
                  >
                    
                  </div>

                  {/* Content */}

                  <div
                    className="
                    absolute
                    bottom-5
                    left-5

                    md:bottom-8
                    md:left-8

                    text-white
                    "
                  >

                    <h3
                      className="
                      text-xl
                      sm:text-2xl
                      md:text-4xl

                      font-black
                      "
                    >
                      {product.title}
                    </h3>

                    {/* Mobile par description remove */}
                    <div className="hidden md:block">

                      <button
                        className="
                        mt-5

                        px-6
                        py-3

                        rounded-2xl

                        bg-white/95
                        text-slate-900

                        font-semibold

                        flex
                        items-center
                        gap-2

                        hover:scale-105
                        transition-all
                        duration-500
                        "
                      >
                        <ShoppingBag size={18} />
                        Shop Now
                      </button>

                    </div>

                  </div>

                  {/* Premium Glow */}

                  <div
                    className="
                    absolute

                    -top-20
                    -right-20

                    w-52
                    h-52

                    rounded-full

                    bg-white/20

                    blur-3xl
                    "
                  />

                </motion.div>

              </motion.div>
            );
          })}
                  </div>

      </div>

    </section>
  );
}
