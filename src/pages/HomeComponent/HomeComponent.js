import React, {useState, useEffect} from "react";
import {BackgroundVideoComponent} from "../../components/BackgroundVideoComponent/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../../components/SidebarButtonComponent/SidebarButtonComponent";
import "./HomeComponent.scss";
import {useStateSidebar} from "../../hooks/useStateSidebar";
import {SidebarComponent} from "../../components/SidebarComponent/SidebarComponent";
import dataService from "../../services/data.service";

export const HomeComponent = () => {
  const {sidebarState, updateSidebarState} = useStateSidebar(false);
  let effectOfSidebar = "animate__animated animate__fadeInLeft";
  useEffect(() => {
    if (sidebarState.showSidebar) {
      effectOfSidebar = "animate__animated animate__fadeInLeft";
    } else {
      effectOfSidebar = "animate__animated animate__fadeOutLeft";
    }
  }, [sidebarState]);
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <BackgroundVideoComponent />
        {sidebarState.showSidebar ? (
          <div className={effectOfSidebar}>
            <SidebarComponent
              key="sidebar"
              showSidebar={sidebarState}
              updateSidebarState={updateSidebarState}
            ></SidebarComponent>
          </div>
        ) : (
          <div>
            <SidebarButtonComponent
              className="animate__animated animate__fadeInRight"
              setSidebarState={sidebarState}
              updateSidebarState={updateSidebarState}
            ></SidebarButtonComponent>
          </div>
        )}
      </div>
    </>
  );
};
