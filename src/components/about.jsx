import React from "react";
import aboutImage from "../assets/aboutUs.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-8 px-4 pt-20">
      <div className="container mx-auto">
        {/* Judul About US */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8 lg:mb-20">
          <span className="text-green-600">Tentang Kami</span>
        </h2>

        {/* Konten About */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Teks Konten */}
          <div className="lg:w-1/2 text-center lg:text-center">
            <h3 className="text-xl lg:text-3xl font-semibold mb-4">
              Mari mengenal Agri<span className="text-green-600">Nova</span>
            </h3>
            <p className="text-gray-700 text-sm lg:text-lg">AgriNova was born from a passion for sustainable living and a desire to make urban farming accessible to everyone, regardless of experience. We believe that growing your own food shouldn't be intimidating, but a rewarding and enjoyable journey.</p>
          </div>

          {/* Gambar */}
          <div className="lg:w-1/2 flex justify-center">
            <img src={aboutImage} alt="About AgriNova" className="rounded-lg shadow-lg w-4/5 lg:w-3/4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
