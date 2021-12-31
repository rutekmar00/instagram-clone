import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const RightSideHolder = styled.div`
  max-width: 293px;
  width: 100%;

  @media only screen and (max-width: 935px) {
    order: 1;
  }
`;

export const AccountHolder = styled.div`
  display: flex;
  height: auto;
  margin-top: 18px;
  margin-bottom: 10px;
  width: 100%;
  margin-right: 4px;
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
`;

export const AccountImageHolder = styled.div`
  margin-right: 12px;
  width: 56px;
`;

export const AccountImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const AccountImageLink = styled(Link)`
  width: 56px;
  height: 56px;
  cursor: pointer;
  background-color: rgba(250, 250, 250, 1);
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  position: relative;
  border: 2px solid #b8b8b8;

  &:visited {
    color: rgba(0, 55, 107, 1);
    text-decoration: none;
  }
`;

export const AccountUserNameHolder = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;

export const AccountUserName = styled.div`
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(38, 38, 38, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  padding-right: 150px;
`;

export const AccountUserNameLink = styled(Link)`
  color: rgba(38, 38, 38, 1);
  overflow-x: hidden;
  text-decoration: none;
  cursor: pointer;
`;

export const AccountSuggestionsHolder = styled.div`
  background-color: rgba(250, 250, 250, 1);
  margin: 22px 0 12px -16px;
  width: calc(100% + 32px);
`;

export const AccountSuggestionsText = styled.div`
  padding: 4px 16px;
  margin-top: 12px;
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  color: rgba(142, 142, 142, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin: -3px 0 -4px;
`;

export const AccountSuggestionsInside = styled.div`
  display: flex;
  margin-left: 4px;
  margin-bottom: 4px;
  flex: 0 0 auto;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding: 8px 0px;
  height: auto;
  overflow: hidden auto;
  flex-direction: column;
`;

export const AccountSuggestion = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
`;

export const AccountSuggestionImageHolder = styled.div`
  display: flex;
  margin-right: 12px;
  position: relative;
`;

export const AccountSuggestionImageLink = styled(AccountImageLink)`
  width: 32px;
  height: 32px;
`;

export const AccountSuggestionImage = styled(AccountImage)``;

export const AccountSuggestionUserNameAndFollowersHolder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  justify-content: center;
`;

export const AccountSuggestionUserNameHolder = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(38, 38, 38, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const AccountSuggestionUserNameText = styled.span`
  display: inline;
  position: relative;
`;

export const AccountSuggestionUserNameLink = styled(Link)`
  padding-left: 5px;
  margin-left: -5px;
  text-decoration: none;
  color: #262626;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccountSuggestionFollowButtonHolder = styled.div`
  display: flex;
  margin-left: 8px;
`;

export const AccountSuggestionFollowButton = styled.button`
  border: 0;
  color: rgba(0, 149, 246, 1);
  display: inline;
  padding: 0;
  position: relative;
  appearance: none;
  background: 0 0;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  user-select: none;
  width: auto;
  margin: 0px 14px;
  font-size: 12px;
  line-height: 14px;
`;
