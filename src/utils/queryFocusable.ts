const FOCUSABLE_SELECTOR = `
:is(
  a,
  button,
  input,
  select,
  textarea,
  [tabindex],
  [contenteditable],
  [role="button"],
  [role="link"],
  [role="menuitem"],
  [role="option"],
  [role="radio"],
  [role="switch"],
  [role="tab"],
  [role="textbox"]
):not(:disabled):not([aria-disabled="true"])
`;

export const queryFocusable = (container: HTMLElement): HTMLElement[] => {
  return [...container.querySelectorAll(FOCUSABLE_SELECTOR)] as HTMLElement[];
};
