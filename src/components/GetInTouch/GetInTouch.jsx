import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="bg-blue-900 text-white py-10 px-8 shadow-lg">
      {/* Title Section */}
      <h2 className="text-3xl font-extrabold text-center mb-4 font-roboto">
        We&apos;d Love to Hear from You!
      </h2>
      <p className="text-center text-blue-400 mb-6 font-poppins">
        Whether you have a question or just want to stay updated, feel free to
        drop us a message or connect with us on social media.
      </p>
      <div className="w-full h-[2px] bg-white mb-8"></div>

      {/* Contact Form */}
      <form className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full sm:w-2/3 px-4 py-2 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full sm:w-2/3 px-4 py-2 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full sm:w-2/3 px-4 py-2 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="w-full sm:w-2/3 px-4 py-2 rounded bg-[#38BDF8] hover:bg-[#0ea5e9] text-black font-bold  transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Section */}
      <div className="mt-8 text-center">
        <p className="text-blue-400 mb-4">Follow us on social media:</p>
        <div className="flex justify-center gap-6">
          <a href="#instagram" className="text-4xl hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="#facebook" className="text-4xl hover:text-blue-500">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
