import React from "react";
import SpinButton from "./component/SpinButton";
import { LABEL } from "./constant";

function App() {
  return (
    <div className="App">
      <h2>승객 선택</h2>
      <SpinButton label={LABEL.ADULT} />
    </div>
  );
}

export default App;
