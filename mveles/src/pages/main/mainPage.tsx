import React from "react";
import MainPageTopbar from "../../components/mainPageComponents/mainPageTopbar/mainPageTopbar";
import MainPageHeader from "../../components/mainPageComponents/mainPageHeader/mainPageHeader";
import MainPageFooter from "../../components/mainPageComponents/mainPageFooter/mainPageFooter";
import MainPageMain from "../../components/mainPageComponents/mainPageMain/mainPageMain";

import "./mainPage";

const MainPage: React.FC = () => {
  return (
    <>
      <MainPageTopbar />
      <MainPageHeader />
      <MainPageMain />
      <MainPageFooter />
    </>
  );
};

export default MainPage;
