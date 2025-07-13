import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Pastikan path logo sesuai

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi helper untuk smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    // Cek jika elemen ada sebelum melakukan scroll
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Selalu tutup menu mobile setelah klik
  };

  // MENGEMBALIKAN LINK NAVIGASI SESUAI PERMINTAAN
  const navLinks = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Features", id: "features" },
    { title: "Contact", id: "footer" }, // Menggunakan id 'footer' untuk Contact seperti di kode awal
  ];

  return (
    // MEMPERTAHANKAN TAMPILAN MODERN:
    // - `sticky top-0`: Membuat navbar tetap di atas saat scroll.
    // - `bg-white/90 backdrop-blur-sm`: Memberi efek transparan dan blur modern.
    // - `border-b border-gray-200`: Memberi garis bawah tipis yang elegan.
    <nav className="sticky top-0 z-50 w-full bg-white/90 py-3 px-6 shadow-sm backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="AgriNova Logo" className="w-8 h-8 object-contain" />
            <span className="ml-2 text-2xl font-bold">
              <span className="text-gray-800">Agri</span>
              <span className="text-green-600">Nova</span>
            </span>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800 focus:outline-none" aria-label="Buka menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m4 6H4" />}
              </svg>
            </button>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-600 font-medium hover:text-green-600 transition-colors">
                {link.title}
              </button>
            ))}
          </div>

          {/* Tombol Aksi (Desktop) */}
          <div className="hidden md:block">
            {/* MENGEMBALIKAN TOMBOL LOGIN SEBAGAI CTA UTAMA */}
            <a href="http://localhost:3000/login" className="bg-green-400 text-white font-bold px-6 py-2.5 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
              Login
            </a>
          </div>
        </div>

        {/* Navigasi Mobile */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4 border-t border-gray-200`}>
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-700 hover:text-green-600 text-left py-2 px-2 rounded-md">
                {link.title}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-200">
              <a href="http://localhost:3000/login" className="bg-green-600 text-white font-bold py-3 rounded-full hover:bg-green-700 transition-colors w-full block text-center">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
