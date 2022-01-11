import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, isLoggedIn, ...rest }) {
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/" />;
}
