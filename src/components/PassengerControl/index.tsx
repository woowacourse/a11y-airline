import { useRef, useState } from 'react';
import useAnnounce from '../../hooks/useAnnounce';
import useSpinButton from '../../hooks/useSpinButton';
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
  const { Announcement, announce } = useAnnounce();
  const { DownButton, UpButton } = useSpinButton(inputRef);

  return (
    <div className={styles['layout']}>
      <div className={styles['label-box']}>
        <label className={styles['label']} htmlFor={inputId}>
          {label}
        </label>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
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
        <DownButton
          className={styles['spin-button']}
          disabled={count <= minCount}
          aria-label={`${label} 탑승자 한명 줄이기`}
          aria-controls={inputId}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
        </DownButton>
        <input
          type="number"
          inputMode="numeric"
          id={inputId}
          name={inputId}
          ref={inputRef}
          className={styles['input']}
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
        <UpButton
          className={styles['spin-button']}
          disabled={count >= maxCount}
          aria-label={`${label} 탑승자 한명 늘리기`}
          aria-controls={inputId}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </UpButton>
      </div>
    </div>
  );
};

export default PassengerControl;
