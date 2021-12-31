import React from "react";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import { Container, ProfileContainer } from "../containers/profile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const userName = useSelector((state) => state.user.userName);
  const userIcon = useSelector((state) => state.user.userIcon);
  const profilePageUser = useParams().name || userName;
  const isProfilePageOfLoggedInUser =
    profilePageUser === userName ? true : false;

  return (
    <Container>
      <Navbar />
      <ProfileContainer>
        <Profile
          userName={userName}
          userIcon={userIcon}
          profilePageUser={profilePageUser}
          isProfilePageOfLoggedInUser={isProfilePageOfLoggedInUser}
        />
      </ProfileContainer>
    </Container>
  );
}
