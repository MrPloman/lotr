import React from "react";
import {BackgroundVideoComponent} from "../../components/BackgroundVideoComponent/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../../components/SidebarButtonComponent/SidebarButtonComponent";
import {SidebarComponent} from "../../components/SidebarComponent/SidebarComponent";
import {useStateSidebar} from "../../hooks/useStateSidebar";
import "./CharactersComponent.scss";
import dataService from "../../services/data.service";
import {ListComponent} from "../../components/ListComponent/ListComponent";
import {SearchComponent} from "../../components/SearchComponent/SearchComponent";
import {PaginationComponent} from "../../components/PaginationComponent/PaginationComponent";

export const CharactersComponent = () => {
  const {sidebarState, updateSidebarState} = useStateSidebar(false);

  const {getAll} = dataService;

  getAll("/character?limit=10?page=2")
    .then((r) => {
      console.log(r);
    })
    .catch((error) => console.error(error));

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <BackgroundVideoComponent />
        <div className="content">
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
          <div className="content-main">
            <div className="content-main-searcher">
              <SearchComponent />
            </div>
            <div className="content-main-list">
              <ListComponent />
            </div>
            <div className="content-main-pagination">
              <PaginationComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
