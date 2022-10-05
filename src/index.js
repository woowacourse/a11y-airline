const passengerCount = document.getElementById('passengerCount');
const politeText = document.getElementById('politeText');

document.getElementById('tooltip').addEventListener('click', () => {
  politeText.textContent = '승객 수는 1명에서 3명까지만 가능해용~';
});

document.getElementById('subPassengerButton').addEventListener('click', () => {
  const value = Number(passengerCount.value);

  if (value <= 1) {
    politeText.textContent = '더 이상 감소할 수 없어용';
  } else {
    passengerCount.value = value - 1;
    politeText.textContent = `성인 승객 감소 ${value - 1}`;
  }
});

document.getElementById('addPassengerButton').addEventListener('click', () => {
  const value = Number(passengerCount.value);

  if (value >= 3) {
    politeText.textContent = '더 이상 추가할 수 없어용';
  } else {
    passengerCount.value = value + 1;
    politeText.textContent = `성인 승객 추가 ${value + 1}`;
  }
});

passengerCount.addEventListener('change', () => {
  const value = Number(passengerCount.value);

  if (!value || value < 1) {
    passengerCount.value = 1;
    politeText.textContent = '성인 1 텍스트 숫자만 수정';
  } else if (value > 3) {
    passengerCount.value = 3;
    politeText.textContent = '성인 3 텍스트 숫자만 수정';
  } else {
    politeText.textContent = `성인 ${value} 텍스트 숫자만 수정`;
  }
});
