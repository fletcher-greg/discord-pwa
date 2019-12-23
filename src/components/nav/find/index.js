/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 45px;
        background: #2f3136;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
          0 2px 0 rgba(4, 4, 5, 0.05);
      `}
    >
      <button
        css={css`
          outline: none;
          border: none;
          background: #202225;
          width: 80%;
          color: #35373c;
          font-size: 0.9rem;
          padding: 0.45em;
          border-radius: 4px;
        `}
      >
        Find or start a conversation
      </button>
    </div>
  );
};
