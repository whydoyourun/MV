import React from "react";
import { Carousel, Card, Typography, Row, Col } from "antd";
import "./BottomTransportCarousel.css";

const { Title, Text } = Typography;

const items = [
  {
    img: "https://via.placeholder.com/150", // Замените на URL изображения трактора
    title: "Малогабаритный трактор BELARUS-422",
    price: "420 руб/смена",
    description:
      "BELARUS-422 является сельскохозяйственным трактором, предназначенным для выполнения различных задач на фермах, полях и других сельскохозяйственных участках.",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Малогабаритный трактор BELARUS-422",
    price: "420 руб/смена",
    description:
      "BELARUS-422 является сельскохозяйственным трактором, предназначенным для выполнения различных задач на фермах, полях и других сельскохозяйственных участках.",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Малогабаритный трактор BELARUS-422",
    price: "420 руб/смена",
    description:
      "BELARUS-422 является сельскохозяйственным трактором, предназначенным для выполнения различных задач на фермах, полях и других сельскохозяйственных участках.",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Малогабаритный трактор BELARUS-422",
    price: "420 руб/смена",
    description:
      "BELARUS-422 является сельскохозяйственным трактором, предназначенным для выполнения различных задач на фермах, полях и других сельскохозяйственных участках.",
  },
];

const BottomTransportCarousel: React.FC = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        dots
        autoplay
        slidesToShow={1}
        slidesToScroll={1}
        adaptiveHeight
        className="custom-carousel"
      >
        {Array.from({ length: Math.ceil(items.length / 2) }, (_, rowIndex) => (
          <Row gutter={[16, 16]} key={rowIndex} justify="center">
            {items.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
              <Col span={12} key={index}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={item.title}
                      src={item.img}
                      style={{ height: 150, objectFit: "cover" }}
                    />
                  }
                  className="transport-card"
                >
                  <Title level={5}>{item.title}</Title>
                  <Text strong>{item.price}</Text>
                  <p>{item.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Carousel>
    </div>
  );
};

export default BottomTransportCarousel;
