import CarouselPage from 'Pages/CarouselPage';
import SpinButtonPage from 'Pages/SpinButtonPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="mission1" element={<SpinButtonPage />} />
        <Route path="mission2" element={<CarouselPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
