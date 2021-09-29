import React from 'react';
import ReactDOM from 'react-dom';
import SpinButton from './components/SpinButton';

const App = () => {
  const spanStyle = {};

  return (
    <>
      <SpinButton />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
