/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Header = ({ text }) => (
  <h2
    css={css`
      color: white;
      font-size: 15px;
      margin: 0;
      padding: 0;
    `}
  >
    {text}
  </h2>
);

const Subtitle = ({ text }) => {
  return (
    <h3
      css={css`
        color: white;
        font-size: 12px;
        padding: 0;
        margin: 0;
      `}
    >
      {text}
    </h3>
  );
};

export default () => (
  <div>
    <Header text="No games found" />
    <Subtitle text="Hm, seems you don't have any games. Purchase games and they'll show up here!" />
  </div>
);
