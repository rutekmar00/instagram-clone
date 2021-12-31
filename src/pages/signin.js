import React from "react";
import SignIn, { Images } from "../components/signin";
import {
  Container,
  ImagesContainer,
  RightSideContainer,
} from "../containers/signin";

export default function SignInPage() {
  return (
    <>
      <Container>
        <ImagesContainer>
          <Images />
        </ImagesContainer>
        <RightSideContainer>
          <SignIn />
        </RightSideContainer>
      </Container>
    </>
  );
}
