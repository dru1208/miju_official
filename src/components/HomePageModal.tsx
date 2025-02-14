import React, { useEffect } from "react";
import "../styles.css";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentType: HomePageContentType;
}

const brandContent = "Miju Spirits is a small business created by two individuals passionate about the diverse world of liquor throughout Asian culture. In order to bring those flavours to Canada, our founders have brought back recipes to recreate different spirits locally. We're hoping to bring the distinct dimensions of asian liquors to Canada in celebrating their cultural roots."
const visionContent = "Our mission is to celebrate and modernize the rich, diverse flavors and traditions of Asia through our unique spirits and liquors. We aim to introduce authentic Asian flavor profiles in an approachable and accessible way to a global audience, creating memorable experiences that honor cultural heritage while pushing the boundaries of modern taste."
const mijuNumberTwoContent = "Discover Miju No.2, a premium rice spirit inspired by centuries-old techniques from the history of Vietnam. Distilled with precision and care, Miju carries the delicate fragrance of rice and a subtle hint of coconut, offering a perfect base for crafting intriguing, dessert-inspired cocktails that are as indulgent as they are unforgettable."
const cocktailsContent = "Stay tuned for our upcoming collection of cocktails you can make with your next Miju bottle"

const contentNames = {
  brand: "Brand",
  vision: "Vision",
  mijuNumberTwo: "Miju No. 2",
  cocktails: "Cocktails",
}

const contents = {
  brand: brandContent,
  vision: visionContent,
  mijuNumberTwo: mijuNumberTwoContent,
  cocktails: cocktailsContent,
}

const Header = styled.h2`
  text-align: center;
`

const Paragraph = styled.p`
  text-align: start;
`

const HomePageModal: React.FC<ModalProps> = ({ isOpen, onClose, contentType }) => {
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

  const name = contentNames[contentType]
  const content = contents[contentType]

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>
        <Header>{name}</Header>
        <Paragraph>{content}</Paragraph>
      </div>
    </div>
  );
};

export default HomePageModal;
