export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Professional Laundry & Dry Cleaning Services
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">

          <div>
            <p className="leading-8 text-gray-600">
              We provide reliable and hygienic laundry,
              ironing, steam pressing, and dry-cleaning
              services using industrial-grade washing and
              ironing machinery. Our goal is to deliver
              premium garment care with quick turnaround
              and affordable pricing.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Our facility is equipped with heavy-duty
              laundry machines, high-pressure steam
              ironing systems, and professional cleaning
              equipment to ensure every garment receives
              expert care and finishing.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Why Choose Us?
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>✔ Industrial Laundry Machinery</li>
              <li>✔ Premium Steam Ironing</li>
              <li>✔ Hygienic Cleaning Process</li>
              <li>✔ Fast Pickup & Delivery</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ Experienced Staff</li>
              <li>✔ Safe Fabric Handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}