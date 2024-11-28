import React from "react";
import { Card } from "antd";
import {
  TruckOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation для перевода
import "./MainCards.css";

interface CardItem {
  icon: React.ReactNode;
  titleKey: string; // Ключ для перевода заголовка
  descriptionKey: string; // Ключ для перевода описания
}

const MainCards: React.FC = () => {
  const { t } = useTranslation(); // Инициализируем функцию t для получения переведенных строк

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

  return (
    <div className="main-cards">
      <div className="main-cards-header">
        <h2>{t("cards_header")}</h2>
      </div>
      <div className="main-cards-container">
        {cardItems.map((item, index) => (
          <Card key={index} className="main-card">
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
