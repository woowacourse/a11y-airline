import './SpinButton.css';

import React, { MouseEvent, useState } from 'react';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [tip, setTip] = useState('');

  const increment = () => {
    if (count === 3) return;
    setCount(prevCount => prevCount + 1);

    if (count + 1 === 3) setTip('최대 승객 수에 도달했습니다.');
    else setTip('');
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(prevCount => prevCount - 1);

    if (count - 1 === 0) setTip('최소 승객 수에 도달했습니다.');
    else setTip('');
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <>
      <section className='spinButtonContainer'>
        <div>
          <h1>승객 선택</h1>
          <div className='spinButtonLabel'>
            <label>성인</label>
            <div
              className='helpIcon'
              onMouseEnter={toggleTooltip}
              onMouseLeave={toggleTooltip}
            >
              ?
              {isTooltipVisible && (
                <span className='tooltip'>
                  최대 인원수는 3명까지 가능합니다
                </span>
              )}
            </div>
          </div>
          <button
            onClick={decrement}
            className='spinButton'
            aria-label='성인 승객 감소'
          >
            -
          </button>
          <input
            type='text'
            role='spinbutton'
            readOnly
            className='spinButtonInput'
            aria-live='polite'
            value={count}
          />
          <button
            onClick={increment}
            className='spinButton'
            aria-label='성인 승객 증가'
          >
            +
          </button>
        </div>
      </section>
      <div role='alert' className='visually-hidden' aria-live='polite'>
        {tip}
      </div>
    </>
  );
};

export default SpinButton;
