import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import styles from './SkipContentButton.module.css';
import getFocusableElementList from '../utils/focusableElementListFinder';

const SkipContentButton = () => {
  const [isOpenSkipContent, setIsOpenSkipContent] = useState(false);
  const lastFocusableEl = useRef<HTMLElement | null>(null);

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
    // document의 마지막 Tab에서 SkipContent 오픈
    if (document.activeElement === lastFocusableEl?.current) {
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

  useLayoutEffect(() => {
    const focusableElementList = getFocusableElementList({});

    lastFocusableEl.current = focusableElementList[focusableElementList.length - 1];
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleTabToSkipContent);

    return () => {
      document.removeEventListener('keydown', handleTabToSkipContent);
    };
  }, [isOpenSkipContent, lastFocusableEl]);

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
