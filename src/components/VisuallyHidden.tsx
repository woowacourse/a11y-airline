import { ReactNode } from 'react';
import styles from './VisuallyHidden.module.css';

interface VisuallyHiddenProps {
  children: ReactNode;
  className?: string;
}

const VisuallyHidden = ({ children, className = '' }: VisuallyHiddenProps) => {
  return <span className={`${styles.visuallyHidden} ${className}`}>{children}</span>;
};

export default VisuallyHidden;
