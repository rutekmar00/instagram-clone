import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const PostHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited {
    text-decoration: none;
    color: black;
  }
`;

export const PostContent = styled.article`
  padding: 0;
  margin-bottom: 24px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 1);
  margin-left: 1px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
`;

export const PostHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(239, 239, 239, 1);
`;

export const HeaderIconDiv = styled.div`
  display: block;
  position: relative;
  z-index: 1;
`;

export const HeaderIconSpan = styled.div`
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: rgba(250, 250, 250, 1);
  display: block;
  overflow: hidden;
  position: relative;
`;

export const HeaderIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderUserName = styled.div`
  margin-left: 14px;
  align-items: flex-start;
  display: flex;
  font-weight: bold;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
`;

export const PostImageHolder = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  background-color: #000;
  height: 100%;
  justify-content: center;
  min-width: 100%;
  color: white;
`;

export const PostImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  user-select: none;
`;

export const PostInformationHolder = styled.div`
  padding: 0;
`;

export const PostInformationActionsHolder = styled.section`
  padding: 0px 10px;
  padding-top: 5px;
`;

export const PostInformationActionsLikeButton = styled.button`
  display: flex;
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  justify-content: center;
`;

export const PostInformationActionsLikeSVG = styled.svg`
  display: block;
  position: relative;
`;

export const PostInformationActionsLikeSVGPath = styled.path``;

export const PostInformationLikes = styled.section`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  padding: 0 16px;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;
  margin-top: 10px;
  align-items: stretch;
  align-content: stretch;
  font-weight: 600;
  color: rgba(38, 38, 38, 1);
`;

export const PostInformationTitleAndCommentsHolder = styled.div`
  margin: 0 0 auto;
  padding: 0 16px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  min-height: 0;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  margin-bottom: 4px;
`;

export const PostInformationTitleHolder = styled.div`
  display: block;
  margin-bottom: 4px;
`;

export const PostInformationAuthor = styled.span`
  display: inline;
  font-weight: 600;
  color: black;

  &:visited {
    text-decoration: underline;
  }
`;

export const PostInformationTitleDescription = styled.span`
  overflow-wrap: break-word;
`;

export const PostInformationCommentsHolder = styled.div`
  max-height: 68px;
  overflow: hidden;
`;

export const PostInformationCommentsElement = styled.div`
  margin-top: 4px;
`;

export const PostInformationCommentsAllButton = styled.button`
  background: 0 0;
  border: 0;
  color: rgba(142, 142, 142, 1);
  line-height: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const PostInformationComment = styled.span`
  overflow-wrap: break-word;
`;

export const PostInformationTimeAdded = styled.div`
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.2px;
  padding-left: 16px;
  display: block;
  margin-bottom: 4px;
  text-transform: uppercase;
  color: rgba(142, 142, 142, 1);
`;

export const PostInformationAddCommentHolder = styled.div`
  padding: 0 16px;
  margin-top: 4px;
  border-top: 1px solid rgba(239, 239, 239, 1);
  color: rgba(142, 142, 142, 1);
  flex-shrink: 0;
  font-size: 14px;
  line-height: 18px;
  min-height: 56px;
  justify-content: center;
`;

export const PostInformationAddCommentForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  margin-top: 15px;
  margin-left: 10px;
`;

export const PostInformationAddCommentText = styled.textarea`
  background: 0 0;
  border: 0;
  color: rgba(38, 38, 38, 1);
  display: flex;
  flex-grow: 1;
  font-size: inherit;
  max-height: 80px;
  outline: 0;
  padding: 0;
  resize: none;
  width: 0;
  line-height: 18px;
`;

export const PostInformationAddCommentButton = styled.button`
  opacity: 1;
  pointer-events: cursor;
  border: 0;
  color: rgba(0, 149, 246, 1);
  display: inline;
  padding: 0;
  position: relative;
  appearance: none;
  background: 0 0;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  text-transform: inherit;
  user-select: none;
  width: auto;
  padding-bottom: 18px;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`;
