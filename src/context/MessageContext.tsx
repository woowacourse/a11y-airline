import React, { createContext, useState } from 'react';

type MessageContext = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const messageContext = createContext<MessageContext | null>(null);

const MessageContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = useState('');

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
