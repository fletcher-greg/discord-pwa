/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// LOCAL IMPORTS
import TopBar from "../../components/topBar";
import FriendList from "./comps/FriendList";
const freunden = ["Sally", "Chewie", "Hal", "Chris"];
const pageStyle = css`
  background: #36393f;
`;
export default () => {
  return (
    <div css={pageStyle}>
      <TopBar page="Friends" />
      {freunden.map(friend => (
        <FriendList name={friend} />
      ))}
    </div>
  );
};
