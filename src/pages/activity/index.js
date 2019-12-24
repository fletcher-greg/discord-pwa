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

const Content = () => {
  const contentstyle = css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100%;
  `;
  return (
    <div>
      <GameUpdate />
      <QLauncher />
      <NowPlaying />
    </div>
  );
};

export default () => (
  <div css={mainStyle}>
    <TopBar page="activity" />
    <Content />
  </div>
);
