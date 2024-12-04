// // // import React from "react";
// // // import romeImage from "./Destination_Assets/rome.png";
// // // import { FaLocationArrow } from "react-icons/fa";

// // // const Destinations = () => {
// // //   return (
// // //     <div className="mb-32">
// // //       <div className="text-center mb-12">
// // //         <h4 className="text-base md:text-lg font-semibold tracking-wider uppercase text-grayBlue">
// // //           Top Selling
// // //         </h4>
// // //         <h1 className="text-3xl md:text-4xl font-bold text-navyBlue mt-2 font-volkhov">
// // //           Top Destinations
// // //         </h1>
// // //       </div>
// // //       <div className="flex flex-wrap justify-evenly gap-4">
// // //         {/* Card 1 */}
// // //         <div className="rounded-3xl overflow-hidden relative shadow-custom-light">
// // //           <img
// // //             src={romeImage}
// // //             alt="Rome"
// // //             className="w-full h-auto object-cover"
// // //           />
// // //           <div className="absolute bottom-0 bg-white w-full m-0">
// // //             <div className="p-4 flex flex-col gap-4">
// // //               <div className="flex justify-between">
// // //                 <h4>Rome, Italy</h4>
// // //                 <h1>$5,42k</h1>
// // //               </div>
// // //               <div className="flex gap-4 items-center">
// // //                 <FaLocationArrow />
// // //                 <p>10 Days Trip</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         {/* Card 2 */}
// // //         <div className="p-0 rounded-3xl overflow-hidden relative shadow-custom-light">
// // //           <img
// // //             src={romeImage}
// // //             alt="Rome"
// // //             className="w-full h-auto object-cover m-0"
// // //           />
// // //           <div className="absolute bottom-0 bg-white w-full m-0">
// // //             <div className="p-4 flex flex-col gap-4">
// // //               <div className="flex justify-between">
// // //                 <h4>Rome, Italy</h4>
// // //                 <h1>$5,42k</h1>
// // //               </div>
// // //               <div className="flex gap-4 items-center">
// // //                 <FaLocationArrow />
// // //                 <p>10 Days Trip</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         {/* Card 3 */}
// // //         <div className=" rounded-3xl overflow-hidden relative shadow-custom-light">
// // //           <img
// // //             src={romeImage}
// // //             alt="Rome"
// // //             className="w-full h-auto object-cover"
// // //           />
// // //           <div className="absolute bottom-0 bg-white w-full m-0">
// // //             <div className="p-4 flex flex-col gap-4">
// // //               <div className="flex justify-between">
// // //                 <h4>Rome, Italy</h4>
// // //                 <h1>$5,42k</h1>
// // //               </div>
// // //               <div className="flex gap-4 items-center">
// // //                 <FaLocationArrow />
// // //                 <p>10 Days Trip</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Destinations;




// // import React from 'react';
// // import ReactCardSlider from 'react-card-slider-component';
// // import 'react-card-slider-component/dist/index.css';

// // // Sample destination data (this should be replaced with your actual data)
// // const destinations = [
// //   {
// //     image: "https://picsum.photos/200/300",
// //     title: "Paris",
// //     description: "Explore the beautiful city of lights.",
// //     clickEvent: () => handleClick("Paris"),
// //   },
// //   {
// //     image: "https://picsum.photos/300/400",
// //     title: "New York",
// //     description: "Discover the bustling city that never sleeps.",
// //     clickEvent: () => handleClick("New York"),
// //   },
// //   {
// //     image: "https://picsum.photos/500/600",
// //     title: "Tokyo",
// //     description: "Experience the vibrant culture and technology hub.",
// //     clickEvent: () => handleClick("Tokyo"),
// //   },
// //   {
// //     image: "https://picsum.photos/600/500",
// //     title: "Sydney",
// //     description: "Visit the iconic Opera House and beaches.",
// //     clickEvent: () => handleClick("Sydney"),
// //   },
// //   {
// //     image: "https://picsum.photos/700/600",
// //     title: "London",
// //     description: "Discover the historic landmarks of London.",
// //     clickEvent: () => handleClick("London"),
// //   },
// // ];

// // // Handle click event to alert the title (or any other action)
// // const handleClick = (title) => {
// //   alert(`You clicked on: ${title}`);
// // };

// // const Destinations = () => {
// //   return (
// //     <div id="destinations" className="container max-w-screen-xl mx-auto pt-28 pb-16 px-4">
// //       <h2 className="big-green-title mb-4 text-center">Destinations</h2>

// //       {/* Slider container */}
// //       <div className="slider-container">
// //         <ReactCardSlider slides={destinations} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Destinations;

// // import React from "react";
// // import { Flicking, ViewportSlot } from "@egjs/react-flicking";
// // import "@egjs/react-flicking/dist/flicking.css"; // Flicking styles
// // import "@egjs/react-flicking/dist/flicking-inline.css"; // Optional for inline theme
// // import { MdFlight } from "react-icons/md";
// // import romeImage from "./Destination_Assets/rome.png";

// // const destinations = [
// //   { id: 1, name: "Paris", image: romeImage },
// //   { id: 2, name: "Tokyo", image: romeImage },
// //   { id: 3, name: "New York", image: romeImage },
// //   { id: 4, name: "Sydney", image: romeImage },
// //   { id: 5, name: "Rome", image: romeImage },
// // ];

// // const DestinationSlider = () => {
// //   return (
// //     <div className="w-full p-4 bg-gray-100">
// //       <h2 className="text-2xl font-bold text-center mb-4">Popular Destinations</h2>
// //       <Flicking
// //         align="center"
// //         circular={true}
// //         gap={10}
// //         autoplay={{ delay: 3000 }}
// //         className="h-auto"
// //       >
// //         {destinations.map((destination) => (
// //           <div
// //             key={destination.id}
// //             className="relative bg-white rounded-lg shadow-md overflow-hidden w-[300px] h-[200px] flex-shrink-0"
// //           >
// //             <img
// //               src={destination.image}
// //               alt={destination.name}
// //               className="object-cover w-full h-full"
// //             />
// //             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
// //               <h3 className="text-lg font-semibold">{destination.name}</h3>
// //             </div>
// //           </div>
// //         ))}
// //         {/* Decorative slot for additional elements */}
// //         <ViewportSlot>
// //           <span className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl text-black bg-gray-200 rounded-full p-2 cursor-pointer">
// //             &lt;
// //           </span>
// //           <span className="absolute top-1/2 right-0 transform -translate-y-1/2 text-xl text-black bg-gray-200 rounded-full p-2 cursor-pointer">
// //             &gt;
// //           </span>
// //         </ViewportSlot>
// //       </Flicking>
// //     </div>
// //   );
// // };

// // export default DestinationSlider;

// // Destinations.jsx
// import React from "react";
// import Carousel from "./Carousel"; // assuming Carousel is in the same directory

// const Destinations = () => {
//   const items = [
//     "https://via.placeholder.com/400x200?text=1",
//     "https://via.placeholder.com/400x200?text=2",
//     "https://via.placeholder.com/400x200?text=3",
//     "https://via.placeholder.com/400x200?text=4",
//     "https://via.placeholder.com/400x200?text=5",
//   ];

//   return (
//     <div id="dest">
//       <Carousel items={items} active={0} />
//     </div>
//   );
// };

// export default Destinations;

