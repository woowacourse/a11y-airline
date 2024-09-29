import styles from './SkipToContent.module.css';

interface SkipToContentProps {
  onSkipToContent: () => void;
}

const SkipToContent = ({ onSkipToContent }: SkipToContentProps) => {
  return (
    <a href="#main-content" onClick={onSkipToContent} className={styles.skipLink}>
      Skip to content
    </a>
  );
};

export default SkipToContent;
