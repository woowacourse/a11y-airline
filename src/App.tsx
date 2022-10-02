import styled from 'styled-components';
import { SpinButton } from 'components';

const App = () => {
  return (
    <Wrapper>
      <header>a11y-airline Header</header>
      <MainWrapper>
        <h1>승객 선택</h1>
        <h2>성인</h2>
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
