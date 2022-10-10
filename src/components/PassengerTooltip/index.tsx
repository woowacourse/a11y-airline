import { BsQuestionCircle } from "react-icons/bs";
import styles from "./styles.module.css";

function PassengerTooltip() {
  return (
    <>
      <button
        className={styles.tooltipButton}
        type="button"
        aria-label="성인 탑승자 도움말"
        aria-describedby="tooltipDescription"
      >
        <BsQuestionCircle size="20" />

        <p
          className={styles.tooltipDescription}
          role="tooltip"
          id="tooltipDescription"
        >
          만 18세 이상 탑승자 1명부터 3명까지 추가할 수 있습니다.
        </p>
      </button>
    </>
  );
}

export default PassengerTooltip;
