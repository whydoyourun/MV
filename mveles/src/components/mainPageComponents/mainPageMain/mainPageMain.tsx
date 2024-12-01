import React from "react";
import MainPageCarousel from "../mainPageCarousel/mainPageCarousel";
import MainCards from "../mainCards/mainCards";
import AboutUs from "../aboutUs/aboutUs";
import BottomCarouselCards from "../BottomCarouselCards/BottomCarouselCards";

import "./mainPageMain";

const MainPageMain: React.FC = () => {
  return (
    <div className="main-container">
      <MainPageCarousel />
      <MainCards />
      <AboutUs />
      <BottomCarouselCards />
    </div>
  );
};

export default MainPageMain;
