import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#fffaf4] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-10">
          <Navbar />
        <h1 className="text-3xl font-playfair text-center mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join HairCraft today
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
