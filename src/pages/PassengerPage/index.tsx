import { useState } from 'react';
import Button from '../../components/Button';
import './PassengerPage.css';

const PassengerPage = () => {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount((prevCount) => {
      if (prevCount < 3) return prevCount + 1;
      return prevCount;
    });
  };

  const handleMinusClick = () => {
    setCount((prevCount) => {
      if (prevCount > 0) return prevCount - 1;
      return prevCount;
    });
  };

  return (
    <div className='body'>
      <section className='section'>
        <Button onClick={handleMinusClick}>➖</Button>
        <span className='number'>{count}</span>
        <Button onClick={handlePlusClick}>➕</Button>
      </section>
    </div>
  );
};

export default PassengerPage;
