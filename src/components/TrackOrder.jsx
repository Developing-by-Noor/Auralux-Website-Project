import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();

    setStatus({
      id: orderId,
      progress: 65,
      step: "Out for Delivery 🚚",
      timeline: [
        { label: "Order Placed", done: true },
        { label: "Packed", done: true },
        { label: "Shipped", done: true },
        { label: "Out for Delivery", done: true },
        { label: "Delivered", done: false },
      ],
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-28 overflow-hidden">

      {/* Glow */}
      <motion.div
        animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-fuchsia-400/20 blur-[180px] rounded-full top-0 left-0"
      />

      <motion.div
        animate={{ x: [50, -50, 50], y: [20, -20, 20] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-[180px] rounded-full bottom-0 right-0"
      />

      {/* FULL WIDTH CONTAINER */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-24">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl  font-['outfit-font'] font-black bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            Track Your Order
          </h1>
          <p className="mt-4 text-slate-600">
            Real-time delivery tracking system powered by Auralux logistics.
          </p>
        </div>

        {/* TRACK FORM */}
        <form
          onSubmit={handleTrack}
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl border border-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Enter Order ID (e.g. AUR-12345)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-violet-500"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
          >
            Track Order
          </button>
        </form>

        {/* RESULT */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 max-w-6xl mx-auto bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-8 md:p-10"
          >

            <div className="flex flex-col md:flex-row justify-between gap-6">

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Order ID: {status.id}
                </h2>
                <p className="text-slate-600 mt-2">
                  Status: {status.step}
                </p>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full md:w-1/2">
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-fuchsia-600 to-cyan-500"
                    style={{ width: `${status.progress}%` }}
                  />
                </div>
              </div>

            </div>

            {/* TIMELINE */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4">
              {status.timeline.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`w-5 h-5 rounded-full ${
                      t.done
                        ? "bg-gradient-to-r from-fuchsia-600 to-cyan-500"
                        : "bg-slate-300"
                    }`}
                  />

                  <p className="mt-2 text-sm text-slate-600">{t.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* EXTRA CONTENT */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/70 backdrop-blur-xl border border-white shadow-lg rounded-2xl p-6 text-center">
            <h3 className="font-bold text-slate-800">Live Tracking</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Get real-time updates of your parcel anywhere.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white shadow-lg rounded-2xl p-6 text-center">
            <h3 className="font-bold text-slate-800">Fast Delivery</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Optimized logistics for ultra-fast shipping.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl border border-white shadow-lg rounded-2xl p-6 text-center">
            <h3 className="font-bold text-slate-800">Secure Handling</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Your products are always safe and insured.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}