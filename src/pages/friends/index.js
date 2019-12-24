/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

// LOCAL IMPORTS
import TopBar from "./comps/TopBar";
import FriendList from "./comps/FriendList";
const pageStyle = css`
  background: #36393f;
`;
const ColumnInfo = () => {
  const P = ({ text }) => (
    <p
      css={css`
        margin-left: 3.3em;
      `}
    >
      {text}
    </p>
  );
  const info = ["NAME", "STATUS"];
  const columnStyle = css`
    display: flex;
    flex-direction: row;
  `;
  const pWrapper = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 195px;
  `;
  return (
    <div css={columnStyle}>
      {info.map(n => (
        <div css={pWrapper}>
          <P text={n} />
        </div>
      ))}
    </div>
  );
};
export default () => {
  const [tog, setTog] = useState(true);

  return (
    <div css={pageStyle}>
      <TopBar setTog={setTog} page="Friends" />
      <ColumnInfo />
      <FriendList tog={tog} />
    </div>
  );
};
