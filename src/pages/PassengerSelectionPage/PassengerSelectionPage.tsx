import styled from 'styled-components';
import { SpinButton } from 'components';

const PassengerSelectionPage = () => {
  return (
    <>
      <h1>승객 선택</h1>
      <SpinButtonWrapper>
        <SpinButton
          labelText="성인"
          passengerType="성인"
          inputId="adultCount"
          toggleMessageText="국제선 만 12세 이상, 국내선 만 13세 이상"
        />
        <SpinButton
          labelText="소아"
          passengerType="소아"
          inputId="childCount"
          toggleMessageText="국제선 만 12세 미만, 국내선 만 13세 미만"
        />
        <SpinButton
          labelText="유아"
          passengerType="유아"
          inputId="infantCount"
          toggleMessageText="만 2세 미만"
        />
      </SpinButtonWrapper>
    </>
  );
};

export default PassengerSelectionPage;

const SpinButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
