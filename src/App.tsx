/** @jsxImportSource @emotion/react */

import { layoutStyle } from './App.styles';
import Carousel from './Carousel/Carousel';
import { PASSENGER_TYPE } from './constants';
import HelpTooltip from './HelpTooltip/HelpTooltip';
import SpinButton from './SpinButton/SpinButton';

function App() {
  return (
    <div css={layoutStyle}>
      <h2>승객 선택</h2>
      <HelpTooltip
        baseInfo={PASSENGER_TYPE.ADULT}
        passengerType={PASSENGER_TYPE.ADULT}
        tooltipMessage="성인은 만 18세 이상 탑승자로 최대 3명까지 추가할 수 있어요."
      />
      <SpinButton min={0} max={3} passengerType={PASSENGER_TYPE.ADULT} />

      <Carousel />
    </div>
  );
}

export default App;
