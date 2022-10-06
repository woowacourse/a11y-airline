import useDialogPassenger from 'Pages/DialogPassenger/useDialogPassenger';
import styled from 'styled-components';

import ControlButton from 'components/ControlButton';
import ToolTip from 'components/ToolTip';

import { MAX_VALUE, MIN_VALUE } from 'constants/passenger';

const DialogPassenger = () => {
  const {
    isOpenToolTip,
    toggleToolTip,
    handleClickIncrease,
    handleClickDecrease,
    handleChangeInput,
    value,
    message,
  } = useDialogPassenger();

  return (
    <main>
      <h2>승객 선택</h2>
      <Wrapper>
        <LabelWrapper>
          <Label htmlFor="adultCount">
            <span>성인</span>
          </Label>
          <ToolTip
            icon="?"
            ariaLabel="성인 기준 상세 안내"
            message="국제선 만 12세 이상, 국내선 만 13세 이상"
            isOpenToolTip={isOpenToolTip}
            toggleToolTip={toggleToolTip}
          />
        </LabelWrapper>
        <ControlWrapper>
          <ControlButton
            onClick={handleClickDecrease}
            disabled={value <= MIN_VALUE}
            ariaLabel="성인 탑승자 한 명 줄이기"
            value="-"
          />
          <Input
            onChange={handleChangeInput}
            value={value}
            id="adultCount"
            type="number"
          />
          <ControlButton
            onClick={handleClickIncrease}
            disabled={value >= MAX_VALUE}
            ariaLabel="성인 탑승자 한 명 늘리기"
            value="+"
          />
        </ControlWrapper>
        <HiddenMessage aria-live="assertive">{message}</HiddenMessage>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 5px;
  font-weight: bold;
  text-align: center;
`;

const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 38px;
  height: 40px;
  margin: 0 20px;
  border-bottom: 1px solid #000;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const HiddenMessage = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  border: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  z-index: -1;
`;

export default DialogPassenger;
