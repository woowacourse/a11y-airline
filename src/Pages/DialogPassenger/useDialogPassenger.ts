import { ChangeEventHandler, useEffect, useRef, useState } from 'react';

import { MAX_VALUE, MIN_VALUE } from 'constants/passenger';

const useDialogPassenger = () => {
  const [value, setValue] = useState<number>(1);
  const [message, setMessage] = useState('');
  const timerId = useRef<null | number>(null);
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const toggleToolTip = () => {
    setIsOpenToolTip((prevState) => !prevState);
  };
  useEffect(() => {
    if (message === '') {
      return;
    }

    if (typeof timerId.current === 'number') {
      clearTimeout(timerId.current);
      timerId.current = null;
    }

    timerId.current = window.setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);
  const handleClickDecrease = () => {
    if (value <= MIN_VALUE) {
      return;
    }

    setValue((prevValue) => prevValue - 1);
    setMessage(`성인 승객 감소 ${value - 1}`);
  };

  const handleClickIncrease = () => {
    if (value >= MAX_VALUE) {
      return;
    }

    setValue((prevValue) => prevValue + 1);
    setMessage(`성인 승객 추가 ${value + 1}`);
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.valueAsNumber;

    if (value < MIN_VALUE || value > MAX_VALUE) {
      return;
    }

    setValue(value);
  };

  return {
    isOpenToolTip,
    toggleToolTip,
    handleClickIncrease,
    handleClickDecrease,
    handleChangeInput,
    value,
    message,
  };
};

export default useDialogPassenger;
