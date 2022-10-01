import "../css/counter.css";

const $ariaAdult = document.querySelector("#aria-adult");
const $decresePassengerButton = document.querySelector(
  ".decrease-passenger-button"
) as HTMLButtonElement;
const $addPassengerButton = document.querySelector(
  ".add-passenger-button"
) as HTMLButtonElement;
const $adultPassengerInput = document.querySelector(
  "#adult-passenger-input"
) as HTMLInputElement;
const $helpBoxButton = document.querySelector(
  ".help-box-button"
) as HTMLButtonElement;
const $helpBox = document.querySelector("#help-box") as HTMLDivElement;

const handleAddPassengerButton = () => {
  $adultPassengerInput.value = String(Number($adultPassengerInput.value) + 1);
  const currentValue = $adultPassengerInput?.value;
  const ariaMessageNode = document.createElement("span");
  ariaMessageNode.textContent = `성인 승객 증가 ${currentValue}`;
  ariaMessageNode.classList.add("aria-hidden");
  $ariaAdult?.insertAdjacentElement("beforeend", ariaMessageNode);
  setTimeout(() => {
    $ariaAdult?.removeChild(ariaMessageNode);
  }, 100);
};

const handleDeletePassengerButton = () => {
  $adultPassengerInput.value = String(Number($adultPassengerInput.value) - 1);
  const currentValue = $adultPassengerInput.value;
  const ariaMessageNode = document.createElement("span");
  ariaMessageNode.textContent = `성인 승객 감소 ${currentValue}`;
  ariaMessageNode.classList.add("aria-hidden");

  $ariaAdult?.insertAdjacentElement("beforeend", ariaMessageNode);
  setTimeout(() => {
    $ariaAdult?.removeChild(ariaMessageNode);
  }, 100);
};

$addPassengerButton?.addEventListener("click", () => {
  const passengerValue = $adultPassengerInput.value;
  $decresePassengerButton.classList.remove("disabled-button");

  if (Number(passengerValue) >= 2) {
    Number(passengerValue) === 2 && handleAddPassengerButton();
    $addPassengerButton.ariaDisabled = "true";
    $addPassengerButton.classList.add("disabled-button");
    return;
  }

  handleAddPassengerButton();
});

$decresePassengerButton.addEventListener("click", () => {
  const passengerValue = $adultPassengerInput.value;
  $addPassengerButton.classList.remove("disabled-button");

  if (Number(passengerValue) <= 1) {
    Number(passengerValue) === 1 && handleDeletePassengerButton();
    $decresePassengerButton.ariaDisabled = "true";
    $decresePassengerButton.classList.add("disabled-button");
    return;
  }
  handleDeletePassengerButton();
});

$helpBoxButton.addEventListener("click", () => {
  if ($helpBoxButton.ariaExpanded === "true") {
    $helpBoxButton.ariaExpanded = "false";
    $helpBox.replaceChildren();
    $helpBox.style.opacity = "0";
    return;
  }

  $helpBoxButton.ariaExpanded = "true";

  const ariaMessageNode = document.createElement("span");
  ariaMessageNode.textContent = `국제선 만 12세 이상, 국내선 만 13세 이상`;

  $helpBox.insertAdjacentElement("beforeend", ariaMessageNode);
  $helpBox.style.opacity = "1";
});

export {};
