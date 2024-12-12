import services from "./Service_Assets/services";
import bgImage from "../../assets/bg.png";

const Services = () => {
  return (
    <div className="px-8 mb-20 md:mb-32 relative mt-36 ">
      <img
        src={bgImage}
        alt="background decor"
        className="absolute top-0 right-0 -z-10"
      />
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-navyBlue mt-2 font-volkhov ">
          We Offer The Best Services
        </h1>
      </div>

      {/* Services Flexbox */}
      <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl">
        {services.map((item) => (
          <div
            key={item.id}
            className="relative service-up rounded-3xl w-full sm:w-[45%]  lg:w-[22%] shadow-lg md:shadow-none transition-all transform md:hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-in-out duration-500 "
          >
            <div className="bg-white w-full p-6 rounded-3xl ">
              {/* Image */}
              <div className="mb-4 text-5xl text-center text-navyBlue flex justify-center">
                <item.Icon /> {/* Render React Icon */}
              </div>
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h2>
              {/* Description */}
              <h4 className="text-gray-600 text-center h-full">
                {item.desc}
              </h4>
            </div>
            {/* <div className="absolute -bottom-10 -left-10 md:w-28 md:h-28 bg-flamingo_red -z-10 service-bottom rounded-tl-3xl rounded-br-xl opacity-75 transition-all ease-in-out duration-300"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
