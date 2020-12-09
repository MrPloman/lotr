import React from "react";
import background from "../assets/videos/background.mp4";
import "../index.scss";

export const BackgroundVideoComponent = () => {
  const videoSource = background;
  return (
    <>
      <video className="background" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </>
  );
};
