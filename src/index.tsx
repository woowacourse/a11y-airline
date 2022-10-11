import ReactDOM from 'react-dom';
import App from './App';
import { AnnouncerProvider } from './contexts/AnnouncerContext';

ReactDOM.render(
  <AnnouncerProvider>
    <App />
  </AnnouncerProvider>,
  document.getElementById('root')
);
