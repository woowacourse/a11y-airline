export const debounce = (callback: Function, limit: number) => {
  let timeout: NodeJS.Timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, limit);
  };
};
