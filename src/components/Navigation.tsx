import { useState } from 'react';
import styles from './Navigation.module.css';

interface NavItem {
  title: string;
  link: string;
  subItems?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: '서비스',
    link: '#',
    subItems: [
      {
        title: '기내 서비스',
        link: 'https://www.koreanair.com/contents/plan-your-travel/in-flight-experience'
      },
      { title: '수하물', link: 'https://www.koreanair.com/contents/plan-your-travel/baggage' },
      {
        title: '라운지',
        link: 'https://www.koreanair.com/contents/plan-your-travel/at-the-airport/lounge'
      }
    ]
  },
  {
    title: '여행 정보',
    link: '#',
    subItems: [
      {
        title: '여행자 보험',
        link: 'https://www.koreanair.com/contents/booking/book-and-manage/partner-service'
      },
      { title: '체크인', link: 'https://www.koreanair.com/contents/plan-your-travel/check-in' }
    ]
  },
  { title: '고객 지원', link: '#' }
];

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const renderNavItems = (items: NavItem[]) => (
    <ul role="menu" className={styles.navList}>
      {items.map((item, index) => (
        <li key={index} className={styles.navItem}>
          <a role="menuitem" href={item.link}>
            {item.title}
          </a>
          {item.subItems && renderNavItems(item.subItems)}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <button
        className={styles.navToggle}
        onClick={toggleNav}
        aria-label={isNavOpen ? '메인 메뉴 닫기' : '메인 메뉴 열기'}
        aria-expanded={isNavOpen}
      >
        {isNavOpen ? '닫기' : '메뉴'}
      </button>
      <nav id="main-nav" className={`${styles.mainNav} ${isNavOpen ? styles.mainNavActive : ''}`}>
        {renderNavItems(navItems)}
      </nav>
    </>
  );
};

export default Navigation;
