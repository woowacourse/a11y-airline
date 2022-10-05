import { useState } from 'react';
import Counter from '../Counter';
import * as S from './index.style';

const PassengetSelector = () => {
  const [count, setCount] = useState(0);

  return (
    <S.Container>
      <S.Title>승객 선택</S.Title>
      <Counter
        title="성인"
        information="국제선 만 12세 이상, 국내선 만 13세 이상"
        count={count}
        setCount={setCount}
      />
    </S.Container>
  );
};

export default PassengetSelector;
