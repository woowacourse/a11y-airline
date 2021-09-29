import { useState } from 'react';

import PassensgerCounterInput from './components/Counter';

const App = () => {
  const [adultCount, setAdultCount] = useState(0);

  return (
    <div>
      <h1>승객 선택</h1>
      <PassensgerCounterInput
        label="성인"
        value={adultCount}
        setValue={setAdultCount}
        initialValue={0}
        min={0}
        max={3}
      />
    </div>
  );
};

export default App;
