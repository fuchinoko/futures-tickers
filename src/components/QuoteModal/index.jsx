import React from "react";
import { Modal } from "antd";

const QuoteModal = ({ selectedQuote, handleClose, open }) => (
  <Modal open={open} title="Котировка" onCancel={handleClose} footer={null}>
    <div>
      {Object.entries(selectedQuote).map(([key, value], idx) => (
        <div key={idx}>
          {key}: {value}
        </div>
      ))}
    </div>
  </Modal>
);

export default QuoteModal;
