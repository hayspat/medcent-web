import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "Util/history";
import { Login } from "Login/login-view";
import { Routes } from "routes";

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      <Routes />
    </Router>
  );
};
