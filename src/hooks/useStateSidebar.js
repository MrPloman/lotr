import {useState} from "react";

export const useStateSidebar = (state = false) => {
  const [sidebarState, setSidebarState] = useState({showSidebar: state});
  const updateSidebarState = (s) => {
    setSidebarState({showSidebar: s});
  };
  return {sidebarState, updateSidebarState};
};
