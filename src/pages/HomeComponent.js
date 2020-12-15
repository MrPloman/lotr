import React, {useState} from "react";
import {BackgroundVideoComponent} from "../components/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../components/SidebarButtonComponent";
import "../styles/HomeComponent.scss";

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

  const [{showSidebar}, setSidebarState] = useState({showSidebar: false});

  return (
    <>
      <BackgroundVideoComponent />
      {showSidebar ? (
        <div className="animate__animated animate__fadeInLeft">
          <SidebarComponent
            key="sidebar"
            showSidebar={showSidebar}
            setSidebarState={setSidebarState}
          ></SidebarComponent>
        </div>
      ) : (
        <div>
          <SidebarButtonComponent
            className="animate__animated animate__fadeInRight"
            setSidebarState={setSidebarState}
            showSidebar={showSidebar}
          ></SidebarButtonComponent>
        </div>
      )}
      {data.forEach((c) => (
        <h1>{c.name}</h1>
      ))}{" "}
    </>
  );
};
