import React from "react";
// Ganti dengan gambar mockup aplikasi mobile Anda.
import mobileMockup from "../assets/aboutUs.png";
// 1. IMPORT IKON DARI LIBRARY REACT-ICONS
import { BsLightningChargeFill, BsCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Konten About */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Gambar Mockup Aplikasi Mobile */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img src={mobileMockup} alt="Aplikasi Mobile AgriNova" className="rounded-lg w-full max-w-sm lg:max-w-md transform transition-transform duration-500 hover:scale-105" />
          </div>

          {/* Teks Konten */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
              Dari Kebingungan Menjadi <span className="text-green-600">Kebun Impian</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
              Kami memulai AgriNova dari sebuah pertanyaan sederhana: "Mengapa bertani di rumah harus rumit?". Banyak dari kita ingin memulai, namun terhalang oleh kebingungan dan rasa takut gagal.
            </p>
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
              Karena itu, kami menciptakan sebuah solusi di genggaman Anda. AgriNova bukan sekadar aplikasi, melainkan teman berkebun pribadi Anda yang didukung AI. Kami mengubah setiap tantangan menjadi panduan langkah-demi-langkah yang
              mudah, memastikan perjalanan Anda dari bibit hingga panen selalu menyenangkan dan berhasil.
            </p>

            {/* Poin Keunggulan dengan Ikon */}
            <div className="space-y-4 text-left">
              {/* 2. GANTI KODE SVG DENGAN KOMPONEN IKON */}
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <BsLightningChargeFill className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Panduan Cerdas</h4>
                  <p className="text-gray-500">Rekomendasi real-time yang disesuaikan untuk tanaman Anda.</p>
                </div>
              </div>
              {/* 2. GANTI KODE SVG DENGAN KOMPONEN IKON */}
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <BsCheckCircleFill className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mudah Digunakan</h4>
                  <p className="text-gray-500">Dirancang untuk pemula, tanpa perlu pengalaman.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
