import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import SkipNavigation from './components/SkipNavigation';
// import PromotionModal from './components/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <SkipNavigation />
      <Navigation />
      <main id="main">
        <header className={styles.header}>
          <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
          <p className="body-text">
            A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
          </p>
        </header>
        <section id="main-content" className={styles.main}>
          <div className={styles.flightBooking}>
            <FlightBooking />
          </div>
          <div className={styles.travelSection}>
            <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
            <TravelSection />
          </div>
        </section>
        <footer className={styles.footer}>
          <p className="body-text">&copy; A11Y AIRLINE</p>
        </footer>
        {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
        {/* <PromotionModal /> */}
      </main>
    </div>
  );
}

export default App;
