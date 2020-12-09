import React, {useState} from "react";
import {BackgroundVideoComponent} from "../components/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../components/SidebarButtonComponent";
import "../styles/HomeComponent.scss";

import {SidebarComponent} from "../components/SidebarComponent";

export const HomeComponent = () => {
  const [{showSidebar}, setSidebarState] = useState({showSidebar: true});
  return (
    <>
      <BackgroundVideoComponent></BackgroundVideoComponent>
      {showSidebar ? (
        <div className="animate__animated animate__fadeInLeft">
          <SidebarComponent
            key="sidebar"
            showSidebar={showSidebar}
            setSidebarState={setSidebarState}
          ></SidebarComponent>
        </div>
      ) : (
        <SidebarButtonComponent
          setSidebarState={setSidebarState}
          showSidebar={showSidebar}
        ></SidebarButtonComponent>
      )}
    </>
  );
};
