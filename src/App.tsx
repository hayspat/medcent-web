import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "Util/history";
import { Login } from "Login";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
