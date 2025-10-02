import { useEffect } from 'react';

export default function useEscapeClose(onClose: () => void) {
  useEffect(() => {
    const handleEscDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscDown);
    return () => {
      document.removeEventListener('keydown', handleEscDown);
    };
  }, [onClose]);
}
