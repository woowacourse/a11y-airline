import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import Tooltip from '../../components/Tooltip';
import { PASSENGER } from '../../const/message';
import { messageContext } from '../../context/MessageContext';
import './PassengerPage.css';

const PassengerPage = () => {
  const messageState = useContext(messageContext);
  const [count, setCount] = useState(1);

  const handlePlusClick = () => {
    if (count < 3) {
      setCount((prevCount) => prevCount + 1);
      messageState?.setMessage(`${PASSENGER.PLUS} ${count + 1}`);
    } else {
      messageState?.setMessage(PASSENGER.MAX_COUNT);
    }
  };

  const handleMinusClick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      messageState?.setMessage(`${PASSENGER.MINUS} ${count - 1}`);
    } else {
      messageState?.setMessage(PASSENGER.MIN_COUNT);
    }
  };

  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let count = Math.floor(Number(event.target.value));

    if (Number.isNaN(count)) {
      messageState?.setMessage(PASSENGER.NAN);
      return;
    }

    if (count > 3) {
      messageState?.setMessage(PASSENGER.MAX_COUNT);
      setCount(3);
    } else if (count < 0) {
      messageState?.setMessage(PASSENGER.MIN_COUNT);
      setCount(0);
    } else {
      messageState?.setMessage(`${count} 입력`);
      setCount(count);
    }
  };

  return (
    <div className='body'>
      <section>
        <h1 role='heading'>승객 선택</h1>
        <div className='sub'>
          <h2>성인</h2>
          <Tooltip description='이미 성년이 된 사람. 보통, 만 20세 이상의 남녀를 말한다.' />
        </div>
        <div className='counter'>
          <Button
            onClick={handleMinusClick}
            role='button'
            aria-label='성인 탑승자 한명 줄이기'
            aria-controls='count'>
            ➖
          </Button>
          <input
            id='count'
            className='number'
            type='number'
            value={count}
            onChange={handleCountChange}
          />
          <Button onClick={handlePlusClick} role='button' aria-label='성인 탑승자 한명 늘리기'>
            ➕
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PassengerPage;
