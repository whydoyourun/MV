import React from "react";
import { Card, Row, Col, Typography, Carousel } from "antd";
import "./BottomCarouselCards.css"; // Импортируем CSS для стилизации

import traktor1 from "../../../static/traktor1.png";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

const ProductCards: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 2,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 3,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 4,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 4,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 4,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 4,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
    {
      id: 4,
      title: "Малогабаритный трактор BELARUS-422",
      price: "420 руб/смена",
      description:
        "BELARUS-422 предназначен для использования с различными навесными и прицепными машинами для выполнения земледельческих задач.",
      imageUrl: traktor1,
    },
  ];

  // Функция для разбивки массива на подмассивы по 4 элемента
  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const productChunks = chunkArray(products, 4);

  return (
    <div className="product-cards-container">
      <Col span={24}>
        <Carousel draggable autoplay speed={1200}>
          {productChunks.map((chunk, index) => (
            <div key={index} className="carousel-slide">
              <Col className="carousel-item-wrapper" span={24}>
                <Row gutter={[16, 16]} justify="center">
                  {chunk.map((product) => (
                    <Col key={product.id} span={12}>
                      <Card hoverable style={{ margin: "8px" }}>
                        <Row gutter={[16, 16]}>
                          <Col span={8}>
                            <img
                              className="no-select"
                              alt={product.title}
                              src={product.imageUrl}
                              style={{ width: "100%" }}
                            />
                          </Col>
                          <Col span={16}>
                            <Typography.Title className="no-select" level={5}>
                              {product.title}
                            </Typography.Title>
                            <Typography.Text
                              strong
                              className="bottom-carousel-price no-select"
                            >
                              {product.price}
                            </Typography.Text>
                            <Typography.Paragraph className="no-select">
                              {product.description}
                            </Typography.Paragraph>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </div>
          ))}
        </Carousel>
      </Col>
    </div>
  );
};

export default ProductCards;
