export type ValueOf<T> = T[keyof T];

export const PASSENGER_TYPE = {
  ADULT: "성인",
  KID: "소아",
  BABY: "유아",
} as const;

export const HELP_DESCRIPTION = {
  성인: "국제선 만 12세 이상, 국내선 만 13세 이상 ",
  소아: "국제선 만 12세 미만, 국내선 만 13세 미만",
  유아: "만 2세 미만",
};
