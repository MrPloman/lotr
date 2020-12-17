import React from "react";
import back from "../../assets/videos/background.mp4";
import nature from "../../assets/videos/nature.mp4";
import {useLocation} from "react-router-dom";
import "./BackgroundVideoComponent.scss";

export const BackgroundVideoComponent = () => {
  const loca = useLocation();

  let videoSource;
  switch (loca.pathname) {
    case "/":
      videoSource = back;
      break;
    case "/home":
      videoSource = back;
      break;
    case "/characters":
      videoSource = nature;
      break;

    default:
      break;
  }

  return (
    <>
      <video
        className="background animate__animated animate__fadeIn"
        autoPlay
        loop
        muted
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </>
  );
};
