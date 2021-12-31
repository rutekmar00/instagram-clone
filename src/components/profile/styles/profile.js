import styled from "styled-components/macro";
import { HeaderIconImage, HeaderIconSpan } from "../../post/styles/post";

export const Holder = styled.div`
  display: flex;
  padding: 30px 20px 0;
  box-sizing: content-box;
  width: calc(100% - 40px);
  margin-bottom: 0;
  flex: 1 1;
  margin: 0 auto 30px;
  max-width: 935px;
  flex-direction: column;
  height: 100%;
`;

export const HeaderHolder = styled.div`
  display: flex;
  margin-bottom: 44px;
  flex-direction: row;
  width: 100%;
`;

export const HeaderImageHolder = styled.div`
  display: flex;
  flex-grow: 1;
  margin-right: 30px;
  flex-shrink: 0;
  flex-basis: 0;
  justify-content: center;
  align-self: center;
`;

export const HeaderImageSpan = styled(HeaderIconSpan)`
  width: 150px;
  height: 150px;
`;

export const HeaderImage = styled(HeaderIconImage)``;

export const HeaderInformationHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30px;
  flex-grow: 2;
  color: rgba(38, 38, 38, 1);
  flex-shrink: 1;
  min-width: 0;
`;

export const HeaderInformationUserNameAndFollowButtonHolder = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
  flex-shrink: 1;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderInformationUserName = styled.h1`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(38, 38, 38, 1);
  font-weight: 300;
  font-size: 28px;
`;

export const HeaderInformationFollowButtonHolder = styled.div`
  display: flex;
  margin-left: 20px;
  flex: 0 0 auto;
  height: 30px;

  @media only screen and (max-width: 640px) {
    margin-left: 0px;
  }
`;

export const HeaderInformationFollowButton = styled.button`
  height: 100%;
  padding: 0 24px;
  cursor: pointer;
  background-color: rgba(0, 149, 246, 1);
  border-color: rgba(0, 149, 246, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

export const HeaderInformationFollowersHolder = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 510px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderInformationElement = styled.div`
  color: rgba(38, 38, 38, 1);
  font-size: 16px;
  margin-right: 40px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 510px) {
    margin-top: 5px;
  }
`;

export const HeaderInformationSpan = styled.span`
  color: rgba(38, 38, 38, 1);
  font-weight: 600;
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  border-top: 1px solid rgba(219, 219, 219, 1);
  color: #8e8e8e;
  background-color: #f2f2f2;
  justify-content: center;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
`;

export const TabsButtonLabel = styled.label`
  display: flex;
  transition: all 0.3s ease-in-out;
  color: #bfbfbf;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  text-transform: uppercase;
  padding: 5px;
  height: 52px;
  user-select: none;
  &:not(:last-child) {
    margin-right: 60px;
  }
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    color: #808080;
  }
`;

export const TabsButton = styled.input`
  display: none;
  &:checked + ${TabsButtonLabel} {
    color: #404040;
    border-top: 1px solid black;
    margin-top: -1px;
  }
`;

export const PostsHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 0px;
  padding-top: 0px;
  align-items: stretch;
`;

export const ThreePostsInRowHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

export const PostHolder = styled.div`
  flex: 0 0 calc(33.333% - 28px);
  display: block;
  position: relative;
  width: 100%;
  margin-right: 28px;
  margin-top: 28px;
  align-items: stretch;

  &:last-child {
    margin-right: 0px;
  }

  @media only screen and (max-width: 500px) {
    flex: 0 0 calc(50% - 28px);
  }
`;

export const PostImageHolder = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PostImage = styled.img`
  object-fit: cover;
  height: 100%;
  left: 0;
  top: 0;
  user-select: none;
  width: 100%;

  &:hover {
    background-color: rgba(1, 1, 1, 0.5);
    filter: brightness(70%);
  }
`;

export const PostOverlay = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  color: white;
  transform: translate(-50%, -50%);
  pointer-events: none;

  @media only screen and (max-width: 340px) {
    flex-direction: column;
  }
`;

export const PostOverlayLikes = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 800;

  @media only screen and (max-width: 340px) {
    margin-right: 0px;
    margin-bottom: 5px;
  }
`;

export const PostOverlayIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0;
  background-image: url(${"../images/icons.png"});
`;

export const PostOverlayIconLikes = styled(PostOverlayIcon)`
  background-position: -340px -333px;
  background-repeat: no-repeat;
  height: 19px;
  width: 19px;
  margin-right: 5px;
`;

export const PostOverlayIconComments = styled(PostOverlayIcon)`
  background-position: -382px -333px;
  background-repeat: no-repeat;
  height: 19px;
  width: 19px;
  margin-right: 5px;
`;

export const PostOverlayComments = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 800;
`;

export const EditProfileHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditProfileChangeIcon = styled.div``;

export const AddPostHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddPostCaptionHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
`;

export const AddPostCaptionLabel = styled.label`
  display: flex;
  margin: auto 0;
  font-size: 18px;
`;

export const AddPostCaption = styled.textarea`
  margin-left: 15px;
  height: 100px;
  flex: 1 1;
  outline: 0;
  resize: none;
  font-size: 16px;

  &:valid {
    border: 5px solid green;
  }
  &:invalid {
    border: 5px solid red;
  }
`;

export const AddPostButton = styled.button`
  display: flex;
  margin-top: 20px;
  align-self: center;
  font-size: 18px;
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    rgba(179, 179, 179, 1) 0%,
    rgba(217, 217, 217, 1) 83%
  );
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  min-width: 200px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.02);
  }

  &:disabled {
    background-color: grey;
    background: none;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const FilePickerLabel = styled.label`
  display: flex;
  position: relative;
  width: 150px;
  height: 50px;
  border-radius: 25px;
  background: rgb(179, 179, 179);
  background: linear-gradient(
    90deg,
    rgba(179, 179, 179, 1) 0%,
    rgba(217, 217, 217, 1) 83%
  );
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  margin: auto 0;
  transition: transform 0.2s ease-out;
`;

export const FilePicker = styled.input`
  opacity: 0;
  position: absolute;
  &:hover + ${FilePickerLabel}, &:focus + ${FilePickerLabel} {
    transform: scale(1.02);
  }
  &:focus + ${FilePickerLabel} {
    outline: 1px solid #000;
    outline: -webkit-focus-ring-color auto 2px;
  }
`;

export const SelectImageHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SelectImageLabel = styled.label`
  display: flex;
  margin: auto 0;
  font-size: 18px;
`;

export const SelectImageFilePicker = styled.div`
  display: flex;
  margin-left: 15px;
`;

export const FormHolder = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex: 1 1;
  height: 100%;
`;

export const InputHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  max-width: 400px;

  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

export const InputLabel = styled.label`
  font-size: 18px;
  margin: auto 0;
  min-width: 78px;
`;

export const InputField = styled.input`
  margin-left: 10px;
  flex: 1 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
`;

export const Submit = styled.button`
  display: flex;
  margin-top: 20px;
  align-self: center;
  font-size: 18px;
  border-radius: 25px;
  background: linear-gradient(
    90deg,
    rgba(179, 179, 179, 1) 0%,
    rgba(217, 217, 217, 1) 83%
  );
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  min-width: 200px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.02);
  }

  &:disabled {
    background-color: grey;
    background: none;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 20px;
  border: 1px solid;
  margin: 10px auto;
  max-width: 360px;
  padding: 15px 20px 15px 20px;
  background-repeat: no-repeat;
  background-position: 10px center;
  background-color: #ffbaba;
`;
