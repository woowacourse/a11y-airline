import { useEffect, useState } from 'react';

import styles from './SkipContentButton.module.css';

const SkipContentButton = () => {
  const [isOpenSkipContent, setIsOpenSkipContent] = useState(false);

  const handleTabToSkipContent = (e: KeyboardEvent) => {
    // SkipContent이 열려있다다면  Enter시, 동작 실행 되게
    if (e.code === 'Enter' && isOpenSkipContent) {
      handleSkipContent();
    }

    //Tab  동작
    if (e.code !== 'Tab') return;
    if (isOpenSkipContent) {
      setIsOpenSkipContent(false);
      return;
    }

    if (document.activeElement?.tagName === 'BODY') {
      e.preventDefault();
      setIsOpenSkipContent(true);
      return;
    }
  };

  const handleSkipContent = () => {
    setIsOpenSkipContent(false);
    const mainContentEl = document.getElementById('main-content');
    mainContentEl?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleTabToSkipContent);

    return () => {
      document.removeEventListener('keydown', handleTabToSkipContent);
    };
  }, [isOpenSkipContent]);

  return (
    <>
      {isOpenSkipContent && (
        <button className={styles.skipContentButton} onClick={handleSkipContent}>
          Skip Content
        </button>
      )}
    </>
  );
};

export default SkipContentButton;
