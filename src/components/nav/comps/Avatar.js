/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default ({ text }) => (
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
      transition: border-radius 0.25s ease-in-out;
      cursor: pointer;
      &:hover {
        border-radius: 20%;
        transition: border-radius 0.3s ease-in-out;
      }
    `}
  >
    {text}
  </div>
);
