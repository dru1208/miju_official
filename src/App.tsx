import React, { useState } from "react";
import HomePageImage from "./components/HomePageImage";
import HomePageModal from "./components/HomePageModal";
import HomePageLogo from "./components/HomePageLogo";
import "./styles.css";
import LogoSvg from "./assets/miju-logo.svg";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState<HomePageContentType>();

  const handleOpenModal = (content: HomePageContentType) => {
    setModalContentType(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="home-page">
      <HomePageLogo src={LogoSvg} />
      <HomePageImage
        contentType="brand"
        position={{ top: "10%", left: "15%" }}
        onClick={handleOpenModal}
      />
      <HomePageImage
        contentType="vision"
        position={{ top: "25%", right: "20%" }}
        onClick={handleOpenModal}
      />
      <HomePageImage
        contentType="mijuNumberTwo"
        position={{ bottom: "20%", left: "35%" }}
        onClick={handleOpenModal}
      />
      <HomePageImage
        contentType="cocktails"
        position={{ bottom: "5%", right: "10%" }}
        onClick={handleOpenModal}
      />
      {!!modalContentType && <HomePageModal isOpen={modalOpen} onClose={handleCloseModal} contentType={modalContentType} />}
    </div>
  );
};

export default App;
