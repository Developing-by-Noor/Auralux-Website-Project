import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  ShoppingCart,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RefreshCw,
  Heart,
} from "lucide-react";

import { addDoc, collection } from "firebase/firestore";
import { fireDB, auth } from "../FirebaseConfig";
import { useLocation } from "react-router-dom";


const products = [
   {
  id: 1,
  name: "Wireless Noise Cancelling Headphones",
  price: "$299",
  rating: 4.4,
  image: "https://i.pinimg.com/originals/6c/ab/bc/6cabbc5191d790d0160b3675081082f5.jpg",
  description: "Premium wireless headphones with active noise cancellation and crystal-clear audio."
},
{
  id: 2,
  name: "Auralux Nova X",
  price: "$349",
  rating: 4.8,
  image: "https://tse4.mm.bing.net/th/id/OIP._orilQYf_deutW7Qwi8-BwHaHa?pid=Api&h=220&P=0",
  description: "Luxury over-ear headphones featuring immersive sound and long battery life."
},
{
  id: 3,
  name: "Studio Max Pro",
  price: "$279",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  description: "Professional studio-grade headphones designed for creators and music producers."
},
{
  id: 4,
  name: "Bass Master Elite",
  price: "$229",
  rating: 4.5,
  image: "https://i5.walmartimages.com/asr/d927bc8f-548a-4de1-8b4d-3454f220bf55.60dfc05d98449e54d195631f2dd356e4.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  description: "Deep bass performance with comfortable ear cushions for all-day listening."
},
{
  id: 5,
  name: "Phantom Wireless",
  price: "$319",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
  description: "Ultra-light wireless headphones with premium sound and modern design."
},
{
  id: 6,
  name: "Infinity Sound X",
  price: "$259",
  rating: 4.6,
  image: "https://thumbs.dreamstime.com/b/stunning-photorealistic-retro-wireless-headphone-presented-top-down-view-perfect-your-high-end-audio-projects-definition-379069745.jpg",
  description: "Powerful sound experience with rich bass and enhanced noise isolation."
},
{
  id: 7,
  name: "Titan Audio Pro",
  price: "$399",
  rating: 5.0,
  image: "https://img.freepik.com/premium-photo/white-headphones-isolated-white-background_155807-28114.jpg?w=2000",
  description: "Flagship audio headphones crafted for audiophiles and premium users."
},
{
  id: 8,
  name: "Quantum Beats",
  price: "$249",
  rating: 4.4,
  image: "https://img.freepik.com/premium-psd/headphone-isolated-transparent-background-black-headphone-isolated-generative-ai_667511-3989.jpg?w=1480",
  description: "Dynamic audio drivers deliver clear highs, balanced mids and deep lows."
},
{
  id: 9,
  name: "Nebula X Wireless",
  price: "$289",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
  description: "Elegant wireless headphones with premium comfort and advanced connectivity."
},
{
  id: 10,
  name: "Auralux Air",
  price: "$199",
  rating: 4.3,
  image: "https://i5.walmartimages.com/asr/10a8093a-677d-4130-8b3d-f0c789ad688b.e1ab3b57db55e342fd5828f86eaaf748.jpeg",
  description: "Lightweight everyday headphones offering comfort, style and quality sound."
},
{
  id: 11,
  name: "Crystal Bass Pro",
  price: "$269",
  rating: 4.7,
  image: "https://tse1.mm.bing.net/th/id/OIP.lL2X4QV-ZLqQubgJnMSy3QHaI7?pid=Api&h=220&P=0",
  description: "Crystal-clear audio reproduction with powerful bass enhancement technology."
},
{
  id: 12,
  name: "Velocity Sound",
  price: "$239",
  rating: 4.5,
  image: "https://thumbs.dreamstime.com/b/realistic-d-headphones-white-background-isolated-mockup-ai-generated-307700133.jpg",
  description: "High-performance headphones built for gaming, music and entertainment."
},
{
  id: 13,
  name: "Echo Prime",
  price: "$189",
  rating: 4.2,
  image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?w=800&q=80",
  description: "Stylish audio solution with balanced sound and comfortable fit."
},
{
  id: 14,
  name: "Storm Beats",
  price: "$329",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
  description: "Premium headphones engineered for immersive sound and superior comfort."
},
{
  id: 15,
  name: "Auralux Ultra",
  price: "$449",
  rating: 5.0,
  image: "https://m.media-amazon.com/images/I/71iBJ8MknGL._AC_SL1500_.jpg",
  description: "Ultimate flagship model delivering studio-quality sound and luxury design."
},
{
  id: 16,
  name: "Pulse Audio",
  price: "$219",
  rating: 4.4,
  image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
  description: "Modern headphones with rich audio performance and durable build quality."
},
{
  id: 17,
  name: "Titan Max",
  price: "$369",
  rating: 4.8,
  image: "https://static.vecteezy.com/system/resources/previews/012/981/082/original/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png",
  description: "Premium wireless headset offering exceptional clarity and battery life."
},
{
  id: 18,
  name: "Fusion Wireless",
  price: "$289",
  rating: 4.6,
  image: "https://tse4.mm.bing.net/th/id/OIP.dDeevGn2cFcQVf6p5iMxIwHaIr?pid=Api&h=220&P=0",
  description: "Wireless freedom combined with powerful sound and modern aesthetics."
},
{
  id: 19,
  name: "Galaxy Audio Pro",
  price: "$309",
  rating: 4.7,
  image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg",
  description: "Advanced audio technology for immersive listening experiences."
},
{
  id: 20,
  name: "Elite Noise Cancelling",
  price: "$399",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
  description: "Industry-leading noise cancellation for distraction-free listening."
},
{
  id: 21,
  name: "Auralux Pro Max",
  price: "$499",
  rating: 5.0,
  image: "https://i5.walmartimages.com/asr/342e29f7-9356-4905-a482-1f63533f1281.8cc55996f4a411da73f75277909ceaae.jpeg",
  description: "Premium flagship headphones delivering unmatched sound quality."
},
{
  id: 22,
  name: "Shadow Beats",
  price: "$259",
  rating: 4.5,
  image: "https://m.media-amazon.com/images/I/61vEpX0hK6L._AC_.jpg",
  description: "Sleek wireless headphones designed for everyday premium listening."
},
{
  id: 23,
  name: "Nova Studio",
  price: "$279",
  rating: 4.6,
  image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/logitechgprox2wireless-1.jpg",
  description: "Studio-inspired headset delivering professional-grade sound accuracy."
},
{
  id: 24,
  name: "Auralux Crystal X",
  price: "$339",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
  description: "Premium crystal-clear sound with modern wireless connectivity."
},
{
  id: 25,
  name: "Dynamic Bass Pro",
  price: "$219",
  rating: 4.3,
  image: "https://zerolifestyle.co/cdn/shop/files/Halo_Pro_3.webp?v=1777723827&width=400",
  description: "Bass-focused headphones built for music lovers and daily use."
},
{
  id: 26,
  name: "Wave Sound Elite",
  price: "$289",
  rating: 4.7,
  image: "https://images.pexels.com/photos/159463/headphones-instagram-video-games-razer-159463.jpeg?cs=srgb&dl=black-and-white-headphones-hanging-159463.jpg&fm=jpg",
  description: "Premium audio headphones with rich sound quality and comfortable design."
},
{
  id: 27,
  name: "Auralux Quantum Max",
  price: "$429",
  rating: 4.9,
  image: "https://m.media-amazon.com/images/I/71Rdb7jSSCL._AC_.jpg",
  description: "Flagship Auralux headphones delivering immersive sound and luxury comfort."
},
{
  id: 28,
  name: "Infinity Wireless Pro",
  price: "$319",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
  description: "Wireless headphones with crystal-clear audio and advanced connectivity."
},
{
  id: 29,
  name: "Nebula Studio X",
  price: "$359",
  rating: 4.9,
  image: "https://tse4.mm.bing.net/th/id/OIP.bcjNoxc5CeRQw1KDd2_80QHaE7?pid=Api&h=220&P=0",
  description: "Studio-grade performance designed for creators and music enthusiasts."
},
{
  id: 30,
  name: "Auralux Signature Edition",
  price: "$599",
  rating: 5.0,
  image: "https://i5.walmartimages.com/asr/8b4bfcc4-1025-40da-959d-124831e57fc4.156a0ff49c5d1bbb9180faf13eae3723.jpeg",
  description: "Exclusive premium edition with exceptional sound and elegant craftsmanship."
},
{
  id: 31,
  name: "Auralux Nova X",
  price: "$349",
  rating: 4.9,
  image: "https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description: "Modern wireless headphones offering powerful bass and premium comfort."
},
{
  id: 32,
  name: "Studio Pro Headphones",
  price: "$299",
  rating: 4.8,
  image: "https://cdn.mos.cms.futurecdn.net/RSzvmgfYZ44VjcdhqK5NsW.jpg",
  description: "Professional audio headset engineered for accurate sound reproduction."
},
{
  id: 33,
  name: "Gaming Headset Elite",
  price: "$279",
  rating: 4.7,
  image: "https://wallpaperaccess.com/full/2068799.jpg",
  description: "Gaming-focused headset with immersive surround sound and clear microphone."
},
{
  id: 34,
  name: "Bass Master X",
  price: "$249",
  rating: 4.6,
  image: "https://img.freepik.com/premium-photo/headphone-image_862462-1956.jpg",
  description: "Deep bass performance built for energetic music and entertainment."
},
{
  id: 35,
  name: "Auralux Air",
  price: "$219",
  rating: 4.5,
  image: "https://hobbieshighlight.com/wp-content/uploads/2024/10/top_headphones_picks_2024.jpg",
  description: "Lightweight headphones with stylish design and everyday comfort."
},
{
  id: 36,
  name: "Phantom Wireless",
  price: "$329",
  rating: 4.9,
  image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?cs=srgb&dl=pexels-cottonbro-3945667.jpg&fm=jpg",
  description: "Premium wireless headset featuring rich sound and long-lasting battery."
},
{
  id: 37,
  name: "Titan Noise Cancelling",
  price: "$379",
  rating: 4.8,
  image: "https://static.vecteezy.com/system/resources/thumbnails/036/875/623/small_2x/ai-generated-headphones-isolated-on-a-wooden-table-on-a-dark-background-photo.jpg",
  description: "Advanced noise-cancelling technology for distraction-free listening."
},
{
  id: 38,
  name: "Infinity Audio Pro",
  price: "$289",
  rating: 4.7,
  image: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/11/Stuff-Best-Headphones-Lead-Image.png",
  description: "Balanced sound signature with premium comfort and wireless freedom."
},
{
  id: 39,
  name: "Quantum Beats",
  price: "$259",
  rating: 4.6,
  image: "https://tse2.mm.bing.net/th/id/OIP.O6lPxdNXc7d4fXThCR4FswHaE7?pid=Api&h=220&P=0",
  description: "High-performance headphones designed for immersive music experiences."
},
{
  id: 40,
  name: "Nebula X Wireless",
  price: "$399",
  rating: 5.0,
  image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
  description: "Premium wireless headphones delivering exceptional clarity and comfort."
},
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
  image: "https://m.media-amazon.com/images/I/51rpbVmi9XL._SL1200_.jpg",
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
 {
      id: 56,
      name: "Auralux Nova X",
      price: "$429",
  rating: 2.3,
      image:
       "ttps://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2h",
      description:
        "Premium wireless headphones with immersive audio and adaptive noise cancellation.",
    },
    {
      id: 57,
      name: "Auralux Phantom",
      price: "$429",
  rating: 4.1,
      image:
        "https://tse2.mm.bing.net/th/id/OIP.TZyNyA8ZeY5VME3fxXKZQwHaE7?pid=Api&h=220&P=0",
      description:
        "Studio-quality sound engineered for creators, professionals and music lovers.",
    },
    {
      id: 58,
      name: "Auralux Infinity",
      price: "$429",
  rating: 2.0,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1600",
      description:
        "Crystal-clear audio, deep bass and luxury comfort for all-day listening.",
    },
    {
      id: 59,
      name: "Auralux Titan",
      price: "$429",
  rating: 4.9,
      image:
        "https://i5.walmartimages.com/asr/342e29f7-9356-4905-a482-1f63533f1281.8cc55996f4a411da73f75277909ceaae.jpeg",
      description:
        "Flagship performance with premium materials and ultra-modern design.",
    },
    {
      id: 60,
      name: "Auralux Elite",
      price: "$429",
  rating: 3.9,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1600",
      description:
        "Built for audiophiles seeking precision, comfort and powerful sound.",
    },

  ];


const ProductInfo = () => {
 
const { id } = useParams();

const product = products.find(
  (p) => String(p.id) === String(id)
);
  const navigate = useNavigate();
 
 

  /* ================= ADD TO CART FIX ================= */
  const addToCart = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    await addDoc(collection(fireDB, "cart"), {
      userid: user.uid,
      productId: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    alert("Added to cart ✅");
  };

  if (!product) {
    return <h1 className="p-10 text-center">Product Not Found</h1>;
  }
const buyNow = (product) => {
  navigate("/checkout", {
    state: { items: [product] }
  });
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">

      {/* Top Space */}
      <div className="pt-28 pb-16">

        <div className="w-[95%] max-w-[1700px] mx-auto">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="
            mb-8
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-white
            shadow-lg
            hover:scale-105
            transition
            "
          >
            <ArrowLeft size={18} />
            Back
          </button>

          {/* Main Section */}
          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            items-center
            "
          >

            {/* Product Image */}
            <div
              className="
              bg-white
              rounded-[35px]
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              <img
                src={product?.image} alt={product?.name}
                className="
                w-full
                h-[350px]
                sm:h-[450px]
                lg:h-[600px]
                object-cover
                rounded-[25px]
                "
              />
            </div>

            {/* Product Details */}
            <div>

              <span
                className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-violet-100
                text-violet-700
                font-semibold
                "
              >
                Premium Audio
              </span>

              <h1
                className="
                mt-4
                text-4xl
                md:text-4xl
                xl:text-4xl
                font-black
                text-slate-900
                "
              >
                {product?.name || product?.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-5">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={
                      star <= Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                ))}

                <span className="font-semibold text-slate-700">
                  {product?.rating} Rating
                </span>

              </div>

              {/* Price */}
              <h2
                className="
                mt-5
                font-['Outfit']
                text-3xl
                md:text-4xl
                font-black
               
                "
              >
               {product?.price || "$299"}
              </h2>

              {/* Description */}
              <p
                className="
                mt-6
                text-slate-600
                text-lg
                leading-relaxed
                "
              >
               {product?.description || "Premium Auralux Product"}
              </p>

              {/* Features */}
              <div
                className="
                mt-8
                grid
                sm:grid-cols-2
                gap-4
                "
              >

                <div className="bg-white p-4 rounded-2xl shadow-md">
                   Hi-Res Audio
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-md">
                   40 Hour Battery
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-md">
                   Active Noise Cancellation
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-md">
                   Bluetooth 5.3
                </div>

              </div>

              {/* Action Buttons */}
              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-10
                "
              >

                 <button
      onClick={addToCart}
      className="
        flex-1
        py-2.5
        rounded-full
        bg-violet-50
        text-violet-700
        font-semibold
        text-xs sm:text-sm
        border border-violet-200
        flex items-center justify-center gap-2
        hover:bg-violet-100
        hover:border-violet-300
        hover:shadow-lg
        transition-all duration-300
      "
    >
      <ShoppingCart size={15} />
      Cart
    </button>
     
 
              

                <button onClick={() => buyNow(product)}
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

              {/* Benefits */}
              <div
                className="
                mt-12
                grid
                md:grid-cols-3
                gap-4
                "
                >

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <Truck />
                  <p className="mt-3 font-semibold">
                    Free Delivery
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <RefreshCw />
                  <p className="mt-3 font-semibold">
                    30 Day Return
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-md">
                  <ShieldCheck />
                  <p className="mt-3 font-semibold">
                    2 Year Warranty
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
 );
};

 
export default ProductInfo;
 

