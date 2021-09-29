import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: (value: number) => void;
  value: number;
  max?: number;
  min?: number;
  initialValue?: number;
}

const PassengerCounterInput = ({
  label,
  value,
  setValue,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  initialValue,
  ...props
}: CounterProps) => {
  const [alertMessage, setAlertMessage] = useState('');
  const onDecrease = () => {
    if (value <= min) {
      setValue(min);
      setAlertMessage(`최소 ${label} 승객 수 입니다.`);
      return;
    }

    setValue(value - 1);
    setAlertMessage(`${label} 승객 감소 ${value - 1}`);
  };

  const onIncrease = () => {
    if (value >= max) {
      setValue(max);
      setAlertMessage(`최대 ${label} 승객 수 입니다.`);
      return;
    }

    setValue(value + 1);
    setAlertMessage(`${label} 승객 추가 ${value + 1}`);
  };

  const onValueChange = ({ target: { value, valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
    if (value === '' && initialValue !== undefined) return setValue(initialValue);

    let result = valueAsNumber;

    if (valueAsNumber > max) result = max;
    if (valueAsNumber < min) result = min;

    setValue(result);
    setAlertMessage(`${label} 승객 변경 ${result}`);
  };

  useEffect(() => {
    if (!initialValue) return;

    setValue(initialValue);
  }, [initialValue]);

  return (
    <div>
      <label htmlFor="counter">{label}</label>
      <br />
      <button type="button" onClick={onDecrease} aria-label={`${label} 탑승자 한 명 줄이기`}>
        -
      </button>
      <input
        type="number"
        id="counter"
        value={value}
        max={max}
        min={min}
        onChange={onValueChange}
        {...props}
      />
      <button type="button" onClick={onIncrease} aria-label={`${label} 탑승자 한 명 늘리기`}>
        +
      </button>
      <p role="alert" aria-live="polite">
        {alertMessage}
      </p>
    </div>
  );
};

export default PassengerCounterInput;
