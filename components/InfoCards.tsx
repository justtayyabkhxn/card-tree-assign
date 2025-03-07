import React from "react";

const infoData = [
  { title: "Product Brochure", description: "Download below", icon: "📄" },
  { title: "Tech Stack Expertise", description: "Tech display for customers", icon: "💻" },
  { title: "Product Walkthrough", description: "5-minute demo video", icon: "🎥" },
  { title: "Market Domain Expertise", description: "SaaS & Cloud", icon: "☁️" },
  { title: "Block My Calendar", description: "At your convenience", icon: "📅" },
];

const InfoCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {infoData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <span className="text-2xl mr-4">{item.icon}</span>
          <div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
