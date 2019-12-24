/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Cross from "./Union.svg";
import wordParsing from "../../../funcs/wordParsing";
let testArr = [
  "Fleur",
  "Wesley",
  "Billy",
  "Nick Bob Lando Rey",
  "Nolan",
  "John",
  "Mal"
];
export const Avatar = () => {
  return (
    <div
      css={css`
        width: 45px;
        height: 45px;
        background: #393c43;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: 600;

        cursor: pointer;
        &:hover {
        }
      `}
    ></div>
  );
};
export const Name = ({ text }) => {
  const parsedText = wordParsing(text, 2);
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
      {parsedText}
    </p>
  );
};
const Image = () => (
  <img
    className="unique14891"
    css={css`
      height: 15px;
      align-self: center;
      display: none;
    `}
    src={Cross}
  />
);
export const Friend = ({ names = ["user"] }) => {
  return (
    <>
      {names.map(person => (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            margin-bottom: 1em;
            cursor: pointer;
            &:hover .unique14891 {
              display: block;
            }
          `}
        >
          <Avatar />
          <Name text={person} />
          <Image />
        </div>
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
  <div css={css``}>
    <Title />
    <Friend names={testArr} />
  </div>
);
