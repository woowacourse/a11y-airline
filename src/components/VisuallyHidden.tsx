import { ReactNode, ElementType } from 'react';

type VisuallyHiddenProps<T extends ElementType = 'p'> = {
  children: ReactNode;
  tag?: T;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const VisuallyHidden = <T extends ElementType = 'p'>({
  children,
  tag,
  className = '',
  ...rest
}: VisuallyHiddenProps<T>) => {
  const Component = tag || 'p';

  return (
    <Component className={`visually-hidden ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};

export default VisuallyHidden;
