import './index.css';

import React, { useState } from 'react';

const SpinButton = () => {
  const [passenger, setPassenger] = useState(1);

  const increaseCount = () => {
    if (passenger >= 3) return;

    setPassenger((prevCount) => prevCount + 1);
  };

  const decreaseCount = ({ target }) => {
    if (passenger === 0) {
      target.disabled = true;
      return;
    }

    target.disabled = false;
    setPassenger((prevCount) => prevCount - 1);
  };

  return (
    <section>
      <h2>승객 선택</h2>

      <h3>
        성인
        <span role='tooltip' className='tooltip'>
          ?
        </span>
      </h3>
      <button
        type='button'
        onClick={decreaseCount}
        aria-live='assertive'
        aria-label='성인 탑승자 한 명 줄이기 버튼'
        className='decrease default-btn'
        disabled={passenger <= 0 ? true : false}
      >
        -
      </button>

      <label
        id='passenger-count-input'
        htmlFor='passenger-count-input'
        className='passenger-count-label'
        aria-live='assertive'
        aria-label={`성인 ${passenger} 텍스트 숫자만 수정`}
      ></label>

      <input
        className='passenger-count-input'
        name='passenger-count-input'
        type='number'
        min='0'
        max='3'
        value={passenger}
        aria-labelledby='passenger-count-input'
        readOnly
      />

      <button
        type='button'
        onClick={increaseCount}
        aria-live='assertive'
        aria-label='성인 탑승자 한 명 늘리기 버튼'
        className='increase default-btn'
        disabled={passenger >= 3 ? true : false}
      >
        +
      </button>

      <span className='hidden' aria-live='assertive'>{`성인 승객 추가 ${passenger}명`}</span>
    </section>
  );
};

export default SpinButton;
