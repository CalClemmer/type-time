import React, { useState } from "react";

const Text = (props) => {
  let [index, setIndexValue] = useState(0);
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
