import React from "react";
import { Modal, Typography, Descriptions } from "antd";

const { Title, Paragraph } = Typography;

interface DetailsModalProps {
  visible: boolean;
  onClose: () => void;
  data: {
    text: string;
    subtext: string;
    img: string;
  } | null;
}

const DetailModal: React.FC<DetailsModalProps> = ({
  visible,
  onClose,
  data,
}) => {
  if (!data) return null;

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="details-modal"
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={data.img}
          alt={data.text}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        <Title level={3}>{data.text}</Title>
        <Paragraph>{data.subtext}</Paragraph>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            efficitur зхкурсед.
          </Descriptions.Item>
          <Descriptions.Item label="Price">From $100/day</Descriptions.Item>
          <Descriptions.Item label="Availability">
            Available now
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Modal>
  );
};

export default DetailModal;
