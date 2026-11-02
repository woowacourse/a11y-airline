import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from 'react';
import styles from './Navigation.module.css';

interface NavLink {
  title: string;
  link: string;
}

interface NavGroup {
  title: string;
  subItems: NavLink[];
}

type NavItem = NavLink | NavGroup;

const navItems: NavItem[] = [
  {
    title: '서비스',
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

const NavDisclosure = ({ title, subItems }: NavGroup) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && itemRef.current?.contains(event.target)) return;
      setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [isOpen]);

  const closeOnEscape = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key !== 'Escape' || !isOpen) return;
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const closeOnFocusLeave = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
  };

  return (
    <li
      ref={itemRef}
      className={styles.navItem}
      onKeyDown={closeOnEscape}
      onBlur={closeOnFocusLeave}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.navButton}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </button>
      <ul className={styles.navList}>
        {subItems.map((subItem) => (
          <li key={subItem.title} className={styles.navItem}>
            <a href={subItem.link}>{subItem.title}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      <button className={styles.navToggle} onClick={toggleNav} aria-expanded={isNavOpen}>
        {isNavOpen ? '닫기' : '메뉴'}
      </button>
      <nav id="main-nav" className={`${styles.mainNav} ${isNavOpen ? styles.mainNavActive : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item) =>
            'subItems' in item ? (
              <NavDisclosure key={item.title} title={item.title} subItems={item.subItems} />
            ) : (
              <li key={item.title} className={styles.navItem}>
                <a href={item.link}>{item.title}</a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
