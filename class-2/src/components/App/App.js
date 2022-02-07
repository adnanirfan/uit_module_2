import logo from "./../../logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "../Counter/Counter";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => {
    alert("ON Click Working!!!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Counter value={value} setValue={setValue} />

        {/* <h1>{value}</h1>
        <button onClick={() => setValue(value - 1)}>Decrement</button> */}

        <button onClick={onClick}>ALERT</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
