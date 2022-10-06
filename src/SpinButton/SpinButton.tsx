/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { Valueof } from '../@types';
import { PASSENGER_TYPE } from '../constants';
import { inputStyle, buttonStyle, layoutStyle, displayNoneStyle } from './SpinButton.styles';

interface SpinButtonProps {
  defaultValue?: number;
  step?: number;
  min?: number;
  max?: number;
  passengerType: Valueof<typeof PASSENGER_TYPE>;
}

const MAX = 1000;

function SpinButton({
  defaultValue = 0,
  step = 1,
  min = 0,
  max = MAX,
  passengerType,
}: SpinButtonProps) {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleClickMinus = () => {
    inputValue - step >= min && setInputValue((prev) => prev - step);
  };

  const handleClickPlus = () => {
    inputValue + step <= max && setInputValue((prev) => prev + step);
  };

  return (
    <div css={layoutStyle}>
      <button
        onClick={handleClickMinus}
        css={buttonStyle}
        aria-label={`${passengerType} 탑승자 한명 줄이기`}
      >
        -
      </button>
      <label htmlFor={passengerType} aria-live="polite" css={displayNoneStyle}>
        {`${passengerType} 승객 추가 ${inputValue}`}
      </label>
      <input
        id={passengerType}
        value={inputValue}
        min={min}
        max={max}
        step={step}
        readOnly
        css={inputStyle}
        aria-label={`${passengerType} 탑승자 텍스트`}
      />
      <button
        onClick={handleClickPlus}
        css={buttonStyle}
        aria-label={`${passengerType} 탑승자 한명 늘리기`}
      >
        +
      </button>
    </div>
  );
}
export default SpinButton;
