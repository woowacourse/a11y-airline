import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import globalStyle from './globalStyle';
import ScreenReaderProvider from './ScreenReaderProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ScreenReaderProvider>
    <Global styles={globalStyle} />
    <App />
  </ScreenReaderProvider>
);
