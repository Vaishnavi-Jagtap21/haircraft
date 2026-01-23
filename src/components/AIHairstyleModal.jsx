import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import waves from "../assets/main2.png";
import bob from "../assets/main2.png";
import pixie from "../assets/main2.png";

const styles = [
  { name: "Soft Layered Waves", img: waves },
  { name: "Classic Bob Cut", img: bob },
  { name: "Modern Pixie", img: pixie },
];

const AIHairstyleModal = ({ onClose }) => {
  const [userImage, setUserImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-4xl relative">

        <h2 className="text-2xl font-playfair text-center mb-4">
          AI Hairstyle Try-On
        </h2>

        {/* Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setUserImage(URL.createObjectURL(e.target.files[0]))
          }
          className="mb-6"
        />

        {/* PREVIEWS */}
        {userImage && (
          <div className="grid md:grid-cols-3 gap-6">
            {styles.map((style, index) => (
              <div
                key={index}
                onClick={() => setSelectedStyle(style)}
                className={`cursor-pointer border rounded-2xl p-3 transition
                  ${
                    selectedStyle?.name === style.name
                      ? "border-green-500"
                      : "hover:border-gray-400"
                  }
                `}
              >
                <div className="relative w-full h-64 rounded-xl overflow-hidden">

                  {/* USER IMAGE */}
                  <img
                    src={userImage}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* HAIRSTYLE OVERLAY */}
                  <img
                    src={style.img}
                    className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
                  />
                </div>

                <p className="text-center mt-2 font-medium">
                  {style.name}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* BOOK */}
        {selectedStyle && (
          <div className="text-center mt-6">
            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    service: "Hair Styling",
                    hairstyle: selectedStyle.name,
                  },
                })
              }
              className="bg-green-600 text-white px-8 py-3 rounded-full"
            >
              Book {selectedStyle.name}
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AIHairstyleModal;
