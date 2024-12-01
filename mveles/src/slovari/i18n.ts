// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Подключаем ресурсы (переводы)
const resources = {
  en: {
    translation: {
      transport_rent_1: "Transport rent 1",
      more_details: "More details",
      transport_rent_2: "Transport rent 2",
      transport_rent_3: "Transport rent 3",
      transport_rent_4: "Transport rent 4",
      lorem_text: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      header_title: "MarkVeles",
      transport_rent: "Transport rent",
      rental_description:
        "Rental of excavators, tractors, dump trucks, trucks around Belarus",
      cards_header: "Why us?",
      premium_quality_title: "Premium quality machines",
      premium_quality_desc: "Only the most efficient and productive machines",
      reliability_title: "Reliability guarantee",
      reliability_desc: "Qualitative results on time",
      masters_title: "Masters of our job",
      masters_desc: "Experienced and qualified team",
      profitable_prices_title: "Profitable prices",
      profitable_prices_desc: "Best price-quality ratio on the market",
      about_company_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium eleifend lectus, id maximus nulla vestibulum non. Nulla facilisi. Mauris justo elit, consequat ac mi a, dignissim sollicitudin tortor. Donec auctor, eros a scelerisque cursus, nisi metus scelerisque justo, quis consectetur ligula urna nec neque. Fusce aliquam iaculis risus, vel congue urna interdum id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      about_company_header: "about us",
    },
  },
  ru: {
    translation: {
      transport_rent_1: "Транспорт аренда 1",
      more_details: "Подробнее",
      transport_rent_2: "Транспорт аренда 2",
      transport_rent_3: "Транспорт аренда 3",
      transport_rent_4: "Транспорт аренда 4",
      lorem_text:
        "Равным образом реализация намеченных плановых заданий в агросфере.",
      header_title: "MarkVeles",
      transport_rent: "Аренда транспорта",
      rental_description:
        "Аренда экскаваторов, тракторов, самосвалов, грузовиков по всей Беларуси",
      cards_header: "Почему мы?",
      premium_quality_title: "Премиальная техника",
      premium_quality_desc:
        "Только самые эффективные и производительные машины",
      reliability_title: "Гарантия надежности",
      reliability_desc: "Качественные результаты в срок",
      masters_title: "Мастера своего дела",
      masters_desc: "Опытная и квалифицированная команда",
      profitable_prices_title: "Выгодные цены",
      profitable_prices_desc: "Лучшее соотношение цены и качества на рынке",
      about_company_text:
        "Равным образом реализация намеченных плановых заданий обучения кадров.Равным образом реализация намеченных плановых заданий обучения кадров.Равным образом реализация намеченных плановых заданий обучения кадров.Равным образом реализация намеченных плановых заданий обучения кадров.",
      about_company_header: "о компании",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
