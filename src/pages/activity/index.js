/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import QLauncher from "./comps/QLauncher";
import NowPlaying from "./comps/NowPlaying";
import GameUpdate from "./comps/GameUpdate";
import TopBar from "../../components/topBar";
const mainStyle = css`
  background: #36393f;
  height: 100%;
  width: 100%;
`;

export default () => (
  <div css={mainStyle}>
    <TopBar page="activity" />
    <GameUpdate />
    <QLauncher />
    <NowPlaying />
  </div>
);
