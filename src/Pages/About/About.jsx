// import React from 'react'

// const About = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default About

import React from "react";
import bg from "../../assets/servicesAssets/holiday.jpg";
import "./About.css"; // Create a CSS file for parallax styles if needed
import CTA from "../../components/CTA/CTA";
import ABoutBg from "../../assets/Aboutbg.png";

import { motion } from "framer-motion";
const About = () => {
  const containerVariants = {
    hidden: { y: "-10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <div className="about-container pt-32">
      {/* Heading Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-navyBlue mt-2 font-volkhov ">
            About Us
          </h1>
        </div>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-12 lg:px-24 mb-24">
          {/* Text Section */}
          <div className="text-gray-700 text-lg leading-8 text-justify">
            <p>
              Welcome to City Smiles, where your journey begins with a promise
              of excellence and unforgettable experiences. We are committed to
              providing top-notch travel services tailored to meet your unique
              needs, ensuring every moment is seamless and filled with joy.
            </p>
            <p className="mt-4">
              With years of experience and a passion for exploration, our team
              is dedicated to making your travel dreams a reality. Discover the
              world with confidence and comfort, knowing that City Smiles is
              with you every step of the way.
            </p>
          </div>

          {/* Parallax Image Section (hidden on mobile) */}
          <div
            className="hidden md:block h-[400px] bg-fixed object-cover rounded-lg"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
      </motion.div>

      {/* Mission and Vision Section */}
      {/* <div className="px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-300 py-10 relative"> */}
      <div
        className="px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-20 bg-blue-300 py-20 relative bg-fixed"
        style={{
          backgroundImage: `url(${ABoutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={ABoutBg} alt="" className="absolute top-0" /> */}
        {/* Mission */}
        <div className="bg-white shadow-lg rounded-lg p-6 py-20">
          <h2 className="text-2xl font-normal text-navyBlue mb-8">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-8 text-justify ">
            At City Smiles, our mission is to create seamless, enriching, and
            transformative travel experiences for every customer. We are
            dedicated to offering personalized services that cater to the unique
            needs of each traveler, ensuring that every aspect of their journey
            is meticulously planned and executed.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-lg p-6 py-20">
          <h2 className="text-2xl font-normal text-navyBlue mb-8">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-8 text-justify">
            Our vision is to be a globally recognized and respected travel
            agency, celebrated for our innovative services, exceptional customer
            care, and unwavering dedication to delivering transformative travel
            experiences. We envision connecting people from all walks of life to
            the beauty, diversity, and wonder of the world through curated
            journeys that leave a lasting impact.
          </p>
        </div>
      </div>
      {/* <CTA /> */}
    </div>
  );
};

export default About;
