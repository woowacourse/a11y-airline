import React, { createContext, PropsWithChildren, useMemo, useState } from 'react';

export type MessageStateType = {
  message: string;
};

export type MessageActionType = {
  displayMessage: React.Dispatch<React.SetStateAction<string>>;
};

export const MessageStateContext = createContext<MessageStateType | null>(null);
export const MessageActionContext = createContext<MessageActionType | null>(null);

const MessageProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState('');

  const state = useMemo(() => ({ message }), [message]);
  const action = useMemo(() => ({ displayMessage: setMessage }), []);

  return (
    <MessageStateContext.Provider value={state}>
      <MessageActionContext.Provider value={action}>{children}</MessageActionContext.Provider>
    </MessageStateContext.Provider>
  );
};

export default MessageProvider;
