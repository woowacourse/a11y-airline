import "./global.css";

const helpBoxButton = document.querySelector("#help-box");
const adultHelpContextButton = document.querySelector("#adult-help-context");
const addPassengerButton = document.querySelector("#add-passenger");
const reducePassengerButton = document.querySelector("#reduce-passenger");
const passengerAmount = document.querySelector(
  "#passenger-amount"
) as HTMLInputElement;

const minPassengerAmount = 1;
const maxPassengerAmount = 3;

helpBoxButton.addEventListener("click", () => {
  if (adultHelpContextButton.classList.contains("hide")) {
    adultHelpContextButton.classList.remove("hide");
    return;
  }

  adultHelpContextButton.classList.add("hide");
});

addPassengerButton.addEventListener("click", () => {
  if (Number(passengerAmount.value) < maxPassengerAmount) {
    passengerAmount.value = (Number(passengerAmount.value) + 1).toString();
  }
});

reducePassengerButton.addEventListener("click", () => {
  if (Number(passengerAmount.value) > minPassengerAmount) {
    passengerAmount.value = (Number(passengerAmount.value) - 1).toString();
  }
});
