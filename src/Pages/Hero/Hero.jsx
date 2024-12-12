// import { FaPlay } from "react-icons/fa";
// import Image from "./Hero_Assets/Image.png";
// import Decore from "./Hero_Assets/Decore.png";
// import TextDecore from "./Hero_Assets/Text-Decore.png";

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* Background Decor */}
//       <img
//         src={Decore}
//         alt="background decor"
//         className="absolute top-0 left-0 w-full h-auto object-contain -z-10"
//       />

//       {/* Content */}
//       <div className="h-screen grid grid-cols-1 lg:grid-cols-2 sm:mt-0 w-full place-items-center">
//         <div className=" md:p-16 flex flex-col gap-6 justify-center mx-10">
//           <h3 className="text-lg md:text-xl text-flamingo_red text-left">
//             Best Destinations around the world
//           </h3>
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-navyBlue font-volkhov ">
//             Travel,{" "}
//             <span className="relative pr-32 text-left font-volkhov">
//               <img
//                 className="absolute bottom-4 -z-10 w-full"
//                 src={TextDecore}
//                 alt=""
//               />
//               enjoy
//             </span>
//             <br /> and live a new
//             <br /> and full life
//           </h1>
//           <p className="text-grayBlue text-justify  ">
//             Built Wicket longer admire do barton vanity itself do in it.
//             Preferred to sportsmen it engrossed listening. Park gate sell they
//             west hard for the.
//           </p>
//           <div className="flex gap-8 ">
//             <button className="bg-golden_yellow text-white px-4 py-2 rounded-md shadow-secondary hover:scale-105 transition-all duration-500">
//               Find Out More
//             </button>
//             <div className="flex gap-3 items-center hover:cursor-pointer hover:scale-105 transition-all duration-500">
//               <button className="bg-flamingo_red p-3 rounded-full shadow-primary">
//                 <FaPlay />
//               </button>
//               <h5>Play more</h5>
//             </div>
//           </div>
//         </div>

//         <div className="hidden lg:inline-block  p-16 h-full ">
//           <div className="w-full h-full flex items-center justify-center">
//             <img
//               src={Image}
//               alt="Travel destination"
//               className="w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { FaCar, FaHotel, FaPlay, FaWhatsapp } from "react-icons/fa";
import Image from "./Hero_Assets/Image.png";
import Decore from "./Hero_Assets/Decore.png";
import Mobilehero from "./Hero_Assets/mobile-hero.png";
import Mobilehero2 from "./Hero_Assets/mobile-hero2.png";
import TextDecore from "./Hero_Assets/Text-Decore.png";
import { MdFlight, MdModeOfTravel } from "react-icons/md";
import { GiPassport } from "react-icons/gi";
import { PiChalkboardTeacherBold } from "react-icons/pi";

const Hero = () => {
  const containerVariants = {
    hidden: { y: "-10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };
  const services = [
    { icon: <MdFlight className="text-3xl" />, title: "Flight Booking" },
    { icon: <FaHotel className="text-3xl" />, title: "Hotel Booking" },
    {
      icon: <MdModeOfTravel className="text-3xl" />,
      title: "Holiday Planning",
    },
    { icon: <FaCar className="text-3xl" />, title: "Car Rental" },
    { icon: <GiPassport className="text-3xl" />, title: "Passports" },
    {
      icon: <PiChalkboardTeacherBold className="text-3xl" />,
      title: "Travel Guides",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <img
        src={Decore}
        alt="background decor"
        className="absolute top-0 left-0 w-full h-auto object-contain -z-10"
      />

      {/* Content */}
      <motion.div
        className="h-[85vh] bg-blue-100 mt-[85px] md:bg-transparent md:h-screen grid grid-cols-1 lg:grid-cols-2 md:mt-4 w-full place-items-start md:place-items-center md:ml-5 -z-30"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="md:p-10 md:flex flex-col gap-6 justify-center mx-0 mt-6 md:mt-0 hidden">
          <h3 className="text-lg md:text-xl text-flamingo_red text-left hidden md:inline-block">
            Best Destinations around the world
          </h3>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-navyBlue font-volkhov">
            Travel,{" "}
            <span className="relative pr-32 text-left font-volkhov">
              <img
                className="absolute bottom-4 -z-10 w-full"
                src={TextDecore}
                alt=""
              />
              enjoy
            </span>
            <br /> and live a new
            <br /> and full life
          </h1>
          <p className="text-grayBlue text-justify text-sm md:text-base">
            Streamlined travel documentation for your ideal journey.
          </p>
          <div className="flex gap-8">
            <button className="flex items-center gap-2 text-xl bg-green-600 text-white px-4 py-2 rounded-3xl shadow-ternary hover:scale-105 transition-all duration-500">
              <FaWhatsapp /> Contact Us
            </button>
          </div>
        </div>

        <div className="hidden lg:inline-block p-16 h-full">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={Image}
              alt="Travel destination"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* ======================================== */}

        <div className="md:p-16 flex flex-col gap-6 justify-center mx-10 mt-6 md:mt-0 md:hidden">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-navyBlue font-volkhov ">
            Travel,enjoy and live <br className="hidden sm:inline" /> a new and
            full life
          </h1>
          <p className="text-grayBlue text-justify text-sm md:text-base">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>
          <div className="flex gap-8">
            <button className="flex items-center gap-2 text-xl bg-green-600 text-white px-4 py-2 rounded-3xl shadow-ternary hover:scale-105 transition-all duration-500">
              <FaWhatsapp /> Contact Us
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <img src={Mobilehero} alt="" />
        </div>

        {/* ======================================== */}
      </motion.div>

      {/* Mobile Services */}
      <motion.div
        className="flex flex-wrap md:hidden bg-white h-auto justify-center p-4 mb-4 mx-3 gap-3 rounded-xl -mt-12 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md w-20 text-center text-navyBlue hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          >
            {service.icon}
            <h1 className="text-xs">{service.title}</h1>
          </div>
        ))}
      </motion.div>

      <div className="bg-blue-900 h-auto hidden md:inline-flex w-auto flex-wrap justify-center lg:justify-start gap-3 p-6 mb-10  rounded-r-lg">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-base bg-blue-100 p-6 rounded-md text-center text-navyBlue hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          >
            {service.icon}
            <h1 className="text-base">{service.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
