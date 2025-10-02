import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './VisuallyHidden.module.css';
import Polymorphic from './Polymorphic';

interface VisuallyHiddenProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

function VisuallyHidden({ as, children, ...props }: PropsWithChildren<VisuallyHiddenProps>) {
  return (
    <Polymorphic {...props} as={as} className={styles.visuallyHidden}>
      {children}
    </Polymorphic>
  );
}

export default VisuallyHidden;
