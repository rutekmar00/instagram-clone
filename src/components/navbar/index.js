import React from "react";
import {
  Holder,
  NavigationBar,
  NavigationHolder,
  NavigationElementLeft,
  NavigationElementRight,
  NavigationLink,
  NavigationHomeHeader,
  NavigationIconSpan,
  NavigationIconSVG,
  NavigationIconSVGPath,
  NavigationSignOutButton,
  NavigationIconImage,
} from "../navbar/styles/navbar";

import { firebase } from "../../lib/firebase";

export default function Navbar() {
  return (
    <>
      <Holder>
        <NavigationHolder>
          <NavigationBar>
            <NavigationElementLeft>
              <NavigationLink to={"/main"}>
                <NavigationHomeHeader />
              </NavigationLink>
            </NavigationElementLeft>
            <NavigationElementRight>
              <NavigationLink to={"/main"}>
                <NavigationIconSVG
                  aria-label="Home"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <NavigationIconSVGPath d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
                </NavigationIconSVG>
              </NavigationLink>
              <NavigationLink to={`/profile/`}>
                <NavigationIconSpan>
                  <NavigationIconImage
                    src={process.env.USER_DEFAULT_ICON}
                  ></NavigationIconImage>
                </NavigationIconSpan>
              </NavigationLink>
              <NavigationLink className="last-element" to="/">
                <NavigationSignOut />
              </NavigationLink>
            </NavigationElementRight>
          </NavigationBar>
        </NavigationHolder>
      </Holder>
    </>
  );
}

function NavigationSignOut() {
  function handleSingOut() {
    firebase.auth().signOut();
  }

  return (
    <NavigationSignOutButton
      src="../images/exit.png"
      onClick={handleSingOut}
    ></NavigationSignOutButton>
  );
}
