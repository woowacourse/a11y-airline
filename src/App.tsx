import { Global } from '@emotion/react';
import PassengetSelector from './components/PassengerSeletor';
import globalStyle from './globalStyle';
import * as S from './App.style';

function App() {
  return (
    <S.Container>
      <PassengetSelector />
      <Global styles={globalStyle} />
    </S.Container>
  );
}

export default App;
