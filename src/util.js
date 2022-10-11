export const $ = (selector, $parent = document) => {
  if (!($parent instanceof Node)) {
    throw new Error(`$ > Node가 아닙니다`);
  }
  return $parent.querySelector(selector);
};
