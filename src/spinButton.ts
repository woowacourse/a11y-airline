import { MESSAGES, SPIN_INPUT_RANGE } from "./constants";
import { alertWithSnackbar } from "./snackbar";

const spinButtonForm = document.querySelector(".spin-input-form");
const spinButtonInput =
  spinButtonForm.querySelector<HTMLButtonElement>("#spin-input-value");
const spinInputStatus = document.querySelector("#spin-input-status");

const handleSRMessage = (message: string) => {
  spinInputStatus.textContent = message;

  setTimeout(() => {
    spinInputStatus.textContent = "";
  }, 500);
};

const setSpinInputValue = (to: number) => {
  spinButtonInput.value = String(to);
  handleSRMessage(MESSAGES.현재_승객_수_안내(to));
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
      alertWithSnackbar(e.message);
      return;
    }

    alertWithSnackbar(MESSAGES.알_수_없는_오류);
  }
};

const handleSpinInputValue = (target: HTMLInputElement) => {
  const inputValue = Number(target.value);
  if (
    inputValue <= SPIN_INPUT_RANGE.MAX &&
    inputValue >= SPIN_INPUT_RANGE.MIN
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

spinButtonForm.addEventListener("click", (e) => {
  if (!(e.target instanceof HTMLButtonElement)) return;

  handleSpinButtonClick(e.target.classList);
});

spinButtonInput.addEventListener("input", (e) => {
  if (!(e.target instanceof HTMLInputElement)) return;

  try {
    handleSpinInputValue(e.target);
  } catch (exception) {
    if (exception instanceof Error) {
      alertWithSnackbar(exception.message);
      return;
    }

    alertWithSnackbar(MESSAGES.알_수_없는_오류);
  }
});
