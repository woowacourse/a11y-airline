import styles from './SkipToContent.module.css';

interface SkipToContentProps {
  linkTarget?: string;
}

const SkipToContent = ({ linkTarget = '#main-content' }: SkipToContentProps) => {
  return (
    <a href={linkTarget} className={styles.skipLink}>
      Skip to content
    </a>
  );
};

export default SkipToContent;
