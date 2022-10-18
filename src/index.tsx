import React from 'react';
import ReactDOM from 'react-dom/client';
import Spin from './Spin/Spin';
import Carousel from './Carousel/Carousel';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Spin /> */}
    <Carousel />
  </React.StrictMode>
);
