import React from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-2xl p-6 w-full max-w-md border border-gray-200">
      <div className="flex flex-col items-center text-center w-1/2">
        <Image
          src="/profile.png" 
          alt="Pam Beasly"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold mt-3">Pam Beasly</h3>
        <p className="text-gray-500 text-sm">Senior Sales Leader</p>
        <p className="text-gray-400 text-xs">Carrot Corp</p>

        <div className="mt-3 bg-gray-100 p-2 rounded-lg">
          <Image
            src="/logo.png" 
            alt="Company Logo"
            width={30}
            height={30}
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-1/2">
        <p className="text-gray-500 text-sm mb-2">Connect with me</p>
        <Image
          src="/qr.png" 
          alt="QR Code"
          width={80}
          height={80}
        />
        <a href="#" className="text-blue-500 text-xs mt-1">Business card</a>

        <div className="flex justify-center space-x-3 mt-4">
          <FaPhone className="text-blue-500 text-lg cursor-pointer" />
          <FaEnvelope className="text-blue-500 text-lg cursor-pointer" />
          <FaLinkedin className="text-blue-500 text-lg cursor-pointer" />
          <FaDownload className="text-blue-500 text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
