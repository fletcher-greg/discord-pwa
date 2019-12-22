/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
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
export default () => (
  <nav
    css={css`
      background: #393c43;
    `}
  >
    <ul
      css={css`
        list-style-type: none;
      `}
    >
      <li>
        <NavLink page="Home" url="/" />
      </li>
      <li>
        <NavLink page="Login" to="/login" />
      </li>
      <li>
        <NavLink page="About" to="/about" />
      </li>
    </ul>
  </nav>
);
