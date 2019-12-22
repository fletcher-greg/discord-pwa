import React, { useRef, useEffect, useState } from "react";
// import useFetch from "../../hooks/useFetch";
export default () => {
  const inputRef = useRef();
  const [email, setEmail] = useState("");
  //   const [margin, setMargin] = useState(0);
  //   const [keyPress, setKeyPress] = useState(0);
  //   const [theColor, setTheColor] = useState(0);
  //   const colors = `rgb(0, ${theColor}, 0)`;

  //   const MyDiv = () => (
  //     <div style={{ marginLeft: margin, background: colors }}> hi</div>
  //   );

  //   useEffect(() => {
  //     setKeyPress(count => count + 1);
  //     return () => console.log("unmount");
  //   }, [email]);

  //   useEffect(() => {
  //     //   const mouseMove = e => setMargin(c => c + 1);
  //     let switchIt = true;
  //     if (theColor >= 255) {
  //       switchIt = false;
  //       console.log(theColor);
  //     } else if (theColor <= 0) {
  //       switchIt = true;
  //     }
  //     const mouseMove = e => {
  //       if (switchIt) {
  //         console.log(theColor);
  //         return setTheColor(c => c + 1);
  //       } else {
  //         console.log("did not work");
  //         return setTheColor(c => c - 1);
  //       }
  //     };
  //     window.addEventListener("mousemove", mouseMove);
  //     return () => {
  //       window.removeEventListener("mousemove", mouseMove);
  //     };
  //   }, []);
  //   const { data, loading } = useFetch("http://numbersapi.com/42/trivia");

  return (
    <div>
      {/* <MyDiv />
      <p>{keyPress}</p> */}
      {/* {!data ? <p>loading</p> : <p>{data}</p>} */}
      <input
        name="buddy"
        value={email}
        onChange={e => setEmail(e.target.value)}
        ref={inputRef}
      ></input>
      <button>Click me</button>
    </div>
  );
};
