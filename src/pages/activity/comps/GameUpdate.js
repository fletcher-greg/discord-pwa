/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

function calcWords(sentence) {
  let words = sentence.split(" ");
  if (words.length > 16) {
    return words.slice(0, 16).join(" ") + "...";
  }
  return sentence;
}
const Border = () => (
  <div
    css={css`
      border-bottom: 1px solid darkgray;
      width: 80%;
      margin: auto;
    `}
  ></div>
);
const Header = ({ text }) => (
  <h2
    css={css`
      color: white;
      font-size: 15px;
    `}
  >
    {text}
  </h2>
);

const Subtitle = ({ text }) => {
  let parsedText = calcWords(text);
  return (
    <h3
      css={css`
        color: white;
        font-size: 12px;
        padding: 0;
        margin: 0;
      `}
    >
      {parsedText}
    </h3>
  );
};

const MetaData = ({ time, url }) => {
  const SmallP = ({ text }) => (
    <p
      css={css`
        color: white;
        font-size: 10px;
        margin-right: 1em;
      `}
    >
      {text}
    </p>
  );
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <SmallP text={time} />
      <SmallP text={url} />
    </div>
  );
};
export default () => (
  <div
    css={css`
      width: 300px;
      min-height: 100px;
      border-radius: 10px;
      background: #231f1f;
      transition: 0.25s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: translateY(10px);
        transition: 0.3s ease-in-out;
        background: #161414;
      }
    `}
  >
    <Header text="Hook line and inker" />
    <Subtitle text="Can you believe it? Winter's Feat is almost here! After another great year for Don't Starve Together, let" />
    <div>
      <Border />
    </div>
    <MetaData time="a month ago" url="steamcommunity.com" />
  </div>
);
