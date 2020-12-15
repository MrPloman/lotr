import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {CharactersComponent} from "../pages/CharactersComponent";
import {HomeComponent} from "../pages/HomeComponent";

export const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/home" component={HomeComponent}></Route>
          <Route
            exact
            path="/characters"
            component={CharactersComponent}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};
