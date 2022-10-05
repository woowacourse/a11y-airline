import { Dispatch } from 'react';
import limit from '../../utils/limit';
import Tooltip from '../Tooltip';
import * as S from './index.style';

interface CounterProps {
  title: string;
  information: string;
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}

const Counter = ({
  title,
  information,
  count,
  setCount,
  max = 9,
  min = 0,
}: CounterProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <Tooltip content={information} />
      </S.Header>

      <S.Body>
        <S.CountButton
          onClick={() => setCount(count => count - 1)}
          disabled={count <= min}
        >
          ﹣
        </S.CountButton>
        <S.Count
          type="number"
          value={count || 0}
          onChange={e => setCount(limit(max, min, e.target.valueAsNumber))}
        />
        <S.CountButton
          onClick={() => setCount(count => count + 1)}
          disabled={count >= max}
        >
          +
        </S.CountButton>
      </S.Body>
    </S.Container>
  );
};

export default Counter;
