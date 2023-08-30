import React from "react";
import Board from "./Components/Board";
import Keyboard from "./Components/Keyboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle for Sania</h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
