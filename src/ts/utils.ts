function getTranslateX(el: HTMLElement): number {
  if (!el.style.transform) return 0;

  return Number(el.style.transform.split("translateX(")[1].split("px)")[0]);
}

export { getTranslateX };
