import { useRef, useState } from 'react';

const minCount = 1;
const maxCount = 3;

const PassengerControl = ({
  label,
  description,
}: {
  label: '성인' | '소아' | '유아';
  description: string;
}) => {
  const [count, setCount] = useState(minCount);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooltipId = `${label}-tooltip`;
  const inputId = `${label}-count`;
  const dispatchChangeEvent = (inputElement: HTMLInputElement) => {
    inputElement.dispatchEvent(new Event('change', { bubbles: true }));
  };

  return (
    <div>
      <div>
        <label htmlFor={inputId}>{label}</label>
        <button aria-describedby={tooltipId}>{label} 기준 상세 안내</button>
        <p id={tooltipId} role="tooltip">
          {description}
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            if (!inputRef.current) return;

            inputRef.current.stepDown();
            dispatchChangeEvent(inputRef.current);
          }}
          disabled={count <= minCount}
        >
          {label} 탑승자 한명 줄이기
        </button>
        <input
          type="number"
          id={inputId}
          name={inputId}
          ref={inputRef}
          defaultValue={minCount}
          onChange={(e) => {
            setCount(e.currentTarget.valueAsNumber);
          }}
          min={minCount}
          max={maxCount}
          step={1}
        />
        <button
          onClick={() => {
            if (!inputRef.current) return;

            inputRef.current?.stepUp();
            dispatchChangeEvent(inputRef.current);
          }}
          disabled={count >= maxCount}
        >
          {label} 탑승자 한명 늘리기
        </button>
      </div>
    </div>
  );
};

export default PassengerControl;
