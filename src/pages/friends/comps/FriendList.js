/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
// import { useSpring, animated } from "react-spring";
// LOCAL IMPORTS
import { Avatar, Name } from "../../../components/nav/comps/DirectMessages";
const fDataStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
`;
const FriendData = ({ name }) => (
  <div css={fDataStyle}>
    <Avatar />
    <Name text={name} />
  </div>
);
const Status = () => (
  <div
    css={css`
      width: 250px;
    `}
  >
    <p>Offline</p>
  </div>
);
const MutualServers = () => (
  <div
    css={css`
      width: 250px;
    `}
  >
    <Avatar />
  </div>
);
export default props => {
  return (
    <div
      // onClick={() => setTog(t => !t)}

      css={css`
        display: flex;
        flex-direction: row;

        border-bottom: 1px solid #2f3136;

        cursor: pointer;
        &:hover {
          background-color: #393c43;
          border: none;
        }
      `}
    >
      <FriendData {...props} />
      <Status />
      <MutualServers />
    </div>
  );
};
