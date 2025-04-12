// HoverZoomImage.jsx
import React, { useRef, useState } from "react";
import img1 from "../assets/images/windowBlindsSinglePage/82_0.jpg";

const HoverZoomImage = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      ref={imageRef}
      onMouseMove={handleMouseMove}
      className="w-[400px] h-[400px] border overflow-hidden bg-no-repeat bg-cover cursor-zoom-in rounded-lg"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "200%", // Zoom level
        backgroundPosition,
      }}
      onMouseLeave={() => setBackgroundPosition("center")}
    />
  );
};

export default HoverZoomImage;
