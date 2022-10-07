import React from "react";
import SpinButton from "./component/SpinButton";
import { LABEL } from "./constant";

function App() {
  return (
    <div className="App">
      <h1>승객 선택</h1>
      <SpinButton label={LABEL.ADULT} />
    </div>
  );
}

export default App;
