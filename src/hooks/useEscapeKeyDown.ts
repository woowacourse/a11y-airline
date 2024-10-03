import { useEffect } from 'react';

/**
 *
 * @param condition : 해당 Escape keydown 이벤트 리스너를 붙일 조건입니다.
 * @param callback : Escape keydown 이벤트 발생 시, 실행 시킬 callback 함수입니다.
 */
export const useEscapeKeyDown = (condition: boolean, callback: () => void) => {
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    if (condition) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [condition]);
};
