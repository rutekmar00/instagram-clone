import styled from "styled-components/macro";
import { Title } from "../../signin/styles/signin";
import { Link } from "react-router-dom";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  height: 54px;
  position: fixed;
  width: 100%;
  order: 0;
  z-index: 2;
`;

export const NavigationHolder = styled.nav`
  order: 0;
  padding: 0;
  background-color: rgba(250, 250, 250, 1);
  height: 100%;
  top: 0;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
  transition: height 0.2s ease-in-out;
`;

export const NavigationBar = styled.div`
  display: flex;
  z-index: 3;
  padding: 0 20px;
  max-width: 975px;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
`;

export const NavigationElementLeft = styled.div`
  display: flex;
  flex: 1 9999 0%;
  min-width: 40px;
  margin-left: 20px;
`;

export const NavigationLink = styled(Link)`
  color: rgba(0, 55, 107, 1);
  text-decoration: none;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 22px;
  }
`;

export const NavigationHomeHeader = styled(Title)`
  align-content: stretch;
  height: 29px;
  width: 103px;
  object-fit: contain;
  background-size: 103px 29px;
  margin: 7px 0px 0px 0px;
`;

export const NavigationElementRight = styled.div`
  display: flex;
  flex: 1 0 0%;
  min-width: 40px;
  justify-content: flex-end;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 20px;
`;

export const NavigationIconSVG = styled.svg`
  display: block;
  position: relative;
`;

export const NavigationIconSpan = styled.div`
  height: 25px;
  width: 25px;
  box-sizing: border-box;
  border: 2px solid #b8b8b8;
  border-radius: 50%;
  background-color: rgba(250, 250, 250, 1);
  display: block;
  overflow: hidden;
  position: relative;
`;

export const NavigationIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavigationIconSVGPath = styled.path``;

export const NavigationSignOutButton = styled.img``;
