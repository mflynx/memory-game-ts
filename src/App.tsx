import React from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import musicNotes from "./images/music-notes.jpg";

function App() {
  return (
    <div className="App">
      <img className="musicBackground" src={musicNotes} alt="music notes" />
      <Header />
      <Game/>
    </div>
  );
}

export default App;
