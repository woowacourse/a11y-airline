import { ChangeEventHandler, useState } from "react";
import SpinButton from "../components/SpinButton";
import "./styles/reservation.css";

interface PassengersCount {
  adult: number;
}

const MAX_PASSENGERS_COUNT = {
  ADULT: 3,
};

const MIN_PASSENGERS_COUNT = {
  ADULT: 0,
};

const PASSENGER_CALL: { [K in keyof PassengersCount]: string } = {
  adult: "성인",
};

const Reservation = () => {
  const [passengersCount, setPassengersCount] = useState<PassengersCount>({ adult: 0 });
  const [passengersCountStatusMessage, setPassengersCountStatusMessage] = useState("");

  const onPassengersCountBlur = (maxCount: number, minCount: number, passengerKey: keyof PassengersCount) => () => {
    const validCount = Math.max(Math.min(passengersCount[passengerKey], maxCount), minCount);

    setPassengersCount((prev) => ({
      ...prev,
      [passengerKey]: validCount,
    }));
  };

  const onPassengersCountIncrease = (maxCount: number, passengerKey: keyof PassengersCount) => () => {
    if (passengersCount[passengerKey] >= maxCount) {
      return;
    }

    setPassengersCount((prev) => ({
      ...prev,
      [passengerKey]: prev[passengerKey] + 1,
    }));
    setPassengersCountStatusMessage(`${PASSENGER_CALL[passengerKey]} 승객 추가 ${passengersCount[passengerKey] + 1}`);
  };

  const onPassengersCountDecrease = (minCount: number, passengerKey: keyof PassengersCount) => () => {
    if (passengersCount[passengerKey] <= minCount) {
      return;
    }

    setPassengersCount((prev) => ({
      ...prev,
      [passengerKey]: prev[passengerKey] - 1,
    }));
    setPassengersCountStatusMessage(`${PASSENGER_CALL[passengerKey]} 승객 감소 ${passengersCount[passengerKey] - 1}`);
  };

  const onAdultPassengersCountChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setPassengersCount((prev) => ({
      ...prev,
      adult: Number(target.value),
    }));
  };

  return (
    <main>
      <h1 className="reservation-header">승객 선택</h1>
      <section aria-label={`${PASSENGER_CALL.adult} 탑승자 수 선택`}>
        <h2>{PASSENGER_CALL.adult}</h2>
        <SpinButton
          max={MAX_PASSENGERS_COUNT.ADULT}
          min={MIN_PASSENGERS_COUNT.ADULT}
          value={passengersCount.adult.toString()}
          onChange={onAdultPassengersCountChange}
          onBlur={onPassengersCountBlur(MAX_PASSENGERS_COUNT.ADULT, MIN_PASSENGERS_COUNT.ADULT, "adult")}
          onIncrease={onPassengersCountIncrease(MAX_PASSENGERS_COUNT.ADULT, "adult")}
          onDecrease={onPassengersCountDecrease(MIN_PASSENGERS_COUNT.ADULT, "adult")}
          statusMessage={passengersCountStatusMessage}
        />
      </section>
    </main>
  );
};

export default Reservation;
