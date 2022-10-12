import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { PATH } from './constants';

import PassengerPage from './pages/PassengerPage/PassengerPage';

function App() {
  return (
    <Router basename={PATH.BASENAME}>
      <Routes>
        <Route path={PATH.PASSENGER} element={<PassengerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
