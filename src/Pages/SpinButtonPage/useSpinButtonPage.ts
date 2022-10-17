import { ChangeEventHandler, useEffect, useRef, useState } from 'react';

import { MAX_VALUE, MIN_VALUE } from 'constants/passenger';

const useSpinButtonPage = () => {
  const [value, setValue] = useState<number | ''>(1);
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

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

    setValue((prevValue) => Number(prevValue) - 1);
    setMessage(`성인 승객 감소 ${Number(value) - 1}`);
  };

  const handleClickIncrease = () => {
    if (value >= MAX_VALUE) {
      return;
    }

    setValue((prevValue) => Number(prevValue) + 1);
    setMessage(`성인 승객 추가 ${Number(value) + 1}`);
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { inputType, data: inputKey } = event.nativeEvent as InputEvent;
    const { value } = event.target;

    setAlertMessage('');

    if (inputType === 'deleteContentBackward') {
      setValue('');
      return;
    }

    const inputValue = isNaN(Number(inputKey)) ? MIN_VALUE : Number(value);

    if (inputValue > MAX_VALUE || inputValue < MIN_VALUE) {
      setAlertMessage(`성인 입력 가능한 탑승 인원은 ${MIN_VALUE}부터 ${MAX_VALUE}까지`);
      console.log(alertMessage);
      return;
    }

    setValue(inputValue);
    setMessage(`성인 승객 변경 ${inputValue}`);
  };

  return {
    isOpenToolTip,
    toggleToolTip,
    handleClickIncrease,
    handleClickDecrease,
    handleChangeInput,
    value,
    message,
    alertMessage,
  };
};

export default useSpinButtonPage;
