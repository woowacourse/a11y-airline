import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import PromotionModal from './components/PromotionModal';
import { useEffect, useRef, useState } from 'react';
import TravelSection from './components/TravelSection';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const mainRef = useRef<HTMLAnchorElement | null>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) return;

    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.focus();
      }
    }, 150);
  }, [isModalOpen]);

  return (
    <div className={styles.app}>
      <a href="#main-content" className="visually-hidden" ref={mainRef}>
        본문으로 바로가기
      </a>

      <Navigation />
      <div className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
        <p className="body-text">
          A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </div>
      <main id="main-content" className={styles.main} tabIndex={0}>
        <article className={styles.flightBooking}>
          <FlightBooking />
        </article>
        <article className={styles.travelSection}>
          <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
          <TravelSection />
        </article>
      </main>
      <footer className={styles.footer}>
        <p className="body-text">&copy; A11Y AIRLINE</p>
      </footer>
      <PromotionModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
