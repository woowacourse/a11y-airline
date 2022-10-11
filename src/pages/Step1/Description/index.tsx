import { useState } from 'react';

import styles from './index.module.scss';

interface DescriptionProps {
  children: string;
  helpText: string;
}

function Description({ children, helpText }: DescriptionProps) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClickedState = () => {
    setIsClicked(prevClicked => !prevClicked);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      <button
        type="button"
        className={styles.button}
        onClick={toggleClickedState}
        role="tooltip"
        aria-label={helpText}
      >
        ?
      </button>
      {isClicked && <div aria-hidden={true}>{helpText}</div>}
    </div>
  );
}

export default Description;
