import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react';

interface CounterProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: (value: number) => void;
  value: number;
  max?: number;
  min?: number;
  initialValue?: number;
}

const PassensgerCounterInput = ({
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
    if (value <= min) return setValue(min);

    setValue(value - 1);
    setAlertMessage(`${label} 승객 감소 ${value - 1}`);
  };

  const onIncrease = () => {
    if (value >= max) return setValue(max);

    setValue(value + 1);
    setAlertMessage(`${label} 승객 추가 ${value + 1}`);
  };

  const onValueChange = ({ target: { value, valueAsNumber } }: ChangeEvent<HTMLInputElement>) => {
    if (value === '' && initialValue !== undefined) return setValue(initialValue);
    if (valueAsNumber > max) return setValue(max);
    if (valueAsNumber < min) return setValue(min);

    setValue(valueAsNumber);
    setAlertMessage(`${label} 승객 변경 ${valueAsNumber}`);
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

export default PassensgerCounterInput;
