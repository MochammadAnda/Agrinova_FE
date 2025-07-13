import React from "react";
// 1. IMPORT GAMBAR SEBAGAI VARIABEL
// Pastikan path ini sesuai dengan struktur folder Anda.
import imgHome from "../assets/imgHome.png";

const Hero = () => {
  return (
    // Section utama dengan id "home" untuk navigasi scroll
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      {/* GAMBAR LATAR BELAKANG */}
      <div className="absolute inset-0 z-0">
        {/* 2. GUNAKAN VARIABEL YANG SUDAH DI-IMPORT */}
        <img src={imgHome} alt="Latar belakang kebun di rumah" className="w-full h-full object-cover" />
        {/* LAPISAN OVERLAY GELAP */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Konten Teks di atas overlay */}
      <div className="relative z-10 text-center px-6">
        {/* TIPOGRAFI YANG DIPERKUAT */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Bertani di Rumah Lebih <br className="hidden md:block" />
          <span className="text-green-400">Mudah dan Cerdas</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
          AgriNova hadir sebagai asisten virtual berbasis AI yang membimbingmu menanam sayur dan buah segar langsung dari rumah. Tanpa lahan luas, tanpa bingung cara mulai, kami siap menemani perjalanan berkebunmu, dari nol hingga panen.
        </p>

        {/* Tombol Aksi (Opsional, tapi sangat direkomendasikan) */}
        <div className="mt-10">
          <a href="http://localhost:3000/login" className="bg-green-600 text-white font-bold px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
