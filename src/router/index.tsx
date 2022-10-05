import { Routes, Route, Navigate } from 'react-router-dom';
import PassengerPage from '../pages/PassengerPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/passenger' replace />} />
      <Route path='passenger' element={<PassengerPage />} />
    </Routes>
  );
};

export default Router;
