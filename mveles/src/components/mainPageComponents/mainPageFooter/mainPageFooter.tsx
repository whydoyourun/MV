import React from "react";
import "./mainPageFooter.css";
import { Layout, Row, Col } from "antd";

const MainPageFooter: React.FC = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDKi_KEnRUy_O-l9k7A0qiMJAN4FfAv20c&q=55.175585757861604,28.61480299374473"
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
        <Layout className="transparent-layout">
          <Row justify="space-between" align="middle">
            <Col span={4}>
              <strong>MarkVeles</strong>
            </Col>
            <Col span={12} style={{ textAlign: "center" }}>
              <p style={{ margin: 0 }}>some custom text</p>
            </Col>
            <Col span={4} style={{ textAlign: "right" }}>
              <p style={{ margin: 0 }}>+7 (123) 456-78-90 © 2024</p>
            </Col>
          </Row>
        </Layout>
      </div>
    </>
  );
};

export default MainPageFooter;
