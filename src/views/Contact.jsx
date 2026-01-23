import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-center tracking-widest text-gray-500 mb-12">
          LET’S GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND INFO */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              HairCraft Beautician
            </h3>
            <p className="text-gray-600 mb-6">
              Premium beauty & hair care services designed to make you feel confident and beautiful.
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Book Now
            </button>
          </div>

          {/* INFO */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Info</h3>
            <p className="text-gray-600">
              HairCraft Beauty Salon<br />
              Malegaon, Nashik, India<br /><br />
              info@haircraft.com<br />
              Tel: +91 98765 43210
            </p>
          </div>

          {/* OPENING HOURS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
            <p className="text-gray-600">
              Mon – Fri: 10am – 8pm<br />
              Sat: 10am – 4pm<br />
              Sun: 10am – 6pm
            </p>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>

            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full border-b border-gray-400 focus:outline-none py-2"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full border-b border-gray-400 focus:outline-none py-2"
                />
              </div>

              <input
                type="email"
                placeholder="Email *"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />

              <textarea
                placeholder="Message"
                rows="3"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                Yes, subscribe me to your newsletter.
              </label>

              <button
                type="submit"
                className="mt-4 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-full h-[400px]">
        <iframe
          title="HairCraft Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59771.8059442262!2d74.50894570617788!3d20.557903373382914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde99b980a72691%3A0x2670392bc1c3ce16!2sMalegaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1768902751772!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* FOOTER */}
      <div className="text-center text-sm text-gray-400 py-6 border-t">
        © 2026 by HairCraft. Powered & secured.
      </div>
    </section>
  );
}
