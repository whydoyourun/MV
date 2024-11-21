import React from "react";
import aboutUs from "../../../static/aboutUs.png";

import "./aboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <div className="aboutUs-container">
      <div className="header-about-company">about company</div>
      <div className="content">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eleifend lectus, id maximus nulla vestibulum non. Nulla facilisi.
          Mauris justo elit, consequat ac mi a, dignissim sollicitudin tortor.
          Donec auctor, eros a scelerisque cursus, nisi metus scelerisque justo,
          quis consectetur ligula urna nec neque. Fusce aliquam iaculis risus,
          vel congue urna interdum id. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae.
        </div>
        <img className="aboutUs-img" src={aboutUs} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
