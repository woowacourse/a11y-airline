import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import SkipToContent from './components/SkipToContent';
import { useRef } from 'react';
// import PromotionModal from './components/PromotionModal';

function App() {
  const headerId = 'header';
  const contentRef = useRef<HTMLElement>(null);

  const handleSkipClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (contentRef.current) {
      contentRef.current.focus();
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' && contentRef.current) {
      e.preventDefault();
      contentRef.current.focus();
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.app}>
      <SkipToContent
        hrefString={`#${headerId}`}
        handleOnClick={handleSkipClick}
        handleOnKeyDown={handleSkipKeyDown}
      />
      <Navigation />
      <section id="a11y-airline-content" className={styles.content} ref={contentRef}>
        <header id={headerId} className={styles.header}>
          <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
          <p className="body-text">
            A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
          </p>
        </header>
        <main id="main-content" className={styles.main}>
          <section className={styles.flightBooking}>
            <FlightBooking />
          </section>
          <section className={styles.travelSection}>
            <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
            <TravelSection />
          </section>
        </main>
      </section>
      <footer className={styles.footer}>
        <p className="body-text">&copy; A11Y AIRLINE</p>
      </footer>
      {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
      {/* <PromotionModal /> */}
    </div>
  );
}

export default App;
