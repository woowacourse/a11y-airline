import { $ } from "./util.js";

import Step1 from "./step1.js";
import Step2 from "./step2.js";

const step1Button = $(".step1__button");
const step2Button = $(".step2__button");

new Step2();

step1Button.addEventListener("click", () => {
  step1Button.classList.add("tab__focus");
  step2Button.classList.remove("tab__focus");
  new Step1();
});

step2Button.addEventListener("click", () => {
  step2Button.classList.add("tab__focus");
  step1Button.classList.remove("tab__focus");
  new Step2();
});
