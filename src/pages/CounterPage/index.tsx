import React from "react";

import PassengerCounter from "./components/PassengerCounter";
import { PASSENGER_TYPE } from "../../types";

const CounterPage = () => {
  return <PassengerCounter passengerType={PASSENGER_TYPE.ADULT} maxCount={3} />;
};

export default CounterPage;
