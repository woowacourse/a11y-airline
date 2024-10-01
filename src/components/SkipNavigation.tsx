// SkipNavAnchor.jsx
import styles from './SkipNavigation.module.css'; // CSS Module import

const SkipNavigation = () => {
  return (
    <a href="#main-content" className={styles.skipNavAnchor}>
      Skip to main content
    </a>
  );
};

export default SkipNavigation;
