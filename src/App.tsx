import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
// import PromotionModal from './components/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <div className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
        <p className="body-text">
          A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </div>
      <div id="main-content" className={styles.main}>
        <div className={styles.flightBooking}>
          <FlightBooking />
        </div>
        <div className={styles.travelSection}>
          <TravelSection />
        </div>
      </div>
      <div className={styles.footer}>
        <p className="body-text">&copy; A11Y AIRLINE</p>
      </div>
      {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
      {/* <PromotionModal /> */}
    </div>
  );
}

export default App;
