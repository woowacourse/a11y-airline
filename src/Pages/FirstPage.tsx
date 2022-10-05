import { useState } from 'react';
import styled from 'styled-components';

const FirstPage = () => {
  const [count, setCount] = useState<number>(0);

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
        <S.Question>?</S.Question>
      </S.SubtitleWrapper>
      <S.ControlWrapper>
        <S.Button onClick={countDown}>-</S.Button>
        <S.Count>{count}</S.Count>
        <S.Button onClick={countUp}>+</S.Button>
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
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  Question: styled.span`
    width: 20px;
    height: 20px;
    border: 1px solid #cbcbcb;
    color: #cbcbcb;
    border-radius: 50%;
    text-align: center;
    cursor: help;
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
