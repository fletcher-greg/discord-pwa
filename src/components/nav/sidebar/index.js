/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
// LOCAL IMPORTS
import DirectMessages from "../comps/DirectMessages";

const NavLink = ({ url, page }) => (
  <Link
    css={css`
      color: white;

      text-decoration: none;
    `}
    to={url}
  >
    {page}
  </Link>
);
const List = ({ ...props }) => (
  <li
    css={css`
      padding: 0.5em;
      cursor: pointer;
      text-align: left;
      &:hover {
        background: #393c43;
      }
    `}
  >
    <NavLink {...props} />
  </li>
);

const MainMenu = () => (
  <ul
    css={css`
      list-style-type: none;
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
    `}
  >
    <List page="Activity" url="/activity" />

    <List page="Library" url="/library" />

    <List page="Nitro" url="/nitro" />

    <List page="Friends" url="/friends" />
  </ul>
);
export default () => (
  <nav
    css={css`
      background: #2f3136;
    `}
  >
    <MainMenu />
    <DirectMessages />
  </nav>
);
