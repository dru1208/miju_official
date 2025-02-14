import React, { useEffect } from "react";
import "../styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const HomePageModal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <h2>{content}</h2>
        <p>
          {content === "Brand" && "We are a forward-thinking brand with innovation at our core."}
          {content === "Vision" && "Our vision is to revolutionize the industry with cutting-edge solutions."}
          {content === "Mission" && "We strive to deliver the best services and products to our customers."}
          {content === "Cocktails" && "Stay tuned for our upcoming collection of cocktails you can make with your next Miju bottle"}
        </p>
      </div>
    </div>
  );
};

export default HomePageModal;
