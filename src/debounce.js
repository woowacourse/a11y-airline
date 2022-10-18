const debounce = interval => {
  let timer = null;

  return callback => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, interval);
  };
};

export default debounce;
