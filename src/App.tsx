import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import { useEffect, useRef } from 'react';
import PromotionModal from './components/PromotionModal';

function App() {
  const mainRef = useRef<HTMLElement>(null);

  const skipToMain = () => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  };

  useEffect(() => {
    document.title = '항공편 검색 및 여행 상품 | a11y 항공';
  }, []);

  return (
    <div className={styles.app}>
      <PromotionModal />
      <button type="button" className={styles.showOnFocus} onClick={skipToMain} tabIndex={0}>
        본문으로 바로가기
      </button>
      <header>
        <Navigation />
        <div className={styles.header}>
          <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
          <p className="body-text">
            A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
          </p>
        </div>
      </header>
      <main
        ref={mainRef}
        id="main-content"
        className={styles.main}
        aria-label="항공편 검색 및 여행 상품 추천 기능이 존재하는 주요 영역입니다."
        tabIndex={-1}
      >
        <section className={styles.flightBooking}>
          <FlightBooking />
        </section>
        <section className={styles.travelSection}>
          <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
          <TravelSection />
        </section>
      </main>
      <footer className={styles.footer}>
        <p className="body-text">&copy; A11Y AIRLINE</p>
      </footer>
    </div>
  );
}

export default App;
