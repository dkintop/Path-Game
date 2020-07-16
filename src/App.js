import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GameGrid } from "./components/GameGrid.js";
import ModeDisplay from "./components/ModeDisplay";
import RecordInstructions from "./components/RecordInstructions";
function App() {
  return (
    <div className="App">
      <ModeDisplay />
      <RecordInstructions />
      <GameGrid />
    </div>
  );
}

export default App;
