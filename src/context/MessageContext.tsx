import React, { createContext, useEffect, useRef, useState } from 'react';

type MessageContext = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const messageContext = createContext<MessageContext | null>(null);

const MessageContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = useState('');
  const messageTimeId = useRef<NodeJS.Timeout | undefined>();

  if (messageTimeId) {
    clearTimeout(messageTimeId.current);
  }

  messageTimeId.current = setTimeout(() => {
    setMessage('');
  }, 10);

  useEffect(() => {
    return () => {
      clearTimeout(messageTimeId.current);
    };
  }, []);

  return (
    <messageContext.Provider
      value={{
        message,
        setMessage,
      }}>
      {children}
    </messageContext.Provider>
  );
};

export default MessageContextProvider;
