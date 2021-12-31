import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Post from "../components/post";
import {
  MainContainer,
  MainContent,
  LeftSideSection,
  PostsContainer,
} from "../containers/main";

import { getUserPosts } from "../services/firebase";
import { useSelector } from "react-redux";

export default function MainPage() {
  const [posts, setPosts] = useState(null);
  const following = useSelector((state) => state.userInformation.following);
  const userId = useSelector((state) => {
    return state.user.userId;
  });

  useEffect(() => {
    async function getPosts() {
      const posts = await getUserPosts(userId, following);
      setPosts(
        posts.sort(function (a, b) {
          return new Date(b.added) - new Date(a.added);
        })
      );
    }
    if (following !== undefined && following !== null && following.length > 0) {
      getPosts();
    }
  }, [following, userId]);

  return (
    <MainContainer>
      <Navbar />
      <MainContent>
        <LeftSideSection>
          <PostsContainer>
            {following != null && following.length === 0 ? (
              <p style={{ textAlign: "center" }}>
                Follow users to see their posts!
              </p>
            ) : posts != null ? (
              posts.map((post) => {
                return <Post key={post.postId} postData={post} />;
              })
            ) : (
              <p style={{ textAlign: "center" }}>Loading</p>
            )}
          </PostsContainer>
        </LeftSideSection>
      </MainContent>
    </MainContainer>
  );
}
