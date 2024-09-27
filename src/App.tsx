import styles from './styles/App.module.css';
import FlightBooking from './components/flightBooking/FlightBooking';
import Navigation from './components/navigation/Navigation';
import TravelSection from './components/travelSection/TravelSection';

// import PromotionModal from './components/promotionModal/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <main>
        <Navigation />
        <section className={styles.header}>
          <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
          <p className="body-text">
            A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
          </p>
        </section>
        <section id="main-content" className={styles.main}>
          <div className={styles.flightBooking}>
            <FlightBooking />
          </div>
          <div className={styles.travelSection}>
            <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
            <TravelSection />
          </div>
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
