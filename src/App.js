import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SpinButton from './components/SpinButton';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route to='/' component={SpinButton} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
