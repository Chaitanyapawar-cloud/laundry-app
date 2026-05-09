export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-800 text-white" id="contact">
      <div className="mx-auto max-w-6xl px-3 py-10 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">


          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="mt-2 space-y-3 text-white">
              <li>📞 +91 9527451312</li>
              <li>📞 +91 7972412597</li>
              <li>📧 sss.laundryservices1418@gmail.com</li>
              <li>🕒 Mon-Sun: 8:30AM - 9PM (Thursday Closed)</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Address
            </h3>

            <p className="mt-2 leading-7 text-white">
              103/1, opp. Reliance Smart, Varale, Talegaon Dabhade, Maharashtra 410507    <br />
              <a href="https://maps.app.goo.gl/iec77jQCKggsq16k8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
               Location<span>📍</span>
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          © 2026 Shree Swami Samarth Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


