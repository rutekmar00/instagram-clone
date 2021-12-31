import React from "react";
import SignUp from "../components/signup";
import { SignUpContainer } from "../containers/signup";

export default function SignUpPage() {
  return (
    <>
      <SignUpContainer>
        <SignUp />
      </SignUpContainer>
    </>
  );
}
