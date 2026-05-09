"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
        >
          <p className="text-xs tracking-wide sm:text-sm">
            Premium Washing & Dry Cleaning Services
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="
            max-w-5xl
            font-bold
            leading-tight
            tracking-tight
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Laundry Services
          <br />
          at your Doorstep
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="
            mt-5
            max-w-xl
            text-sm
            text-white/80
            sm:text-base
            md:text-lg
          "
        >
          Fast • Hygienic • Affordable 
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="
            mt-8
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
          "
        >
          <button
            className="
              w-full
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition
              hover:scale-105
              sm:w-auto
            "
            onClick={() => (window.location.href = "/services")}
          >
            Explore Services
          </button>

          <a
              href="https://wa.me/917972412597"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-full
              rounded-full
              border
              border-white/30
              bg-green-600/5
              px-6
              py-3
              text-sm
              font-medium
              backdrop-blur-md
              transition
              hover:bg-white/20
              sm:w-auto
               "
              >
              WhatsApp Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.1 }}
          className="
            mt-12
            grid
            w-full
            max-w-3xl
            grid-cols-1
            gap-4
            sm:grid-cols-3
          "
        >
          <StatCard
            number="2K+"
            label="Happy Customers"
          />

          <StatCard
            number="5+"
            label="Services"
          />

          <StatCard
            number="2+"
            label="Years Experience"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Reusable Card ---------- */

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/20
        bg-white/10
        p-3
        backdrop-blur-lg
        width-50%
      "
    >
      <h3 className="text-2xl font-bold sm:text-3xl">
        {number}
      </h3>

      <p className="mt-2 text-sm text-white/70">
        {label}
      </p>
    </div>
  );
}