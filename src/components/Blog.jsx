import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-violet-50 to-cyan-50">

        <div className="max-w-7xl mx-auto px-6">

          <span
            className="
            text-violet-600
            font-semibold
            tracking-[4px]
            uppercase
            text-sm
            "
          >
            Auralux Insights
          </span>

          <h1
            className="
            mt-5
            text-5xl
            md:text-7xl
            
             font-['Cossette ']
             font-bold
            text-slate-900
            leading-tight
            "
          >
            The Future Of Premium Audio Technology
          </h1>

          <p
            className="
            mt-8
            max-w-4xl
            text-lg
            md:text-xl
            text-slate-600
            leading-relaxed
            "
          >
            Discover how modern headphones, intelligent
            sound systems and next-generation audio
            innovations are transforming the way people
            experience music, gaming, entertainment and
            productivity.
          </p>

        </div>

      </section>

      {/* Image + Content */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
            "
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://m.media-amazon.com/images/I/71i+d59uDQL._AC_SL1500_.jpg"
                alt=""
                className="
                w-full
                rounded-[40px]
                shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                "
              />
            </motion.div>

            <div>

              <h2
                className="
                text-4xl
                md:text-5xl
                font-black
               font-['Outfit']
                text-slate-900
                "
              >
                Audio Without Limits
              </h2>

              <p
                className="
                mt-6
                text-lg
                text-slate-600
                leading-relaxed
                "
              >
                Premium audio is no longer a luxury.
                Advanced wireless technology, immersive
                spatial sound and intelligent noise
                cancellation have changed how people
                interact with music and digital content.
              </p>

              <p
                className="
                mt-5
                text-lg
                text-slate-600
                leading-relaxed
                "
              >
                Auralux combines elegant design with
                cutting-edge engineering to create
                products that deliver exceptional
                performance for everyday users and audio
                enthusiasts alike.
              </p>

            </div>

          </div>

        </div>

      </motion.section>

      {/* Content Section */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2
            className="
            text-4xl
            font-black
            font-['Outfit']
            text-slate-900
            "
          >
            Why Premium Sound Matters
          </h2>

          <p
            className="
            mt-8
            text-lg
            text-slate-600
            leading-loose
            "
          >
            Sound quality affects every listening
            experience. Whether you are enjoying your
            favorite playlist, attending online meetings
            or competing in high-intensity gaming
            sessions, clear and balanced audio improves
            immersion and communication.
          </p>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            leading-loose
            "
          >
            Modern headphones now include intelligent
            features such as adaptive sound control,
            AI-enhanced microphones and long-lasting
            battery technology. These innovations ensure
            a seamless experience wherever you go.
          </p>

        </div>

      </section>

      {/* Animated Image */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16"
      >

        <div className="max-w-7xl mx-auto px-6">

          <img
            src="https://cdnpro.eraspace.com/media/.renditions/wysiwyg/artikel/Tahun_2025/April/headphoneeditvideo-1.jpg"
            alt=""
            className="
            w-full
            h-[300px]
            md:h-[600px]
            object-cover
            rounded-[40px]
            
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            "
          />

        </div>

      </motion.section>

      {/* Large Content */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2
            className="
            text-4xl
            font-black
            font-['Outfit']
            text-slate-900
            "
          >
            Innovation Meets Comfort
          </h2>

          <p
            className="
            mt-8
            text-lg
            text-slate-600
            leading-loose
            "
          >
            Beyond performance, comfort remains one of
            the most important factors in audio design.
            Lightweight materials, memory foam ear
            cushions and ergonomic construction allow
            users to enjoy hours of uninterrupted
            listening.
          </p>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            leading-loose
            "
          >
            The future of audio technology will continue
            to focus on personalization. Smart devices
            are already capable of adapting sound
            profiles based on user preferences and
            environmental conditions, creating a truly
            customized listening experience.
          </p>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            leading-loose
            "
          >
            At Auralux, our mission is to blend premium
            aesthetics, innovative engineering and
            powerful sound into products that inspire
            people every day.
          </p>

        </div>

      </section>

      {/* Final Image */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-10"
      >

        <div className="max-w-7xl mx-auto px-6">

          <img
            src="https://tse1.mm.bing.net/th/id/OIP.WbMafaRDryn2ubsh2rcWYgHaE7?pid=Api&h=220&P=0"
            alt=""
            className="
            w-full
            h-[300px]
            md:h-[600px]
            object-cover
            rounded-[40px]
            shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            "
          />

        </div>

      </motion.section>

      {/* Conclusion */}
      <section className="py-24">

        <div
          className="
          max-w-4xl
          mx-auto
          px-6
          text-center
          "
        >

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            text-slate-900
            font-['Outfit']
            "
          >
            Experience The Auralux Difference
          </h2>

          <p
            className="
            mt-8
            text-lg
            text-slate-600
            leading-relaxed
            "
          >
            From premium headphones to innovative audio
            accessories, Auralux continues to redefine
            modern listening experiences through quality,
            design and cutting-edge technology.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Blog;