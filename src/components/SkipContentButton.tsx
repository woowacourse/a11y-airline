import { useState } from 'react';

import styles from './SkipContentButton.module.css';

const SkipContentButton = () => {
  const [isOpenSkipContent, setIsOpenSkipContent] = useState(false);

  const handleSkipContent = () => {
    setIsOpenSkipContent(false);
    document.querySelector('main')?.focus();
    document.querySelector('main')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.skipContentButton} ${isOpenSkipContent ? styles.on : ''}`}
      onClick={handleSkipContent}
      onFocus={() => setIsOpenSkipContent(true)}
      onBlur={() => setIsOpenSkipContent(false)}
    >
      Skip Content
    </button>
  );
};

export default SkipContentButton;
