/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import QLauncher from "./comps/QLauncher";
import NowPlaying from "./comps/NowPlaying";
import GameUpdate from "./comps/GameUpdate";
const mainStyle = css`
  background: #36393f;
  height: 100%;
  width: 100%;
`;
const topBarStyle = css`
  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);
  height: 45px;
`;
export default () => (
  <div css={mainStyle}>
    <div css={topBarStyle}>
      <h2
        css={css`
          margin: 0;
          color: white;
          text-align: left;
        `}
      >
        Activity
      </h2>
    </div>
    <GameUpdate />
    <QLauncher />
    <NowPlaying />
  </div>
);
