import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import './style/normalize.css';
import Body from './components/Body';

const App = () => {
  return (
    <BrowserRouter>
      <Body>
        <Router />
      </Body>
    </BrowserRouter>
  );
};

export default App;
