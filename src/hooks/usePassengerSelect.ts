import { ChangeEvent, useState } from 'react';
import { MESSAGE, PASSENGER } from '../constants';

function usePassengerSelect() {
  const [adultCount, setAdultCount] = useState<number | ''>(0);

  const handleClickDecreaseAdultCount = () => {
    if (adultCount === PASSENGER.ADULT.MIN_COUNT) {
      alert(MESSAGE.ERROR.LESS_THAN_MIN_ADULT_COUNT);

      return;
    }

    setAdultCount((prev) => {
      if (prev === '') return PASSENGER.ADULT.MIN_COUNT;
      return prev - 1;
    });
  };

  const handleChangeAdultCount = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const value = target.valueAsNumber;

    if (isNaN(value)) {
      setAdultCount('');

      return;
    }

    if (value < PASSENGER.ADULT.MIN_COUNT) {
      alert(MESSAGE.ERROR.LESS_THAN_MIN_ADULT_COUNT);

      return;
    }

    if (value > PASSENGER.ADULT.MAX_COUNT) {
      alert(MESSAGE.ERROR.EXCEED_MAX_ADULT_COUNT);

      return;
    }

    setAdultCount(value);
  };

  const handleClickIncreaseAdultCount = () => {
    if (adultCount === PASSENGER.ADULT.MAX_COUNT) {
      alert(MESSAGE.ERROR.EXCEED_MAX_ADULT_COUNT);

      return;
    }

    setAdultCount((prev) => {
      if (prev === '') return PASSENGER.ADULT.MIN_COUNT + 1;
      return prev + 1;
    });
  };

  return {
    adultCount,
    handleChangeAdultCount,
    handleClickDecreaseAdultCount,
    handleClickIncreaseAdultCount,
  };
}

export default usePassengerSelect;
