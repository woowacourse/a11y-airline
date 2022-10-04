import React, { createContext, PropsWithChildren, useState } from 'react';

export const ScreenReaderContext = createContext({
  announceMessage: (message: string) => {},
});

const ScreenReaderProvider = ({ children }: PropsWithChildren) => {
  const [shouldAnnounce, setShouldAnnounce] = useState(false);
  const [message, setMessage] = useState('');

  const announceMessage = (message: string) => {
    setShouldAnnounce(true);
    setMessage(message);
  };

  return (
    <ScreenReaderContext.Provider value={{ announceMessage }}>
      {children}
      {shouldAnnounce && <AnnouncedMessage message={message} />}
    </ScreenReaderContext.Provider>
  );
};

const AnnouncedMessage = ({ message }: { message: string }) => {
  return <div aria-live='polite'>{message}</div>;
};

export default ScreenReaderProvider;
