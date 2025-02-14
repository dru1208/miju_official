import React from "react";
import "../styles.css";

interface HomePageLogoProps {
  src: string;
}

const HomePageLogo: React.FC<HomePageLogoProps> = ({ src }) => {
  return (
    <div className="home-page-logo">
      <img src={src} alt="Home Page Logo" className="logo-image" />
    </div>
  );
};

export default HomePageLogo;
