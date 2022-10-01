import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessageProvider from './context/MessageProvider';
import FirstMissionPage from './pages/FirstMissionPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <MessageProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<FirstMissionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  );
};

export default App;
