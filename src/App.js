import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GameGrid } from "./components/GameGrid.js";
import ModeDisplay from "./components/ModeDisplay";
function App() {
  return (
    <div className="App">
      <ModeDisplay />
      <GameGrid />
    </div>
  );
}

export default App;
