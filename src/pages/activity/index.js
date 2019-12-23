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
export default () => (
  <div css={mainStyle}>
    <div>
      <h2
        css={css`
          margin: 0;
          color: white;
          text-align: left;
          box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.75);
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
