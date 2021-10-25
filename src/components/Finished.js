import React, { useState } from "react";

const Finished = (props) => {
  let passage = props.passageIndex.passageIndex;
  if (props.end.end) {
    return (
      <div>
        <p>
          Good job! You completed line #{passage["i"]} out of {passage["total"]}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        line #{passage["i"]} out of {passage["total"]}
      </div>
    );
  }
};

export default Finished;
