const PASSENGER = {
  ADULT: {
    MIN_COUNT: 0,
    MAX_COUNT: 3,
  },
};

const MESSAGE = {
  ERROR: {
    EXCEED_MAX_ADULT_COUNT: `성인은 최대 ${PASSENGER.ADULT.MAX_COUNT}명까지 탑승할 수 있습니다.`,
    LESS_THAN_MIN_ADULT_COUNT: `성인은 최소 ${PASSENGER.ADULT.MIN_COUNT}명부터 탑승할 수 있습니다.`,
  },
  TOOLTIP: {
    ADULT_PASSENGER_SELECT: `성인은 탑승일 기준 만 18세 이상에 적용되며, 최소 ${PASSENGER.ADULT.MIN_COUNT}명부터 최대 ${PASSENGER.ADULT.MAX_COUNT}명까지 탑승할 수 있습니다.`,
  },
};

const PATH = {
  BASENAME: '/a11y-airline',
  PASSENGER: '/',
};

export { MESSAGE, PASSENGER, PATH };
