// // import React from "react";
// // import romeImage from "./Destination_Assets/rome.png";
// // import { FaLocationArrow } from "react-icons/fa";

// // const Destinations = () => {
// //   return (
// //     <div className="mb-32">
// //       <div className="text-center mb-12">
// //         <h4 className="text-base md:text-lg font-semibold tracking-wider uppercase text-grayBlue">
// //           Top Selling
// //         </h4>
// //         <h1 className="text-3xl md:text-4xl font-bold text-navyBlue mt-2 font-volkhov">
// //           Top Destinations
// //         </h1>
// //       </div>
// //       <div className="flex flex-wrap justify-evenly gap-4">
// //         {/* Card 1 */}
// //         <div className="rounded-3xl overflow-hidden relative shadow-custom-light">
// //           <img
// //             src={romeImage}
// //             alt="Rome"
// //             className="w-full h-auto object-cover"
// //           />
// //           <div className="absolute bottom-0 bg-white w-full m-0">
// //             <div className="p-4 flex flex-col gap-4">
// //               <div className="flex justify-between">
// //                 <h4>Rome, Italy</h4>
// //                 <h1>$5,42k</h1>
// //               </div>
// //               <div className="flex gap-4 items-center">
// //                 <FaLocationArrow />
// //                 <p>10 Days Trip</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Card 2 */}
// //         <div className="p-0 rounded-3xl overflow-hidden relative shadow-custom-light">
// //           <img
// //             src={romeImage}
// //             alt="Rome"
// //             className="w-full h-auto object-cover m-0"
// //           />
// //           <div className="absolute bottom-0 bg-white w-full m-0">
// //             <div className="p-4 flex flex-col gap-4">
// //               <div className="flex justify-between">
// //                 <h4>Rome, Italy</h4>
// //                 <h1>$5,42k</h1>
// //               </div>
// //               <div className="flex gap-4 items-center">
// //                 <FaLocationArrow />
// //                 <p>10 Days Trip</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         {/* Card 3 */}
// //         <div className=" rounded-3xl overflow-hidden relative shadow-custom-light">
// //           <img
// //             src={romeImage}
// //             alt="Rome"
// //             className="w-full h-auto object-cover"
// //           />
// //           <div className="absolute bottom-0 bg-white w-full m-0">
// //             <div className="p-4 flex flex-col gap-4">
// //               <div className="flex justify-between">
// //                 <h4>Rome, Italy</h4>
// //                 <h1>$5,42k</h1>
// //               </div>
// //               <div className="flex gap-4 items-center">
// //                 <FaLocationArrow />
// //                 <p>10 Days Trip</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Destinations;




// import React from 'react';
// import ReactCardSlider from 'react-card-slider-component';
// import 'react-card-slider-component/dist/index.css';

// // Sample destination data (this should be replaced with your actual data)
// const destinations = [
//   {
//     image: "https://picsum.photos/200/300",
//     title: "Paris",
//     description: "Explore the beautiful city of lights.",
//     clickEvent: () => handleClick("Paris"),
//   },
//   {
//     image: "https://picsum.photos/300/400",
//     title: "New York",
//     description: "Discover the bustling city that never sleeps.",
//     clickEvent: () => handleClick("New York"),
//   },
//   {
//     image: "https://picsum.photos/500/600",
//     title: "Tokyo",
//     description: "Experience the vibrant culture and technology hub.",
//     clickEvent: () => handleClick("Tokyo"),
//   },
//   {
//     image: "https://picsum.photos/600/500",
//     title: "Sydney",
//     description: "Visit the iconic Opera House and beaches.",
//     clickEvent: () => handleClick("Sydney"),
//   },
//   {
//     image: "https://picsum.photos/700/600",
//     title: "London",
//     description: "Discover the historic landmarks of London.",
//     clickEvent: () => handleClick("London"),
//   },
// ];

// // Handle click event to alert the title (or any other action)
// const handleClick = (title) => {
//   alert(`You clicked on: ${title}`);
// };

// const Destinations = () => {
//   return (
//     <div id="destinations" className="container max-w-screen-xl mx-auto pt-28 pb-16 px-4">
//       <h2 className="big-green-title mb-4 text-center">Destinations</h2>

//       {/* Slider container */}
//       <div className="slider-container">
//         <ReactCardSlider slides={destinations} />
//       </div>
//     </div>
//   );
// };

// export default Destinations;
