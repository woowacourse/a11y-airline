import { useRef } from 'react';
import styles from './Carousel.module.css';

const Carousel = (props: React.OlHTMLAttributes<HTMLUListElement>) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const currentItemIndex = useRef<number>(0);
  const browseItem = (id: number | ((prev: number) => number)) => {
    if (typeof id === 'number') {
      currentItemIndex.current = id;
    } else {
      currentItemIndex.current = id(currentItemIndex.current);
    }

    if (currentItemIndex.current < 0) {
      currentItemIndex.current = 0;
    } else if (currentItemIndex.current > 6) {
      currentItemIndex.current = 6;
    }

    ulRef.current?.scrollTo(262 * currentItemIndex.current, 0);
  };

  return (
    <div className={styles.layout}>
      <button
        className={`${styles['button']} ${styles['left-button']}`}
        onClick={() => {
          browseItem((prev) => prev - 1);
        }}
        aria-label="이전"
        aria-disabled
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <ul ref={ulRef} className={styles.list} {...props}></ul>
      <button
        className={`${styles['button']} ${styles['right-button']}`}
        onClick={() => {
          browseItem((prev) => prev + 1);
        }}
        aria-label="다음"
        aria-disabled
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
