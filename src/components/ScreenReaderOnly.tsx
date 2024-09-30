import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './ScreenReaderOnly.module.css';

export default function ScreenReaderOnly({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span {...props} className={`${styles.visuallyHidden}`}>
      {children}
    </span>
  );
}
