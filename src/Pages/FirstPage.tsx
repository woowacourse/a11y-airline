import { useState } from 'react';
import styled from 'styled-components';
import Tooltip from './../components/Tooltip';

const FirstPage = () => {
  const [count, setCount] = useState<number>(1);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <S.PageWrapper>
      <h1>승객 선택</h1>
      <S.SubtitleWrapper>
        <h2>성인</h2>
        <Tooltip />
      </S.SubtitleWrapper>
      <S.ControlWrapper>
        <S.Button aria-label='성인 탑승자 한명 줄이기' onClick={countDown}>
          -
        </S.Button>
        <S.Count>{count}</S.Count>
        <S.Button aria-label='성인 탑승자 한명 늘리기' onClick={countUp}>
          +
        </S.Button>
      </S.ControlWrapper>
    </S.PageWrapper>
  );
};

const S = {
  PageWrapper: styled.div`
    height: 300px;
    width: 250px;
    border: 2px solid gray;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  `,
  SubtitleWrapper: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  Button: styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #b8b8b8;
    border-radius: 50%;
    font-size: 22px;
    background-color: transparent;
    cursor: pointer;
  `,
  Count: styled.span`
    width: 32px;
    text-align: center;
    font-size: 24px;
    border-bottom: 2px solid #6d6d6d;
  `,
  ControlWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
};

export default FirstPage;
