import PassengerCounter from '../components/PassengerCounter/PassengerCounter';
import FlexContainer from '../components/FlexContainer/FlexContainer';

import { useMessageState } from '../hooks/useMessageState';

const FirstMissionPage = () => {
  const { message } = useMessageState();

  return (
    <div>
      <h1>승객 선택</h1>
      <FlexContainer flexDirection="row" alignItems="center" gap="large">
        <PassengerCounter label="성인" min={0} max={3} />
        <PassengerCounter label="소아" min={0} max={3} />
        <PassengerCounter label="유아" min={0} max={3} />
        <div aria-live="polite">{message}</div>
      </FlexContainer>
    </div>
  );
};

export default FirstMissionPage;
