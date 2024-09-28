import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import SkipContentButton from './components/SkipContentButton';
import PromotionModal from './components/PromotionModal';
import { useState } from 'react';

function App() {
  const [isOpenPromotionModal, setIsOpenPromotionModal] = useState(true);

  return (
    <>
      <div className={styles.app} aria-hidden={isOpenPromotionModal ? 'true' : 'false'}>
        <Navigation />
        <main>
          <section className={styles.announce}>
            <h1 className={`${styles.title} heading-1-text`}>A11Y AIRLINE</h1>
            <p className="body-text">
              A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
            </p>
          </section>
          <section id="main-content" className={styles.mainContent}>
            <FlightBooking />
            <TravelSection />
          </section>
        </main>
        <footer className={styles.footer}>
          <p className="body-text">&copy; A11Y AIRLINE</p>
        </footer>
      </div>
      {isOpenPromotionModal ? (
        <PromotionModal closePromotionModal={() => setIsOpenPromotionModal(false)} />
      ) : (
        <SkipContentButton />
      )}
    </>
  );
}

export default App;
