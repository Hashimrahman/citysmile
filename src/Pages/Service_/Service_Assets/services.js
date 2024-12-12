// const services = [
//     {
//         id: 1,
//         title: 'Calculated Weather',
//         desc: 'Built Wicket longer admire do barton vanity itself do in it.',
//         Image: './service_Assets/flight.png'
//     },
//     {
//         id: 2,
//         title: 'Calculated Weather',
//         desc: 'Built Wicket longer admire do barton vanity itself do in it.',
//         Image: './service_Assets/flight.png'
//     },
//     {
//         id: 3,
//         title: 'Calculated Weather',
//         desc: 'Built Wicket longer admire do barton vanity itself do in it.',
//         Image: './service_Assets/flight.png'
//     },
//     {
//         id: 4,
//         title: 'Calculated Weather',
//         desc: 'Built Wicket longer admire do barton vanity itself do in it.',
//         Image: './service_Assets/flight.png'
//     },
// ]




import { FaPlane, FaUmbrellaBeach } from "react-icons/fa";
import FlightImage from "./flight.png";
import { GiCommercialAirplane, GiPassport } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";



const services = [
  {
    id: 1,
    title: "Flight Tickets",
    desc: "Seamless flight bookings with competitive prices and excellent customer support.",
    Icon: GiCommercialAirplane,
  },
  {
    id: 2,
    title: "Passport Services",
    desc: "Fast and reliable passport processing services for your travel needs.",
    Icon: GiPassport,
  },
  {
    id: 3,
    title: "Certificate Attestation",
    desc: "Efficient and trusted certificate attestation for all your official documents.",
    Icon: PiCertificate,
  },
  {
    id: 4,
    title: "Holiday Packages",
    desc: "Tailored holiday packages designed to create memorable travel experiences.",
    Icon: FaUmbrellaBeach,
  }
];
export default services