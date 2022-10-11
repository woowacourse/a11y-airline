import React, {
  AriaAttributes,
  createContext,
  useContext,
  useState,
} from 'react';

type Liveness = AriaAttributes['aria-live'];
type AnnouncerContextValues = {
  Announcer: React.FC<HTMLSpanElement>;
  announce: (message: string, liveness?: Liveness) => void;
} | null;

const AnnouncerContext = createContext<AnnouncerContextValues>(null);

export const AnnouncerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [liveness, setLiveness] = useState<Liveness>('off');
  const [message, setMessage] = useState<string>('');

  const announce = (message: string, liveness: Liveness = 'polite') => {
    setLiveness(liveness);
    setMessage(message);
  };

  const Announcer = () => (
    <span className="visually-hidden" aria-live={liveness}>
      {message}
    </span>
  );

  return (
    <AnnouncerContext.Provider value={{ Announcer, announce }}>
      {children}
      <Announcer />
    </AnnouncerContext.Provider>
  );
};

const useAnnouncerContext = () => {
  const announcerContext = useContext(AnnouncerContext);

  if (!announcerContext) throw Error('Announcer context must be provided.');

  return announcerContext;
};

export default useAnnouncerContext;
