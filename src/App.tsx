import { PAGE_PATH } from "constant";
import HomePage from "pages/HomePage";
import SelectPassengerPage from "pages/SelectPassengerPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PAGE_PATH.HOME} element={<HomePage />} />
        <Route
          path={PAGE_PATH.SELECT_PASSENGER}
          element={<SelectPassengerPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
