import "./styles.css";
import React from "react";
import { SignInPage, SignUpPage, MainPage, ProfilePage } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { history } from "./helpers/history";
import ProtectedRoute from "./helpers/protected-route";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route
          exact
          path="/main"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route exac path="/profile">
          <Route
            path=""
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/profile/:name"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
