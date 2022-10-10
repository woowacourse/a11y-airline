import React from "react";

import PassengerCounter from "./components/PassengerCounter";

import { PASSENGER_TYPE } from "./types";

const App = () => (
  <>
    <PassengerCounter passengerType={PASSENGER_TYPE.ADULT} maxCount={3} />
  </>
);

export default App;
