import React from "react";
import "../styles/SidebarComponent.scss";
import arrowback from "../assets/icons/arrow-back.png";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export const SidebarComponent = ({showSidebar, setSidebarState}) => {
  console.log(showSidebar);
  const arrowBack = arrowback;

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <FontAwesomeIcon
            onClick={() => setSidebarState({showSidebar: false})}
            className="sidebar-top-arrow"
            icon={faArrowLeft}
          />
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                className="clip-text clip-text_fifteen clip-text--no-textzone"
                to="/home"
              >
                <h3>
                  <span> Home</span>
                </h3>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="clip-text clip-text_fifteen clip-text--no-textzone"
                to="/characters"
              >
                <h3>
                  <span> Characters</span>
                </h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
