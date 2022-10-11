const limit = (max: number, min: number, value: number) => {
  return value < min ? 0 : value > max ? Math.floor(value / 10) : value;
};

export default limit;
