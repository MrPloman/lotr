import "./App.css";
import {RouterComponent} from "./components/RouterComponent";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faStroopwafel} from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

function App() {
  return (
    <>
      <RouterComponent></RouterComponent>
    </>
  );
}

export default App;
