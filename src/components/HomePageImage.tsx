import React from "react";
import "../styles.css";
import Brand from "../assets/miju-sprites.svg";
import Vision from "../assets/miju-sprite-sunglasses.svg";
import MijuNumberTwo from "../assets/miju-sprite-leaves.svg";
import Cocktails from "../assets/miju-sprite-bartender.svg";

interface HomePageImageProps {
  contentType: HomePageContentType;
  position: React.CSSProperties;
  onClick: (contentType: HomePageContentType) => void;
}

const labels: {[key: string]: string} = {
  brand: "Brand",
  vision: "Vision",
  mijuNumberTwo: "Miju No. 2",
  cocktails: "Cocktails",
}

const sources = {
  brand: Brand,
  vision: Vision,
  mijuNumberTwo: MijuNumberTwo,
  cocktails: Cocktails,
}

const getRandomDelay = () => `${(Math.random() * 2).toFixed(2)}s`;

const HomePageImage: React.FC<HomePageImageProps> = ({ contentType, position, onClick }) => {
  const randomDelay = getRandomDelay();
  const label = labels[contentType]
  const src = sources[contentType]

  return (
    <div className="svg-container" style={position}>
      <img
        src={src}
        alt={label}
        className="svg-image"
        style={{
          ...position,
          "--float-delay": randomDelay,
        } as React.CSSProperties}
        onClick={() => onClick(contentType)}
      />
    </div>
  );
};

export default HomePageImage;
