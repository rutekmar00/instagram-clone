import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUserByUserId,
  getSuggestedProfiles,
} from "../../services/firebase";
import { setUserFollowing } from "../../slices/userInformation";
import {
  RightSideHolder,
  AccountHolder,
  AccountImageHolder,
  AccountImageLink,
  AccountImage,
  AccountUserNameHolder,
  AccountUserName,
  AccountUserNameLink,
  AccountSuggestionsHolder,
  AccountSuggestionsText,
  AccountSuggestionsInside,
  AccountSuggestion,
  AccountSuggestionImageHolder,
  AccountSuggestionImageLink,
  AccountSuggestionImage,
  AccountSuggestionUserNameAndFollowersHolder,
  AccountSuggestionUserNameHolder,
  AccountSuggestionUserNameText,
  AccountSuggestionUserNameLink,
  AccountSuggestionFollowButtonHolder,
  AccountSuggestionFollowButton,
} from "./styles/account-suggestions";

export default function AccountSuggestions() {
  const userId = useSelector((state) => state.user.userId);
  const userName = useSelector((state) => state.user.userName);
  const userIcon = useSelector((state) => state.user.userIcon);
  const following = useSelector((state) => state.userInformation.following);
  return (
    <>
      <RightSideHolder>
        <AccountHolder>
          <AccountImageHolder>
            <AccountImageLink to={`/profile/`}>
              <AccountImage src={userIcon}></AccountImage>
            </AccountImageLink>
          </AccountImageHolder>
          <AccountUserNameHolder>
            <AccountUserName>
              <AccountUserNameLink to={`/profile/`}>
                {userName}
              </AccountUserNameLink>
            </AccountUserName>
          </AccountUserNameHolder>
        </AccountHolder>
        <AccountSuggestionsHolder>
          <AccountSuggestionsText>Suggestions for you</AccountSuggestionsText>
          <AccountSuggestionsElements
            userId={userId}
            following={following}
          ></AccountSuggestionsElements>
        </AccountSuggestionsHolder>
      </RightSideHolder>
    </>
  );
}

function AccountSuggestionsElements(props) {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    async function getProfiles() {
      setProfiles(await getSuggestedProfiles(props.userId, props.following));
    }
    getProfiles();
    return () => {
      setProfiles(null);
    };
  }, []);

  return (
    <AccountSuggestionsInside>
      {profiles != null && profiles.length !== 0 ? (
        profiles.map((profile) => {
          return (
            <AccountSuggestionItem
              key={profile.userId}
              userId={profile.userId}
              userIcon={profile.userIcon}
              userName={profile.userName}
              removeFromProfiles={setProfiles}
              loggedInUserId={props.userId}
              following={props.following}
            />
          );
        })
      ) : (
        <div>No accounts suggested</div>
      )}
    </AccountSuggestionsInside>
  );
}

function AccountSuggestionItem(props) {
  const dispatch = useDispatch();

  async function handleClick() {
    await followUserByUserId(props.loggedInUserId, props.userId, false);
    props.removeFromProfiles((prevState) => {
      let newState = prevState.filter((item) => {
        return item.userName !== props.userName;
      });
      return [...newState];
    });
    dispatch(
      setUserFollowing({
        following: [...props.following, props.userId],
      })
    );
  }

  return (
    <AccountSuggestion>
      <AccountSuggestionImageHolder>
        <AccountSuggestionImageLink to={`/profile/${props.userName}`}>
          <AccountSuggestionImage src={props.userIcon}></AccountSuggestionImage>
        </AccountSuggestionImageLink>
      </AccountSuggestionImageHolder>
      <AccountSuggestionUserNameAndFollowersHolder>
        <AccountSuggestionUserNameHolder>
          <AccountSuggestionUserNameText>
            <AccountSuggestionUserNameLink to={`/profile/${props.userName}`}>
              {props.userName}
            </AccountSuggestionUserNameLink>
          </AccountSuggestionUserNameText>
        </AccountSuggestionUserNameHolder>
      </AccountSuggestionUserNameAndFollowersHolder>
      <AccountSuggestionFollowButtonHolder>
        <AccountSuggestionFollowButton onClick={handleClick}>
          Follow
        </AccountSuggestionFollowButton>
      </AccountSuggestionFollowButtonHolder>
    </AccountSuggestion>
  );
}
