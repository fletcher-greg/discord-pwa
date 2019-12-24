/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { useTrail, animated } from "react-spring";
// LOCAL IMPORTS
import { Avatar, Name } from "../../../components/nav/comps/DirectMessages";
const fDataStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
`;
const FriendData = ({ name }) => (
  <div css={fDataStyle}>
    <Avatar />
    <Name text={name} />
  </div>
);
const Status = () => (
  <div
    css={css`
      width: 250px;
    `}
  >
    <p>Offline</p>
  </div>
);
const MutualServers = () => (
  <div
    css={css`
      width: 250px;
      display: flex;
      align-items: center;
    `}
  >
    <Avatar />
  </div>
);

const freunden = ["Sally", "Chewie", "Hal", "Chris"];

export default ({ tog }) => {
  const [trail, set] = useTrail(freunden.length, () => ({
    config: { duration: 400 },

    from: { opacity: 0, height: 0, display: "none" },
    to: {
      opacity: 1,
      height: 62,
      display: "flex"
    }
  }));
  console.log("again");
  useEffect(() => {
    console.log("hi");
    async function test() {
      await set({ opacity: tog ? 1 : 0, height: tog ? 62 : 0 });

      console.log("finished");
    }
    test();
  }, [tog]);
  return (
    <div>
      {trail.map((props, index) => (
        <animated.div
          // onClick={() => setTog(t => !t)}
          style={props}
          css={css`
            display: flex;
            flex-direction: row;

            border-bottom: 1px solid #2f3136;

            cursor: pointer;
            &:hover {
              background-color: #393c43;
              border: none;
            }
          `}
        >
          <FriendData name={freunden[index]} />
          <Status />
          <MutualServers />
        </animated.div>
      ))}
    </div>
  );
};
const FriendList = props => {
  return (
    <div
      // onClick={() => setTog(t => !t)}

      css={css`
        display: flex;
        flex-direction: row;

        border-bottom: 1px solid #2f3136;

        cursor: pointer;
        &:hover {
          background-color: #393c43;
          border: none;
        }
      `}
    >
      <FriendData {...props} />
      <Status />
      <MutualServers />
    </div>
  );
};
