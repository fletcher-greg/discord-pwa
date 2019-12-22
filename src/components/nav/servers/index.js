/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import Avatar from "../comps/Avatar";
let testArr = ["Greg", "Rust", "Chin", "FCC"];
export default () => {
  return (
    <div>
      {testArr.map(person => (
        <div>{person} </div>
      ))}
    </div>
  );
};
