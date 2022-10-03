import React, { ButtonHTMLAttributes } from "react";
import "./style.css";

import { ValueOf, PASSENGER_TYPE, HELP_DESCRIPTION } from "../../types";

interface HelpToolTipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  passengerType: ValueOf<typeof PASSENGER_TYPE>;
  helpOpen: boolean;
}
export default function HelpToolTip({
  passengerType,
  helpOpen,
  onClick,
}: HelpToolTipProps) {
  return (
    <>
      <button onClick={onClick}>?</button>
      {helpOpen && <div>{HELP_DESCRIPTION[passengerType]}</div>}
    </>
  );
}
