import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularServices from "../components/PopularServices"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
      <Footer />
    </>
  );
};

export default Home;
