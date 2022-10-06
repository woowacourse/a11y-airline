import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FirstMissionPage from './pages/FirstMissionPage';
import NotFoundPage from './pages/NotFoundPage';

import MessageProvider from './context/MessageProvider';

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
