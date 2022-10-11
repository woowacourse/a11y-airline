import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PassengerCountInput from "./pages/PassengerCountInput/PassengerCountInput";
import PromotionList from "./pages/PromotionList/PromotionList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="a11y-airline">
          <Route path="step1" element={<PassengerCountInput />} />
          <Route path="step2" element={<PromotionList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
