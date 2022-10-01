import React from "react";
import SpinButton from "./component/SpinButton";
import { LABEL } from "./constant";

function App() {
  return (
    <div className="App">
      <SpinButton label={LABEL.ADULT} />
    </div>
  );
}

export default App;
