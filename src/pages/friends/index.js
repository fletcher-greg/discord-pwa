/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import { useSpring, animated } from "react-spring";
// LOCAL IMPORTS
import TopBar from "../../components/topBar";
import FriendList from "./comps/FriendList";
const freunden = ["Sally", "Chewie", "Hal", "Chris"];
const pageStyle = css`
  background: #36393f;
`;

const FriendsWrapper = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {freunden.map(friend => (
        <FriendList onClick={() => setToggle(tog => !tog)} name={friend} />
      ))}
    </div>
  );
};

export default () => {
  return (
    <div css={pageStyle}>
      <TopBar page="Friends" />
      <FriendsWrapper />
    </div>
  );
};
