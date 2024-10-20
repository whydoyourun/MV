import React, { useState } from "react";
import { Layout, notification } from "antd";
import "./MainPageTopbar.css";

const handlePhoneNumberClick = () => {
  const phoneNumber = "+375 (33) 540-72-24";
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      notification.success({
        message: "Номер успешно скопирован!",
        placement: "topRight",
        duration: 2.5,
      });
    })
    .catch((err) => {
      console.error("Ошибка при копировании текста: ", err);
    });
};

const { Header } = Layout;

const MainPageHeader: React.FC = () => {
  const [language, setLanguage] = useState<string>("RU");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <Header className="header">
      <div className="language">
        <span
          className={`language-option ${language === "EN" ? "active" : ""}`}
          onClick={() => handleLanguageChange("EN")}
        >
          ENG
        </span>
        /
        <span
          className={`language-option ${language === "RU" ? "active" : ""}`}
          onClick={() => handleLanguageChange("RU")}
        >
          RU
        </span>
      </div>
      <div
        className="phone-number"
        onClick={handlePhoneNumberClick}
        style={{ cursor: "pointer" }}
      >
        +375 (33) 540-72-24
      </div>
      <div className="site-title">markveles.by</div>
    </Header>
  );
};

export default MainPageHeader;
