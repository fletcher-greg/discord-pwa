/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
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
/* const HoverIcon = () => (
  <div
    css={css`
      width: 5px;
      height: 20px;
      background: white;
      position: absolute;
      left: 0;
      top: 20px;
    `}
  ></div>
); */
const HoverIcon = styled.div`
  width: 5px;
  height: 20px;
  background: white;
  position: absolute;
  left: 0;
  top: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  &:hover ${HoverIcon} {
    background: blue;
  }
`;
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
        <Wrapper>
          >
          <HoverIcon />
          <Avatar text={person} />
        </Wrapper>
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
