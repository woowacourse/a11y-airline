import { useState } from 'react';
import styled from 'styled-components';
import CircleButton from '../components/circleButton';
import Tooltip from '../components/Tooltip';

const PassengerEnter = () => {
  const [passengerNum, setPassengerNum] = useState(1);

  return (
    <main>
      <S.Title>승객 선택</S.Title>
      <S.PassengerTypeContainer>
        <S.SubTitle>성인</S.SubTitle>
        <Tooltip />
      </S.PassengerTypeContainer>
      <S.ButtonContainer>
        <CircleButton
          disabled={passengerNum <= 1}
          onClick={() => setPassengerNum(passengerNum - 1)}
        >
          -
        </CircleButton>
        <S.PassengerNumContainer>{passengerNum}</S.PassengerNumContainer>
        <CircleButton
          disabled={passengerNum >= 3}
          onClick={() => setPassengerNum(passengerNum + 1)}
        >
          +
        </CircleButton>
      </S.ButtonContainer>
    </main>
  );
};

const S = {
  Title: styled.h1`
    margin-bottom: 1.5rem;
  `,

  SubTitle: styled.h2`
    margin-right: 0.5rem;
  `,

  PassengerTypeContainer: styled.div`
    display: flex;
    align-items: center;
  `,

  PassengerNumContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
    border-bottom: 2px solid black;
    font-size: 1.5rem;
    font-weight: 600;
  `,

  ButtonContainer: styled.div`
    display: flex;
    align-items: center;
  `,
};

export default PassengerEnter;
