import { BrowserRouter, Switch, Route } from "react-router-dom";
import PATH from "./constants/path";
import Home from "./pages/Home";
import SpinButton from "./pages/SpinButton";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={PATH.HOME} component={Home} />
      <Route exact path={PATH.SPIN_BUTTON} component={SpinButton} />
    </Switch>
  </BrowserRouter>
);

export default App;
