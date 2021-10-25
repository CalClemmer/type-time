import React, { useState, useEffect } from "react";
import Text from "./Text";
import Finished from "./Finished";
import axios from "axios";

const TypeContainer = (props) => {
  //   const [key, setKey] = useState("placeholder");
  let [index, setIndexValue] = useState(0);
  let [text, setText] = useState("х   loading   х".split(""));
  let [mistakes, setMistakes] = useState(0);
  let [began, setBegan] = useState(0);
  let [end, setEnd] = useState(false);
  let [CPM, setCPM] = useState();
  let [WPM, setWPM] = useState();
  let [accuracy, setAccuracy] = useState(100);
  let [typedText, setTypedText] = useState([]);
  let [passageIndex, setPassageIndex] = useState([0]);

  let url = "text/";

  // grabbing text data
  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    axios.get(url).then((response) => {
      // console.log(response);
      // pick a random response to display
      let i = Math.floor(response.data.text.length * Math.random());
      setPassageIndex({ i: i, total: response.data.text.length });
      //   console.log(response.data)
      setText(response.data.text[i].text.split(""));
    });
  }, []);

  // current function to update text once it's typed,
  // will improve if I have time
  function changeText(key) {
    // text[index] = "_"; //old way of doing it
    typedText.push(key);
  }

  function changeTypedText() {
    setText(text.splice(1));
  }

  // what to do on key press
  function keyPress(key) {
    let textLength = text.length;
    // console.log("textLength", textLength);
    // disable arrows
    if (key.key === "ArrowRight" || key.key === "ArrowLeft") {
      prevent(key);
    }

    // prevent incorrect key strokes from rendering
    if (key.key !== text[0]) {
      prevent(key);
    }

    // makes sure to ignore shift key and also checks that you haven't finished
    if (!end && key.key !== "Shift" && key.key !== "Backspace") {
      // Why is there a delay in rendering accuracy correctly
      // Because index

      // check if pressed key matches text
      // if (key.key === text[index])
      if (key.key === text[0]) {
        // console.log(key.timeStamp);
        if (began === 0) {
          setBegan(key.timeStamp);
        }
        changeText(key.key);
        changeTypedText(); // this messes with text. Fine before, awful after
        setIndexValue(index); // was plus one, but now index is always 0!
        if (typedText.length > 1) {
          // calculate speed of typing and update it
          let cpm = Math.round(
            (typedText.length * 60000) / (key.timeStamp - began)
          );
          let wpm = Math.round(cpm / 4.5);
          setCPM(cpm);
          setWPM(wpm);
        }
        console.log("typedtext", typedText);
        if (key.key === " ") {
          document.getElementById("myInput").value = "";
        }

        // if (text.length === index + 1) {
        console.log("text", text, "text length", text.length);
        if (textLength === 1) {
          setEnd(true);
        }
        // increment mistake counter if game has started and a mistake is made
      } else if (began !== 0) {
        setMistakes(mistakes + 1);
        // document.getElementById("myInput").value = "You dun goofed";
      }
    }
    // calculate accuracy
    setAccuracy(
      Math.round(
        (100 * (typedText.length + 1)) / (1 + typedText.length + mistakes)
      )
    );
  }

  function prevent(e) {
    e.preventDefault();
  }

  return (
    <div className="type-container">
      <h1>Type Time</h1>
      <Text typedText={typedText} text={text} />
      <br />
      <input
        autoFocus
        type="text"
        id="myInput"
        onKeyDown={(event) => keyPress(event)}
        autoComplete="off"
        onPaste={prevent}
      ></input>
      <br />
      <br />
      <Finished end={{ end }} passageIndex={{ passageIndex }} />
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
