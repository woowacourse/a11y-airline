import './App.css';

function App() {
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
            성인은 최대 3명까지 탑승할 수 있습니다.
          </span>
        </div>
      </div>
      <div className='passenger-select-control'>
        <button className='passenger-count-control-button'>-</button>
        <input
          type='number'
          id='adult-count'
          className='passenger-count-input'
        />
        <button className='passenger-count-control-button'>+</button>
      </div>
    </div>
  );
}

export default App;
