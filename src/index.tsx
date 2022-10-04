import ReactDOM from 'react-dom/client';
import App from './App';
import ScreenReaderProvider from './ScreenReaderProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ScreenReaderProvider>
    <App />
  </ScreenReaderProvider>
);
