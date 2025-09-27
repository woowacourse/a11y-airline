import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
// import PromotionModal from './components/PromotionModal';

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.skipNav}>
        <a href="#main-content" className={styles.skipLink}>
          본문 바로가기
        </a>
        <a href="#flightBooking" className={styles.skipLink}>
          항공권 예매 바로가기
        </a>
        <a href="#travelSection" className={styles.skipLink}>
          여행지 추천 바로가기
        </a>
      </nav>
      <Navigation />
      <header className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
        <p className="body-text">
          A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </header>
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <section id="flightBooking" className={styles.flightBooking} tabIndex={-1}>
          <FlightBooking />
        </section>
        <section id="travelSection" className={styles.travelSection} tabIndex={-1}>
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
