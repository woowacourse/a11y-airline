import './App.css';
import { PASSENGER } from './constants';
import usePassengerSelect from './hooks/usePassengerSelect';

function App() {
  const {
    adultCount,
    handleChangeAdultCount,
    handleClickDecreaseAdultCount,
    handleClickIncreaseAdultCount,
  } = usePassengerSelect();

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
          aria-labelledby='passenger-select-tooltip-text'
        >
          ?
          <span id='passenger-select-tooltip-text' role='tooltip'>
            성인은 탑승일 기준 만 18세 이상에 적용되며,&nbsp;
            {PASSENGER.ADULT.MIN_COUNT}~{PASSENGER.ADULT.MAX_COUNT}명 탑승할 수
            있습니다.
          </span>
        </div>
      </div>
      <div className='passenger-select-control'>
        <button
          className='passenger-count-control-button'
          aria-label='성인 탑승자 한명 줄이기'
          onClick={handleClickDecreaseAdultCount}
        >
          -
        </button>
        <input
          type='number'
          id='adult-count'
          className='passenger-count-input'
          title={`성인 ${adultCount} 텍스트 숫자만 수정`}
          value={adultCount}
          aria-live='assertive'
          aria-label={`성인 승객 추가 ${adultCount}`}
          onChange={handleChangeAdultCount}
        />
        <button
          className='passenger-count-control-button'
          aria-label='성인 탑승자 한명 늘리기'
          onClick={handleClickIncreaseAdultCount}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
