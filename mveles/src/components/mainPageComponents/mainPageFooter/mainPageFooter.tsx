import React from "react";

import "./mainPageFooter.css";
import { Layout } from "antd";

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
      <div className="footer">
        <Layout
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 50px",
            background: "#f0f2f5",
          }}
        >
          <div>
            <strong>MarkVeles</strong>
          </div>

          <div>
            <p style={{ margin: 0 }}>Your custom text goes here</p>
          </div>

          <div>
            <p style={{ margin: 0 }}>+7 (123) 456-78-90 © 2024</p>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default MainPageFooter;
