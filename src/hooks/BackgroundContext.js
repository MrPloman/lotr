import {createContext} from "react";

const themes = {route: "/home", background: "../assets/videos/background.mp4"};

export const BackgroundContext = createContext(themes);
