import InputSpinner from "./InputSpinner";
import Tooltip from "./Tooltip";

import { PASSENGER_STANDARD_DETAIL } from "./constants";

export type PassengerType = "성인";

interface PassengerControllerProps {
  passengerType: PassengerType;
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

function PassengerController({
  passengerType,
  ...props
}: PassengerControllerProps) {
  return (
    <label className="passenger__controller-container">
      <p className="passenger__label">
        {passengerType}
        <Tooltip title={PASSENGER_STANDARD_DETAIL[passengerType]}>
          <button className="question-mark-button">
            {`${passengerType} 기준 상세 안내`}
          </button>
        </Tooltip>
      </p>
      <InputSpinner
        {...props}
        labelText={`${passengerType} 승객`}
        subButtonText={`탑승자 한명 줄이기`}
        addButtonText={`탑승자 한명 늘리기`}
      />
    </label>
  );
}

export default PassengerController;
