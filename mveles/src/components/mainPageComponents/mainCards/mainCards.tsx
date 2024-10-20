import React from "react";
import { Card } from "antd";
import "./MainCards.css";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MainCards: React.FC = () => {
  const cardItems: CardItem[] = [
    {
      icon: <i className="fas fa-cog"></i>,
      title: "Premium quality machines",
      description: "only most efficient and productive machines",
    },
    {
      icon: <i className="fas fa-shield-alt"></i>,
      title: "Reliability guarantee",
      description: "Qualitatively result on time",
    },
    {
      icon: <i className="fas fa-graduation-cap"></i>,
      title: "Masters of our job",
      description: "Experienced and Qualified team",
    },
    {
      icon: <i className="fas fa-dollar-sign"></i>,
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
