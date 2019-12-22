/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
let boxes = ["Star wars", "DW", "Starving"];
function GameBox({ text }) {
  return (
    <div
      css={css`
        background: #4f545c;
        height: 60px;
        width: 60px;
        border-radius: 10px;
        color: white;
      `}
    >
      <p
        css={css`
          text-align: center;
        `}
      >
        {text}
      </p>
    </div>
  );
}
export default () => (
  <div
    css={css`
      width: 300px;
    `}
  >
    <h2
      css={css`
        text-align: left;
        font-size: 14px;
        letter-spacing: 1px;
        color: lightgray;
      `}
    >
      Quick Launcher
    </h2>
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      {boxes.map(box => (
        <GameBox text={box} />
      ))}
    </div>
  </div>
);
