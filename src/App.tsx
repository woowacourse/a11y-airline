import styles from './styles/App.module.css';
import FlightBooking from './components/flightBooking/FlightBooking';
import Navigation from './components/navigation/Navigation';
import TravelSection from './components/travelSection/TravelSection';
import SkipToContent from './components/skipToContent/SkipToContet';
import PromotionModal from './components/promotionModal/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <SkipToContent />
      <Navigation />
      <header className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>SUNDAY AIRLINE</h1>
        <p className="body-text">
          SUNDAY AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </header>
      <main id="main-content" className={styles.main}>
        <div className={styles.flightBooking}>
          <FlightBooking />
        </div>
        <div className={styles.travelSection}>
          <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
          <TravelSection />
        </div>
      </main>
      <footer className={styles.footer}>
        <p className="body-text">&copy; SUNDAY AIRLINE</p>
      </footer>
      <PromotionModal />
    </div>
  );
}

export default App;
