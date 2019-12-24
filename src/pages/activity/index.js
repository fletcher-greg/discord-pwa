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
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 1000px;
    margin: 0 auto;
  `;
  const rightCol = css``;
  const leftCol = css`
    display: grid;
    grid-template-columns: auto auto;
  `;

  let news = [
    {
      title: "Can you believe it?",
      sub:
        "Coming to Steam, Xbox One and Wegame next week on December 12th, we will be bringing Hook, Line and Inker to the live servers along with this year's Winter's Feast event.",
      time: "A week ago",
      url: "steamcommunity"
    },
    {
      title: "That's a wrap!",
      sub:
        "Coming to Steam, Xbox One and Wegame next week on December 12th, we will be bringing Hook, Line and Inker to the live servers along with this year's Winter's Feast event.",
      time: "A week ago",
      url: "steamcommunity"
    },
    {
      title: "Looking good!",
      sub: "Do whatever it takes, but most importantly, Don't Starve.",
      time: "A year ago",
      url: "steamcommunity"
    },
    {
      title: "Patching the bugs",
      sub: "We're sorry about the bugs, hopefully this patch will squash them!",
      time: "2 hours ago",
      url: "steamcommunity"
    },
    {
      title: "Loot boxes...rip",
      sub:
        "We've given in.  The game is full of loot boxes.  It's pay to win, or it's not worth it.  Maybe it's not worth it...",
      time: "1 second ago",
      url: "steamcommunity"
    }
  ];
  return (
    <div css={contentstyle}>
      <div css={leftCol}>
        <div>
          {news.map(card => (
            <GameUpdate {...card} />
          ))}
        </div>
        <div>
          {news.map(card => (
            <GameUpdate {...card} />
          ))}
        </div>
      </div>
      <div css={rightCol}>
        <QLauncher />
        <NowPlaying />
      </div>
    </div>
  );
};

export default () => (
  <div css={mainStyle}>
    <TopBar page="activity" />
    <Content />
  </div>
);
