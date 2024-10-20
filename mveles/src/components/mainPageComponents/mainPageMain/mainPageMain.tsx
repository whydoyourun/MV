import React from "react";
import MainPageCarousel from "../mainPageCarousel/mainPageCarousel";
import MainCards from "../mainCards/mainCards";

import "./mainPageMain";

const MainPageMain: React.FC = () => {
  return (
    <div className="main-container">
      <MainPageCarousel />
      <MainCards />
    </div>
  );
};

export default MainPageMain;
