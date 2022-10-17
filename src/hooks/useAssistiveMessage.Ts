import { useState, useRef, useEffect } from 'react';

const EMPTY_MESSAGE = '';

const useAssistiveMessage = () => {
  const [message, setMessage] = useState(EMPTY_MESSAGE);

  const timerIdRef = useRef<null | number>(null);

  useEffect(() => {
    if (message === EMPTY_MESSAGE) {
      return;
    }

    if (typeof timerIdRef.current === 'number') {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }

    timerIdRef.current = window.setTimeout(() => {
      setMessage('');
    }, 3000);
  }, [message]);

  return { message, setMessage };
};

export default useAssistiveMessage;
