import { ChangeEvent, useState } from 'react';
import './App.css';
import { MESSAGE, PASSENGER } from './constants';

function App() {
  const [adultCount, setAdultCount] = useState<number | ''>(0);

  const handleClickDecreaseAdultCount = () => {
    if (adultCount === PASSENGER.ADULT.MIN_COUNT) {
      alert(MESSAGE.ERROR.LESS_THAN_MIN_ADULT_COUNT);

      return;
    }

    setAdultCount((prev) => {
      if (prev === '') return PASSENGER.ADULT.MIN_COUNT;
      return prev - 1;
    });
  };

  const handleChangeAdultCount = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    if (target.value === '') {
      setAdultCount('');

      return;
    }

    const value = Number(target.value);

    if (value < PASSENGER.ADULT.MIN_COUNT) {
      alert(MESSAGE.ERROR.LESS_THAN_MIN_ADULT_COUNT);

      return;
    }

    if (value > PASSENGER.ADULT.MAX_COUNT) {
      alert(MESSAGE.ERROR.EXCEED_MAX_ADULT_COUNT);

      return;
    }

    setAdultCount(value);
  };

  const handleClickIncreaseAdultCount = () => {
    if (adultCount === PASSENGER.ADULT.MAX_COUNT) {
      alert(MESSAGE.ERROR.EXCEED_MAX_ADULT_COUNT);

      return;
    }

    setAdultCount((prev) => {
      if (prev === '') return PASSENGER.ADULT.MIN_COUNT + 1;
      return prev + 1;
    });
  };

  return (
    <div className='App'>
      <h1 className='passenger-select-menu'>승객 선택</h1>
      <div className='passenger-select-option'>
        <label className='adult-passenger-select-label' htmlFor='adult-count'>
          성인
        </label>
        <div
          className='passenger-select-tooltip'
          aria-describedby='passenger-select-tooltip-text'
        >
          ?
          <span id='passenger-select-tooltip-text' role='tooltip'>
            성인은 {PASSENGER.ADULT.MIN_COUNT}~{PASSENGER.ADULT.MAX_COUNT}명
            탑승할 수 있습니다.
          </span>
        </div>
      </div>
      <div className='passenger-select-control'>
        <button
          className='passenger-count-control-button'
          onClick={handleClickDecreaseAdultCount}
        >
          -
        </button>
        <input
          type='number'
          id='adult-count'
          className='passenger-count-input'
          value={adultCount}
          onChange={handleChangeAdultCount}
        />
        <button
          className='passenger-count-control-button'
          onClick={handleClickIncreaseAdultCount}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
