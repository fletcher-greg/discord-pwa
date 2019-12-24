/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
// LOCAL IMPORTS
import Avatar from "../../../components/nav/comps/Avatar";
export default ({ name }) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}
  >
    <Avatar text={name} />
    <p>Offline</p>
  </div>
);
