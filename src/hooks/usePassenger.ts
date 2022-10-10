import { useState } from 'react';
import PASSENGER from '../constants/index';

const usePassenger = () => {
  const [passengerNum, setPassengerNum] = useState(PASSENGER.DEFAULT);
  const [announceState, setAnnounceState] = useState('');

  const handleClickDecreaseButton = () => {
    setPassengerNum(passengerNum - 1);
    if (passengerNum - 1 === 0) {
      setAnnounceState(`최소 승객 수인 ${PASSENGER.MIN}명 입니다. 이제 버튼을 사용할 수 없습니다.`);
      return;
    }
    setAnnounceState(`성인 승객 감소 ${passengerNum - 1}`);
  };

  const handleClickIncreaseButton = () => {
    setPassengerNum(passengerNum + 1);
    if (passengerNum + 1 === 3) {
      setAnnounceState(`최대 승객 수인 ${PASSENGER.MAX}명 입니다. 이제 버튼을 사용할 수 없습니다.`);
      return;
    }
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
