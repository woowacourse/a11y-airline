import { useState } from 'react';
import styled from 'styled-components';
import Tooltip from '../components/Tooltip';

const FirstPage = () => {
  const [count, setCount] = useState<number>(1);

  const countUp = () => {
    setCount((prev) => {
      if (prev + 1 <= 3) {
        return prev + 1;
      }
      return prev;
    });
  };

  const countDown = () => {
    setCount((prev) => {
      if (prev - 1 >= 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handleCountChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = Number(e.key);

    if (input >= 1 && input <= 3) {
      setCount(input);
    }
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
        <S.Count
          type='number'
          min={1}
          max={3}
          onKeyDown={(e) => {
            handleCountChange(e);
          }}
          value={count}
        />
        <S.Button aria-label='성인 탑승자 한명 늘리기' onClick={countUp}>
          +
        </S.Button>
        <S.HiddenText>{`성인 승객이 ${count} 으로 변경됐습니다`}</S.HiddenText>
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
  Count: styled.input`
    width: 32px;
    text-align: center;
    font-size: 24px;
    border: none;
    border-bottom: 2px solid #6d6d6d;
    outline: none;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  ControlWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  HiddenText: styled.div.attrs({ role: 'status', 'aria-live': 'assertive', 'aria-relevant': 'additions' })`
    position: absolute;
    text-indent: -9999px;
  `,
};

export default FirstPage;
