"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Ironing",
    image: "/images/ironing.png",
    price: "Starting at ₹8 / cloth",
    description:
      "Professional wrinkle-free ironing service using commercial-grade heavy steam ironing machinery for crisp, polished, and perfectly finished garments. Ideal for office wear, uniforms, sarees, shirts, trousers, and daily wear clothes.",
  },
  {
    title: "Steam Pressure Ironing",
    image: "/images/steam-ironing.png",
    price: "Starting at ₹15 / cloth",
    description:
      "Advanced high-pressure steam ironing using industrial steam press machines for premium garment finishing. Removes deep wrinkles while preserving fabric quality and delivering a luxury showroom-like finish for delicate and formal clothing.",
  },
  {
    title: "Shoe Cleaning",
    image: "/images/shoe-clean.png",
    price: "Starting at ₹199 / pair",
    description:
      "Deep shoe cleaning and restoration service for sneakers, sports shoes, leather footwear, and casual shoes. Our specialized cleaning equipment and fabric-safe treatment process help remove dirt, stains, odor, and restore freshness.",
  },
  {
    title: "Starching",
    image: "/images/starch.png",
    price: "Starting at ₹20 / cloth",
    description:
      "Professional starching service for uniforms, sarees, shirts, kurtas, and cotton garments. We use premium starch treatment combined with industrial ironing machinery to deliver a crisp, elegant, and long-lasting finish.",
  },
  {
    title: "Dry Cleaning",
    image: "/images/dry-cleaning.png",
    price: "Starting at ₹100 / piece",
    description: "Professional and Premium dry-cleaning for delicate garments like silk, wool, and rayon. We use various best available technology and machines to increase the longevity of your favourite garments",
  },
  {
    title: "Express Delivery",
    image: "/images/delivery.png",
    price: "Free Pickup & Delivery for orders above ₹500",
    description:
      "Fast doorstep pickup and delivery service designed for busy lifestyles. Our logistics and laundry workflow ensure timely processing with hygienic handling, secure packaging, and quick turnaround for your garments.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </p>
         
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Professional Laundry & Dry Cleaning Solutions
          </h2>
           <p className="mt-5 text-lg text-gray-600">
            We also accept bulk quantity orders like hotels, restaurants, hospitals etc and household orders
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Service Title */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>


              </div>
            </motion.div>
            
          ))}
        </div>
      </div>
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
           <p className="mt-5 text-lg text-gray-600">
            Premium garment care powered by industrial laundry
            machinery, advanced steam technology, and hygienic
            cleaning processes.
          </p>
        </div>
    </section>
  );
}