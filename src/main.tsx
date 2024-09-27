import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/Typography.css';
import './styles/Accessibility.css';
import './styles/index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
