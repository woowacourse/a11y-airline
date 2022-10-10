import styled from 'styled-components';
import PASSENGER from '../constants/index';
import usePassenger from '../hooks/usePassenger';
import CircleButton from './circleButton';

const SpinButton = () => {
  const {
    passengerNum,
    announceState,
    handleChangePassengerNumInput,
    handleClickDecreaseButton,
    handleClickIncreaseButton,
  } = usePassenger();

  return (
    <S.Container>
      <CircleButton
        disabled={passengerNum <= PASSENGER.MIN}
        onClick={handleClickDecreaseButton}
        value={'-'}
        ariaLabel={`성인 탑승자 한명 줄이기`}
      />
      <S.PassengerNum
        value={passengerNum}
        min={PASSENGER.MIN}
        max={PASSENGER.MAX}
        onChange={handleChangePassengerNumInput}
        aria-label={`성인 ${passengerNum} 텍스트 숫자만 수정`}
      />
      <CircleButton
        disabled={passengerNum >= PASSENGER.MAX}
        onClick={handleClickIncreaseButton}
        value={'+'}
        ariaLabel={`성인 탑승자 한명 늘리기`}
      />
      <S.Announce role={'status'} aria-live={'polite'}>
        {announceState}
      </S.Announce>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,

  PassengerNum: styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
    border: none;
    border-bottom: 2px solid black;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  `,

  Announce: styled.p`
    transform: scale(0);
  `,
};

export default SpinButton;
