const selectPeopleForm = document.getElementById("select-people-form");
const selectPeopleOutput = document.getElementById("select-people-output");
const selectPeopleInput = document.getElementById("select-people-input");
const selectPeopleOutputLive = document.getElementById("select-people-output-live");

const updateSelectPeopleForm = () => {
  const selectPeopleMemo = {
    prevSelectPeople: 1,
  };

  return {
    updateSelectPeopleForm(nextValue) {
      const updateType = selectPeopleMemo.prevSelectPeople < nextValue ? "추가" : "감소";

      selectPeopleOutput.value = nextValue;
      selectPeopleInput.value = nextValue;
      selectPeopleOutputLive.innerText = `성인 ${updateType} ${nextValue}`;

      selectPeopleMemo.prevSelectPeople = nextValue;
    },
  };
};

const showInput = () => {
  selectPeopleInput.classList.remove("hidden");
  selectPeopleOutput.classList.add("hidden");
};

const showOutput = () => {
  selectPeopleInput.classList.add("hidden");
  selectPeopleOutput.classList.remove("hidden");
};

selectPeopleForm.addEventListener("click", (e) => {
  const {
    target: { id },
  } = e;

  const { value: outputValue, ariaValueMax, ariaValueMin } = selectPeopleOutput;

  const numberOutputValue = Number(outputValue);

  if (id === "plus" && numberOutputValue < ariaValueMax) {
    updateSelectPeopleForm(numberOutputValue + 1);
  }

  if (id === "minus" && numberOutputValue > ariaValueMin) {
    updateSelectPeopleForm(numberOutputValue - 1);
  }

  if (id === "select-people-output") {
    showInput();
  }
});

selectPeopleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const { ariaValueMax, ariaValueMin } = selectPeopleOutput;

  const { value } = selectPeopleInput;

  const valueAsNumber = Number(value);

  if (isNaN(valueAsNumber)) {
    return;
  }

  if (valueAsNumber <= ariaValueMax && valueAsNumber >= ariaValueMin) {
    updateSelectPeopleForm(valueAsNumber);

    showOutput();
  }
});
