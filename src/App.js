import "./App.css";
import {RouterComponent} from "./components//RouterComponent/RouterComponent";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStroopwafel} from "@fortawesome/free-solid-svg-icons";
import {withTranslation} from "react-i18next";
import "./i18n";

library.add(faStroopwafel);

function App() {
  return (
    <>
      <RouterComponent></RouterComponent>
    </>
  );
}

export default withTranslation()(App);
