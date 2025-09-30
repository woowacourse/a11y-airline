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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const renderNavItems = (items: NavItem[]) => (
    <ul className={styles.navList}>
      {items.map((item, index) => {
        const hasSubItems = !!item.subItems;
        const isExpanded = expandedIndex === index;
        return (
          <li key={index} className={styles.navItem}>
            <a
              href={item.link}
              aria-haspopup={item.subItems ? 'menu' : 'false'}
              aria-expanded={hasSubItems ? isExpanded : undefined}
              onFocus={() => {
                if (hasSubItems) {
                  setExpandedIndex(index);
                }
              }}
              onBlur={() => {
                if (hasSubItems) {
                  setExpandedIndex(null);
                }
              }}
            >
              {item.title}
            </a>
            {item.subItems && renderNavItems(item.subItems)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <nav id="main-nav" className={styles.mainNav} aria-label="메인 네비게이션">
      {renderNavItems(navItems)}
    </nav>
  );
};

export default Navigation;
