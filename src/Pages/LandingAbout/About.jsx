// import React from "react";
// import logo from "../../assets/logo.png";

// const AboutLanding = () => {
//   return (
//     <div className="mx-8 md:mx-44 my-20">
//       <h1 className="text-3xl md:text-5xl text-navyBlue mt-2 font-volkhov ">
//         <span className="font-bold font-volkhov">Service &nbsp;Beyond</span>
//         <br /> Boundaries
//       </h1>
//       <div className=" mt-8 flex flex-wrap flex-row-reverse md:flex-row">
//         <div className="md:w-1/2">
//           <p className="text-justify">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
//             placeat minus voluptate magni, quaerat numquam iusto labore. Ab at
//             ea culpa fugiat corrupti numquam commodi!
//           </p>
//           <br />
//           <p className="text-justify">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
//             vitae alias neque harum dolore soluta assumenda, nam error iusto,
//             omnis unde ad iste ea nostrum facilis. Eveniet eaque ex atque unde
//             fugiat deserunt beatae, id praesentium voluptates fugit, suscipit
//             eius. Architecto provident aliquam aspernatur atque dolor et?
//             Temporibus laborum fugiat unde ducimus quo corrupti accusamus, in
//             impedit, at explicabo voluptatem voluptate! Aliquid asperiores,
//             tempora mollitia adipisci, consequatur minus veritatis beatae, quia
//             fugiat nisi fuga repellat.
//           </p>
//         </div>
//         <div className="md:w-1/2 flex justify-center items-center b">
//           <img src={logo} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutLanding;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from "../../assets/About.png";
import AboutMobile from "../../assets/About-mobile.png";
// import aboutbg from "../../assets/about-bg.jpg";

const AboutLanding = () => {
  // Hook to track visibility
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Only trigger animation once
  });

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 100 }, // Start below and invisible
    visible: { opacity: 1, y: 0 }, // Move to default position
  };

  return (
    <div className="mt-5 py-4 bg-cover bg-fixed bg-no-repeat about">
      <div className="about-content mx-2 lg:mx-8 p-6 rounded-md bg-white md:pl-20">
        <motion.h1
          className="text-3xl md:text-5xl text-navyBlue font-roboto text-center md:text-left mt-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={ref}
        >
          <span className="font-bold font-volkhov">Service &nbsp;Beyond</span>
          <br /> Boundaries
        </motion.h1>
        <motion.div
          className="w-full md:w-1/2 h-[1px] bg-navyBlue md:mb-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="flex flex-wrap flex-row md:flex-row-reverse"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="md:w-1/2 flex justify-center items-center lg:-translate-y-12 md:px-8 my-4">
            <img src={About} alt="Logo" className="hidden md:inline-block" />
            <img src={AboutMobile} alt="Logo" className="md:hidden" />
          </div>
          <div className="md:w-1/2">
            <p className="text-justify text-lg">
              City Smile is your trusted partner in travel documentation
              services. With extensive expertise in the industry, we specialize
              in a wide range of solutions for passports and visas, including
              stamping, attestations, documentation, and certificate
              attestation.
            </p>
            <br /><br />
            <p className="text-justify text-lg">
              Our commitment to precision and excellence ensures a seamless,
              stress free experience, enabling your travel plans to proceed
              smoothly while meeting all legal requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLanding;
