import './styles/App.css';
import { MESSAGE } from './constants';
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
          aria-label='성인 승객 안내'
        >
          ?
          <span id='passenger-select-tooltip-text' role='tooltip'>
            {MESSAGE.TOOLTIP.ADULT_PASSENGER_SELECT}
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
