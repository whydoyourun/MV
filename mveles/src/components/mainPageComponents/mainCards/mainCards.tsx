import React from "react";
import { Card } from "antd";
import {
  TruckOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./MainCards.css";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MainCards: React.FC = () => {
  const cardItems: CardItem[] = [
    {
      icon: <TruckOutlined className="main-card-icon" />,
      title: "Premium quality machines",
      description: "only most efficient and productive machines",
    },
    {
      icon: <SafetyCertificateOutlined className="main-card-icon" />,
      title: "Reliability guarantee",
      description: "Qualitatively result on time",
    },
    {
      icon: <TeamOutlined className="main-card-icon" />,
      title: "Masters of our job",
      description: "Experienced and Qualified team",
    },
    {
      icon: <DollarOutlined className="main-card-icon" />,
      title: "Profitable prices",
      description: "Best price-quality ratio on the market",
    },
  ];

  return (
    <div className="main-cards">
      <div className="main-cards-header">
        <h2>why us ?</h2>
      </div>
      <div className="main-cards-container">
        {cardItems.map((item, index) => (
          <Card key={index} className="main-card">
            <div className="main-card-content">
              <div className="main-card-icon">{item.icon}</div>
              <div className="main-card-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainCards;
