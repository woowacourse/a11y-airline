import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import PassengetSelector from './components/PassengerSeletor';
import globalStyle from './globalStyle';
import * as S from './App.style';

function App() {
  return (
    <S.Container>
      <BrowserRouter basename="/a11y-airline">
        <Routes>
          <Route path="/" element={<PassengetSelector />} />
        </Routes>
      </BrowserRouter>

      <Global styles={globalStyle} />
    </S.Container>
  );
}

export default App;
