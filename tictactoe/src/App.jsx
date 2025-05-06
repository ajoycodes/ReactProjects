import React, { useState } from "react";
import "./App.css";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
    console.log("Button clicked!");
  }
  return (
    <button onClick={handleClick} className="button">
      {value}
    </button>
  );
}

function App() {
  return (
    <>
      <h1 className="heading">Tic Tac Toe Game</h1>
      <div className="contain">
        <div class="container">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="container">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="container">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

export default App;
