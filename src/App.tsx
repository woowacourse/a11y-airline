import { Global } from '@emotion/react';
import PassengetSelector from './components/PassengerSeletor';
import globalStyle from './globalStyle';
import * as S from './App.style';

function App() {
  return (
    <S.Container aria-label="승객 선택을 위한 서비스">
      <PassengetSelector />
      <Global styles={globalStyle} />
    </S.Container>
  );
}

export default App;
