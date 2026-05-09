"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Washing",
    image: "/images/washing.png",
    description: "Freshly washed and neatly folded clothes.",
  },
  {
    title: "Dry Cleaning",
    image: "/images/dry-cleaning.png",
    description: "Premium dry-cleaning for delicate garments.",
  },
  {
    title: "Ironing",
    image: "/images/ironing.png",
    description: "Perfect wrinkle-free ironing.",
  },
  {
    title: "Steam Pressure Ironing",
    image: "/images/steam-ironing.png",
    description: "Perfect wrinkle-free high pressure ironing.",
  },
  {
    title: "Shoe Cleaning",
    image: "/images/shoe-clean.png",
    description: "Deep cleaning and restoration for shoes.",
  },
  {
    title: "Starching",
    image: "/images/starch.png",
    description: "Professional starching for crisp and clean garments.",
  },
  {
    title: "Express Delivery",
    image: "/images/delivery.png",
    description: "Pickup and doorstep delivery service.",
  },
];

export default function ServicesSlider() {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      
      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-6xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Our Services
        </h2>
        <p className="mt-4 bold text-gray-800 max-w-3xl mx-auto">
          We accept bulk quantity orders like hotels, restaurants, hospitals etc and all household orders
        </p>

      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex gap-6 w-max px-4"
        >
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                h-[380px]
                w-[280px]
                overflow-hidden
                rounded-3xl
                bg-gray-100
                shadow-lg
                flex-shrink-0
              "
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}