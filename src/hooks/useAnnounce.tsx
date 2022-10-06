import { AriaAttributes, useState } from 'react';

type Liveness = AriaAttributes['aria-live'];

const useAnnounce = () => {
  const [liveness, setLiveness] = useState<Liveness>('off');
  const [message, setMessage] = useState<string>('');

  const announce = (message: string, liveness: Liveness = 'polite') => {
    setLiveness(liveness);
    setMessage(message);
  };

  const Announcement = () => (
    <span className="visually-hidden" aria-live={liveness}>
      {message}
    </span>
  );

  return {
    Announcement,
    announce,
  };
};

export default useAnnounce;
