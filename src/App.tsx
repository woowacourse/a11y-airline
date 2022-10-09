import './style/normalize.css';
import Body from './components/Body';
import MessageContextProvider from './context/MessageContext';
import A11yMessage from './components/A11yMessage';
import PassengerPage from './pages/PassengerPage';

const App = () => {
  return (
    <MessageContextProvider>
      <Body>
        <PassengerPage />
      </Body>
      <A11yMessage />
    </MessageContextProvider>
  );
};

export default App;
