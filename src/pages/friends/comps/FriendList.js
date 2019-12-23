/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default ({ name }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}
  >
    <p>{name}</p>
    <p>Offline</p>
  </div>
);
