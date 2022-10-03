import { useState, useRef, useEffect, ChangeEventHandler } from 'react';
import styled from 'styled-components';

const MIN_VALUE = 0;
const MAX_VALUE = 3;

const SpinButton = () => {
  const [value, setValue] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const timerId = useRef<null | number>(null);

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
    });
  }, [message]);

  const handleClickHelpToggle = () => {
    setIsOpenToggle((prevState) => !prevState);
  };

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
    <Wrapper>
      <LabelWrapper>
        <Label htmlFor="adultCount">
          <span>성인</span>
        </Label>
        <HelpToggle
          type="button"
          onClick={handleClickHelpToggle}
          aria-expanded={isOpenToggle}
          aria-controls="helpMessage"
          aria-label="성인 기준 상세 안내"
        >
          ?
        </HelpToggle>
        <HelpToggleMessage id="helpMessage" hidden={!isOpenToggle}>
          <span>국제선 만 12세 이상, 국내선 만 13세 이상</span>
          <HelpToggleCloseButton
            type="button"
            onClick={handleClickHelpToggle}
            aria-label="닫기"
          >
            x
          </HelpToggleCloseButton>
        </HelpToggleMessage>
      </LabelWrapper>
      <ControlWrapper>
        <ControlButton
          type="button"
          onClick={handleClickDecrease}
          disabled={value <= MIN_VALUE}
          aria-label="성인 탑승자 한 명 줄이기"
          aria-controls="spinnerMessage"
          aria-disabled={value <= MIN_VALUE}
        >
          -
        </ControlButton>
        <Input
          id="adultCount"
          type="tel"
          value={value}
          onChange={handleChangeInput}
          aria-describedby="inputHelpMessage"
        />
        <ControlButton
          type="button"
          onClick={handleClickIncrease}
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
  );
};

export default SpinButton;

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

const HelpToggle = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1.5px solid #767676;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #767676;
`;

const HelpToggleMessage = styled.div`
  position: absolute;
  width: 80%;
  top: 30px;
  padding: 16px 12px 12px;
  border: 1px solid #00256c;
  border-radius: 1px;
  background-color: #fff;
  font-size: 14px;
  color: #00256c;

  &:after {
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    position: absolute;
    left: 35px;
    top: -7px;
    width: 0;
    z-index: 1;
  }

  &:before {
    border-color: #00256c transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    position: absolute;
    left: 35px;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;

const HelpToggleCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  font-size: 16px;
  text-align: end;
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
