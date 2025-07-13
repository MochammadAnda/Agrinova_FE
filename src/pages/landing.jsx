import React from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import About from "../components/about";
import Feature from "../components/feature";
import Footer from "../components/footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Footer />
    </div>
  );
};

export default Landing;
