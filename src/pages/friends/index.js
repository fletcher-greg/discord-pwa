/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

// LOCAL IMPORTS
import TopBar from "../../components/topBar";
import FriendList from "./comps/FriendList";
const pageStyle = css`
  background: #36393f;
`;

export default () => {
  return (
    <div css={pageStyle}>
      <TopBar page="Friends" />
      <FriendsWrapper />
    </div>
  );
};
