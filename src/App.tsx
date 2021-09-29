import { useState } from 'react';
import SpinButton from './components/SpinButton/SpinButton';
import './App.css';

const App = () => {
  const valueState = useState<string | number>(1);

  return (
    <main className="App">
      <h1>승객 선택</h1>
      <SpinButton
        label="성인"
        valueState={valueState}
        min={0}
        max={3}
        increaseButtonLabel="성인 탑승자 한 명 늘리기"
        decreaseButtonLabel="성인 탑승자 한 명 줄이기"
        increaseMessage="성인 승객 추가"
        decreaseMessage="성인 승객 감소"
      />
    </main>
  );
};

export default App;
