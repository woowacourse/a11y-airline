import { type DependencyList, type EffectCallback, useEffect, useRef } from 'react';

export function useDidUpdate(effect: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false);

  useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  useEffect(() => {
    if (mounted.current) {
      return effect();
    }

    mounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
