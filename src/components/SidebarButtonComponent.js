import React from "react";
import sidebar from "../assets/icons/sidebar.png";
import "../styles/SidebarButtonComponent.scss";

export const SidebarButtonComponent = ({setSidebarState, showSidebar}) => {
  const sidebarIcon = sidebar;
  return (
    <>
      <img
        className="sidebar-button"
        src={sidebarIcon}
        alt="sidebar"
        onClick={() => {
          setSidebarState({showSidebar: true});
        }}
      ></img>
    </>
  );
};
