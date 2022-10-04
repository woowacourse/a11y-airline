import InputSpinner from "./InputSpinner";

interface PassengerControllerProps {
  labelText: string;
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

function PassengerController({
  labelText,
  ...props
}: PassengerControllerProps) {
  return (
    <label className="passenger__controller-container">
      <p className="passenger__label">
        {labelText}
        <button className="tooltip-open-trigger">
          {`${labelText} 기준 상세 안내`}
        </button>
      </p>
      <InputSpinner
        {...props}
        subButtonText={`${labelText} 탑승자 한명 줄이기 버튼`}
        addButtonText={`${labelText} 탑승자 한명 늘리기 버튼`}
      />
    </label>
  );
}

export default PassengerController;
