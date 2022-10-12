const helpBoxButton = document.querySelector("#help-box");
const adultHelpContextButton = document.querySelector("#adult-help-context");
const addPassengerButton = document.querySelector("#add-passenger");
const reducePassengerButton = document.querySelector("#reduce-passenger");
const announceElement = document.querySelector("#announce");
const passengerCount = document.querySelector(
  "#passenger-count"
) as HTMLInputElement;

const MIN_PASSENGER_COUNT = 1;
const MAX_PASSENGER_COUNT = 3;

const announce = (message: string) => {
  announceElement.textContent = message;
};

helpBoxButton.addEventListener("click", () => {
  if (adultHelpContextButton.classList.contains("hide")) {
    adultHelpContextButton.classList.remove("hide");
    return;
  }

  adultHelpContextButton.classList.add("hide");
});

addPassengerButton.addEventListener("click", () => {
  if (passengerCount.valueAsNumber < MAX_PASSENGER_COUNT) {
    passengerCount.value = (passengerCount.valueAsNumber + 1).toString();
    announce(`성인 승객 추가 ${passengerCount.value}`);
  }
});

reducePassengerButton.addEventListener("click", () => {
  if (passengerCount.valueAsNumber > MIN_PASSENGER_COUNT) {
    passengerCount.value = (passengerCount.valueAsNumber - 1).toString();
    announce(`성인 승객 감소 ${passengerCount.value}`);
  }
});

passengerCount.addEventListener("input", (e: KeyboardEvent) => {
  const inputValue = Number((e.target as HTMLInputElement).value);
  if (inputValue === 0) {
    return;
  }

  if (inputValue > MAX_PASSENGER_COUNT) {
    announce(
      `${inputValue}이 입력되어 최대 승객인 ${MAX_PASSENGER_COUNT}명으로 변경됩니다.`
    );
    (e.target as HTMLInputElement).value = MAX_PASSENGER_COUNT.toString();
  }

  if (inputValue < MIN_PASSENGER_COUNT) {
    announce(
      `${inputValue}이 입력되어 최소 승객인 ${MIN_PASSENGER_COUNT}명으로 변경됩니다.`
    );
    (e.target as HTMLInputElement).value = MIN_PASSENGER_COUNT.toString();
  }
});
