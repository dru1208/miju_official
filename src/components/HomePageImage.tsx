import React from "react";
import "../styles.css";

type ContentType = "brand" | "vision" | "mijuNumberTwo" | "cocktails";

interface HomePageImageProps {
  src: string;
  contentType: ContentType;
  position: React.CSSProperties;
  onClick: (label: string) => void;
}

const labels: {[key: string]: string} = {
  brand: "Brand",
  vision: "Vision",
  mijuNumberTwo: "Miju No. 2",
  cocktails: "Cocktails",
}

const getRandomDelay = () => `${(Math.random() * 2).toFixed(2)}s`;

const HomePageImage: React.FC<HomePageImageProps> = ({ src, contentType, position, onClick }) => {
  const randomDelay = getRandomDelay();
  const label = labels[contentType]

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
        onClick={() => onClick(label)}
      />
    </div>
  );
};

export default HomePageImage;
