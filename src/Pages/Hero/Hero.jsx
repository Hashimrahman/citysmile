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
import { FaPlay } from "react-icons/fa";
import Image from "./Hero_Assets/Image.png";
import Decore from "./Hero_Assets/Decore.png";
import TextDecore from "./Hero_Assets/Text-Decore.png";
import { MdFlight } from "react-icons/md";

const Hero = () => {
  // Animation variants for the container
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1,transition: { duration: 0.5 } },
  // };
  const containerVariants = {
    hidden: { y: "-10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

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
        className="h-[75vh] bg-blue-100 md:bg-transparent md:h-screen grid grid-cols-1 lg:grid-cols-2 sm:mt-0 w-full place-items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="md:p-16 flex flex-col gap-6 justify-center mx-10">
          <h3 className="text-lg md:text-xl text-flamingo_red text-left">
            Best Destinations around the world
          </h3>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-navyBlue font-volkhov">
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
          <p className="text-grayBlue text-justify">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex gap-8">
            <button className="bg-golden_yellow text-white px-4 py-2 rounded-md shadow-secondary hover:scale-105 transition-all duration-500">
              Find Out More
            </button>
            <div className="flex gap-3 items-center hover:cursor-pointer hover:scale-105 transition-all duration-500">
              <button className="bg-flamingo_red p-3 rounded-full shadow-primary">
                <FaPlay />
              </button>
              <h5>Play more</h5>
            </div>
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
      </motion.div>
      {/* mobile services */}
      {/* <div className="flex md:hidden bg-blue-900 h-auto justify-evenly py-4 mb-10 mx-3 gap-3 rounded-lg ">
        <div className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md flex-1 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-2xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md flex-1 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-2xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md flex-1 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-2xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md flex-1 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-2xl " />
          <h1>Tickets booking</h1>
        </div>
      </div> */}
      {/* Mobile Services */}
      {/* <div className="flex md:hidden bg-blue-900 h-auto justify-center py-4 mb-10 mx-3 gap-x-3 rounded-lg -mt-12">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md w-20 text-center text-navyBlue hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <MdFlight className="text-2xl" />
              <h1>Tickets</h1>
            </div>
          ))}
      </div> */}
      {/* Mobile Services */}
      <div className="flex md:hidden bg-blue-900 h-auto justify-center py-4 mb-4 mx-3 gap-x-3 rounded-lg -mt-12">
        {[
          { icon: <MdFlight className="text-2xl" />, title: "Flight Booking" },
          { icon: <MdFlight className="text-2xl" />, title: "Hotel Booking" },
          { icon: <MdFlight className="text-2xl" />, title: "Car Rental" },
          { icon: <MdFlight className="text-2xl" />, title: "Travel Guides" },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-base bg-blue-100 p-3 rounded-md w-20 text-center text-navyBlue hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
          >
            {service.icon}
            <h1 className="text-sm">{service.title}</h1>
          </div>
        ))}
      </div>

      {/* lap services */}
      <div className="bg-blue-900 h-auto hidden md:flex justify-evenly py-4 mb-10 mx-32 rounded-lg ">
        <div className="flex flex-col justify-center items-center text-l bg-blue-100 p-6 rounded-md w-36 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-5xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-l bg-blue-100 p-6 rounded-md w-36 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-5xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-l bg-blue-100 p-6 rounded-md w-36 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-5xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-l bg-blue-100 p-6 rounded-md w-36 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-5xl " />
          <h1>Tickets booking</h1>
        </div>
        <div className="flex flex-col justify-center items-center text-l bg-blue-100 p-6 rounded-md w-36 text-center text-navyBlue hover: cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
          <MdFlight className="text-5xl " />
          <h1>Tickets booking</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
