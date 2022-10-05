import PassengerCounter from '../components/PassengerCounter/PassengerCounter';
import FlexContainer from '../components/FlexContainer/FlexContainer';

import { useMessageState } from '../hooks/useMessageState';

const ADULT = {
  label: '성인',
  min: 0,
  max: 3,
} as const;

const INFANT = {
  label: '소아',
  min: 0,
  max: 3,
} as const;

const CHILD = {
  label: '유아',
  min: 0,
  max: 3,
} as const;

const FirstMissionPage = () => {
  const { message } = useMessageState();

  return (
    <div>
      <h1>승객 선택</h1>
      <FlexContainer flexDirection="column" gap="large">
        <PassengerCounter label={ADULT.label} min={ADULT.min} max={ADULT.max} />
        <PassengerCounter label={INFANT.label} min={INFANT.min} max={INFANT.max} />
        <PassengerCounter label={CHILD.label} min={CHILD.min} max={CHILD.max} />
        <div role="status">{message} 반갑습니다</div>
      </FlexContainer>
    </div>
  );
};

export default FirstMissionPage;
