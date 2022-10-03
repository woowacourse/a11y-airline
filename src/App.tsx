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
        <SpinButton />
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
