import React from "react";
import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default App;
