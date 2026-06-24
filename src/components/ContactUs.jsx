import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-slate-50 to-white px-4 py-28 overflow-hidden">

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT INFO */}
          <div>
            <h1 className="text-4xl md:text-5xl  font-['outfit-font'] font-black bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Contact Us
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              We’re always here to support you. Ask anything about Auralux products or orders.
            </p>

            <div className="mt-8 space-y-3 text-slate-600">
              <p>📍 Kuala Lumpur, Malaysia</p>
              <p>📞 +60 11-2345 6789</p>
              <p>📧 support@auralux.com</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-8 md:p-10 space-y-5"
          >
            <h2 className="text-2xl font-bold text-slate-800">
              Send Message
            </h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-violet-500"
              required
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message..."
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-slate-100 outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition shadow-lg"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* FULL WIDTH MAP (BOTTOM) */}
        <div className="mt-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kuala+Lumpur&output=embed"
              className="w-full h-[450px] md:h-[550px] lg:h-[650px]"
            />
          </div>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
              <h2 className="text-2xl font-bold text-green-600">
                Message Sent 🚀
              </h2>
              <p className="text-slate-600 mt-2">
                We will reply soon!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/601123456789"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:scale-105 transition"
      >
        WhatsApp
      </a>

    </section>
  );
}