import React from "react";
// 1. IMPORT IKON BARU UNTUK FITUR TO-DO LIST
import { RiRobot2Fill, RiBookletLine, RiBuilding4Line, RiSunCloudyLine, RiListCheck2 } from "react-icons/ri";

const Feature = () => {
  const features = [
    {
      icon: <RiRobot2Fill className="w-8 h-8 text-green-600" />,
      title: "Asisten AI Cerdas",
      description: "Dapatkan rekomendasi cerdas untuk pemilihan bibit, perawatan harian, dan solusi masalah berdasarkan kondisi lingkungan Anda.",
    },
    {
      icon: <RiBookletLine className="w-8 h-8 text-green-600" />,
      title: "Jurnal Tanam Digital",
      description: "Catat semua aktivitas berkebun Anda, mulai dari penyemaian, pemupukan, hingga waktu panen dalam satu tempat yang terorganisir.",
    },
    {
      icon: <RiBuilding4Line className="w-8 h-8 text-green-600" />,
      title: "Sistem Manajemen Gudang",
      description: "Pantau seluruh aset pertanian Anda. Mulai dari inventaris bibit dan pupuk, hingga pencatatan data produksi dan laporan keuangan sederhana.",
    },
    {
      icon: <RiSunCloudyLine className="w-8 h-8 text-green-600" />,
      title: "Prakiraan Cuaca",
      description: "Dapatkan informasi cuaca real-time di lokasi Anda untuk merencanakan jadwal penyiraman dan perawatan dengan lebih baik.",
    },
    {
      icon: <RiListCheck2 className="w-8 h-8 text-green-600" />,
      title: "Tugas Harian (To-do List)",
      description: "Dapatkan daftar tugas harian otomatis seperti 'siram tanaman' atau 'cek pH nutrisi' agar tidak ada langkah perawatan yang terlewat.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800">Semua yang Anda Butuhkan untuk Sukses</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Agrinova dilengkapi dengan fitur-fitur canggih yang dirancang khusus untuk menyederhanakan perjalanan berkebun Anda.</p>
        </div>

        {/* 3. UBAH LAYOUT GRID UNTUK 5 ITEM AGAR LEBIH SEIMBANG */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left">
              <div className="bg-green-100 p-4 rounded-full mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
