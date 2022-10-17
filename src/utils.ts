const addThousandUnitComma = (number: number) => {
  return number.toLocaleString('ko-KR');
};

const getGlobalStyleValue = (property: string) => {
  const rootStyle = getComputedStyle(document.documentElement);

  return parseInt(rootStyle.getPropertyValue(property));
};

export { addThousandUnitComma, getGlobalStyleValue };
