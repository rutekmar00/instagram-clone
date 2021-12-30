import "./styles.css";
import React from "react";
import { SignInPage } from "./pages";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignInPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
