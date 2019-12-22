/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
const bg = css`
  background: #101935;
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;
export default () => (
  <div
    css={css`
      width: 300px;
    `}
  >
    {" "}
    <h2
      css={css`
        color: lightgray;
        font-size: 15px;
        text-align: left;
        letter-spacing: 1px;
      `}
    >
      Now playing
    </h2>
    <div css={bg}></div>
  </div>
);
