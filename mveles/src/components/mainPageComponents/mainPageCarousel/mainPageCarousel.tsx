import React, { useState } from "react";
import { Carousel, Button, Flex } from "antd";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation для перевода
import "./MainPageCarousel.css";

import traktor1 from "../../../static/traktor1.png";
import DetailsModal from "../DetailModal/DetailModal";
import "../../../slovari/i18n";

type CarouselItem = {
  img: string;
  textKey: string; // Ключ для перевода текста
  subtextKey: string; // Ключ для перевода подзаголовка
};

type DetailsModalData = {
  text: string;
  subtext: string;
  img: string;
};

const MainPageCarousel: React.FC = () => {
  const { t } = useTranslation(); // Инициализируем функцию t для перевода
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DetailsModalData | null>(
    null
  );

  // Массив с элементами карусели, каждый элемент имеет ключи для перевода
  const carouselItems: CarouselItem[] = [
    {
      img: traktor1,
      textKey: "transport_rent_1",
      subtextKey: "lorem_text",
    },
    {
      img: traktor1,
      textKey: "transport_rent_2",
      subtextKey: "lorem_text",
    },
    {
      img: traktor1,
      textKey: "transport_rent_3",
      subtextKey: "lorem_text",
    },
    {
      img: traktor1,
      textKey: "transport_rent_4",
      subtextKey: "lorem_text",
    },
  ];

  const handleOpenModal = (item: CarouselItem) => {
    const modalData: DetailsModalData = {
      text: t(item.textKey),
      subtext: t(item.subtextKey),
      img: item.img,
    };
    setSelectedItem(modalData);
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
                  <div className="carousel-topic">{t(item.textKey)}</div>
                  <div className="carousel-subtext">{t(item.subtextKey)}</div>
                  <Button
                    color="primary"
                    type="primary"
                    size="large"
                    className="carousel-button"
                    onClick={() => handleOpenModal(item)}
                  >
                    {t("more_details")} {/* Перевод текста кнопки */}
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
