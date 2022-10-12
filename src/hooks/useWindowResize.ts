import { useEffect } from 'react';

type CallbackFunc = () => void;

function useWindowResize(callbackFunc: CallbackFunc) {
  useEffect(() => {
    window.addEventListener('resize', callbackFunc);

    return () => {
      window.removeEventListener('resize', callbackFunc);
    };
  }, []);
}

export default useWindowResize;
