import styled from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'style/GlobalStyle';
import { PassengerSelectionPage, TravelRecommendationPage } from 'pages';
import { Header } from 'components';
import { PATH } from 'constants/path';

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <MainWrapper>
          <Routes>
            <Route index element={<TravelRecommendationPage />} />
            <Route path={PATH.PASSENGER_SELECTION} element={<PassengerSelectionPage />} />
            <Route
              path={PATH.TRAVEL_RECOMMENDATION}
              element={<TravelRecommendationPage />}
            />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
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
