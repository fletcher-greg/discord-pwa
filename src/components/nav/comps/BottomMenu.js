/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

// import HSet from "../assets/headset.svg";
// import MicOn from "../assets/mic-on.svg";
// import MicOff from "../assets/mic-off.svg";

const HeadSet = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" opacity=".1" fill="none" />
    <path
      fill="grey"
      d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"
    />
  </svg>
);
const MicOff = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none" />
    <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
  </svg>
);

const MicOn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="grey"
      d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
export const Avatar = () => {
  return (
    <div
      css={css`
        width: 35px;
        height: 35px;
        background: #393c43;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: 600;
        margin-left: 0.9em;

        cursor: pointer;
        &:hover {
        }
      `}
    ></div>
  );
};

const Name = ({ text }) => {
  return (
    <p
      css={css`
        margin: 0;
        padding: 0;
        align-self: center;
        margin-left: 1em;
        width: 50%;
        font-size: 1rem;
      `}
    >
      {text}
    </p>
  );
};

const Friend = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          margin-bottom: 1em;
          align-items: center;
          cursor: pointer;
          &:hover .unique14891 {
            display: block;
          }
        `}
      >
        <Avatar />
        <Name text="User" />
        <HeadSet />
        <MicOn />
      </div>
    </>
  );
};
export default () => {
  return (
    <div
      css={css`
        background: #202225;
        width: 100%;
        height: 50px;
        place-self: end;
      `}
    >
      <Friend names={["User"]} />
    </div>
  );
};
