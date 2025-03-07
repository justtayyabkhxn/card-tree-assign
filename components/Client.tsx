import React from "react";
import Image from "next/image";

const ClientsPartners = () => {
  const clients = [
    { name: "Snowflake", logo: "/logos/snowflake.png" },
    { name: "Exotel", logo: "/logos/exotel.png" },
    { name: "Luru", logo: "/logos/luru.png" },
    { name: "Freshworks", logo: "/logos/freshworks.png" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4">Esteemed clients and partners</h3>
      <div className="flex gap-2 overflow-x-auto">
        {clients.map((client, index) => (
          <div key={index} className="flex flex-col items-center p-2 bg-gray-100 rounded-lg">
            <Image src={client.logo} alt={client.name} width={100} height={50} />
            <p className="text-xs mt-2">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsPartners;
