import React, {useState} from "react";
import {BackgroundVideoComponent} from "../components/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../components/SidebarButtonComponent";
import "../styles/HomeComponent.scss";

import {SidebarComponent} from "../components/SidebarComponent";
import dataService from "../services/data.service";

export const HomeComponent = () => {
  const [data, setData] = useState([]);
  const {getAll} = dataService;
  getAll("/character")
    .then((r) => {
      setData(r.data.docs);
    })
    .catch((error) => console.error(error));

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
      {data.forEach((c) => (
        <h1>{c.name}</h1>
      ))}
    </>
  );
};
