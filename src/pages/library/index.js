/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import NoGames from "./comps/NoGames";

export default () => {
  const noGames = true;
  return (
    <div
      css={css`
        height: 100%;
        background: #36393f;
        ${noGames ? "display: grid; place-items: center" : ""}
      `}
    >
      <NoGames />
    </div>
  );
};
