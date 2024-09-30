import { useState } from 'react';
import styles from './Navigation.module.css';

interface NavItem {
  title: string;
  link: string;
  subItems?: NavItem[];
}

const TOGGLE_ITEM_TITLE = {
  service: '서비스',
  travelInfo: '여행 정보'
};

const TOGGLE_ITEM_TITLE_LIST = Object.values(TOGGLE_ITEM_TITLE);

const navItems: NavItem[] = [
  {
    title: TOGGLE_ITEM_TITLE.service,
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
    title: TOGGLE_ITEM_TITLE.travelInfo,
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
  const [activeMenu, setActiveMenu] = useState('');

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setActiveMenu('');
  };

  const renderNavItems = (items: NavItem[]) => (
    <ul className={styles.navList}>
      {items.map((item, index) => (
        <li key={index} className={styles.navItem}>
          {TOGGLE_ITEM_TITLE_LIST.includes(item.title) ? (
            <button
              aria-expanded={activeMenu === item.title ? 'true' : 'false'}
              onClick={() => setActiveMenu(item.title)}
            >
              {item.title}
            </button>
          ) : (
            <a
              {...(TOGGLE_ITEM_TITLE_LIST.includes(item.title) && {
                'aria-expanded': activeMenu === item.title
              })}
              href={item.link}
              onClick={() => setActiveMenu(item.title)}
            >
              {item.title}
            </a>
          )}
          {item.subItems && renderNavItems(item.subItems)}
        </li>
      ))}
    </ul>
  );

  return (
    <header>
      <button
        aria-controls="main-nav"
        aria-expanded={isNavOpen}
        className={styles.navToggle}
        onClick={toggleNav}
        type="button"
      >
        {isNavOpen ? '닫기' : '메뉴'}
      </button>
      <nav id="main-nav" className={`${styles.mainNav} ${isNavOpen ? styles.mainNavActive : ''}`}>
        {renderNavItems(navItems)}
      </nav>
    </header>
  );
};

export default Navigation;
