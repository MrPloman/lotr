import React from "react";
import {BackgroundVideoComponent} from "../components/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../components/SidebarButtonComponent";
import {SidebarComponent} from "../components/SidebarComponent";
import {useStateSidebar} from "../hooks/useStateSidebar";

export const CharactersComponent = () => {
  const {sidebarState, updateSidebarState} = useStateSidebar(false);

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <BackgroundVideoComponent />
        {sidebarState.showSidebar ? (
          <div className="animate__animated animate__fadeInLeft">
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
