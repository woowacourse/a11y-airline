import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SecondPage from './pages/SecondPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
