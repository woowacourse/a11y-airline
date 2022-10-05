import { useState } from 'react';
import PASSENGER from '../constants/index';

const usePassenger = () => {
  const [passengerNum, setPassengerNum] = useState(PASSENGER.DEFAULT);
  const [announceState, setAnnounceState] = useState('');

  const handleClickDecreaseButton = () => {
    setPassengerNum(passengerNum - 1);
    setAnnounceState(`성인 승객 감소 ${passengerNum - 1}`);
  };

  const handleClickIncreaseButton = () => {
    setPassengerNum(passengerNum + 1);
    setAnnounceState(`성인 승객 추가 ${passengerNum + 1}`);
  };

  const handleChangePassengerNumInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= PASSENGER.MIN && value <= PASSENGER.MAX) {
      setPassengerNum(value);
      setAnnounceState(`성인 승객 ${value}`);
    }
  };

  return {
    passengerNum,
    announceState,
    handleChangePassengerNumInput,
    handleClickDecreaseButton,
    handleClickIncreaseButton,
  };
};

export default usePassenger;
