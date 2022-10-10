import InputSpinner from "./InputSpinner";
import Tooltip from "./Tooltip";

import { PASSENGER_COUNT_ID } from "../constants";

export type PassengerType = "성인";

interface PassengerControllerProps {
  passengerType: PassengerType;
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export const PASSENGER_STANDARD_DETAIL = {
  성인: "국제선 만 12세 이상, 국내선 만 13세 이상",
} as const;

function PassengerController({
  passengerType,
  ...props
}: PassengerControllerProps) {
  return (
    <div className="passenger__controller-container">
      <div className="passenger__controller-label-container">
        <label
          className="passenger__label"
          htmlFor={PASSENGER_COUNT_ID[passengerType]}
        >
          {passengerType}
        </label>
        <Tooltip title={PASSENGER_STANDARD_DETAIL[passengerType]}>
          {`${passengerType} 기준 상세 안내`}
        </Tooltip>
      </div>
      <InputSpinner
        {...props}
        labelText={`${passengerType} 승객`}
        subButtonText={`탑승자 한명 줄이기`}
        addButtonText={`탑승자 한명 늘리기`}
        inputId={PASSENGER_COUNT_ID[passengerType]}
      />
    </div>
  );
}

export default PassengerController;
