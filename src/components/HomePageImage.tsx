import React from "react";
import "../styles.css";

interface HomePageImageProps {
  src: string;
  label: "Brand" | "Vision" | "Mission" | "Cocktails";
  position: React.CSSProperties;
  onClick: (label: string) => void;
}

const HomePageImage: React.FC<HomePageImageProps> = ({ src, label, position, onClick }) => {
  return (
    <div className="svg-container" style={position}>
      <img
        src={src}
        alt={label}
        className="svg-image"
        style={position} // Dynamic positioning
        onClick={() => onClick(label)}
      />
    </div>
  );
};

export default HomePageImage;