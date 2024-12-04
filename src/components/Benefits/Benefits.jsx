import React from "react";
import { VscPercentage } from "react-icons/vsc";

const Benefits = () => {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="w-2/3 shadow-lg py-8 rounded-3xl flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-navyBlue my-2 font-roboto text-center">
          Why Choose Us
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 py-5 flex flex-col items-center justify-center">
            <VscPercentage className="text-4xl text-blue-900" />
            <p className="opacity-75 ">100 % Commitment</p>
          </div>
          <div className="w-full md:w-1/4 py-5 flex flex-col items-center justify-center">
            <VscPercentage className="text-4xl text-blue-900" />
            <p className="opacity-75">100 % Commitment</p>
          </div>
          <div className="w-full md:w-1/4 py-5 flex flex-col items-center justify-center">
            <VscPercentage className="text-4xl text-blue-900" />
            <p className="opacity-75">100 % Commitment</p>
          </div>
          <div className="w-full md:w-1/4 py-5 flex flex-col items-center justify-center">
            <VscPercentage className="text-4xl text-blue-900" />
            <p className="opacity-75">100 % Commitment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
