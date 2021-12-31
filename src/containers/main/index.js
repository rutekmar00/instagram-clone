import styled from "styled-components/macro";

export const MainContainer = styled.section`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  display: flex;
  flex-grow: 1;
  order: 4;
  margin-top: 30px;
  background-color: #fafafa;
`;

export const LeftSideSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 100%;
  max-width: 935px;
  padding-top: 30px;

  @media only screen and (max-width: 935px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PostsContainer = styled.div`
  float: left;
  margin-right: 28px;
  max-width: 614px;
  width: 100%;

  @media only screen and (max-width: 935px) {
    margin: 0 auto;
    order: 2;
  }
`;
