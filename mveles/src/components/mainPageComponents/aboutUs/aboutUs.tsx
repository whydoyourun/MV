import React from "react";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation для перевода
import aboutUs from "../../../static/aboutUs.png";
import "./aboutUs.css";

const AboutUs: React.FC = () => {
  const { t } = useTranslation(); // Инициализируем функцию t для получения переведенных строк

  return (
    <div className="aboutUs-container">
      <div className="header-about-company">{t("about_company_header")}</div>
      <div className="content">
        <div className="text">{t("about_company_text")}</div>
        <img
          className="aboutUs-img"
          src={aboutUs}
          alt={t("about_company_header")}
        />
      </div>
    </div>
  );
};

export default AboutUs;
