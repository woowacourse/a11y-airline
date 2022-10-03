import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Step1 from '@/pages/Step1';

const baseURI = '/a11y-airline/';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={baseURI} element={<Step1 />} />
      </Routes>
    </Router>
  );
}

export default App;
