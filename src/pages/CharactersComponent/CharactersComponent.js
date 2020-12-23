import React, {useReducer, useEffect} from "react";
import {BackgroundVideoComponent} from "../../components/BackgroundVideoComponent/BackgroundVideoComponent";
import {SidebarButtonComponent} from "../../components/SidebarButtonComponent/SidebarButtonComponent";
import {SidebarComponent} from "../../components/SidebarComponent/SidebarComponent";
import {useStateSidebar} from "../../hooks/useStateSidebar";
import "./CharactersComponent.scss";

import {ListComponent} from "../../components/ListComponent/ListComponent";
import {SearchComponent} from "../../components/SearchComponent/SearchComponent";
import {PaginationComponent} from "../../components/PaginationComponent/PaginationComponent";
import {listElementsReducer} from "../../reducers/listElementsReducer";
import {charactersSelector} from "../../selectors/charactersSelector";

export const CharactersComponent = () => {
  const {sidebarState, updateSidebarState} = useStateSidebar(false);
  const [characters, dispatch] = useReducer(listElementsReducer, []);
  let page = 1;
  let effectOfSidebar = "animate__animated animate__fadeInLeft";

  const getChars = () => {
    charactersSelector({limit: 6, page: page}).then((r) => {
      r.state === "success" ? dispatch(r.action) : console.log(r.error);
    });
  };

  const refreshList = () => {
    getChars();
  };

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
        <div className="content">
          {sidebarState.showSidebar && (
            <div className={effectOfSidebar}>
              <SidebarComponent
                key="sidebar"
                showSidebar={sidebarState}
                updateSidebarState={updateSidebarState}
              ></SidebarComponent>
            </div>
          )}
          <div>
            <SidebarButtonComponent
              className="animate__animated animate__fadeInRight"
              setSidebarState={sidebarState}
              updateSidebarState={updateSidebarState}
            ></SidebarButtonComponent>
          </div>

          {characters !== undefined && (
            <div className="content-main">
              <div className="content-main-searcher">
                <SearchComponent />
              </div>
              <div className="content-main-list">
                <ListComponent elements={characters.docs} />
              </div>
              <div className="content-main-pagination">
                <PaginationComponent />
              </div>
              <button
                onClick={() => {
                  refreshList();
                }}
              >
                REFRESH
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
