import React from "react";

import "./mainPageFooter.css";

const MainPageFooter: React.FC = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDKi_KEnRUy_O-l9k7A0qiMJAN4FfAv20c&q=55.175585757861604, 28.61480299374473"
          style={{
            border: 0,
            width: "100%",
            height: "350px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer"></div>
    </>
  );
};

export default MainPageFooter;
