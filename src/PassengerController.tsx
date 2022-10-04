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
    <div className="passenger__controller-container">
      <label className="passenger__label">
        {labelText}
        <button className="popover-trigger" />
      </label>
      <InputSpinner {...props} />
    </div>
  );
}

export default PassengerController;
