import { PropsWithChildren } from 'react';
import styles from './ScreenReaderOnly.module.css';

export default function ScreenReaderOnly({ children }: PropsWithChildren) {
  return <span className={`${styles.visuallyHidden}`}>{children}</span>;
}
