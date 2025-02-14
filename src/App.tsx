import React, { useState } from "react";
import HomePageImage from "./components/HomePageImage";
import HomePageModal from "./components/HomePageModal";
import HomePageLogo from "./components/HomePageLogo";
import "./styles.css";

import Brand from "./assets/miju-sprites.svg";
import Vision from "./assets/miju-sprite-sunglasses.svg";
import MijuNumberTwo from "./assets/miju-sprite-leaves.svg";
import Cocktails from "./assets/miju-sprite-bartender.svg";
import LogoSvg from "./assets/miju-logo.svg";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (content: string) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="home-page">
      <HomePageLogo src={LogoSvg} />
      <HomePageImage
        src={Brand}
        contentType="brand"
        position={{ top: "10%", left: "15%" }}
        onClick={handleOpenModal}
      />
      <HomePageImage
        src={Vision}
        contentType="vision"
        position={{ top: "30%", right: "20%" }}
        onClick={handleOpenModal}
      />
      <HomePageImage
        src={MijuNumberTwo}
        contentType="mijuNumberTwo"
        position={{ bottom: "20%", left: "35%" }}
        onClick={handleOpenModal}
      />
      <HomePageImage
        src={Cocktails}
        contentType="cocktails"
        position={{ bottom: "5%", right: "10%" }}
        onClick={handleOpenModal}
      />
      <HomePageModal isOpen={modalOpen} onClose={handleCloseModal} content={modalContent} />
    </div>
  );
};

export default App;
