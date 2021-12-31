import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  max-width: 935px;
  margin: 95px auto 0;
  padding-bottom: 32px;
  overflow: hidden;
`;

export const ImagesContainer = styled.div`
  background-image: url(${"../images/signin/base.png"});
  background-size: 454px 618px;
  flex-basis: 454px;
  height: 618px;
  margin-left: -52px;
  margin-right: -15px;
  flex-basis: 454px;
  align-self: center;

  @media only screen and (max-width: 875px) {
    display: none;
  }
`;

export const RightSideContainer = styled.div`
  flex-direction: column;
  color: rgba(38, 38, 38, 1);
  flex-grow: 1;
  justify-content: center;
  margin-top: 22px;
  max-width: 350px;
`;
