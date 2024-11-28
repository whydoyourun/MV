import React, { useState } from "react";
import { Carousel, Button, Flex } from "antd";
import "./MainPageCarousel.css";

import traktor1 from "../../../static/traktor1.png";
import DetailsModal from "../DetailModal/DetailModal";

const MainPageCarousel: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    text: string;
    subtext: string;
    img: string;
  } | null>(null);

  const carouselItems = [
    {
      img: traktor1,
      text: "Transport rent1",
      subtext: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      img: traktor1,
      text: "Transport rent2",
      subtext: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      img: traktor1,
      text: "Transport rent3",
      subtext: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
      img: traktor1,
      text: "Transport rent4",
      subtext: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
  ];

  const handleOpenModal = (item: (typeof carouselItems)[0]) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Flex vertical gap="middle">
          <Carousel arrows draggable speed={1000} className="carousel">
            {carouselItems.map((item, index) => (
              <div className="carousel-item" key={index}>
                <div className="carousel-content">
                  <div className="carousel-topic">{item.text}</div>
                  <div className="carousel-subtext">{item.subtext}</div>
                  <Button
                    color="primary"
                    type="primary"
                    size="large"
                    className="carousel-button"
                    onClick={() => handleOpenModal(item)}
                  >
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
        </Flex>
      </div>

      <DetailsModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        data={selectedItem}
      />
    </div>
  );
};

export default MainPageCarousel;
