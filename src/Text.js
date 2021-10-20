import React, { useState } from "react";

const Text = (props) => {
  let [index, setIndexValue] = useState(0);

  // if (props.input === textArr[index]) {
  //   console.log("Yay", index);
  //   textArr[index] = "_";
  //   setIndexValue(index + 1);
  //   console.log("explain it");
  //   // issue: can't edit string
  //   // solution: ...work with arrays?
  // }

  return <div>{props.text}</div>;
};

export default Text;
