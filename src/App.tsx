import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
// import PromotionModal from './components/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <a href="#main-content" className={styles.skipLink}>
        본문으로 바로가기
      </a>
      <Navigation />
      <section className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
        <span className="body-text">
          A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </span>
      </section>
      <main id="main-content" className={styles.main} tabIndex={0}>
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
      {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
      {/* <PromotionModal /> */}
    </div>
  );
}

export default App;
