// import React from "react";
// import logo from "../../assets/logo.png";
// import { FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="mx-12">
//       <div className="flex justify-between flex-1">
//         <div className="w-96">
//           <img src={logo} alt="" />
//         </div>
//         <div className="flex justify-between bg-blue-gray-200">
//           <div className="flex flex-col items-center justify-center gap-5">
//             <p>About Us</p>
//             <p>About Us</p>
//             <p>About Us</p>
//           </div>
//           <div className=" flex justify-between items-center gap-8">
//             <div className="text-5xl">
//               <FaInstagram />
//             </div>
//             <div className="text-5xl">
//               <FaInstagram />
//             </div>
//             <div className="text-5xl">
//               <FaInstagram />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../../assets/logo.png";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-full mb-4" />
          {/* <p className="text-gray-400">
            Your go-to platform for exceptional services and innovative solutions. Let's grow together.
          </p> */}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for updates and promotions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-5 mt-5">
            <a href="#instagram" className="text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#facebook" className="text-2xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#twitter" className="text-2xl hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#linkedin" className="text-2xl hover:text-blue-600">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} City Smiles. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
