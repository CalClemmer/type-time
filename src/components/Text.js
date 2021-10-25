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
  console.log(props);

  return (
    <div>
      <h5>
        <span className="typed-text">{props.typedText}</span>
        {props.text}
      </h5>
    </div>
  );
};

export default Text;
