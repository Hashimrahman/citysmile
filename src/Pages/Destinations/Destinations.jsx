// import React from "react";
// import romeImage from './Destination_Assets/rome.png'

// const Destinations = () => {
//   return (
//     <div className="mb-32">
//       <div className="text-center mb-12">
//         <h4 className="text-base md:text-lg font-semibold tracking-wider uppercase text-grayBlue">
//           Top Selling
//         </h4>
//         <h1 className="text-3xl md:text-4xl font-bold text-navyBlue mt-2 font-volkhov">
//           Top Destinations
//         </h1>
//       </div>
//       <div className="flex flex-wrap justify-evenly gap-4">
//         <div className="border rounded-3xl m-0 p-0 h-auto">
//           <div className="w-full flex flex-col justify-start "> <img src={romeImage} alt="" className="object-fill" /></div>
//         </div>
//         <div className="bg-fuchsia-300 p-4">
//           <div className="w-full object-fill"> <img src={romeImage} alt="" className=""/></div>
//         </div>
//         <div className="bg-fuchsia-300 p-4">
//           <div className="w-full object-fill"> <img src={romeImage} alt="" className=""/></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Destinations;

import React from "react";
import romeImage from "./Destination_Assets/rome.png";
import { FaLocationArrow } from "react-icons/fa";

const Destinations = () => {
  return (
    <div className="mb-32">
      <div className="text-center mb-12">
        <h4 className="text-base md:text-lg font-semibold tracking-wider uppercase text-grayBlue">
          Top Selling
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-navyBlue mt-2 font-volkhov">
          Top Destinations
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4">
        {/* Card 1 */}
        <div className="rounded-3xl overflow-hidden relative shadow-custom-light">
          <img
            src={romeImage}
            alt="Rome"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 bg-white w-full m-0">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <h4>Rome, Italy</h4>
                <h1>$5,42k</h1>
              </div>
              <div className="flex gap-4 items-center">
                <FaLocationArrow />
                <p>10 Days Trip</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-0 rounded-3xl overflow-hidden relative shadow-custom-light">
          <img
            src={romeImage}
            alt="Rome"
            className="w-full h-auto object-cover m-0"
          />
          <div className="absolute bottom-0 bg-white w-full m-0">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <h4>Rome, Italy</h4>
                <h1>$5,42k</h1>
              </div>
              <div className="flex gap-4 items-center">
                <FaLocationArrow />
                <p>10 Days Trip</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className=" rounded-3xl overflow-hidden relative shadow-custom-light">
          <img
            src={romeImage}
            alt="Rome"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 bg-white w-full m-0">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <h4>Rome, Italy</h4>
                <h1>$5,42k</h1>
              </div>
              <div className="flex gap-4 items-center">
                <FaLocationArrow />
                <p>10 Days Trip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
