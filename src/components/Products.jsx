import React, { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../index.css"

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(30);
  const navigate = useNavigate();
  const products = [
   {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: "$299",
    rating: 4.4,
    image: "https://i.pinimg.com/originals/6c/ab/bc/6cabbc5191d790d0160b3675081082f5.jpg",
  },
  {
    id: 2,
    name: "Auralux Nova X",
    price: "$349",
    rating: 4.8,
    image: "https://tse4.mm.bing.net/th/id/OIP._orilQYf_deutW7Qwi8-BwHaHa?pid=Api&h=220&P=0",
  },
  {
    id: 3,
    name: "Studio Max Pro",
    price: "$279",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  },
  {
    id: 4,
    name: "Bass Master Elite",
    price: "$229",
    rating: 4.5,
    image: "https://i5.walmartimages.com/asr/d927bc8f-548a-4de1-8b4d-3454f220bf55.60dfc05d98449e54d195631f2dd356e4.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
  {
    id: 5,
    name: "Phantom Wireless",
    price: "$319",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
  },
  {
    id: 6,
    name: "Infinity Sound X",
    price: "$259",
    rating: 4.6,
    image: "https://thumbs.dreamstime.com/b/stunning-photorealistic-retro-wireless-headphone-presented-top-down-view-perfect-your-high-end-audio-projects-definition-379069745.jpg",
  },
  {
    id: 7,
    name: "Titan Audio Pro",
    price: "$399",
    rating: 5.0,
    image: "https://img.freepik.com/premium-photo/white-headphones-isolated-white-background_155807-28114.jpg?w=2000",
  },
  {
    id: 8,
    name: "Quantum Beats",
    price: "$249",
    rating: 4.4,
    image: "https://img.freepik.com/premium-psd/headphone-isolated-transparent-background-black-headphone-isolated-generative-ai_667511-3989.jpg?w=1480",
  },
  {
    id: 9,
    name: "Nebula X Wireless",
    price: "$289",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
  },
  {
    id: 10,
    name: "Auralux Air",
    price: "$199",
    rating: 4.3,
    image: "https://i5.walmartimages.com/asr/10a8093a-677d-4130-8b3d-f0c789ad688b.e1ab3b57db55e342fd5828f86eaaf748.jpeg",
  },
  {
    id: 11,
    name: "Crystal Bass Pro",
    price: "$269",
    rating: 4.7,
    image: "https://tse2.mm.bing.net/th/id/OIP.hsGsi6xD6jN_f-naXIen_QHaHa?pid=Api&h=220&P=0",
  },
  {
    id: 12,
    name: "Velocity Sound",
    price: "$239",
    rating: 4.5,
    image: "https://thumbs.dreamstime.com/b/realistic-d-headphones-white-background-isolated-mockup-ai-generated-307700133.jpg",
  },
  {
    id: 13,
    name: "Echo Prime",
    price: "$189",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=800&q=80",
  },
  {
    id: 14,
    name: "Storm Beats",
    price: "$329",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
  },
  {
    id: 15,
    name: "Auralux Ultra",
    price: "$449",
    rating: 5.0,
    image: "https://m.media-amazon.com/images/I/71iBJ8MknGL._AC_SL1500_.jpg",
  },
  {
    id: 16,
    name: "Pulse Audio",
    price: "$219",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  },
  {
    id: 17,
    name: "Titan Max",
    price: "$369",
    rating: 4.8,
    image: "https://static.vecteezy.com/system/resources/previews/012/981/082/original/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png",
  },
  {
    id: 18,
    name: "Fusion Wireless",
    price: "$289",
    rating: 4.6,
    image: "https://tse4.mm.bing.net/th/id/OIP.dDeevGn2cFcQVf6p5iMxIwHaIr?pid=Api&h=220&P=0",
  },
  {
    id: 19,
    name: "Galaxy Audio Pro",
    price: "$309",
    rating: 4.7,
    image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg",
  },
  {
    id: 20,
    name: "Elite Noise Cancelling",
    price: "$399",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
  },
  {
    id: 21,
    name: "Auralux Pro Max",
    price: "$499",
    rating: 5.0,
    image: "https://i5.walmartimages.com/asr/342e29f7-9356-4905-a482-1f63533f1281.8cc55996f4a411da73f75277909ceaae.jpeg",
  },
  {
    id: 22,
    name: "Shadow Beats",
    price: "$259",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61vEpX0hK6L._AC_.jpg",
  },
  {
    id: 23,
    name: "Nova Studio",
    price: "$279",
    rating: 4.6,
    image: "https://tse2.mm.bing.net/th/id/OIP.njOKLo3L5UcOf9a0lSykrgHaHZ?pid=Api&h=220&P=0",
  },
  {
    id: 24,
    name: "Auralux Crystal X",
    price: "$339",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
  },
  {
    id: 25,
    name: "Dynamic Bass Pro",
    price: "$219",
    rating: 4.3,
    image: "https://zerolifestyle.co/cdn/shop/files/Halo_Pro_3.webp?v=1777723827&width=400",
  },
  {
    id: 26,
    name: "Wave Sound Elite",
    price: "$289",
    rating: 4.7,
    image: "https://images.pexels.com/photos/159463/headphones-instagram-video-games-razer-159463.jpeg?cs=srgb&dl=black-and-white-headphones-hanging-159463.jpg&fm=jpg",
  },
  {
    id: 27,
    name: "Auralux Quantum Max",
    price: "$429",
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/71Rdb7jSSCL._AC_.jpg",
  },
  {
    id: 28,
    name: "Infinity Wireless Pro",
    price: "$319",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
  },
  {
    id: 29,
    name: "Nebula Studio X",
    price: "$359",
    rating: 4.9,
    image: "https://tse4.mm.bing.net/th/id/OIP.bcjNoxc5CeRQw1KDd2_80QHaE7?pid=Api&h=220&P=0",
  },
  {
    id: 30,
    name: "Auralux Signature Edition",
    price: "$599",
    rating: 5.0,
    image: "https://i5.walmartimages.com/asr/8b4bfcc4-1025-40da-959d-124831e57fc4.156a0ff49c5d1bbb9180faf13eae3723.jpeg",
  },
     {
    id: 31,
    name: "Auralux Nova X",
    price: "$349",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    id: 32,
    name: "Studio Pro Headphones",
    price: "$299",
    rating: 4.8,
    image:
      "https://cdn.mos.cms.futurecdn.net/RSzvmgfYZ44VjcdhqK5NsW.jpg",
  },

  {
    id: 33,
    name: "Gaming Headset Elite",
    price: "$279",
    rating: 4.7,
    image:
      "https://wallpaperaccess.com/full/2068799.jpg",
  },

  {
    id: 34,
    name: "Bass Master X",
    price: "$249",
    rating: 4.6,
    image:
      "https://img.freepik.com/premium-photo/headphone-image_862462-1956.jpg",
  },

  {
    id: 35,
    name: "Auralux Air",
    price: "$219",
    rating: 4.5,
    image:
      "https://hobbieshighlight.com/wp-content/uploads/2024/10/top_headphones_picks_2024.jpg",
  },

  {
    id: 36,
    name: "Phantom Wireless",
    price: "$329",
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg",
  },

  {
    id: 37,
    name: "Titan Noise Cancelling",
    price: "$379",
    rating: 4.8,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/875/623/small_2x/ai-generated-headphones-isolated-on-a-wooden-table-on-a-dark-background-photo.jpg",
  },

  {
    id: 38,
    name: "Infinity Audio Pro",
    price: "$289",
    rating: 4.7,
    image:
      "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Headphones-Lead-Image.png",
  },

  {
    id: 39,
    name: "Quantum Beats",
    price: "$259",
    rating: 4.6,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.O6lPxdNXc7d4fXThCR4FswHaE7?pid=Api&h=220&P=0",
  },

  {
    id: 40,
    name: "Nebula X Wireless",
    price: "$399",
    rating: 5.0,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
  },
  {
    id: 41,
    name: "Auralux Pro X",
    price: "$349",
    rating: 4.9,
    image:
      "https://m.media-amazon.com/images/I/71wJqHHazrL.jpg",
  },

  {
    id: 42,
    name: "Studio Max",
    price: "$279",
    rating: 4.8,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/981/082/original/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png",
  },

  {
    id: 43,
    name: "Elite Sound",
    price: "$299",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1600",
  },

  {
    id: 44,
    name: "Bass Pro",
    price: "$239",
    rating: 4.6,
    image:
      "https://m.media-amazon.com/images/I/71VxRF78LRL._AC_.jpg",
  },

  {
    id: 45,
    name: "Noise Master",
    price: "$329",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1600",
  },

  {
    id: 46,
    name: "Auralux Air",
    price: "$219",
    rating: 4.9,
    image:
      "https://brain-images-ssl.cdn.dixons.com/4/7/10145574/u_10145574.jpg",
  },

  {
    id: 47,
    name: "Phantom Beats",
    price: "$289",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1600",
  },

  {
    id: 48,
    name: "Quantum Audio",
    price: "$359",
    rating: 4.7,
    image:
      "https://i.pinimg.com/originals/2b/30/f3/2b30f3ad353eb44521d5cc4813380cb0.jpg",
  },

  {
    id: 49,
    name: "Nebula X",
    price: "$399",
    rating: 4.9,
    image:
      "https://i5.walmartimages.com/asr/ad78c0bb-180b-4df3-9a1f-dbad547a818d_1.5ee3a5db8e981ed584153d5d9562005e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },

  {
    id: 50,
    name: "Titan Sound",
    price: "$319",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=1600",
  },

  {
    id: 51,
    name: "Echo Prime",
    price: "$249",
    rating: 4.6,
    image:
      "https://m.media-amazon.com/images/I/712fHsfyIFL._AC_.jpg",
  },

  {
    id: 52,
    name: "Auralux Ultra",
    price: "$499",
    rating: 5.0,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.C28V_SExaS35XoDDnbMLkQHaHa?pid=Api&h=220&P=0",
  },

  {
    id: 53,
    name: "Crystal Bass",
    price: "$269",
    rating: 4.8,
    image:
      "https://i5.walmartimages.com/asr/342e29f7-9356-4905-a482-1f63533f1281.8cc55996f4a411da73f75277909ceaae.jpeg",
  },

  {
    id: 54,
    name: "Velocity Pro",
    price: "$339",
    rating: 4.7,
    image:
      "https://i5.walmartimages.com/asr/e5fd8613-5a78-4ed1-bf6b-affb2c4abf16.184ac25495f7a0f1a3d98d5e16fa96f6.png",
  },

  {
    id: 55,
    name: "Infinity Sound",
    price: "$429",
    rating: 4.9,
    image:
      "https://m.media-amazon.com/images/I/71WoN3Vt-gL._AC_.jpg",
  },

  ];



    return (
    <section className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-violet-50 relative overflow-hidden">

      {/* Premium Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-400/20 rounded-full blur-[140px] animate-pulse" />

        <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[160px] animate-pulse" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-fuchsia-400/20 rounded-full blur-[180px] animate-pulse" />

      </div>

      {/* Hero Section */}
      <div className="relative pt-28 md:pt-32 pb-14 px-6 text-center">

        <span
          className="
          px-5
          py-2
          rounded-full
          bg-violet-100
          text-violet-700
          font-semibold
          
          text-sm
          "
        >
          Auralux Premium Collection
        </span>

        <h1
          className="
          mt-6
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          "
        >
          <span
            className="
            bg-gradient-to-r
            from-fuchsia-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-transparent
             font-['outfit-font']
            "
          >
            Explore Future Technology
          </span>
        </h1>

        <p
          className="
          max-w-3xl
          mx-auto
          mt-6
          text-slate-600
          text-base
          md:text-lg
          "
        >
          Premium headphones, earbuds, watches,
          chargers, power banks and smart gadgets
          crafted for the future.
        </p>
      </div>

      {/* Products Container */}
      <div className="w-[96%] max-w-[2200px] mx-auto px-4 sm:px-6 pb-20">

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-4
          2xl:grid-cols-5
          gap-4
          md:gap-6
          "
        >

          {products.slice(0, visibleProducts).map((product) => (
           <div
  key={product.id}
  onClick={() => navigate(`/product/${product.id}`)}
  className="
  group
  cursor-pointer
  bg-white/80
  backdrop-blur-xl
  border
  border-white/50
  rounded-3xl
  overflow-hidden
  shadow-lg
  hover:shadow-[0_25px_70px_rgba(139,92,246,0.25)]
  transition-all
  duration-500
  hover:-translate-y-2
  flex
  flex-col
  h-full
  "
>
                     <div className="relative">

              

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                  h-46
                  sm:h-44
                  md:h-53
                  lg:h-58
                  xl:h-60
                  2xl:h-71
                  w-full
                  object-cover
                  group-hover:scale-105
                  transition-all
                  duration-700
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  "
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className={
                        star <= Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300"
                      }
                    />
                  ))}

                  <span className="text-xs text-slate-500 ml-1">
                    {product.rating}
                  </span>

                </div>

                {/* Product Title */}
                <h3
                  className="
                  text-sm
                  sm:text-base
                  lg:text-md
                  font-bold
                  text-slate-900
                  leading-snug
                  line-clamp-2
                  min-h-[30px]
                  sm:min-h-[27px]
                  "
                >
                  {product.name}
                </h3>

                {/* Price */}
                <p
                  className="
                  mt-0
                  text-lg
                  sm:text-xl
                  font-['Outfit']
                  font-black
                  text-black
                  
                  "
                >
                  {product.price}
                </p>

                {/* Buttons */}
                <div
                  className="
                  flex
                  gap-2
                  mt-auto
                  pt-4
                  "
                >

                  <button  onClick={() => navigate("/cart")}
                    className="
                    flex-1
                    py-2.5
                    rounded-full
                    bg-violet-50
                    text-violet-700
                    font-semibold
                    text-xs
                    sm:text-sm
                    border
                    border-violet-200
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-violet-100
                    hover:border-violet-300
                    hover:shadow-lg
                    transition-all
                    duration-300
                    "
                  >
                    <ShoppingCart size={15} />
                    Cart
                  </button>

                  <button
                    className="
                    flex-1
                    py-2.5
                    rounded-full
                    bg-gradient-to-r
                    from-fuchsia-200
                    via-violet-200
                    to-cyan-200
                    text-shadow-black
                    font-semibold
                    text-xs
                    sm:text-sm
                    shadow-lg
                    hover:scale-105
                    hover:shadow-[0_15px_35px_rgba(139,92,246,0.35)]
                    transition-all
                    duration-300
                    "
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Load More Button */}
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-16">

            <button
              onClick={() =>
                setVisibleProducts((prev) => prev + 10)
              }
              className="
              group
              px-8
              md:px-10
              py-4
              rounded-full
              bg-white
              border
              border-violet-200
              shadow-[0_20px_60px_rgba(139,92,246,0.20)]
              font-bold
              flex
              items-center
              gap-3
              hover:bg-violet-50
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Explore More Products

              <ArrowRight
                size={18}
                className="
                group-hover:translate-x-1
                transition-all
                duration-300
                "
              />
            </button>

          </div>
        )}
      </div>
      
      {/* Brand Story Section */}
      <section className="max-w-[1800px] mx-auto px-6 py-24">

        <div className="text-center">

          <span
            className="
            text-sm
            font-semibold
            tracking-[0.25em]
            uppercase
            text-violet-600
            "
          >
            Why Choose Auralux
          </span>

          <h2
            className="
            mt-5
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-black
            text-slate-900
            "
          >
            Technology Designed
            <br />
            For Everyday Excellence
          </h2>

          <p
            className="
            max-w-3xl
            mx-auto
            mt-6
            text-lg
            text-slate-600
            leading-relaxed
            "
          >
            At Auralux, we believe technology should
            be more than functional. Every product is
            selected to deliver premium performance,
            elegant design and long-lasting quality.
          </p>

        </div>

        {/* Feature Cards */}
        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          mt-20
          "
        >

          {/* Card 1 */}
          <div
            className="
            p-8
            rounded-[32px]
            bg-white/70
            backdrop-blur-xl
            border
            border-white
            shadow-xl
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(139,92,246,0.15)]
            transition-all
            duration-500
            "
          >


            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Premium Quality
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Carefully curated products built with
              premium materials, advanced technology
              and exceptional attention to detail.
            </p>

          </div>

          {/* Card 2 */}
          <div
            className="
            p-8
            rounded-[32px]
            bg-white/70
            backdrop-blur-xl
            border
            border-white
            shadow-xl
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(6,182,212,0.15)]
            transition-all
            duration-500
            "
          >


            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Modern Innovation
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Smart gadgets and accessories designed
              to simplify daily life while delivering
              exceptional performance.
            </p>

          </div>

          {/* Card 3 */}
          <div
            className="
            p-8
            rounded-[32px]
            bg-white/70
            backdrop-blur-xl
            border
            border-white
            shadow-xl
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(236,72,153,0.15)]
            transition-all
            duration-500
            "
          >


            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Trusted Experience
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Every product is chosen to provide a
              reliable, seamless and enjoyable user
              experience.
            </p>

          </div>

        </div>

        {/* CTA Section */}
        <div
          className="
          mt-24
          rounded-[40px]
          overflow-hidden
          bg-gradient-to-r
          from-fuchsia-600
          via-violet-600
          to-cyan-500
          p-[1px]
          "
        >

          <div
            className="
            bg-white
            rounded-[40px]
            px-8
            md:px-16
            py-16
            text-center
            "
          >

            <h3
              className="
              text-3xl
              md:text-4xl
              font-black
              text-slate-900
              "
            >
              Elevate Your Everyday Lifestyle
            </h3>

            <p
              className="
              max-w-2xl
              mx-auto
              mt-6
              text-slate-600
              leading-relaxed
              "
            >
              Explore a growing collection of
              headphones, earbuds, smart watches,
              chargers, power banks and innovative
              gadgets crafted for people who value
              quality, design and performance.
            </p>


          </div>

        </div>

      </section>

    </section>
  );
};

export default Products;