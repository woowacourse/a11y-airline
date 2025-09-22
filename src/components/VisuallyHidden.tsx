import styles from './VisuallyHidden.module.css';

export default function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return <p className={styles.visuallyHidden}>{children}</p>;
}
