import React, { useEffect } from "react";
import "../styles.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
}

const mijuNumberTwoContent = "Discover Miju No.2, a premium rice spirit inspired by centuries-old techniques from the history of Vietnam. Distilled with precision and care, Miju carries the delicate fragrance of rice and a subtle hint of coconut, offering a perfect base for crafting intriguing, dessert-inspired cocktails that are as indulgent as they are unforgettable. For a familiar favorite, try an espresso martini, 2oz Miju, ½ oz coffee liqueur, 1oz espresso, 1/2oz simple syrup and shake with ice until cold."

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
          {content === "mijuNumberTwo" && mijuNumberTwoContent}
          {content === "Cocktails" && "Stay tuned for our upcoming collection of cocktails you can make with your next Miju bottle"}
        </p>
      </div>
    </div>
  );
};

export default HomePageModal;
