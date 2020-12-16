import React, {useState} from "react";
import {BackgroundVideoComponent} from "../components/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../components/SidebarButtonComponent";
import "../styles/HomeComponent.scss";
import {useStateSidebar} from "../hooks/useStateSidebar";
import {SidebarComponent} from "../components/SidebarComponent";
import dataService from "../services/data.service";

export const HomeComponent = () => {
  const [data, setData] = useState([]);

  const {getAll} = dataService;

  /*  getAll("/character")
    .then((r) => {
      setData(r.data.docs);
    })
    .catch((error) => console.error(error)); */
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
