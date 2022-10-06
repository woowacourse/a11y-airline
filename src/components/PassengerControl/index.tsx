import { useRef, useState } from 'react';
import useAnnounce from '../../hooks/useAnnounce';
import styles from './PassengerControl.module.css';

const minCount = 1;
const maxCount = 3;

const PassengerControl = ({
  label,
  description,
}: {
  label: '성인' | '소아' | '유아';
  description: string;
}) => {
  const tooltipRef = useRef<HTMLParagraphElement>(null);
  const [count, setCount] = useState(minCount);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooltipId = `${label}-tooltip`;
  const inputId = `${label}-count`;
  const dispatchChangeEvent = (inputElement: HTMLInputElement) => {
    inputElement.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const { Announcement, announce } = useAnnounce();

  return (
    <div className={styles['layout']}>
      <div className={styles['label-box']}>
        <label htmlFor={inputId}>{label}</label>
        <div className={styles['tooltip-box']}>
          <button
            type="button"
            aria-label={`${label} 기준 상세 안내`}
            aria-describedby={tooltipId}
            className={styles['tooltip-button']}
            onClick={() => {
              tooltipRef.current?.toggleAttribute('aria-hidden');
            }}
            onBlur={() => {
              tooltipRef.current?.setAttribute('aria-hidden', '');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Escape')
                tooltipRef.current?.setAttribute('aria-hidden', '');
            }}
          >
            ?
          </button>
          <p
            ref={tooltipRef}
            id={tooltipId}
            role="tooltip"
            className={styles['tooltip']}
            aria-hidden
          >
            {description}
          </p>
        </div>
      </div>
      <div className={styles['control-box']}>
        <button
          onClick={() => {
            if (!inputRef.current) return;

            inputRef.current.stepDown();
            dispatchChangeEvent(inputRef.current);
          }}
          disabled={count <= minCount}
          aria-controls={inputId}
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
            announce(`${label} 승객 추가 ${e.currentTarget.valueAsNumber}`);
          }}
          min={minCount}
          max={maxCount}
          step={1}
        />
        <Announcement />
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
