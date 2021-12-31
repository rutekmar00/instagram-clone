import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({
  component: Component,
  isLoggedIn,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}
