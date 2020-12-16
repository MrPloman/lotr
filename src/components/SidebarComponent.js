import React, {useState} from "react";
import "../styles/SidebarComponent.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

export const SidebarComponent = ({showSidebar, updateSidebarState}) => {
  const {t} = useTranslation();
  const navbar = [
    {
      name: "HOME",
      to: "/home",
    },
    {
      name: "CHARACTERS",
      to: "/characters",
    },
  ];

  const [navbarState, setNavbar] = useState(navbar);
  console.log(navbarState);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <FontAwesomeIcon
            onClick={() => updateSidebarState(false)}
            className="sidebar-top-arrow"
            icon={faArrowLeft}
          />
        </div>
        <div className="sidebar-middle">
          {navbarState.map((n) => {
            return (
              <NavLink
                key={n.name}
                className="sidebar-middle-link"
                exact
                to={n.to}
              >
                <h3>{t(n.name)}</h3>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};
