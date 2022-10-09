import React from "react";
import "./style/App.css";

import PassengerController from "./components/PassengerController";

function App() {
  return (
    <div className="App">
      <h2>승객 선택</h2>
      <PassengerController
        passengerType="성인"
        defaultValue={1}
        step={1}
        min={0}
        max={3}
      />
    </div>
  );
}

export default App;
