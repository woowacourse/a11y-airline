import { MESSAGES, SPIN_INPUT_RANGE } from "./constants";

const spinButtonFieldSet = document.querySelector("article.spin-input");
const spinButtonInput =
  spinButtonFieldSet.querySelector<HTMLButtonElement>("#spin-input-value");
const spinInputStatus = document.querySelector("#spin-input-status");

const setSpinInputValue = (to: number) => {
  spinButtonInput.value = String(to);
  spinInputStatus.textContent = MESSAGES.현재_승객_수_안내(to);

  setTimeout(() => {
    spinInputStatus.textContent = "";
  }, 1000);
};

const handleValueChange = (to: number) => {
  if (typeof to !== "number") {
    throw new Error(MESSAGES.유효하지_않은_입력값_오류);
  }
  if (to > SPIN_INPUT_RANGE.MAX || to < SPIN_INPUT_RANGE.MIN) {
    throw new Error(MESSAGES.승객_수_범위_오류);
  }

  setSpinInputValue(to);
};

const getChangeAmountFromClassList = (classList: DOMTokenList) =>
  classList.contains("increment")
    ? 1
    : classList.contains("decrement")
    ? -1
    : 0;

const handleSpinButtonClick = (classList: DOMTokenList) => {
  const amount = getChangeAmountFromClassList(classList);
  const currentValue = Number(spinButtonInput.value);

  try {
    handleValueChange(currentValue + amount);
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
      return;
    }

    alert(MESSAGES.알_수_없는_오류);
  }
};

const handleSpinInputValue = (target: HTMLInputElement) => {
  const inputValue = Number(target.value);
  if (
    (inputValue <= SPIN_INPUT_RANGE.MAX &&
      inputValue >= SPIN_INPUT_RANGE.MIN) ||
    target.value === ""
  ) {
    return;
  }

  if (inputValue > SPIN_INPUT_RANGE.MAX) {
    target.value = String(SPIN_INPUT_RANGE.MAX);
  } else {
    target.value = String(SPIN_INPUT_RANGE.MIN);
  }
  throw new Error(MESSAGES.승객_수_범위_오류);
};

spinButtonFieldSet.addEventListener("click", (e) => {
  const target = e.target as unknown as HTMLElement;
  const { classList } = target;

  if (classList.contains("spin-button")) {
    handleSpinButtonClick(classList);
  }
});

spinButtonInput.addEventListener("input", (e) => {
  const target = e.target as unknown as HTMLInputElement;

  try {
    handleSpinInputValue(target);
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
      return;
    }

    alert(MESSAGES.알_수_없는_오류);
  }
});
