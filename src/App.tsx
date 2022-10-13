import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { PATH } from './constants';

import PassengerPage from './pages/PassengerPage/PassengerPage';
import PromotionPage from './pages/PromotionPage/PromotionPage';

function App() {
  return (
    <Router basename={PATH.BASENAME}>
      <Routes>
        <Route path={PATH.PROMOTION} element={<PromotionPage />} />
        <Route path={PATH.PASSENGER} element={<PassengerPage />} />
        <Route path='*' element={<PromotionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
