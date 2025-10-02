import {
  forwardRef,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ElementType
} from 'react';

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

type PolymorphicProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

const Polymorphic = forwardRef(
  <T extends ElementType = 'div'>(
    { as, ...props }: PolymorphicProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const Element = as || 'div';
    return <Element ref={ref} {...props} />;
  }
);

Polymorphic.displayName = 'Polymorphic';
export default Polymorphic;
