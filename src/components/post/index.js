import React, { useState } from "react";
import {
  PostHolder,
  PostContent,
  PostHeader,
  PostImage,
  NavigationLink,
  PostInformationHolder,
  HeaderIconDiv,
  HeaderIconSpan,
  HeaderIconImage,
  HeaderUserName,
  PostImageHolder,
  PostInformationActionsHolder,
  PostInformationLikes,
  PostInformationActionsLikeButton,
  PostInformationActionsLikeSVG,
  PostInformationActionsLikeSVGPath,
  PostInformationTitleAndCommentsHolder,
  PostInformationTitleHolder,
  PostInformationAuthor,
  PostInformationTitleDescription,
  PostInformationCommentsHolder,
  PostInformationCommentsElement,
  PostInformationCommentsAllButton,
  PostInformationComment,
  PostInformationTimeAdded,
  PostInformationAddCommentHolder,
  PostInformationAddCommentForm,
  PostInformationAddCommentText,
  PostInformationAddCommentButton,
} from "./styles/post";

import { likeActionPost, postComment } from "../../services/firebase";
import { useSelector } from "react-redux";

export default function Post(props) {
  const [likes, setLikes] = useState(props.postData.numberOfLikes);
  const [comments, setComments] = useState(props.postData.comments);

  return (
    <>
      <PostHolder>
        <PostContent>
          <PostHeader>
            <HeaderIconDiv>
              <HeaderIconSpan>
                <HeaderIconImage
                  src={props.postData.ownerIcon}
                ></HeaderIconImage>
              </HeaderIconSpan>
            </HeaderIconDiv>
            <HeaderUserName>
              <NavigationLink to={`/profile/${props.postData.userName}`}>
                {props.postData.userName}
              </NavigationLink>
            </HeaderUserName>
          </PostHeader>
          <PostImageHolder>
            <PostImage src={props.postData.photoLink}></PostImage>
          </PostImageHolder>
          <PostInformationHolder>
            <PostInformationActionsHolder>
              <PostInformationLikeButton
                isLiked={props.postData.likedPost}
                postDocumentId={props.postData.docId}
                changeNumberOfLikes={setLikes}
              />
            </PostInformationActionsHolder>
            <PostInformationLikes>Likes: {likes}</PostInformationLikes>
            <PostInformationTitleAndCommentsHolder>
              <PostInformationTitleHolder>
                <PostInformationAuthor>
                  <NavigationLink to={`/profile/${props.postData.userName}`}>
                    {props.postData.userName}{" "}
                  </NavigationLink>
                </PostInformationAuthor>
                <PostInformationTitleDescription>
                  {props.postData.titleDescription}
                </PostInformationTitleDescription>
              </PostInformationTitleHolder>
              <PostInformationComments
                commentsData={{
                  comments: comments,
                  numberOfComments: props.postData.numberOfComments,
                }}
              />
            </PostInformationTitleAndCommentsHolder>
            <PostInformationTimeElapsed timeData={props.postData.added} />
            <PostInformationAddComment
              postDocumentId={props.postData.docId}
              addComment={setComments}
            />
          </PostInformationHolder>
        </PostContent>
      </PostHolder>
    </>
  );
}

function PostInformationLikeButton(props) {
  const [isButtonClicked, setIsButtonClicked] = useState(props.isLiked);
  const userId = useSelector((state) => state.user.userId);

  async function handleClick() {
    if (isButtonClicked === false) {
      const likes = await likeActionPost(
        props.postDocumentId,
        userId,
        !isButtonClicked
      );
      props.changeNumberOfLikes(likes);
      setIsButtonClicked(true);
    } else {
      const likes = await likeActionPost(
        props.postDocumentId,
        userId,
        !isButtonClicked
      );
      props.changeNumberOfLikes(likes);
      setIsButtonClicked(false);
    }
  }

  return (
    <PostInformationActionsLikeButton onClick={handleClick}>
      <PostInformationActionsLikeSVG
        aria-label="Like"
        fill={isButtonClicked ? "red" : "#262626"}
        height="24"
        role="img"
        viewBox="0 0 48 48"
        width="24"
      >
        <PostInformationActionsLikeSVGPath
          d={
            isButtonClicked
              ? "M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
              : "M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
          }
        />
      </PostInformationActionsLikeSVG>
    </PostInformationActionsLikeButton>
  );
}

function PostInformationComments(props) {
  const [isClicked, setIsClicked] = useState(false);

  let commentsItems = props.commentsData.comments;
  let buttonText;
  let holderStyle;
  let commentsToRender;

  function showOrHideComments() {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }

  if (isClicked === true) {
    buttonText = "Hide all comments";
    let numberOfElements = commentsItems.length;
    let elementHeight;
    if (numberOfElements > 5) {
      elementHeight = 31 * 5;
    }
    holderStyle = {
      overflowX: "hidden",
      overflowY: "scroll",
      height: elementHeight + "px",
      maxHeight: "none",
    };
    commentsToRender = commentsItems;
  } else {
    if (commentsItems.length === 0) {
      buttonText = "No comments";
    } else {
      buttonText = "View all " + commentsItems.length + " comments";
    }
    commentsToRender = commentsItems.slice(
      commentsItems.length - 2,
      commentsItems.length
    );
    holderStyle = {};
  }

  return (
    <PostInformationCommentsHolder style={holderStyle}>
      <PostInformationCommentsAllButton
        onClick={showOrHideComments}
        disabled={commentsItems.length === 0}
      >
        {buttonText}
      </PostInformationCommentsAllButton>
      {commentsToRender.map((commentItem) => {
        return (
          <PostInformationCommentsElement key={commentItem.commentId}>
            <PostInformationAuthor>
              <NavigationLink to={`/profile/${commentItem.author}`}>
                {commentItem.author}{" "}
              </NavigationLink>
            </PostInformationAuthor>
            <PostInformationComment>
              {commentItem.comment}
            </PostInformationComment>
          </PostInformationCommentsElement>
        );
      })}
    </PostInformationCommentsHolder>
  );
}

function PostInformationAddComment(props) {
  const [inputText, setInputText] = useState("");

  const userName = useSelector((state) => state.user.userName);
  const userId = useSelector((state) => state.user.userId);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  async function sendComment(event) {
    event.preventDefault();

    let commentId = await postComment(props.postDocumentId, inputText, userId);
    props.addComment((prevState) => [
      ...prevState,
      { author: userName, comment: inputText, commentId: commentId },
    ]);
    setInputText("");
  }

  return (
    <PostInformationAddCommentHolder>
      <PostInformationAddCommentForm onSubmit={sendComment}>
        <PostInformationAddCommentText
          placeholder="Add a comment..."
          autoComplete="off"
          autoCorrect="off"
          value={inputText}
          onChange={handleChange}
        ></PostInformationAddCommentText>
        <PostInformationAddCommentButton disabled={!(inputText.length > 0)}>
          Post
        </PostInformationAddCommentButton>
      </PostInformationAddCommentForm>
    </PostInformationAddCommentHolder>
  );
}

function PostInformationTimeElapsed(props) {
  let output = "";
  let time = Date.parse(props.timeData);

  let nowTime = Date.now();

  let elapsedTimeInSeconds = nowTime - time;

  let days = Math.floor(elapsedTimeInSeconds / (24 * 60 * 60 * 1000));
  let daysInSeconds = elapsedTimeInSeconds % (24 * 60 * 60 * 1000);
  let hours = Math.floor(daysInSeconds / (60 * 60 * 1000));
  let hoursInSeconds = elapsedTimeInSeconds % (60 * 60 * 1000);
  let minutes = Math.floor(hoursInSeconds / (60 * 1000));
  let minutesInSeconds = elapsedTimeInSeconds % (60 * 1000);
  let seconds = Math.floor(minutesInSeconds / 1000);

  if (seconds > 0) {
    output = seconds + " seconds ago";
    output = seconds === 1 ? seconds + " second ago" : seconds + " seconds ago";
  }
  if (minutes > 0) {
    output = minutes + " minutes ago";
    output = minutes === 1 ? minutes + " minute ago" : minutes + " minutes ago";
  }
  if (hours > 0) {
    output = hours + " hours ago";
    output = hours === 1 ? hours + " hour ago" : hours + " hours ago";
  }
  if (days > 0) {
    output = days === 1 ? days + " day ago" : days + " days ago";
  }

  return (
    <>
      <PostInformationTimeAdded>{output}</PostInformationTimeAdded>
    </>
  );
}
