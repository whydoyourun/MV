import React from "react";
import { Layout, Card } from "antd";
import "./mainPageHeader.css";

const { Header } = Layout;

const MainPageHeader: React.FC = () => {
  return (
    <Header className="custom-header">
      <div className="header-title">MarkVeles</div>
      <div className="info-container">
        <Card className="info-card">
          <div className="header-subtitle">Transport rent</div>
          <p className="info-text">
            rental of excavators, tractors, dump trucks, trucks around the
            Belarus
          </p>
        </Card>
      </div>
    </Header>
  );
};

export default MainPageHeader;
