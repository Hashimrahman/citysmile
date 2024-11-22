// import React from 'react'

// const Welcome = () => {
//   return (
//     <div className='welcome h-screen relative'>
//       <h1 className='absolute bottom-8 font-extrabold left-1/2 transform -translate-x-1/2 text-center text-5xl tracking-widest'>CITY SMILE</h1>
//     </div>
//   )
// }

// export default Welcome

import React, { useState } from "react";
import text from '../assets/text.png'

const Welcome = () => {
  const [destination, setDestination] = useState("");

  const handleContactUs = () => {
    if (destination) {
      const message = `Hey, I want to know more about your ${destination}.`;
      const whatsappNumber = "9072827658"; // Replace with your WhatsApp number
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    } else {
      alert("Please select a destination first!");
    }
  };

  return (
    <div>
      <div className="welcome h-screen flex flex-col items-center justify-center bg-gray-100 text-center relative">
        <img src={text} alt="" className="object-contain md:scale-50 absolute top-56 md:top-10" />

        <div className="px-6 md:px-24 py-6 backdrop-blur-sm border rounded-md">
        <h1 className="text-4xl font-bold mb-8">Wanna Fly High?</h1>
        <div className="mb-6">
          <label
            htmlFor="destination"
            className="block text-lg font-medium mb-2"
          >
            Choose Destination
          </label>
          <select
            id="destination"
            className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="" disabled>
              Select a destination
            </option>
            <option value="Paris">Paris</option>
            <option value="Maldives">Maldives</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>
        <button
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition duration-300"
          onClick={handleContactUs}
        >
          Contact Us
        </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
