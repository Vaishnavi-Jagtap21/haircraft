import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold stylish-font">
            HairCraft
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-lg">
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/booking" className="hover:text-black">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
            <li><Link to="/login" className="hover:text-black">Login</Link></li>
          </ul>

          {/* HAMBURGER (MOBILE) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            <i className="ri-menu-3-line"></i>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-2xl font-serif font-bold stylish-font">
            HairCraft
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* MOBILE LINKS */}
        <ul className="flex flex-col gap-6 px-6 py-8 text-lg">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => setOpen(false)}>
              Booking
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
