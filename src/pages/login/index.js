/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";

import useForm from "../../components/customHooks/useForm";
import { UserContext } from "../../util/UserContext";

export default () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const { user, setUser } = useContext(UserContext);
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        background: #9cc8f4;
        width: 100vw;
      `}
    >
      <h2>{user}</h2>
      <input name="email" value={values.email} onChange={handleChange} />
    </div>
  );
};
