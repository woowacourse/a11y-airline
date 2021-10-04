import React, { useState } from 'react';
import './SpinButton.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  valueState: [string | number, React.Dispatch<React.SetStateAction<string | number>>];
  min: number;
  max: number;
  increaseButtonLabel: string;
  decreaseButtonLabel: string;
  increaseMessage: string;
  decreaseMessage: string;
}

const SpinButton = ({
  label,
  valueState,
  min,
  max,
  increaseButtonLabel = '증가',
  decreaseButtonLabel = '감소',
  increaseMessage = `${label} 증가`,
  decreaseMessage = `${label} 감소`,
  ...props
}: Props) => {
  const [value, setValue] = valueState;
  const [statusMessage, setStatusMessage] = useState('');

  const isIncreaseDisabled = value >= max;
  const isDecreaseDisabled = !value;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = Number(event.target.value);

    if (event.target.value === '') {
      setValue('');

      return;
    }

    if (nextValue >= max) {
      setValue(max);

      return;
    }

    if (nextValue <= min || Number.isNaN(nextValue)) {
      setValue(min);

      return;
    }

    setValue(nextValue);
  };

  const increaseValue = () => {
    if (value >= max) return;

    setStatusMessage(`${increaseMessage} ${Number(value) + 1}`);
    setValue((prevValue) => Number(prevValue) + 1);
  };

  const decreaseValue = () => {
    if (value <= min) return;

    setStatusMessage(`${decreaseMessage} ${Number(value) - 1}`);
    setValue((prevValue) => Number(prevValue) - 1);
  };

  return (
    <div>
      <span className="spin-button__label">{label}</span>
      <div className="spin-button__wrapper">
        <button
          type="button"
          className="spin-button__button sub"
          aria-disabled={isDecreaseDisabled}
          onClick={decreaseValue}
        >
          {decreaseButtonLabel}
        </button>
        <input
          type="text"
          value={value}
          onChange={handleChangeValue}
          className="spin-button__input"
          role="spinbutton"
          maxLength={1}
          aria-valuenow={Number(value)}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={label}
          inputMode="numeric"
          {...props}
        />
        <button
          type="button"
          className="spin-button__button add"
          aria-disabled={isIncreaseDisabled}
          onClick={increaseValue}
        >
          {increaseButtonLabel}
        </button>
        <div className="hidden" aria-atomic="true" aria-live="assertive" aria-relevant="additions">
          {statusMessage}
        </div>
      </div>
    </div>
  );
};

export default SpinButton;
