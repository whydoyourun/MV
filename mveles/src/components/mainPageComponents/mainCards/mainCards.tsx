import React, { useState } from "react";
import { Card } from "antd";
import {
  TruckOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./MainCards.css";

interface CardItem {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const MainCards: React.FC = () => {
  const { t } = useTranslation();

  const cardItems: CardItem[] = [
    {
      icon: <TruckOutlined className="main-card-icon" />,
      titleKey: "premium_quality_title",
      descriptionKey: "premium_quality_desc",
    },
    {
      icon: <SafetyCertificateOutlined className="main-card-icon" />,
      titleKey: "reliability_title",
      descriptionKey: "reliability_desc",
    },
    {
      icon: <TeamOutlined className="main-card-icon" />,
      titleKey: "masters_title",
      descriptionKey: "masters_desc",
    },
    {
      icon: <DollarOutlined className="main-card-icon" />,
      titleKey: "profitable_prices_title",
      descriptionKey: "profitable_prices_desc",
    },
  ];

  // Держим состояние наклона отдельно для каждой карточки
  const [tilts, setTilts] = useState<{ x: number; y: number }[]>(
    new Array(cardItems.length).fill({ x: 0, y: 0 })
  );

  const handleMouseMove = (event: React.MouseEvent, index: number) => {
    const { clientX, clientY } = event;
    const { currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = ((clientX - centerX) / (width / 2)) * 18; // Наклон по оси X
    const y = ((clientY - centerY) / (height / 2)) * -12; // Наклон по оси Y

    setTilts((prevTilts) => {
      const newTilts = [...prevTilts];
      newTilts[index] = { x, y };
      return newTilts;
    });
  };

  const handleMouseLeave = (index: number) => {
    setTilts((prevTilts) => {
      const newTilts = [...prevTilts];
      newTilts[index] = { x: 0, y: 0 };
      return newTilts;
    });
  };

  return (
    <div className="main-cards">
      <div className="main-cards-header">
        <h2>{t("cards_header")}</h2>
      </div>
      <div className="main-cards-container">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            className="main-card"
            onMouseMove={(event) => handleMouseMove(event, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{
              transform: `rotateY(${tilts[index].x}deg) rotateX(${tilts[index].y}deg)`,
              transition: "transform 0.1s ease",
            }}
          >
            <div className="main-card-content">
              <div className="main-card-icon">{item.icon}</div>
              <div className="main-card-text">
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.descriptionKey)}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainCards;
