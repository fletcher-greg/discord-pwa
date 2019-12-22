/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import worParsing from "../../../funcs/wordParsing";
let testArr = [1, 2, 3, 4, 5, 7];
const Avatar = () => {
  return (
    <div
      css={css`
        width: 60px;
        height: 60px;
        background: #393c43;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: 600;
        margin-bottom: 1em;

        cursor: pointer;
        &:hover {
        }
      `}
    ></div>
  );
};
const Friend = () => {
  return (
    <>
      {testArr.map(person => (
        <Avatar />
      ))}
    </>
  );
};
const Title = () => (
  <div>
    <h2
      css={css`
        color: grey;
        position: relative;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
          color: white;
        }
      `}
    >
      Direct Messages
      <span
        css={css`
          position: absolute;
          right: 15px;
          font-size: 1.2rem;

          color: grey;
        `}
      >
        +
      </span>
    </h2>
  </div>
);

export default () => (
  <div>
    <Title />
    <Friend />
  </div>
);
