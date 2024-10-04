import styles from './App.module.css';
import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import { useEffect, useState } from 'react';
import ToastNotification from './components/ToastNotification';
// import PromotionModal from './components/PromotionModal';

function App() {
  const [toastMessage, setToastMessage] = useState('');

  const handleToastMessage = (message: string) => {
    setToastMessage(message);
  };

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        setToastMessage('');
      }, 4000);
    }
  }, [toastMessage]);

  return (
    <div className={styles.app}>
      <div className={styles.skipNav}>
        <a href="#main-content">본문으로 바로가기</a>
      </div>
      <Navigation />
      <header className={styles.header}>
        <h1 className={`${styles.title} heading-1-text`}>SOO AIRLINE</h1>
        <p className="body-text">
          SOO AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </header>
      <main id="main-content" className={styles.main}>
        <section className={styles.flightBooking}>
          <FlightBooking setToastMessage={handleToastMessage} />
        </section>
        <section className={styles.travelSection}>
          <h2 className={`${styles.travelTitle} heading-2-text`} tabIndex={0}>
            지금 떠나기 좋은 추억 여행
          </h2>
          <TravelSection />
        </section>
      </main>
      <footer className={styles.footer}>
        <p className="body-text">&copy; SOO AIRLINE</p>
      </footer>

      {toastMessage && <ToastNotification message={toastMessage} />}
      {/* 추가 CHALLENGE: 모달 포커스 트랩 */}
      {/* <PromotionModal /> */}
    </div>
  );
}

export default App;
