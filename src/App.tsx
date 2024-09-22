import './App.css';
import './Typography.css';
import './Accessibility.css';

import Navigation from './components/Navigation';
import FlightBooking from './components/FlightBooking';
import TravelSection from './components/TravelSection';
import PromotionModal from './components/PromotionModal';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="app-header">
        <h1 className="heading-1-text">A11Y AIRLINE</h1>
        <p className="body-text">
          A11Y AIRLINE은 고객 여러분의 안전하고 쾌적한 여행을 위해 최선을 다하고 있습니다.
        </p>
      </div>
      <div id="main-content" className="app-main">
        <div className="flight-booking-container">
          <FlightBooking />
        </div>
        <div className="travel-section-container">
          <h1 className="heading-2-text">지금 떠나기 좋은 여행</h1>
          <TravelSection />
        </div>
      </div>
      <div className="app-footer">
        <p className="body-text">(c) A11Y AIRLINE</p>
      </div>
      <PromotionModal />
    </div>
  );
}

export default App;
