import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Step1 from '@/pages/Step1';
import Step2 from '@/pages/Step2';

const baseURI = '/a11y-airline/';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={baseURI} element={<Step2 />} />
        <Route path={`${baseURI}/step1`} element={<Step1 />} />
      </Routes>
    </Router>
  );
}

export default App;
