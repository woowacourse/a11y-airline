import React from 'react';
import ReactDOM from 'react-dom';
import SpinButton from './components/SpinButton';

const App = () => {
  const spanStyle = {};

  return (
    <main>
      <h1>그루밍의 접근성 미션 ꒰◍ॢ•ᴗ•◍ॢ꒱ 🧡</h1>
      <SpinButton />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
