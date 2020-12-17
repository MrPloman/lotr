import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {CharactersComponent} from "../../pages/CharactersComponent/CharactersComponent";
import {HomeComponent} from "../../pages/HomeComponent/HomeComponent";

export const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect exact from="/" to="/home" />
          </Route>
          <Route
            exact
            name="home"
            path="/home"
            component={HomeComponent}
          ></Route>
          <Route
            exact
            name="characters"
            path="/characters"
            component={CharactersComponent}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};
