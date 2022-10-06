import './style/normalize.css';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import MessageContextProvider from './context/MessageContext';
import A11yMessage from './components/A11yMessage';

const App = () => {
  return (
    <BrowserRouter>
      <MessageContextProvider>
        <Body>
          <Router />
        </Body>
        <A11yMessage />
      </MessageContextProvider>
    </BrowserRouter>
  );
};

export default App;
