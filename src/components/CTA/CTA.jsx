import React from "react";

const CTA = () => {
  return (
    <div className="cta-container  text-center py-12 px-6 rounded-lg shadow-lg my-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Your Journey?
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Let us help you create unforgettable travel experiences. Get in touch
        with us today or explore our services to find the perfect fit for your
        travel needs.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => (window.location.href = "/contact")}
          className="w-full md:w-1/4 bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Contact Us
        </button>
        <button
          onClick={() => (window.location.href = "/services")}
          className="w-full md:w-1/4 bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default CTA;
