import React from "react";

const ClientLogos = () => {
  const logos = ["/snowflake.png", "/exotel.png", "/luru.png", "/freshworks.png"];

  return (
    <div className="flex justify-around p-4 bg-white rounded-lg shadow-lg mt-6">
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt="Client Logo" className="w-16 h-8" />
      ))}
    </div>
  );
};

export default ClientLogos;
