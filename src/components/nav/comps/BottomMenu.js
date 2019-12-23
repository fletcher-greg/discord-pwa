/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Friend } from "./DirectMessages";
export default () => {
  return (
    <div
      css={css`
        background: #202225;
        width: 100%;
        height: 50px;
        place-self: end;
      `}
    >
      <Friend names={["User"]} />
    </div>
  );
};
