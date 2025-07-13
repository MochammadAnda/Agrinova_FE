const Feature = () => {
  const features = [
    {
      icon: "🧬",
      title: "AI Assistant",
      description: "Get personalized recommendations for plant selection, care, and troubleshooting based on your environment.",
    },
    {
      icon: "🏭",
      title: "Warehouse Management System",
      description: "Manage your inventory, track finances, and log production data with ease.",
    },
    {
      icon: "👤",
      title: "Personalized Profile",
      description: "Track your progress, view activity logs, and customize your farming experience.",
    },
  ];

  return (
    <section id="features" className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Unlock Your Farming Potential</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
