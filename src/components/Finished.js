import React, { useState } from "react";

const Finished = (props) => {
  console.log("the eend", props.end.end);
  let passage = props.passageIndex.passageIndex;
  console.log("passage", passage);
  if (props.end.end) {
    return (
      <div>
        <p>
          Good job! You completed passage #{passage["i"]} out of{" "}
          {passage["total"]}
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Finished;
