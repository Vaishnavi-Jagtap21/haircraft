import React from "react";

const services = [
  {
    id: 1,
    name: "Hair Styling",
    price: "₹799+",
    description: "Professional styling by experts",
  },
  {
    id: 2,
    name: "Bridal Makeup",
    price: "₹4999+",
    description: "Perfect bridal look for your big day",
  },
  {
    id: 3,
    name: "Hair Coloring",
    price: "₹1299+",
    description: "Premium global & highlights coloring",
  },
  {
    id: 4,
    name: "Spa & Care",
    price: "₹999+",
    description: "Relaxing spa & hair care treatments",
  },
];

const ServiceSelector = ({ selectedService, onSelect }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          onClick={() => onSelect(service)}
          className={`cursor-pointer rounded-2xl border p-6 transition
            ${
              selectedService?.id === service.id
                ? "border-black bg-black text-white"
                : "bg-white hover:border-gray-400"
            }`}
        >
          <h3 className="text-lg font-semibold mb-1">
            {service.name}
          </h3>
          <p className="text-sm opacity-80 mb-2">
            {service.description}
          </p>
          <p className="font-medium">{service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceSelector;
