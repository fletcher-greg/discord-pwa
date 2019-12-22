import { useEffect, useState } from "react";

export default url => {
  const [state, setState] = useState(() => ({
    data: JSON.parse(localStorage.getItem("trivia")),
    loading: true
  }));

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(res => res.text())
      .then(data => {
        localStorage.setItem("trivia", JSON.stringify(data));
        setState({ data, loading: false });
        console.log("hi");
      });
  }, [url]);
  return state;
};
