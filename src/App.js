import logo from "./logo.svg";
import "./App.css";
import TypeContainer from "./TypeContainer";

function App() {
  let text = "The quick brown fox jumped over the lazy dog";
  let textArr = text.split("");
  return (
    <div className="App">
      <TypeContainer text={textArr} />
    </div>
  );
}

export default App;
