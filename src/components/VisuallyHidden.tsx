import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './VisuallyHidden.module.css';
import Polymorphic from './Polymorphic';

interface VisuallyHiddenProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

function VisuallyHidden({ as, children, ...props }: PropsWithChildren<VisuallyHiddenProps>) {
  return (
    <Polymorphic as={as} className={styles.visuallyHidden} {...props}>
      {children}
    </Polymorphic>
  );
}

export default VisuallyHidden;
