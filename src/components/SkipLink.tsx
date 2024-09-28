import { useState } from 'react';
import styles from './SkipLink.module.css';

const SkipLink = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`${styles.skipLink} ${isFocused ? styles.focused : ''}`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      본문으로 바로가기
    </a>
  );
};

export default SkipLink;
