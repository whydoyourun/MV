import React from "react";
import { Card, Row, Col, Typography } from "antd";
import "./BottomCarouselCards.css"; // Импортируем CSS для стилизации

import traktor1 from "../../../static/traktor1.png";

const ProductCards: React.FC = () => {
  const products = [
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
  ];

  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <Card key={product.id} hoverable style={{ margin: "16px" }}>
          <Row gutter={[4, 8]}>
            <Col span={8}>
              <img
                alt={product.title}
                src={product.imageUrl}
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={16}>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Typography.Title level={5}>{product.title}</Typography.Title>
                  <Typography.Text strong className="bottom-carousel-price">
                    {product.price}
                  </Typography.Text>
                </Col>

                <Col span={24}>
                  <Typography.Paragraph>
                    {product.description}
                  </Typography.Paragraph>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default ProductCards;
