import React from "react";
import bgImage from "../assets/imgHome.png"; // Sesuaikan dengan nama file gambar Anda

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay untuk membuat teks lebih mudah dibaca */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-green-600">Bertani</span>
          <span className="text-gray-800 lg:text-white"> di Rumah Lebih Mudah dan Cerdas</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          AgriNova hadir sebagai asisten virtual berbasis AI yang membimbingmu menanam sayur dan buah segar langsung dari rumah. Tanpa lahan luas, tanpa bingung cara mulai kami siap menemani perjalanan berkebunmu, dari nol hingga panen.
        </p>
      </div>
    </section>
  );
};

export default Home;
