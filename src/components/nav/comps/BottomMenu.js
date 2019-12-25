/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

// import HSet from "../assets/headset.svg";
// import MicOn from "../assets/mic-on.svg";
// import MicOff from "../assets/mic-off.svg";

const HeadSet = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" opacity=".1" fill="none" />
    <path
      fill="grey"
      d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"
    />
  </svg>
);
const MicOff = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none" />
    <path
      d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"
      fill="grey"
    />
  </svg>
);

const MicOn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="grey"
      d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const Settings = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.24 6.07692C7.4 5.61538 8.104 4.69231 9.64 4.69231L10.12 1H15.88L16.36 4.69231C16.84 4.69231 17.992 4.96923 18.76 6.07692L22.12 4.69231L25 9.30769L22.6 11.6154C22.92 12.0769 23.368 13.2769 22.6 14.3846L25 16.2308L22.12 21.3077L18.76 19.9231C18.44 20.3846 17.512 21.3077 16.36 21.3077L15.88 25H10.12L9.64 21.3077C9 21.3077 7.624 21.0308 7.24 19.9231L3.88 21.3077L1 16.6923L3.88 14.3846C3.56 13.9231 3.112 12.8154 3.88 12.0769L1 9.76923L3.88 4.69231L7.24 6.07692ZM13.48 17.6154C16.131 17.6154 18.28 15.549 18.28 13C18.28 10.451 16.131 8.38462 13.48 8.38462C10.829 8.38462 8.68 10.451 8.68 13C8.68 15.549 10.829 17.6154 13.48 17.6154Z"
      fill="grey"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const Avatar = () => {
  return (
    <div
      css={css`
        width: 35px;
        height: 35px;
        background: #393c43;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: 600;
        margin-left: 0.9em;
        margin-right: 8px;

        cursor: pointer;
        &:hover {
        }
      `}
    ></div>
  );
};

const Name = ({ text }) => {
  return (
    <p
      css={css`
        margin: 0;
        padding: 0;

        width: 50%;
        font-size: 0.9rem;
        font-weight: 700;
      `}
    >
      {text}
    </p>
  );
};
const idStyle = css`
  color: grey;
  padding: 0;
  margin: 0;

  font-size: 0.7rem;
`;
const ID = ({ _id }) => <p css={idStyle}>#{_id}</p>;
const UserMeta = () => {
  const compStyle = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    /* justify-content: flex-start; */
  `;
  return (
    <div css={compStyle}>
      <Name text="user" />
      <ID _id={1234} />
    </div>
  );
};

const Icons = () => {
  const compStyle = css`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-evenly;
  `;
  const IconBtn = ({ setMute, children }) => {
    const compStyle = css`
      border: none;
      outline: none;
      background: none;
      margin: 0;
      padding: 0;
      background: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
    `;
    return (
      <button onClick={() => setMute && setMute(t => !t)} css={compStyle}>
        {children}
      </button>
    );
  };
  const [mute, setMute] = useState(false);
  return (
    <div css={compStyle}>
      <IconBtn setMute={setMute}>{mute ? <MicOff /> : <MicOn />}</IconBtn>
      <IconBtn>
        <HeadSet />
      </IconBtn>
      <IconBtn>
        <Settings />
      </IconBtn>
    </div>
  );
};

const Friend = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          &:hover .unique14891 {
            display: block;
          }
        `}
      >
        <Avatar />
        <UserMeta />
        <Icons />
      </div>
    </>
  );
};
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
