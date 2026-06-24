import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 pt-24 pb-12 overflow-hidden">

      {/* Glow Orbs */}
      <motion.div
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-0 left-0 w-[550px] h-[550px] bg-fuchsia-400/20 blur-[160px] rounded-full"
      />

      <motion.div
        animate={{ x: [40, -40, 40], y: [20, -20, 20] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-cyan-400/20 blur-[160px] rounded-full"
      />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          

          {/* BRAND */}
          <div>
            <h1 className="text-4xl font-['outfit-font'] font-black bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Auralux
            </h1>
              <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[5px]
                  text-slate-800
                  "
                >
                  Premium Tech Store
                </p>


            <p className="mt-4 text-slate-600 leading-relaxed">
              Next-gen audio experience built for creators, gamers, and dreamers.
            </p>

            {/* CONTACT BOX */}
            <div className="mt-6 space-y-2 text-slate-600 text-sm">
              <li className="hover:text-cyan-600 transition cursor-pointer">📍 Kuala Lumpur, Malaysia</li>
              <li className="hover:text-cyan-600 transition cursor-pointer">📞 +60 11-2345 6789</li>
              <li className="hover:text-cyan-600 transition cursor-pointer">📧 support@auralux.com</li>
            </div>
          </div>

          {/* EXPLORE (ONLY HEADPHONES) */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4">Explore</h2>
            <ul className="space-y-2 text-slate-600">

              <li className="hover:text-violet-600 transition cursor-pointer">
                Auralux Nova X
              </li>

              <li className="hover:text-violet-600 transition cursor-pointer">
                Studio Pro Headphones
              </li>

              <li className="hover:text-violet-600 transition cursor-pointer">
                Gaming Headset Elite
              </li>

              <li className="hover:text-violet-600 transition cursor-pointer">
                Bass Master X
              </li>

              <li className="hover:text-violet-600 transition cursor-pointer">
                Auralux Air
              </li>

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4">Support</h2>
            <ul className="space-y-2 text-slate-600">
              <li className="hover:text-cyan-600 transition cursor-pointer">Help Center</li>
              <li className="hover:text-cyan-600 transition cursor-pointer">Warranty</li>
              <li className="hover:text-cyan-600 transition cursor-pointer">Shipping</li>
              <li className="hover:text-cyan-600 transition cursor-pointer">Returns</li>
            </ul>
          </div>

          

          {/* NEWSLETTER */}
          <div>
            
            <h2 className="text-lg font-bold text-slate-800 mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-4">
              Get exclusive drops & early access.
            </p>

            <div className="flex items-center bg-white/70 backdrop-blur-xl rounded-full overflow-hidden border border-white shadow-xl">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 bg-transparent outline-none text-slate-700"
              />
              <button className="px-5 py-3 bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">

          <p>© {new Date().getFullYear()} Auralux. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-violet-600 cursor-pointer">Privacy</span>
            <span className="hover:text-violet-600 cursor-pointer">Terms</span>
            <span className="hover:text-violet-600 cursor-pointer">Cookies</span>
          </div>

        </div>
      </div>
    </footer>
  );
}