import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
   
    <div className="min-h-screen bg-[#fffaf4] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-10">
          <Navbar />
        <h1 className="text-3xl font-playfair text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login to your HairCraft account
        </p>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-black font-semibold">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
