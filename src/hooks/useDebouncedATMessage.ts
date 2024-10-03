import { useState } from 'react';
import useDebounce from './useDebounce';

const MESSAGE_MAINTAIN_TIME = 500;

const useDebouncedATMessage = (delayTime: number) => {
  const [messageForATUser, setMessageForATUser] = useState('');

  const handleDebouncedMessage = useDebounce((message: string) => {
    setMessageForATUser(message);
    setTimeout(() => {
      setMessageForATUser('');
    }, MESSAGE_MAINTAIN_TIME);
  }, delayTime);

  return {
    messageForATUser,
    handleDebouncedMessage
  };
};

export default useDebouncedATMessage;
