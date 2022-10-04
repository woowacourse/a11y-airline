import InputSpinner from "./InputSpinner";

function PassengerController() {
  return (
    <div className="passenger__controller-container">
      <label className="passenger__label">
        성인
        <button className="popover-trigger" />
      </label>
      <InputSpinner />
    </div>
  );
}

export default PassengerController;
