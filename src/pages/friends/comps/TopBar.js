/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const topBarStyle = css`
  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const titleStyle = css`
  margin: 0;
  color: white;
  text-align: left;
  text-align: center;
`;

const btnStyle = css`
  margin: 0;
  padding: 0;
  background: #3e4249;
  outline: none;
  border: none;
  color: white;
  padding: 0.3em 0.6em;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  border-radius: 4px;
`;
const btnWrapper = css`
  width: 250px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const OptBtn = ({ name, setTog }) => (
  <button css={btnStyle} onClick={() => setTog(t => !t)}>
    {name}
  </button>
);
const btns = ["Online", "all", "pending", "blocked"];
export default ({ page, setTog }) => (
  <div css={topBarStyle}>
    <div
      css={css`
        width: 130px;
      `}
    >
      <h2 css={titleStyle}>{page}</h2>
    </div>
    <div css={btnWrapper}>
      {btns.map(name => (
        <OptBtn setTog={setTog} name={name} />
      ))}
    </div>
  </div>
);
