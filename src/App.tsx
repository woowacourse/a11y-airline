import styled from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';
import { SpinButton } from 'components';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <header>a11y-airline Header</header>
      <MainWrapper>
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
      </MainWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const SpinButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
