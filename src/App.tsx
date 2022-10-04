import React from "react";
import "./App.css";
import PassengerController from "./PassengerController";

function App() {
  return (
    <div className="App">
      <h2>승객 선택</h2>
      <PassengerController
        labelText="성인"
        defaultValue={0}
        step={1}
        min={0}
        max={3}
      />
    </div>
  );
}

export default App;
