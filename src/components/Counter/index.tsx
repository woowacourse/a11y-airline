import { Dispatch, useEffect, useRef, useState } from 'react';
import Tooltip from '../Tooltip';
import VoiceLabel from '../VoiceLabel';
import limit from '../../utils/limit';
import * as S from './index.style';

interface Information {
  mainLabel: string;
  tooltip: string;
  decreaseButtonLabel: string;
  increaseButtonLabel: string;
  inputLabel: string;
  decreaseInteractionScript: (count: number) => string;
  increaseInteractionScript: (count: number) => string;
  inputInteractionScript: (count: number) => string;
}

interface CounterProps {
  title: string;
  information: Information;
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}

const INTERACTION = {
  INCREASE: '+',
  DECREASE: '-',
  INPUT: 'input',
} as const;

type ActivatedInteraction = typeof INTERACTION[keyof typeof INTERACTION];

const Counter = ({
  title,
  information,
  count,
  setCount,
  max = 9,
  min = 0,
}: CounterProps) => {
  const [script, setScript] = useState('');
  const [activatedInteraction, setActivatedInteraction] =
    useState<ActivatedInteraction>();
  const didMount = useRef(false);

  const getScript = (target: ActivatedInteraction, count: number) => {
    switch (target) {
      case INTERACTION.DECREASE:
        return information.decreaseInteractionScript(count);

      case INTERACTION.INCREASE:
        return information.increaseInteractionScript(count);

      case INTERACTION.INPUT:
        return information.inputInteractionScript(count);
    }
  };

  useEffect(() => {
    if (didMount.current && activatedInteraction)
      setScript(getScript(activatedInteraction, count));
    else didMount.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activatedInteraction, count]);

  return (
    <S.Container aria-label={information.mainLabel}>
      <S.Header>
        <S.Title aria-hidden>{title}</S.Title>
        <Tooltip content={information.tooltip} />
      </S.Header>

      <S.Body>
        <S.CountButton
          type="button"
          onClick={() => {
            setCount(count => count - 1);
            setActivatedInteraction(INTERACTION.DECREASE);
          }}
          disabled={count <= min}
          aria-label={information.decreaseButtonLabel}
        >
          ﹣
        </S.CountButton>
        <S.Count
          type="number"
          id={`${title}_input`}
          value={count || 0}
          onChange={e => setCount(limit(max, min, e.target.valueAsNumber))}
          onKeyDown={() => setActivatedInteraction(INTERACTION.INPUT)}
          aria-label={information.inputLabel}
        />
        <S.CountButton
          type="button"
          onClick={() => {
            setCount(count => count + 1);
            setActivatedInteraction(INTERACTION.INCREASE);
          }}
          disabled={count >= max}
          aria-label={information.increaseButtonLabel}
        >
          +
        </S.CountButton>
        <VoiceLabel value={script} targetId={`${title}_input`} />
      </S.Body>
    </S.Container>
  );
};

export default Counter;
