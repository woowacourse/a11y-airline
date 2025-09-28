import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'A11Y Airline – 홈';
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        본문으로 바로가기
      </a>

      <div className={styles.app}>
        <header className={styles.header}>
          <nav aria-label="주요 메뉴">
            <Navigation />
          </nav>
          <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
          <p className="body-text">
            A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
          </p>
        </header>
        <main id="main-content" className={styles.main}>
          <section className={styles.flightBooking} aria-labelledby="booking-heading">
            <FlightBooking />
          </section>
          <section className={styles.travelSection} aria-labelledby="travel-heading">
            <h2 className={`${styles.travelTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
            <TravelSection />
          </section>
        </main>
        <footer className={styles.footer}>
          <p className="body-text">&copy; A11Y AIRLINE</p>
        </footer>
      </div>
    </>
  );
}

export default App;
