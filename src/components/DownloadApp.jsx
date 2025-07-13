import React from "react";
// 1. KEMBALIKAN IMPORT GAMBAR
// Pastikan path ini benar sesuai struktur folder Anda.
import mobileMockup from "../assets/mobile.jpg";
import { RiCheckboxCircleFill } from "react-icons/ri";

const DownloadApp = () => {
  return (
    <section id="download" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 bg-gray-50 rounded-2xl p-8 lg:p-16">
          {/* Kolom Kiri: Teks dan Tombol Download */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">Mulai Perjalanan Berkebunmu Sekarang</h2>
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">Download aplikasi AgriNova untuk mendaftar dan dapatkan akses penuh ke semua fitur cerdas kami. Teman berkebun pribadi Anda hanya sejauh satu ketukan.</p>

            {/* Tombol "Download Disini" */}
            <div className="flex justify-center lg:justify-start">
              {/* Ganti href dengan link download Anda */}
              <a href="#" className="bg-green-600 text-white font-bold px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                Download Disini
              </a>
            </div>

            {/* Teks Kepercayaan */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6 gap-y-2 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <RiCheckboxCircleFill className="text-green-500" />
                Gratis diunduh
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <RiCheckboxCircleFill className="text-green-500" />
                Aman & Terpercaya
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar Mockup PNG */}
          <div className="lg:w-1/2 flex justify-center">
            {/* 2. KEMBALIKAN TAG <img> */}
            <img src={mobileMockup} alt="Aplikasi Mobile AgriNova" className="w-full max-w-xs transform transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
