import React from "react";
import "../styles.css";

interface HomePageImageProps {
  src: string;
  label: "Brand" | "Vision" | "Mission" | "Cocktails";
  position: React.CSSProperties;
  onClick: (label: string) => void;
}

// Generate a random float delay between 0s and 2s
const getRandomDelay = () => `${(Math.random() * 2).toFixed(2)}s`;

const HomePageImage: React.FC<HomePageImageProps> = ({ src, label, position, onClick }) => {
  const randomDelay = getRandomDelay(); // Random delay per SVG

  return (
    <div className="svg-container" style={position}>
      <img
        src={src}
        alt={label}
        className="svg-image"
        style={{
          ...position,
          "--float-delay": randomDelay, // Apply only delay
        } as React.CSSProperties}
        onClick={() => onClick(label)}
      />
    </div>
  );
};

export default HomePageImage;
