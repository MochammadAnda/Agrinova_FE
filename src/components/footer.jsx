import React from "react";
// 1. IMPORT IKON DARI REACT-ICONS
import { RiFacebookFill, RiInstagramLine, RiWhatsappLine, RiMapPin2Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import logo from "../assets/logo.svg"; // Pastikan path logo sesuai

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Mengubah grid menjadi 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Kolom 1: Info Perusahaan */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="AgriNova Logo" className="w-8 h-8 object-contain" />
              <span className="ml-2 text-2xl font-bold text-white">AgriNova</span>
            </div>
            <p className="text-gray-400">Menghadirkan teknologi pertanian cerdas untuk setiap rumah. Tumbuh lebih baik, bersama kami.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                <RiFacebookFill />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                <RiWhatsappLine />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition-colors">
                <RiInstagramLine />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Jelajahi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-500 transform transition-all duration-300 inline-block hover:translate-x-2">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-500 transform transition-all duration-300 inline-block hover:translate-x-2">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-green-500 transform transition-all duration-300 inline-block hover:translate-x-2">
                  Fitur
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Hubungi Kami */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <RiMailFill className="text-green-500" />
                <span className="text-gray-400">info@agrinova.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneFill className="text-green-500" />
                <span className="text-gray-400">+62 123 4567 890</span>
              </li>
              <li className="flex items-start space-x-3">
                <RiMapPin2Fill className="text-green-500 mt-1" />
                <span className="text-gray-400">Jl. Agrinova No. 123, Jakarta</span>
              </li>
            </ul>
          </div>

          {/* KOLOM NEWSLETTER DIHILANGKAN */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Agrinova. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
