import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // Pastikan path logo sesuai dengan struktur folder Anda
// Ganti dengan path logo yang sesuai
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Tutup menu setelah klik
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="AgriNova Logo" className="w-8 h-8 object-contain" />
            <span className="text-2xl font-bold">
              <span className="text-gray-800">Agri</span>
              <span className="text-green-600">Nova</span>
            </span>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-600 font-bold hover:text-green-600">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-600 font-bold hover:text-green-600">
              About
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-600 font-bold hover:text-green-600">
              Features
            </button>
            <button onClick={() => scrollToSection("footer")} className="text-gray-600 font-bold hover:text-green-600">
              Contact
            </button>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <a href="http://localhost:3000/login" className="bg-green-600 text-white font-bold px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Login
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-gray-600 font-bold hover:text-green-600 text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-600 font-bold hover:text-green-600 text-left">
              About
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-600 font-bold hover:text-green-600 text-left">
              Features
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-600 font-bold hover:text-green-600 text-left">
              Contact
            </button>
            <Link to="/login" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors text-center">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
