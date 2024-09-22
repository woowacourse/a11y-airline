import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? '닫기' : '메뉴'}
      </button>
      <nav id="main-nav" className={`main-nav ${isNavOpen ? 'main-nav--active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">서비스</a>
            <ul className="sub-nav-list">
              <li className="sub-nav-item">
                <a href="https://www.koreanair.com/contents/plan-your-travel/in-flight-experience">
                  기내 서비스
                </a>
              </li>
              <li className="sub-nav-item">
                <a href="https://www.koreanair.com/contents/plan-your-travel/baggage">수하물</a>
              </li>
              <li className="sub-nav-item">
                <a href="https://www.koreanair.com/contents/plan-your-travel/at-the-airport/lounge">
                  라운지
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">여행 정보</a>
            <ul className="sub-nav-list">
              <li className="sub-nav-item">
                <a href="https://www.koreanair.com/contents/booking/book-and-manage/partner-service">
                  여행자 보험
                </a>
              </li>
              <li className="sub-nav-item">
                <a href="https://www.koreanair.com/contents/plan-your-travel/check-in">체크인</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">고객 지원</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
