import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Images */
import HairCover from "../assets/Hair/SoftLayeredWaves.jpg";
import MakeupCover from "../assets/Makeup/TraditionalBridalMakeup.jpg";
import ColorCover from "../assets/Hair Coloring/GlobalHairColor.jpg";
import SpaCover from "../assets/Spa&Care/HairSpa.jpg";

/* FILTER TABS */
const categories = ["All", "Hair", "Makeup", "Color", "Spa"];

const services = [
  {
    id: 1,
    title: "Hair Styling",
    category: "Hair",
    price: "₹799+",
    badge: "Best Seller",
    image: HairCover,
  },
  {
    id: 2,
    title: "Bridal Makeup",
    category: "Makeup",
    price: "₹4999+",
    badge: "Popular",
    image: MakeupCover,
  },
  {
    id: 3,
    title: "Hair Coloring",
    category: "Color",
    price: "₹1299+",
    badge: "Trending",
    image: ColorCover,
  },
  {
    id: 4,
    title: "Spa & Care",
    category: "Spa",
    price: "₹999+",
    badge: "Relax",
    image: SpaCover,
  },
];



const PopularServices = () => {
  const navigate = useNavigate(); // ✅ correct place
  const [activeCat, setActiveCat] = useState("All");

  const filteredServices =
    activeCat === "All"
      ? services
      : services.filter((s) => s.category === activeCat);

  return (
    <section className="pt-0 pb-10 bg-[#fffaf4]">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-playfair mb-2">Popular Services</h2>
        <p className="text-gray-600">
          Discover beauty crafted just for you
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="flex justify-center gap-3 mb-14 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-6 py-2 rounded-full transition
              ${
                activeCat === cat
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SERVICE CARDS */}
      <div className="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group relative rounded-3xl overflow-hidden bg-black shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {service.badge && (
              <span className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                {service.badge}
              </span>
            )}

            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                Starting at {service.price}
              </p>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      service: service.title,
                      serviceId: service.id,
                      price: service.price,
                    },
                  })
                }
                className="px-6 py-2 rounded-full bg-black text-white
                hover:bg-black hover:text-white transition"
              >
                Book Now →
              </button>
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default PopularServices;
