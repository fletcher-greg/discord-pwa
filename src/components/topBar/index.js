/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const topBarStyle = css`
  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);
  height: 45px;
`;

const titleStyle = css`
  margin: 0;
  color: white;
  text-align: left;
`;
export default ({ page }) => (
  <div css={topBarStyle}>
    <h2 css={titleStyle}>{page}</h2>
  </div>
);
