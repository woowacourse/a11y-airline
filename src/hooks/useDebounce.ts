import { useCallback, useRef } from 'react';

const useDebounce = <T extends (...args: Parameters<T>) => void>(func: T, delayTime: number) => {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        func(...args);
      }, delayTime);
    },
    [func, delayTime]
  );

  return debouncedCallback;
};

export default useDebounce;
