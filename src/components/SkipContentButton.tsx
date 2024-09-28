import { useState } from 'react';

import styles from './SkipContentButton.module.css';

const SkipContentButton = () => {
  const [isOpenSkipContent, setIsOpenSkipContent] = useState(false);

  const handleSkipContent = () => {
    setIsOpenSkipContent(false);
    const mainContentEl = document.getElementById('main-content');
    mainContentEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.skipContentButton} ${isOpenSkipContent ? styles.on : ''}`}
      onClick={handleSkipContent}
      onFocus={() => setIsOpenSkipContent(true)}
      onBlur={handleSkipContent}
    >
      Skip Content
    </button>
  );
};

export default SkipContentButton;
