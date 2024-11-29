import React from "react";
import logo from "../../assets/logo.png";

const AboutLanding = () => {
  return (
    <div className="mx-8 md:mx-44 my-20">
      <h1 className="text-3xl md:text-5xl text-navyBlue mt-2 font-volkhov ">
        <span className="font-bold font-volkhov">Service &nbsp;Beyond</span>
        <br /> Boundaries
      </h1>
      <div className=" mt-8 flex flex-wrap flex-row-reverse md:flex-row">
        <div className="md:w-1/2">
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            placeat minus voluptate magni, quaerat numquam iusto labore. Ab at
            ea culpa fugiat corrupti numquam commodi!
          </p>
          <br />
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            vitae alias neque harum dolore soluta assumenda, nam error iusto,
            omnis unde ad iste ea nostrum facilis. Eveniet eaque ex atque unde
            fugiat deserunt beatae, id praesentium voluptates fugit, suscipit
            eius. Architecto provident aliquam aspernatur atque dolor et?
            Temporibus laborum fugiat unde ducimus quo corrupti accusamus, in
            impedit, at explicabo voluptatem voluptate! Aliquid asperiores,
            tempora mollitia adipisci, consequatur minus veritatis beatae, quia
            fugiat nisi fuga repellat.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center b">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
