import { useId } from 'react';

interface UseElementIdProps<T extends string> {
  childrenNameList: T[];
}

const useElementId = <T extends string>({ childrenNameList }: UseElementIdProps<T>) => {
  const id = useId();

  const makeChildId = (name: string) => `${id}__${name}`;

  const elementId = childrenNameList.reduce((accumulator, current) => {
    accumulator[current] = makeChildId(current);
    return accumulator;
  }, {} as Record<T, string>);

  return elementId;
};

export default useElementId;
