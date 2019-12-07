import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>{" "}
      <li>
        <Link to="/login">login</Link>
      </li>{" "}
      <li>
        <Link to="/about">about</Link>
      </li>
    </ul>
  </nav>
);
