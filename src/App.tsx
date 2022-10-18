import './style/normalize.css';
import Body from './components/Body';
import MessageContextProvider from './context/MessageContext';
import A11yMessage from './components/A11yMessage';
import CarouselPage from './pages/CarouselPage';

const App = () => {
  return (
    <MessageContextProvider>
      <Body>
        <CarouselPage />
      </Body>
      <A11yMessage />
    </MessageContextProvider>
  );
};

export default App;
