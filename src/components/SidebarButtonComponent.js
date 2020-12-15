import React from "react";
import sidebar from "../assets/icons/sidebar.png";
import "../styles/SidebarButtonComponent.scss";
import {faAlignJustify} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SidebarButtonComponent = ({setSidebarState, showSidebar}) => {
  const sidebarIcon = sidebar;
  return (
    <>
      <FontAwesomeIcon
        icon={faAlignJustify}
        className="sidebar-button"
        onClick={() => {
          setSidebarState({showSidebar: true});
        }}
      />
    </>
  );
};
