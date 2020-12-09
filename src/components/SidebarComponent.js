import React from "react";
import "../styles/SidebarComponent.scss";
import arrowback from "../assets/icons/arrow-back.png";

export const SidebarComponent = ({showSidebar, setSidebarState}) => {
  console.log(showSidebar);
  const arrowBack = arrowback;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <img
            src={arrowBack}
            alt="arrow-back"
            className="sidebar-top-arrow"
            onClick={() => setSidebarState({showSidebar: false})}
          ></img>
        </div>
      </div>
    </>
  );
};
