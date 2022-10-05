import { Global } from '@emotion/react';
import globalStyle from './globalStyle';

function App() {
  return (
    <div>
      <Global styles={globalStyle} />
    </div>
  );
}

export default App;
