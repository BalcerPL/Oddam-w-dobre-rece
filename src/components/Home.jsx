import React from "react";

// IMPORT COMPONENTS
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import FourSimpleSteps from "./FourSimpleSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

//IMPORT SCSS
import "../sass/home.scss";
import "../sass/main.scss";




export default function Home() {
  return (
    <div className="container">
      <HomeHeader/>
      <HomeThreeColumns/>
      <FourSimpleSteps/>
      <AboutUs/>
      <WhoWeHelp/>
      <Contact />
    </div>
  );
}
