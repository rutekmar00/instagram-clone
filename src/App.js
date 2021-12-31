import "./styles.css";
import React from "react";
import { SignInPage, SignUpPage } from "./pages";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <SignInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
