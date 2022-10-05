import ToolTip from './ToolTip';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MIN_VALUE = 0;
const MAX_VALUE = 3;

const DialogPassenger = () => {
  const [value, setValue] = useState<number>(1);
  const [message, setMessage] = useState('');
  const timerId = useRef<null | number>(null);
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const toggleToolTip = () => {
    setIsOpenToolTip((prevState) => !prevState);
  };

  useEffect(() => {
    if (message === '') {
      return;
    }

    if (typeof timerId.current === 'number') {
      clearTimeout(timerId.current);
      timerId.current = null;
    }

    timerId.current = window.setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);

  const handleClickDecrease = () => {
    if (value <= MIN_VALUE) {
      return;
    }

    setValue((prevValue) => prevValue - 1);
    setMessage(`성인 승객 감소 ${value - 1}`);
  };

  const handleClickIncrease = () => {
    if (value >= MAX_VALUE) {
      return;
    }

    setValue((prevValue) => prevValue + 1);
    setMessage(`성인 승객 추가 ${value + 1}`);
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { data } = event.nativeEvent as InputEvent;

    if (data === null || !Number.isInteger(Number(data))) {
      setValue(0);
      return;
    }

    if (Number(data) > MAX_VALUE) {
      return;
    }

    setValue(Number(data));
  };

  return (
    <main>
      <div role="document">
        <h2>승객 선택</h2>
        <Wrapper>
          <LabelWrapper>
            <Label htmlFor="adultCount">
              <span>성인</span>
            </Label>
            <ToolTip
              icon="?"
              description="성인 기준 상세 안내"
              message="국제선 만 12세 이상, 국내선 만 13세 이상"
              isOpenToolTip={isOpenToolTip}
              toggleToolTip={toggleToolTip}
            />
          </LabelWrapper>
          <ControlWrapper>
            <ControlButton
              onClick={handleClickDecrease}
              type="button"
              disabled={value <= MIN_VALUE}
              aria-label="성인 탑승자 한 명 줄이기"
              aria-controls="spinnerMessage"
              aria-disabled={value <= MIN_VALUE}
            >
              -
            </ControlButton>
            <Input
              onChange={handleChangeInput}
              value={value}
              id="adultCount"
              maxLength={1}
              type="tel"
              aria-describedby="inputHelpMessage"
            />
            <ControlButton
              onClick={handleClickIncrease}
              type="button"
              disabled={value >= MAX_VALUE}
              aria-label="성인 탑승자 한 명 늘리기"
              aria-controls="spinnerMessage"
              aria-disabled={value >= MAX_VALUE}
            >
              +
            </ControlButton>
          </ControlWrapper>
          <HiddenMessage id="inputHelpMessage" aria-hidden>
            숫자만 수정
          </HiddenMessage>
          <HiddenMessage id="spinnerMessage" aria-live="assertive">
            {message}
          </HiddenMessage>
        </Wrapper>
      </div>
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
const ControlButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #e6e7ea;
  background-color: none;
  font-size: 20px;
  &:disabled {
    color: #e6e7ea;
  }
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
