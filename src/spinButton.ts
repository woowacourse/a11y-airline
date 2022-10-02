const MIN_INPUT = 1;
const MAX_INPUT = 3;

const spinButtonFieldSet = document.querySelector("fieldset.spin-input");
const spinButtonInput = spinButtonFieldSet.querySelector<HTMLButtonElement>(
  ".spin-button-value-input"
);
const spinInputStatus = document.querySelector("#spin-input-status");

const handleValueChange = (to: number) => {
  if (typeof to !== "number") throw new Error("입력값이 유효하지 않습니다.");
  if (to > MAX_INPUT || to < MIN_INPUT)
    throw new Error("1~3명만 선택 가능합니다.");
  spinButtonInput.value = String(to);
  spinInputStatus.textContent = `성인 승객 ${to}명 선택됨`;
  setTimeout(() => {
    spinInputStatus.textContent = "";
  }, 1000);
};

const handleSpinButtonClick = (classList: DOMTokenList) => {
  const amount = classList.contains("increment")
    ? 1
    : classList.contains("decrement")
    ? -1
    : 0;

  try {
    handleValueChange(Number(spinButtonInput.value) + amount);
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
      return;
    }

    alert("알 수 없는 오류가 발생했습니다.");
  }
};

spinButtonFieldSet.addEventListener("click", (e) => {
  const target = e.target as unknown as HTMLElement;
  const { classList } = target;

  if (classList.contains("spin-button")) {
    handleSpinButtonClick(classList);
  }
});
