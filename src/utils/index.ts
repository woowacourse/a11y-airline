export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const handleErrorByAlert = (error: unknown) => {
  if (isError(error)) {
    alert(error.message);
    return;
  }
  alert("예기치 못한 에러가 발생했습니다.");
};

export const parseToKWRPrice = (price: number): string => {
  return new Intl.NumberFormat("ko-KR").format(price);
};
