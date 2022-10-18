export function debounce<T extends any[]>(
  func: (...args: T) => void,
  delay: number
): (...args: T) => void {
  let timer: NodeJS.Timeout;

  return (...args: T): void => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
