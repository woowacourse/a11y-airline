import { useState } from 'react';
import useDebouncedATMessage from './useDebouncedATMessage';

const MIN_PASSENGERS = 1;
const MAX_PASSENGERS = 3;

const useAdultCount = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [alertMessage, setAlertMessage] = useState('');
  const { handleDebouncedMessage, messageForATUser } = useDebouncedATMessage(500);

  const incrementCount = () => {
    if (adultCount + 1 > MAX_PASSENGERS) {
      alert('최대 승객 수에 도달했습니다');
      setAlertMessage('최대 승객 수에 도달했습니다');
      return;
    }
    if (alertMessage) {
      setAlertMessage('');
    }

    handleDebouncedMessage(`성인 승객 수는 ${adultCount + 1}명 입니다.`);
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    if (adultCount === MIN_PASSENGERS) {
      alert('최소 1명의 승객이 필요합니다');
      setAlertMessage('최소 1명의 승객이 필요합니다');
      return;
    }
    if (alertMessage) {
      setAlertMessage('');
    }

    handleDebouncedMessage(`성인 승객 수는 ${adultCount - 1}명 입니다.`);
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return {
    adultCount,
    incrementCount,
    decrementCount,
    alertMessage,
    messageForATUser
  };
};

export default useAdultCount;
