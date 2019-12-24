/** @jsx jsx */
import React, { useState } from "react";
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

const btnWrapper = css`
  width: 400px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const OptBtn = ({ name, setTog }) => {
  const [on, setOn] = useState(false);
  const btnStyle = css`
    margin: 0;
    padding: 0;
    background: ${on ? "#3e4249" : "none"};
    outline: none;
    border: none;
    color: white;
    padding: 0.3em 0.6em;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 4px;
  `;
  return (
    <button
      css={btnStyle}
      onClick={() => {
        setOn(s => !s);
        setTog(t => !t);
      }}
    >
      {name}
    </button>
  );
};

const AddFriend = () => {
  const [on, setOn] = useState(true);
  const addFStyle = css`
    margin: 0;
    padding: 0;
    background: ${on ? "#43b581" : "#38524c"};
    outline: none;
    border: none;
    color: ${on ? "white" : "#43b581"};
    padding: 0.3em 0.6em;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 4px;
  `;
  return (
    <button onClick={() => setOn(t => !t)} css={addFStyle}>
      Add Friend
    </button>
  );
};
const btns = ["Online", "All", "Pending", "Blocked"];
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
      <AddFriend />
    </div>
  </div>
);
