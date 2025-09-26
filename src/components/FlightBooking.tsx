import { useState } from 'react';

import './FlightBooking.css';

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [announcement, setAnnouncement] = useState('');

  const incrementCount = () => {
    setAdultCount((prev) => {
      if (prev === 3) {
        setAnnouncement('최대 승객수 입니다');
        return prev;
      }
      const newCount = Math.min(MAX_PASSENGERS, prev + 1);

      if (newCount === MAX_PASSENGERS) {
        setAnnouncement('성인 승객 증가, 최대 승객 수에 도달했습니다.');
      } else {
        setAnnouncement('성인 승객 증가');
      }
      return newCount;
    });
  };

  const decrementCount = () => {
    setAdultCount((prev) => {
      if (prev === 1) {
        setAnnouncement('최소 승객수 입니다');
        return prev;
      }

      const newCount = Math.max(1, prev - 1);

      if (newCount === MAX_PASSENGERS) {
        setAnnouncement('성인 승객 감소, 최소 승객수 입니다');
      } else {
        setAnnouncement('성인 승객 감소');
      }

      return newCount;
    });
  };

  return (
    <div className="flight-booking">
      <div aria-live="assertive" className="visually-hidden">
        {announcement}
      </div>
      <h2 className="heading-2-text">항공권 예매</h2>
      <div className="passenger-count">
        <span className="body-text">성인</span>
        <div className="counter">
          <button className="button-text" onClick={decrementCount} aria-label="성인 승객 감소">
            -
          </button>
          <span aria-live="polite">{adultCount}</span>
          <button className="button-text" onClick={incrementCount} aria-label="성인 승객 증가">
            +
          </button>
        </div>
      </div>
      <button className="search-button">항공편 검색</button>
    </div>
  );
};

export default FlightBooking;
