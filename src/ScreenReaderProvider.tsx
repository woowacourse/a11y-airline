import React, { createContext, PropsWithChildren, useState } from 'react';

export const ScreenReaderContext = createContext({
  announceMessage: (message: string) => {},
});

const ScreenReaderProvider = ({ children }: PropsWithChildren) => {
  const [shouldAnnounce, setShouldAnnounce] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'assertive' | 'polite'>('polite');

  const announceMessage = (message: string, type: 'assertive' | 'polite' = 'polite') => {
    setShouldAnnounce(true);
    setMessage(message);
    setType(type);
  };

  return (
    <ScreenReaderContext.Provider value={{ announceMessage }}>
      {children}
      {shouldAnnounce && <AnnouncedMessage message={message} type={type} />}
    </ScreenReaderContext.Provider>
  );
};

const AnnouncedMessage = ({ message, type }: { message: string; type: 'assertive' | 'polite' }) => {
  return (
    <div role='status' aria-live={type} className='sr-only'>
      {message}
    </div>
  );
};

export default ScreenReaderProvider;
