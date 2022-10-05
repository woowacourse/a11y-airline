import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/FirstPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
