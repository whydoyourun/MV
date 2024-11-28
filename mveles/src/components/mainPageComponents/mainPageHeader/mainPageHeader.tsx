import React from "react";
import { Layout, Card } from "antd";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation для перевода
import "../../../slovari/i18n";
import "./mainPageHeader.css";

const { Header } = Layout;

const MainPageHeader: React.FC = () => {
  const { t } = useTranslation(); // Инициализируем функцию t для получения переведенных строк

  return (
    <Header className="custom-header">
      <div className="header-title">{t("header_title")}</div>{" "}
      <div className="info-container">
        <Card className="info-card">
          <div className="header-subtitle">{t("transport_rent")}</div>{" "}
          <p className="info-text">{t("rental_description")}</p>{" "}
        </Card>
      </div>
    </Header>
  );
};

export default MainPageHeader;
