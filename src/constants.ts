export const SPIN_INPUT_RANGE = Object.freeze({
  MIN: 1,
  MAX: 3,
});

export const MESSAGES = Object.freeze({
  알_수_없는_오류: "알 수 없는 오류가 발생했습니다.",
  유효하지_않은_입력값_오류: "입력값이 유효하지 않습니다.",
  승객_수_범위_오류: "승객 수는 1명에서 3명 사이 인원만 선택 가능합니다.",

  현재_승객_수_안내: (to: number) => `성인 승객 ${to}명 선택됨`,
});
