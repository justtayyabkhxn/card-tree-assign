import React from "react";
import Image, { StaticImageData } from "next/image";
import temp1 from "../public/temp1.png";
import temp2 from "../public/temp2.png";

import "../src/app/globals.css";

const TemplateCard = ({
  title,
  templateNumber,
  image,
  sections,
}: {
  title: string;
  templateNumber: string;
  image: StaticImageData;
  sections: Array<{ name: string; icon: string; isGray?: boolean }>;
}) => {
  const handleUseTemplate = () => {
    console.log(`User has clicked on "Use template" for ${title}`);
  };

  return (
    <div className="flex flex-col items-center text-center w-80 p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Template {templateNumber} of 5</p>

      <div className="w-70 h-50 rounded-lg mt-3 flex items-center justify-center">
        <Image
          src={image}
          alt="Template Icon"
          width={200}
          height={100}
          className="w-70 h-45"
        />
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        <button
          className="bg-black text-white px-4 py-2 rounded-full cursor-pointer"
          onClick={handleUseTemplate} 
        >
          Use template
        </button>
        <button className="border px-4 py-2 rounded-full flex items-center gap-1 cursor-pointer">
          Preview 👁️
        </button>
      </div>

      <ul className="space-y-1 mt-4">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`flex text-left gap-2 ${
              section.isGray ? "text-gray-400" : "text-blue-600"
            }`}
          >
            <span>{section.icon}</span>
            {section.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
const ChooseTemplate = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      <h2 className="text-3xl font-bold mb-6">Choose a template</h2>
      <div className="flex gap-10">
        <TemplateCard
          title="Full Story"
          templateNumber="1"
          image={temp1}
          sections={[
            { name: "About you", icon: "👤" },
            { name: "Contact section", icon: "📩" },
            { name: "About current company", icon: "🏢" },
            { name: "Content - Links & files", icon: "🔗" },
            { name: "Gallery - Video, image & gif", icon: "🖼️" },
          ]}
        />
        <TemplateCard
          title="Big Picture"
          templateNumber="2"
          image={temp2}
          sections={[
            { name: "About you", icon: "👤" },
            { name: "Contact section", icon: "📩" },
            { name: "About current company", icon: "🏢" },
            { name: "Content - Links & files", icon: "🔗", isGray: true },
            { name: "Gallery - Video, image & gif", icon: "🖼️", isGray: true },
          ]}
        />
      </div>
    </div>
  );
};

export default ChooseTemplate;
