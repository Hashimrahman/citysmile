// import FlightTicket from '../../assets/servicesAssets/flightTicket.jpg'

// const Services = () => {

//   const services = [
//     {
//       id: 1,
//       title: "Flight Tickets",
//       desc: "Seamless flight bookings with competitive prices and excellent customer support.",
//       Image : FlightTicket
//     },
//     {
//       id: 2,
//       title: "Passport Services",
//       desc: "Fast and reliable passport processing services for your travel needs.",
//       Image : FlightTicket
//     },
//     {
//       id: 3,
//       title: "Certificate Attestation",
//       desc: "Efficient and trusted certificate attestation for all your official documents.",
//       Image : FlightTicket
//     },
//     {
//       id: 4,
//       title: "Holiday Packages",
//       desc: "Tailored holiday packages designed to create memorable travel experiences.",
//       Image : FlightTicket
//     },
//     {
//       id: 5,
//       title: "Holiday Packages",
//       desc: "Tailored holiday packages designed to create memorable travel experiences.",
//       Image : FlightTicket
//     },
//     {
//       id: 6,
//       title: "Holiday Packages",
//       desc: "Tailored holiday packages designed to create memorable travel experiences.",
//       Image : FlightTicket
//     },
//     {
//       id: 7,
//       title: "Holiday Packages",
//       desc: "Tailored holiday packages designed to create memorable travel experiences.",
//       Image : FlightTicket
//     },
//     {
//       id: 8,
//       title: "Holiday Packages",
//       desc: "Tailored holiday packages designed to create memorable travel experiences.",
//       Image : FlightTicket
//     },
//   ];

//   return (
//     <div>

//     </div>
//   )
// }

// export default Services

import FlightTicket from "../../assets/servicesAssets/flightTicket.jpg";
import TrainTicket from "../../assets/servicesAssets/train.jpg";
import Passport from "../../assets/servicesAssets/passport.jpg";
import Certificate from "../../assets/servicesAssets/certificate.jpg";
import Hajj from "../../assets/servicesAssets/hajj.jpg";
import Visa from "../../assets/servicesAssets/visa.jpg";
import Holiday from "../../assets/servicesAssets/holiday.jpg";
import Saudi from "../../assets/servicesAssets/saudi.jpg";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Flight Tickets",
      desc:
        "Book your flight tickets effortlessly with our platform, offering affordable pricing, real-time availability, and excellent customer service. We ensure that your travel experience starts smoothly, from booking to boarding.",
      Image: FlightTicket,
    },
    {
      id: 2,
      title: "Train Tickets",
      desc:
        "Convenient and affordable train ticket booking services that ensure a hassle-free journey. We provide real-time availability, competitive pricing, and easy access to tickets, making your travel experience seamless and comfortable.",
      Image: TrainTicket,
    },
    {
      id: 3,
      title: "Passport Services",
      desc:
        "Fast and reliable passport processing services, ensuring smooth and timely issuance. Whether you're applying for a new passport or renewing an existing one, we guarantee a stress-free experience with expert support throughout the process.",
      Image: Passport,
    },
    {
      id: 4,
      title: "Certificate Attestation",
      desc:
        "Our efficient certificate attestation services provide quick and reliable validation of your official documents. Whether for education, employment, or immigration purposes, we ensure your certificates are attested by authorized authorities for global acceptance.",
      Image: Certificate,
    },
    {
      id: 5,
      title: "Hajj-Umrah Services",
      desc:
        "Comprehensive Hajj and Umrah services, offering guided tours, transportation, and accommodation to ensure a fulfilling pilgrimage experience. We help you perform your religious duties with comfort, ease, and personalized support every step of the way.",
      Image: Hajj,
    },
    {
      id: 6,
      title: "Visiting Visa",
      desc:
        "Streamlined visiting visa services that help you obtain your travel visa quickly and hassle-free. Whether for tourism, business, or family visits, our experienced team ensures you have the required documentation and guidance for smooth travel.",
      Image: Visa,
    },
    {
      id: 7,
      title: "Holiday Packages",
      desc:
        "Tailored holiday packages designed to offer unforgettable travel experiences. From adventurous getaways to peaceful retreats, we provide customizable itineraries, expert recommendations, and the best deals to ensure your vacation is memorable and stress-free.",
      Image: Holiday,
    },
    {
      id: 8,
      title: "Saudi Visa Services",
      desc:
        "Efficient Saudi visa services designed to help you secure your visa for work, travel, or religious purposes. We assist with the application process, documentation, and ensure that you meet all necessary requirements for a smooth experience.",
      Image: Saudi,
    },
  ];

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
      className="px-8 pb-20 pt-32 "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold text-navyBlue mt-2 font-volkhov">
          Services
        </h1>
      </div>
      <div className="mb-12 xl:mx-20">
        <p className="text-sm text-justify lg:text-lg text-gray-800 leading-6">
          At City Smiles, we believe that exceptional service is the cornerstone
          of unforgettable journeys. With a passion for exploration and a
          commitment to excellence, we are dedicated to providing you with an
          unparalleled travel experience. Our mission is to craft seamless
          itineraries, ensuring every moment of your journey is filled with joy,
          wonder, and discovery. Let us be your trusted partner in creating
          memories that last a lifetime. Your adventure begins here.
        </p>
        <p className="text-sm text-justify lg:text-lg text-gray-800 mt-4  leading-6">
          With our team of experienced professionals, local expertise, and a
          deep love for travel, we&apos;re not just a tour agency; we&apos;re
          your gateway to the world&apos;s most incredible destinations. Explore
          with confidence and embark on extraordinary adventures, all with the
          unparalleled service that City Smiles is known for.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {services.map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-6 pb-20 rounded-3xl shadow-lg hover:shadow-xl hover:ring-2 hover:ring-flamingo_red transition-all ease-in-out duration-300 flex flex-col h-full"
          >
            <img
              src={item.Image}
              alt={item.title}
              className="object-cover h-48 w-full mb-10 rounded-xl"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              {item.title}
            </h2>
            <p className="text-gray-600 text-justify">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
