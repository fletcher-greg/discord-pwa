/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

// LOCAL IMPORTS
import TopBar from "./comps/TopBar";
import FriendList from "./comps/FriendList";
const pageStyle = css`
  background: #36393f;
`;

export default () => {
  const [tog, setTog] = useState(true);
  return (
    <div css={pageStyle}>
      <TopBar setTog={setTog} page="Friends" />
      <FriendList tog={tog} />
    </div>
  );
};
