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
  const P = ({ text }) => <p>{text}</p>;
  const info = ["NAME", "STATUS"];
  const columnStyle = css``;
  return (
    <div css={columnStyle}>
      {info.map(n => (
        <P text={n} />
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
