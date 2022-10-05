import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import useSetPassengerCount from "../../hooks/useSetPassengerCount";

function Passenger() {
  const {
    passengerCount,
    handleChangePassengerCount,
    handleFocusPassengerCount,
    handleBlurPassengerCount,
    handleDecreasePassengerCount,
    handleIncreasePassengerCount,
  } = useSetPassengerCount();

  return (
    <section>
      <h1>승객 선택</h1>

      <p>성인</p>

      <div>
        <BiMinusCircle
          size="20"
          tabIndex={0}
          onClick={handleDecreasePassengerCount}
        />
        <input
          type="number"
          tabIndex={-1}
          value={passengerCount}
          onChange={handleChangePassengerCount}
          onFocus={handleFocusPassengerCount}
          onBlur={handleBlurPassengerCount}
        />
        <BiPlusCircle
          size="20"
          tabIndex={0}
          onClick={handleIncreasePassengerCount}
        />
      </div>
    </section>
  );
}

export default Passenger;
