/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Avatar from "../comps/Avatar";
import Line from "../../decoration/Line";
let testArr = ["CSS", "Rust", "Chin", "FCC"];
const UserAvatar = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1em;
    `}
  >
    <Avatar {...props}></Avatar>
  </div>
);
const HoverIcon = () => (
  <div
    className="unique1237"
    css={css`
      width: 5px;
      height: 20px;
      background: white;
      position: absolute;
      left: 0;
      top: 20px;
    `}
  ></div>
);
/* const Wrapper = () => <div ></div> */
const ServerAvatars = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1em;
      `}
    >
      {testArr.map(person => (
        <div
          css={css`
            width: 100%;
            position: relative;
            display: grid;
            place-items: center;
            &:hover .unique1237 {
              background: blue;
            }
          `}
        >
          <HoverIcon />
          <Avatar text={person} />
        </div>
      ))}
    </div>
  );
};

export default () => {
  return (
    <div
      css={css`
        background: #202225;
      `}
    >
      <UserAvatar text="Greg" />
      <Line />
      <ServerAvatars />
    </div>
  );
};
