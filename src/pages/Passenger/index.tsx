import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import PassengerTooltip from "../../components/PassengerTooltip";
import useSetPassengerCount from "../../hooks/useSetPassengerCount";
import styles from "./styles.module.css";

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
    <section className={styles.section}>
      <h1>승객 선택</h1>

      <div className={styles.tooltip}>
        <p>성인</p>
        <PassengerTooltip />
      </div>

      <div className={styles.buttonContainer}>
        <button
          type="button"
          aria-label="성인 탑승자 한명 줄이기 버튼"
          onClick={handleDecreasePassengerCount}
        >
          <BiMinusCircle size="20" />
        </button>
        <label
          className={styles.hidden}
          htmlFor="inputLabel"
          aria-live="polite"
        >{`성인 승객 추가 ${passengerCount}`}</label>
        <input
          name="inputLabel"
          className={styles.input}
          type="number"
          tabIndex={-1}
          value={passengerCount}
          onChange={handleChangePassengerCount}
          onFocus={handleFocusPassengerCount}
          onBlur={handleBlurPassengerCount}
        />
        <button
          type="button"
          aria-label="성인 탑승자 한명 늘리기 버튼"
          onClick={handleIncreasePassengerCount}
        >
          <BiPlusCircle size="20" />
        </button>
      </div>
    </section>
  );
}

export default Passenger;
