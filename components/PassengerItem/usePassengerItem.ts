import { ChangeEventHandler, useState } from 'react';

const usePassengerItem = (
  passengerType: string,
  minNumber: number,
  maxNumber: number
) => {
  const [passengerNumber, setPassengerNumber] = useState<number | ''>(
    minNumber
  );
  const [isShowInfo, setIsShowToolTip] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const onClickAddButton = () => {
    setAlertMessage('');

    if (passengerNumber === '') {
      setPassengerNumber(minNumber);
      return;
    }

    if (passengerNumber >= maxNumber) {
      setAlertMessage(
        `${passengerType} 입력 가능한 탑승 인원은 ${minNumber}부터 ${maxNumber}까지`
      );
      return;
    }

    setPassengerNumber((prev) => Number(prev) + 1);
    setStatusMessage(`${passengerType} 승객 추가 ${passengerNumber + 1}`);
  };

  const onClickSubtractButton = () => {
    setAlertMessage('');

    if (passengerNumber === '') {
      setPassengerNumber(minNumber);
      return;
    }

    if (passengerNumber <= minNumber) {
      setAlertMessage(
        `${passengerType} 입력 가능한 탑승 인원은 ${minNumber}부터 ${maxNumber}까지`
      );
      return;
    }

    setPassengerNumber((prev) => Number(prev) - 1);
    setStatusMessage(`${passengerType} 승객 감소 ${passengerNumber - 1}`);
  };

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { inputType, data: inputKey } = e.nativeEvent as InputEvent;
    const { value } = e.target;

    setAlertMessage('');

    if (inputType === 'deleteContentBackward') {
      setPassengerNumber('');
      return;
    }

    const inputValue = isNaN(Number(inputKey)) ? minNumber : Number(value);

    if (inputValue > maxNumber || inputValue < minNumber) {
      setAlertMessage(
        `${passengerType} 입력 가능한 탑승 인원은 ${minNumber}부터 ${maxNumber}까지`
      );
      return;
    }

    setPassengerNumber(inputValue);
    setStatusMessage(`${passengerType} 승객 변경 ${inputValue}`);
  };

  const toggleInfo = () => setIsShowToolTip((prev) => !prev);

  return {
    toggleInfo,
    isShowInfo,
    passengerNumber,
    onClickSubtractButton,
    onChangeInput,
    onClickAddButton,
    statusMessage,
    alertMessage,
  };
};

export default usePassengerItem;
