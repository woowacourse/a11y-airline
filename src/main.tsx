import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './Typography.css';
import './Accessibility.css';
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="skip-nav">
      <a href="#main-content">본문 바로가기</a>
    </div>
    <App />
  </StrictMode>
);
