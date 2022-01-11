import { imagesStorage, firebase } from "../../lib/firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Holder,
  HeaderHolder,
  HeaderImage,
  HeaderImageHolder,
  HeaderImageSpan,
  HeaderInformationHolder,
  HeaderInformationFollowButtonHolder,
  HeaderInformationFollowButton,
  HeaderInformationFollowersHolder,
  HeaderInformationUserName,
  HeaderInformationUserNameAndFollowButtonHolder,
  HeaderInformationSpan,
  HeaderInformationElement,
  Tabs,
  TabsButton,
  TabsButtonLabel,
  PostsHolder,
  ThreePostsInRowHolder,
  PostHolder,
  PostImageHolder,
  PostImage,
  PostOverlay,
  PostOverlayLikes,
  PostOverlayComments,
  PostOverlayIconLikes,
  PostOverlayIconComments,
  AddPostHolder,
  AddPostCaptionHolder,
  AddPostCaption,
  AddPostCaptionLabel,
  AddPostProgressBar,
  AddPostButton,
  EditProfileHolder,
  EditProfileProgressBar,
  Title,
  FilePicker,
  FilePickerLabel,
  SelectImageHolder,
  SelectImageLabel,
  SelectImageFilePicker,
  FormHolder,
  InputHolder,
  InputLabel,
  InputField,
  Submit,
  Error,
} from "./styles/profile";
import {
  addPost,
  followUserByUserId,
  getProfileInformation,
  updateUserIcon,
  updateUserCredentials,
} from "../../services/firebase";
import {
  setActiveUserIcon,
  setUserName as setUserNameRedux,
} from "../../slices/user";
import { setUserFollowing } from "../../slices/userInformation";

export default function Profile(props) {
  const [followers, setFollowers] = useState(null);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [information, setInformation] = useState(null);
  const userIcon = useSelector((state) => state.user.userIcon);

  useEffect(() => {
    async function getInformation() {
      let response;
      if (props.isProfilePageOfLoggedInUser) {
        response = await getProfileInformation(props.userEmail, "email");
      } else {
        response = await getProfileInformation(
          props.profilePageUser,
          "userName"
        );
      }
      response[1].sort(function (a, b) {
        return new Date(b.added) - new Date(a.added);
      });
      setInformation(response);
      setFollowers(response[0][0].followers);
    }
    getInformation();
    return () => {
      setInformation(null);
    };
  }, [numberOfPosts]);

  return (
    <>
      {information != null ? (
        <Holder>
          <HeaderHolder>
            <HeaderImageHolder>
              <HeaderImageSpan>
                <HeaderImage
                  src={
                    props.isProfilePageOfLoggedInUser
                      ? userIcon
                      : information[0][0].userIcon
                  }
                ></HeaderImage>
              </HeaderImageSpan>
            </HeaderImageHolder>
            <HeaderInformationHolder>
              <HeaderInformationUserNameAndFollowButtonHolder>
                <HeaderInformationUserName>
                  {props.profilePageUser}
                </HeaderInformationUserName>
                <HeaderInformationFollowButtonHolder>
                  {props.isProfilePageOfLoggedInUser ? null : (
                    <HeaderFollowButton
                      userToFollowId={information[0][0].userId}
                      changeNumberOfFollowers={setFollowers}
                    />
                  )}
                </HeaderInformationFollowButtonHolder>
              </HeaderInformationUserNameAndFollowButtonHolder>
              <HeaderInformationFollowersHolder>
                <HeaderInformationElement>
                  <HeaderInformationSpan>
                    {information[1].length} posts
                  </HeaderInformationSpan>
                </HeaderInformationElement>
                <HeaderInformationElement>
                  <HeaderInformationSpan>
                    {followers} followers
                  </HeaderInformationSpan>
                </HeaderInformationElement>
                <HeaderInformationElement>
                  <HeaderInformationSpan>
                    {information[0][0].following} following
                  </HeaderInformationSpan>
                </HeaderInformationElement>
              </HeaderInformationFollowersHolder>
            </HeaderInformationHolder>
          </HeaderHolder>
          <TabsHolder
            data={information[1]}
            changeNumberOfPosts={setNumberOfPosts}
            isProfilePageOfLoggedInUser={props.isProfilePageOfLoggedInUser}
          />
        </Holder>
      ) : null}
    </>
  );
}

function HeaderFollowButton(props) {
  const [isFollowed, setIsFollowed] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  const loggedInUserFollowing = useSelector(
    (state) => state.userInformation.following
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedInUserFollowing != null) {
      if (loggedInUserFollowing.includes(props.userToFollowId)) {
        setIsFollowed(true);
      }
    } else {
      setIsFollowed(false);
    }
  }, [loggedInUserFollowing, props.userToFollowId]);

  async function followHandler(event) {
    event.preventDefault();
    await followUserByUserId(userId, props.userToFollowId, isFollowed);
    if (isFollowed) {
      setIsFollowed(false);
      props.changeNumberOfFollowers((prevState) => {
        return prevState - 1;
      });
      dispatch(
        setUserFollowing({
          following: loggedInUserFollowing.filter(
            (item) => item !== props.userToFollowId
          ),
        })
      );
    } else {
      setIsFollowed(true);
      props.changeNumberOfFollowers((prevState) => {
        return prevState + 1;
      });
      dispatch(
        setUserFollowing({
          following: [...loggedInUserFollowing, props.userToFollowId],
        })
      );
    }
  }

  return (
    <HeaderInformationFollowButton onClick={followHandler}>
      {isFollowed ? "Unfollow" : "Follow"}
    </HeaderInformationFollowButton>
  );
}

function Post(props) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver(event) {
    event.preventDefault();
    setIsHovered(true);
  }

  function handleMouseOut(event) {
    event.preventDefault();
    setIsHovered(false);
  }

  return (
    <PostHolder
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleMouseOver}
      onTouchEnd={handleMouseOut}
    >
      <PostImageHolder>
        <PostImage src={props.postData.photoLink} />
      </PostImageHolder>
      {isHovered && (
        <PostOverlay>
          <PostOverlayLikes>
            <PostOverlayIconLikes />
            {props.postData.numberOfLikes}
          </PostOverlayLikes>
          <PostOverlayComments>
            <PostOverlayIconComments />
            {props.postData.numberOfComments}
          </PostOverlayComments>
        </PostOverlay>
      )}
    </PostHolder>
  );
}

function TabsHolder(props) {
  const [select, setSelect] = useState("posts");

  function handleSelectChange(evt) {
    setSelect(evt.target.value);
  }

  return (
    <>
      <Tabs>
        <TabsButton
          type="radio"
          name="radio"
          id={"postsTab"}
          value={"posts"}
          checked={select === "posts"}
          onChange={(event) => handleSelectChange(event)}
        />
        <TabsButtonLabel htmlFor={"postsTab"} role="button">
          Posts
        </TabsButtonLabel>
        {props.isProfilePageOfLoggedInUser ? (
          <>
            <TabsButton
              type="radio"
              name="radio"
              id={"addPostTab"}
              value={"addPost"}
              checked={select === "addPost"}
              onChange={(event) => handleSelectChange(event)}
            />
            <TabsButtonLabel htmlFor={"addPostTab"} role="button">
              Add Post
            </TabsButtonLabel>
            <TabsButton
              type="radio"
              name="radio"
              id={"editProfileTab"}
              value={"editProfile"}
              checked={select === "editProfile"}
              onChange={(event) => handleSelectChange(event)}
            />
            <TabsButtonLabel htmlFor={"editProfileTab"} role="button">
              Edit profile
            </TabsButtonLabel>
          </>
        ) : null}
      </Tabs>
      {select === "posts" ? (
        <>
          <PostsHolder>
            <ThreePostsInRowHolder>
              {props.data.map((post, index) => {
                return <Post key={index} postData={post} />;
              })}
            </ThreePostsInRowHolder>
          </PostsHolder>
        </>
      ) : select === "addPost" ? (
        <AddPost changeNumberOfPosts={props.changeNumberOfPosts}></AddPost>
      ) : (
        <EditProfile />
      )}
    </>
  );
}

function PickImage(props) {
  const [error, setError] = useState(false);

  function imagePickerHandler(event) {
    const files = event.target.files;
    const file = files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setError(false);
      props.setImageName(file.name);
      let reader = new FileReader();
      reader.onload = function (e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.onload = function (imgEvent) {
          let canvas = document.createElement("canvas");
          let ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          let MAX_WIDTH = props.width;
          let MAX_HEIGHT = props.height;
          let width = img.width;
          let height = img.height;
          if (width > height) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          } else {
            width *= MAX_HEIGHT / height;
          }
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          let dataurl = canvas.toDataURL(file.type);
          props.setShowPreview(true);
          document.getElementById("output").src = dataurl;
          props.setImageUrl(dataurl);
        };
      };
      reader.readAsDataURL(file);
    } else {
      setError(true);
    }
  }

  return (
    <>
      {error ? <Error>Your image is too big!</Error> : null}
      <SelectImageHolder>
        <SelectImageLabel>Pick image</SelectImageLabel>
        <SelectImageFilePicker>
          <FilePicker
            type={"file"}
            id={"filePicker"}
            accept="image/*"
            onChange={(e) => imagePickerHandler(e)}
          />
          <FilePickerLabel htmlFor={"filePicker"}>Select file</FilePickerLabel>
        </SelectImageFilePicker>
        {props.showPreview ? (
          <img
            style={{ objectFit: "scale", width: "200px", height: "200px" }}
            src=""
            id="output"
            alt="Preview of final file ready to upload"
          />
        ) : null}
      </SelectImageHolder>
    </>
  );
}

function AddPost(props) {
  const userName = useSelector((state) => state.user.userName);
  const [captionText, setCaptionText] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [progressValue, setProgressValue] = useState("0");

  function captionTextHandler(event) {
    setCaptionText(event.target.value);
  }

  function submitHandler(event) {
    const uploadTask = imagesStorage
      .child(`images/${userName + "-" + imageName}`)
      .putString(imageUrl, "data_url");

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressValue(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(async (downloadUrl) => {
          await addPost(
            userName,
            downloadUrl,
            new Date().toISOString(),
            captionText
          );
          props.changeNumberOfPosts((prevState) => prevState + 1);
        });
      }
    );
    document.getElementById("output").src = "";
    document.getElementById("filePicker").value = "";
    setCaptionText("");
    setProgressValue("0");
    setImageUrl("");
    setShowPreview(false);
  }

  return (
    <AddPostHolder>
      <Title>NEW POST</Title>
      <PickImage
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        setImageName={setImageName}
        setImageUrl={setImageUrl}
        width={1080}
        height={1080}
      />
      <AddPostCaptionHolder>
        <AddPostCaptionLabel>Write caption for post</AddPostCaptionLabel>
        <AddPostCaption
          placeholder="Caption of your post"
          minLength="15"
          value={captionText}
          onChange={(e) => captionTextHandler(e)}
          required
        ></AddPostCaption>
      </AddPostCaptionHolder>
      <AddPostProgressBar max="100" value={progressValue} />
      <AddPostButton
        onClick={(e) => submitHandler(e)}
        disabled={!(captionText.length > 14 && imageUrl)}
      >
        Post
      </AddPostButton>
    </AddPostHolder>
  );
}

function EditProfile(props) {
  const userNameStore = useSelector((state) => state.user.userName);
  const userFullNameStore = useSelector((state) => state.user.userFullName);
  const userId = useSelector((state) => state.user.userId);
  const [userName, setUserName] = useState(userNameStore);
  const [fullName, setFullName] = useState(userFullNameStore);
  const [showPreview, setShowPreview] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [progressValue, setProgressValue] = useState("0");
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (imageUrl != null) {
      const uploadTask = imagesStorage
        .child(`users-icons/${userName + "-" + imageName + "-icon"}`)
        .putString(imageUrl, "data_url");

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressValue(progress);
        },
        (error) => {
          console.error(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(async (downloadUrl) => {
            await updateUserIcon(userId, downloadUrl);
            dispatch(
              setActiveUserIcon({
                userIcon: downloadUrl,
              })
            );
          });
        }
      );
      document.getElementById("output").src = "";
      document.getElementById("filePicker").value = "";
      setImageUrl(null);
      setProgressValue("0");
      setShowPreview(false);
    }
    if (userNameStore !== userName || userFullNameStore !== fullName) {
      await updateUserCredentials(userId, userName, fullName);
      dispatch(setUserNameRedux({ userName: userName }));
      await firebase.auth().currentUser.updateProfile({
        displayName: userName,
      });
    }
  }

  return (
    <EditProfileHolder>
      <Title>CHANGE INFORMATION</Title>
      <PickImage
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        setImageName={setImageName}
        setImageUrl={setImageUrl}
        width={150}
        height={100}
      />
      <EditProfileProgressBar max="100" value={progressValue} />
      <FormHolder onSubmit={handleSubmit}>
        <InputHolder>
          <InputLabel>User name</InputLabel>
          <InputField
            type="text"
            aria-label="User name"
            value={userName}
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
          ></InputField>
        </InputHolder>
        <InputHolder>
          <InputLabel>Full name</InputLabel>
          <InputField
            type="text"
            aria-label="Full name"
            value={fullName}
            autoComplete="off"
            onChange={(e) => setFullName(e.target.value)}
          ></InputField>
        </InputHolder>
        <Submit
          disabled={
            !(
              userNameStore !== userName ||
              userFullNameStore !== fullName ||
              !!imageUrl
            )
          }
        >
          Save
        </Submit>
      </FormHolder>
    </EditProfileHolder>
  );
}
