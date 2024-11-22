// import { FaPlay } from "react-icons/fa";
// import Image from './Hero_Assets/Image.png'
// import Decore from './Hero_Assets/Decore.png'

// const Hero = () => {
//   return (
//     <div className="relative m-0">
//         <img src={Decore} alt="" className="absolute top-0 -z-10 scale-50 w-full"/>
//       <div className="h-screen flex items-center gap-10 flex-wrap md:flex-nowrap">
//         <div className="w-1/2 p-16 flex flex-col gap-6">
//           <h3 className="text-2xl">Best Destinations around the world</h3>
//           <h1 className="text-6xl font-extrabold">Travel, enjoy and live a new and full life</h1>
//           <p>
//             Built Wicket longer admire do barton vanity itself do in it.
//             Preferred to sportsmen it engrossed listening. Park gate sell they
//             west hard for the.
//           </p>
//           <div className="flex gap-8">
//             <button>Find Out More</button>
//             <div className="flex gap-6">
//               <button>
//                 <FaPlay />
//               </button>
//               <h5>Play more</h5>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/2 p-16 h-full">
//             <div className="w-full h-full">
//                 <img src={Image} alt="image" />
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaPlay } from "react-icons/fa";
import Image from "./Hero_Assets/Image.png";
import Decore from "./Hero_Assets/Decore.png";
import TextDecore from "./Hero_Assets/Text-Decore.png";
// import temp from "./Hero_Assets/"

const Hero = () => {
  return (
    <div className="relative m-0 overflow-hidden">
      {/* Background Decor */}
      <img
        src={Decore}
        alt="background decor"
        className="absolute top-0 left-0 w-full h-auto object-cover -z-10"
      />

      {/* Content */}
      <div className="h-screen flex items-center gap-10 flex-wrap md:flex-nowrap mx-14">
        <div className="w-1/2 p-16 flex flex-col gap-6">
          <h3 className="text-xl text-flamingo_red">Best Destinations around the world</h3>
          <h1 className="text-7xl font-extrabold tracking-tighter text-navyBlue font-volkhov">
            Travel, <span className="relative w-full pr-32 text-left font-volkhov"><img className="absolute bottom-4 -z-10 -left-5 w-full" src={TextDecore} alt="" />enjoy</span>
            <br /> and live a new
            <br /> and full life
          </h1>
          <p className="text-grayBlue">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex gap-8">
            <button className="bg-golden_yellow text-white px-4 py-2 rounded-md shadow-secondary hover:scale-105 transition-all duration-500">
              Find Out More
            </button>
            <div className="flex gap-3 items-center hover:cursor-pointer hover:scale-105 transition-all duration-500 ">
              <button className="bg-flamingo_red p-3 rounded-full shadow-primary">
                <FaPlay />
              </button>
              <h5>Play more</h5>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-16 h-full">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={Image}
              alt="Travel destination"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
