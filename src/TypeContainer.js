import React, { useState, useEffect } from "react";
import Text from "./Text";
import Input from "./Input";

const TypeContainer = (props) => {
  const [key, setKey] = useState("placeholder");
  let [index, setIndexValue] = useState(0);
  let [text, setText] = useState(props.text);
  let [mistakes, setMistakes] = useState(0);
  let [began, setBegan] = useState(0);
  let [end, setEnd] = useState(false);
  let [CPM, setCPM] = useState();
  let [WPM, setWPM] = useState();
  let [accuracy, setAccuracy] = useState(100);

  useEffect(() => {});

  function changeText(index) {
    text[index] = "_";
  }

  function keyPress(key) {
    if (!end) {
      // Ignore shift key inputs dumkoff
      // Why is there a delay in rendering accuracy correctly
      // Because index
      if (key.key === text[index]) {
        console.log(key.timeStamp);
        if (began === 0) {
          setBegan(key.timeStamp);
        }
        changeText(index);
        setIndexValue(index + 1);
        if (index > 0) {
          let cpm = Math.round(((index + 1) * 60000) / (key.timeStamp - began));
          let wpm = Math.round(cpm / 4.5);
          setCPM(cpm);
          setWPM(wpm);
        }

        if (text.length === index + 1) {
          setEnd(true);
        }
      } else if (began !== 0) {
        setMistakes(mistakes + 1);
      }
    }
    setAccuracy(Math.round((100 * (index + 1)) / (1 + index + mistakes)));
  }

  return (
    <div>
      <h1>Type Time</h1>
      <Text text={text} />
      <br />
      <input
        autoFocus
        type="text"
        id="myInput"
        onKeyDown={(event) => keyPress(event)}
        autocomplete="off"
        placeholder="Type here"
      ></input>
      <p>Mistakes: {mistakes}</p>
      <p>Accuracy: {accuracy}% </p>
      <p>CPM: {CPM}</p>
      <p>WPM: {WPM}</p>
    </div>
  );
};

export default TypeContainer;

// This file needs to capture the keyboard inputs
// and pass them down into input and text

// Capture input
// Give that input to text and input
