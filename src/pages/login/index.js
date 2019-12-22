import React, { useContext } from "react";

import useForm from "../../components/customHooks/useForm";
import { UserContext } from "../../util/UserContext";

export default () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>{user}</h2>
      <input name="email" value={values.email} onChange={handleChange} />
    </div>
  );
};
