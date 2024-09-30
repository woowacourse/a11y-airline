interface GetFocusableElementListParams {
  targetElement?: HTMLElement | Document;
}
const getFocusableElementList = ({ targetElement = document }: GetFocusableElementListParams) => {
  return targetElement.querySelectorAll(
    'button, [href], input, select, textarea,   [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;
};

export default getFocusableElementList;
