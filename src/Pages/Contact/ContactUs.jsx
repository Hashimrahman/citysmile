import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { y: "-10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="contact-container px-4 md:px-12 lg:px-24 py-12 mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold text-navyBlue font-volkhov">
          Contact Us
        </h1>
        <p className="text-gray-700 mt-2">
          We’re here to assist you. Reach out to us anytime!
        </p>
      </div>

      {/* Contact Details and Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
        {/* Left Side: Contact Details */}
        <div className="contact-details md:col-span-2">
          <h2 className="text-2xl font-semibold text-navyBlue mb-6">
            Get in Touch
          </h2>
          <div className="flex items-start gap-4 mb-6">
            <MdLocationOn className="text-blue-500 text-2xl" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Our Office</p>
              <p className="text-gray-700">123, Main Street, City Name</p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Call Us</p>
              <p className="text-gray-700">+91 79073 59164</p>
              <p className="text-gray-700">+91 90485 34660</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <HiOutlineMail className="text-blue-500 text-2xl" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Email Us</p>
              <p className="text-gray-700">contact@citysmiles.com</p>
              <p className="text-gray-700">support@citysmiles.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form bg-gray-50 shadow-md rounded-lg p-6 md:col-span-3">
          <h2 className="text-2xl font-semibold text-navyBlue mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-800 font-medium mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container mt-12">
        <h2 className="text-2xl font-semibold text-navyBlue mb-4 text-center">
          Find Us Here
        </h2>
        <div className="w-full h-[300px] md:h-[500px]">
          <iframe
            className="w-full h-full border-none rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3913.7083238162204!2d75.86121107509487!3d11.209202988967121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDEyJzMzLjEiTiA3NcKwNTEnNDkuNiJF!5e0!3m2!1sen!2sin!4v1733939852323!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
