import React from "react";
import MainPageCarousel from "../mainPageCarousel/mainPageCarousel";
import MainCards from "../mainCards/mainCards";
import AboutUs from "../aboutUs/aboutUs";
import BottomTransportCarousel from "../BottomTransportCarousel/BottomTransportCarousel";

import "./mainPageMain";

const MainPageMain: React.FC = () => {
  return (
    <div className="main-container">
      <MainPageCarousel />
      <MainCards />
      <BottomTransportCarousel />
      <AboutUs />
    </div>
  );
};

export default MainPageMain;
