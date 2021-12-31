import "./styles.css";
import React from "react";
import { SignInPage, SignUpPage, MainPage } from "./pages";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import ProtectedRoute from "./helpers/protected-route";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <SignInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <ProtectedRoute
          exact
          path="/main"
          component={MainPage}
          isLoggedIn={isLoggedIn}
        />
      </Switch>
    </Router>
  );
}

export default App;
