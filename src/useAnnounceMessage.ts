import React, { useContext } from 'react';
import { ScreenReaderContext } from './ScreenReaderProvider';

const useAnnounceMessage = () => {
  const { announceMessage } = useContext(ScreenReaderContext);

  return { announceMessage };
};

export default useAnnounceMessage;
