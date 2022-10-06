import { useState } from 'react';
import Counter from '../Counter';
import * as S from './index.style';

const information = {
  mainLabel: '성인 탑승자 수를 고릅니다.',
  tooltip: '국제선 만 12세 이상, 국내선 만 13세 이상',
  decreaseButtonLabel: '성인 탑승자 한명 줄이기 버튼',
  increaseButtonLabel: '성인 탑승자 한명 늘리기 버튼',
  inputLabel: '성인 탑승자 수 입력칸',
  decreaseInteractionScript: (count: number) => `성인 승객 감소 ${count}`,
  increaseInteractionScript: (count: number) => `성인 승객 증가 ${count}`,
  inputInteractionScript: (count: number) => `성인 ${count} 텍스트 숫자만 수정`,
};

const PassengetSelector = () => {
  const [count, setCount] = useState(0);

  return (
    <S.Container role="dialog" tabIndex={-1}>
      <S.Title>승객 선택</S.Title>
      <Counter
        title="성인"
        information={information}
        count={count}
        setCount={setCount}
        max={3}
      />
    </S.Container>
  );
};

export default PassengetSelector;
