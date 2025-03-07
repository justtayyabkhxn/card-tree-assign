import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="email"
        placeholder="name@domain.com"
        className="w-full p-3 border rounded-md"
      />
      <input
        type="tel"
        placeholder="(+XX)99999999"
        className="w-full p-3 border rounded-md"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md">
        Continue
      </button>
    </form>
  );
};

export default ContactForm;
