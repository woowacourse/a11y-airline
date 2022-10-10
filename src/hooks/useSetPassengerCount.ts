import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEvent,
  FocusEventHandler,
  useState,
} from "react";

interface UseSetPassengerCountResult {
  passengerCount: string;
  handleChangePassengerCount: ChangeEventHandler<HTMLInputElement>;
  handleFocusPassengerCount: FocusEventHandler<HTMLInputElement>;
  handleBlurPassengerCount: () => void;
  handleDecreasePassengerCount: () => void;
  handleIncreasePassengerCount: () => void;
}

function useSetPassengerCount(): UseSetPassengerCountResult {
  const [passengerCount, setPassengerCount] = useState("1");

  const handleChangePassengerCount = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(passengerCount) > 3) {
      setPassengerCount("3");

      return;
    }

    if (Number(passengerCount) < 1) {
      setPassengerCount("1");

      return;
    }

    setPassengerCount(event.target.value);
  };

  const handleFocusPassengerCount = (event: FocusEvent<HTMLInputElement>) => {
    event.target.select();

    if (Number(passengerCount) > 3) {
      setPassengerCount("3");

      return;
    }

    if (Number(passengerCount) < 1) {
      setPassengerCount("1");

      return;
    }
  };

  const handleBlurPassengerCount = () => {
    if (Number(passengerCount) > 3) {
      setPassengerCount("3");

      return;
    }

    if (Number(passengerCount) < 1) {
      setPassengerCount("1");

      return;
    }
  };

  const handleDecreasePassengerCount = () => {
    if (Number(passengerCount) >= 4) {
      return;
    }

    if (Number(passengerCount) <= 1) {
      return;
    }

    setPassengerCount((prevPassengerCount) =>
      (Number(prevPassengerCount) - 1).toString()
    );
  };

  const handleIncreasePassengerCount = () => {
    if (Number(passengerCount) >= 3) {
      return;
    }

    if (Number(passengerCount) <= 0) {
      return;
    }

    setPassengerCount((prevPassengerCount) =>
      (Number(prevPassengerCount) + 1).toString()
    );
  };

  return {
    passengerCount,
    handleChangePassengerCount,
    handleFocusPassengerCount,
    handleBlurPassengerCount,
    handleDecreasePassengerCount,
    handleIncreasePassengerCount,
  };
}

export default useSetPassengerCount;
