import React from "react";
import Hero from "../Hero/Hero";
import AboutLanding from "../LandingAbout/About";
import Services from "../Service_/Services";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Benefits from "../../components/Benefits/Benefits";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutLanding />
      <Services />
      <GetInTouch />
      <Benefits />
    </>
  );
};

export default Home;
