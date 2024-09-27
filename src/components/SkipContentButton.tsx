import { useEffect, useState } from 'react';

import styles from './SkipContentButton.module.css';

const SkipContentButton = () => {
  const [isOpenSkipContent, setIsOpenSkipContent] = useState(false);
  const [tabCount, setTabCount] = useState(0);

  const handleTabToSkipContent = (e: KeyboardEvent) => {
    if (e.code !== 'Tab') return;

    if (tabCount === 0) {
      setIsOpenSkipContent(true);
    }
    if (tabCount === 1) {
      setIsOpenSkipContent(false);
    }

    setTabCount((prev) => (prev += 1));
  };

  const handleClick = () => {
    setIsOpenSkipContent(false);
    const mainContentEl = document.getElementById('main-content');
    mainContentEl?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleTabToSkipContent);

    if (tabCount > 1) {
      document.removeEventListener('keydown', handleTabToSkipContent);
    }
    return () => {
      document.removeEventListener('keydown', handleTabToSkipContent);
    };
  }, [tabCount]);

  return (
    <>
      {isOpenSkipContent && (
        <button className={styles.skipContentButton} onClick={handleClick}>
          Skip Content
        </button>
      )}
    </>
  );
};

export default SkipContentButton;
