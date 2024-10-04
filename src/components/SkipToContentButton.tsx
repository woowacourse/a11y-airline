import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './SkipToContentButton.module.css';

const SkipToContentButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      event.key === 'Tab' &&
      (document.activeElement === document.body ||
        document.activeElement === document.documentElement) &&
      !document.getElementById('promotion-modal')
    ) {
      setIsVisible(true);
    }
  }, []);

  const skipToContent = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.focus();
    setIsVisible(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <button
      ref={ref}
      onClick={skipToContent}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      aria-hidden={!isVisible}
      className={`${styles.skipButton} ${!isVisible && styles.hidden}`}
    >
      본문으로 바로가기
    </button>
  );
};

export default SkipToContentButton;
