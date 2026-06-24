import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    category: "Products",
    q: "What makes Auralux headphones premium?",
    a: "Auralux uses high-fidelity drivers, adaptive noise cancellation, and luxury ergonomic design for long listening comfort.",
  },
  {
    category: "Products",
    q: "Are Auralux headphones compatible with all devices?",
    a: "Yes, they work with Android, iOS, Windows, Mac, and all Bluetooth-enabled devices.",
  },
  {
    category: "Shipping",
    q: "Do you offer worldwide shipping?",
    a: "Yes, we ship globally with fast and secure delivery options.",
  },
  {
    category: "Shipping",
    q: "How long does delivery take?",
    a: "Delivery usually takes 3–7 business days depending on your region.",
  },
  {
    category: "Support",
    q: "Can I return or replace my product?",
    a: "Yes, we offer a 7–14 day return/replacement policy.",
  },
  {
    category: "Support",
    q: "How do I contact support?",
    a: "You can email support@auralux.com or call our helpline anytime.",
  },
];

const categories = ["All", "Products", "Shipping", "Support"];

export default function FAQ() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = faqData.filter((item) => {
    const matchCategory = tab === "All" || item.category === tab;
    const matchSearch = item.q.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Glow */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-fuchsia-400/20 blur-[160px] rounded-full top-0 left-0"
      />

      <motion.div
        animate={{ x: [40, -40, 40], y: [20, -20, 20] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full bottom-0 right-0"
      />

      <div className="relative z-10 w-[95%] xl:w-[90%] 2xl:w-[85%] mx-auto">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl  font-['outfit-font'] font-black bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            FAQ <span className="text-black"> Center
              </span>
          </h2>
          <p className="mt-4 text-slate-600">
            Find answers instantly about Auralux products & services.
          </p>
        </div>


        {/* TABS */}
        <div className="flex flex-wrap w-full justify-center gap-3 mb-10">
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setTab(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                tab === c
                  ? "bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white"
                  : "bg-white/70 text-slate-600 hover:text-violet-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {filteredFaqs.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white shadow-lg rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left"
              >
                <span className="text-slate-800 font-semibold">
                  {item.q}
                </span>
                <span className="text-xl text-slate-500">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 md:px-6 pb-5 text-slate-600"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}