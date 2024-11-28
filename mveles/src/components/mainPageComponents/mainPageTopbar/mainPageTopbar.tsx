import React from "react";
import { Layout, notification } from "antd";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation для перевода
import "./MainPageTopbar.css";

const handlePhoneNumberClick = () => {
  const phoneNumber = "+375 (33) 540-72-24";
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      notification.success({
        message: "номер успешно скопирован",
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
  const { i18n } = useTranslation(); // Получаем доступ к объекту i18n

  // Функция для смены языка
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang.toLowerCase()); // Смена языка через i18n
  };

  return (
    <Header className="header">
      <div className="language">
        <span
          className={`language-option ${
            i18n.language === "en" ? "active" : ""
          }`}
          onClick={() => handleLanguageChange("EN")}
        >
          ENG
        </span>
        /
        <span
          className={`language-option ${
            i18n.language === "ru" ? "active" : ""
          }`}
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
