import React from "react";
import { Carousel, Button } from "antd";
import "./MainPageCarousel.css";

import traktor1 from "../../../static/traktor1.png";

const MainPageCarousel: React.FC = () => {
  const carouselItems = [
    {
      img: traktor1,
      text: "Transport rent1",
      subtext: "lorem ipsum dolor sit amet",
    },
    {
      img: traktor1,
      text: "Transport rent2",
      subtext: "lorem ipsum dolor sit amet",
    },
    {
      img: traktor1,
      text: "Transport rent3",
      subtext: "lorem ipsum dolor sit amet",
    },
    {
      img: traktor1,
      text: "Transport rent4",
      subtext: "lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Carousel arrows draggable speed={1000} className="carousel">
          {carouselItems.map((item, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-content">
                <div className="carousel-topic">{item.text}</div>
                <div className="carousel-subtext">{item.subtext}</div>
                <Button type="primary" className="c arousel-button">
                  More details
                </Button>
              </div>
              <img
                src={item.img}
                alt={`Изображение ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MainPageCarousel;
