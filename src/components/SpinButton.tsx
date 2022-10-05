import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircleButton from './circleButton';

const SpinButton = () => {
  const [passengerNum, setPassengerNum] = useState(1);
  const [announceState, setAnnounceState] = useState('');

  const handleClickDecreaseButton = () => {
    setPassengerNum(passengerNum - 1);
    setAnnounceState(`성인 승객 감소 ${passengerNum - 1}`);
  };

  const handleClickIncreaseButton = () => {
    setPassengerNum(passengerNum + 1);
    setAnnounceState(`성인 승객 추가 ${passengerNum + 1}`);
  };

  const handleChangePassengerNumInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 3) {
      setPassengerNum(value);
      setAnnounceState(`성인 승객 ${value}`);
    }
  };

  return (
    <S.Container>
      <CircleButton
        disabled={passengerNum <= 0}
        onClick={handleClickDecreaseButton}
        value={'-'}
        ariaLabel={`성인 탑승자 한명 줄이기 버튼`}
      ></CircleButton>
      <S.PassengerNum
        value={passengerNum}
        min={0}
        max={3}
        onChange={handleChangePassengerNumInput}
        aria-label={`성인 ${passengerNum} 텍스트 숫자만 수정`}
      />
      <CircleButton
        disabled={passengerNum >= 3}
        onClick={handleClickIncreaseButton}
        value={'+'}
        ariaLabel={`성인 탑승자 한명 늘리기 버튼`}
      ></CircleButton>
      <S.Announce role={'status'}>{announceState}</S.Announce>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,

  PassengerNum: styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
    border: none;
    border-bottom: 2px solid black;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  `,

  Announce: styled.p`
    transform: scale(0);
  `,
};

export default SpinButton;
