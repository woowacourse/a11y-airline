import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import { useEffect } from 'react';
// import PromotionModal from './components/PromotionModal';

function App() {
  useEffect(() => {
    document.title = `A11Y AIRLINE - 항공권 예약 및 인기 여행 상품`;
  }, []);

  return (
    <div className={styles.app}>
      <a href="#main-content" className="skipLink">
        본문으로 바로가기
      </a>

      <Navigation />

      <header className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
        <p className="body-text">
          A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </header>

      <main id="main-content" className={styles.main} tabIndex={-1}>
        <section className={styles.flightBooking}>
          <FlightBooking />
        </section>
        <section className={styles.travelSection}>
          <TravelSection />
        </section>
      </main>

      <footer className={styles.footer}>
        <p className="body-text">&copy; A11Y AIRLINE</p>
      </footer>
      {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
      {/* <PromotionModal /> */}
    </div>
  );
}

export default App;
