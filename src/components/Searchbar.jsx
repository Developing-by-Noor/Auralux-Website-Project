import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const products = [
    {
      name: "Sony WH-1000XM5",
      category: "Headphones",
      slug: "sony-wh1000xm5",
    },
    {
      name: "AirPods Max",
      category: "Headphones",
      slug: "airpods-max",
    },
    {
      name: "Beats Studio Pro",
      category: "Headphones",
      slug: "beats-studio-pro",
    },
    {
      name: "JBL Tune 770NC",
      category: "Headphones",
      slug: "jbl-tune-770nc",
    },

    {
      name: "AirPods Pro 2",
      category: "Earbuds",
      slug: "airpods-pro-2",
    },
    {
      name: "Galaxy Buds 3 Pro",
      category: "Earbuds",
      slug: "galaxy-buds-3-pro",
    },
    {
      name: "Nothing Ear",
      category: "Earbuds",
      slug: "nothing-ear",
    },
    {
      name: "Realme Buds Air 6",
      category: "Earbuds",
      slug: "realme-buds-air-6",
    },

    {
      name: "Apple Watch Ultra 2",
      category: "Smart Watch",
      slug: "apple-watch-ultra-2",
    },
    {
      name: "Galaxy Watch 7",
      category: "Smart Watch",
      slug: "galaxy-watch-7",
    },

    {
      name: "Huawei Watch GT 5",
      category: "Smart Watch",
      slug: "huawei-watch-gt-5",
    },

    {
      name: "Amazfit Balance",
      category: "Smart Watch",
      slug: "amazfit-balance",
    },

    {
      name: "iPhone 16 Pro Max",
      category: "Smartphone",
      slug: "iphone-16-pro-max",
    },

    {
      name: "Samsung S25 Ultra",
      category: "Smartphone",
      slug: "samsung-s25-ultra",
    },

    {
      name: "Google Pixel 10",
      category: "Smartphone",
      slug: "google-pixel-10",
    },

    {
      name: "OnePlus 14",
      category: "Smartphone",
      slug: "oneplus-14",
    },

    {
      name: "JBL Flip 6",
      category: "Speaker",
      slug: "jbl-flip-6",
    },

    {
      name: "Marshall Emberton",
      category: "Speaker",
      slug: "marshall-emberton",
    },

    {
      name: "Sony SRS-XB43",
      category: "Speaker",
      slug: "sony-srs-xb43",
    },
        {
      name: "Gaming Headset RGB",
      category: "Gaming Gear",
      slug: "gaming-headset-rgb",
    },

    {
      name: "Mechanical Keyboard",
      category: "Gaming Gear",
      slug: "mechanical-keyboard",
    },

    {
      name: "Gaming Mouse Pro",
      category: "Gaming Gear",
      slug: "gaming-mouse-pro",
    },

    {
      name: "USB-C Fast Charger",
      category: "Accessories",
      slug: "usb-c-fast-charger",
    },

    {
      name: "Wireless Charger",
      category: "Accessories",
      slug: "wireless-charger",
    },

    {
      name: "Laptop Stand",
      category: "Accessories",
      slug: "laptop-stand",
    },

    {
      name: "20000mAh Power Bank",
      category: "Power Bank",
      slug: "20000mah-power-bank",
    },

    {
      name: "30000mAh Fast Power Bank",
      category: "Power Bank",
      slug: "30000mah-fast-power-bank",
    },
  ];

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="
      relative
      w-full
      min-w-[220px]
      max-w-[550px]
      "
    >
      <Search
        size={18}
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-slate-400
        z-10
        "
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search headphones, earbuds, watches..."
        className="
        w-full
        pl-11
        pr-4
        py-3
        rounded-2xl
        bg-white
        border
        border-slate-200
        shadow-lg
        outline-none
        focus:ring-4
        focus:ring-violet-100
        focus:border-violet-400
        transition-all
        "
      />

      <AnimatePresence>
        {search.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            absolute
            top-full
            left-0
            mt-3
            w-full
            bg-white
            rounded-3xl
            border
            border-slate-200
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            overflow-hidden
            z-[9999]
            "
          >
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice(0, 8)
                .map((product) => (
                  <div
                    key={product.slug}
                    onClick={() => {
                      navigate(
                        `/product/${product.slug}`
                      );
                      setSearch("");
                    }}
                    className="
                    px-5
                    py-4
                    cursor-pointer
                    hover:bg-gradient-to-r
                    hover:from-fuchsia-50
                    hover:to-cyan-50
                    transition-all
                    duration-300
                    "
                  >
                    <h4 className="font-semibold text-slate-800">
                      {product.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {product.category}
                    </p>
                  </div>
                ))
            ) : (
              <div className="p-5 text-slate-500">
                No Product Found
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}