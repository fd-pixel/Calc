const screen = document.getElementById("screen");
const clearBtn = document.querySelector(".clear");
const percentBtn = document.querySelector(".percent");
const pmBtn = document.querySelector(".pm");
const divBtn = document.querySelector(".division");
const number7Btn = document.querySelector(".number7");
const number8Btn = document.querySelector(".number8");
const number9Btn = document.querySelector(".number9");
const number6Btn = document.querySelector(".number6");
const number5Btn = document.querySelector(".number5");
const number4Btn = document.querySelector(".number4");
const number3Btn = document.querySelector(".number3");
const number2Btn = document.querySelector(".number2");
const number1Btn = document.querySelector(".number1");
const number0Btn = document.querySelector(".number0");
const multiplicationBtn = document.querySelector(".multiplication");
const substractionBtn = document.querySelector(".substraction");
const additionBtn = document.querySelector(".addition");
const decimalBtn = document.querySelector(".decimal");
const equalBtn = document.querySelector(".equal");

number7Btn.addEventListener("click", function () {
  screen.value += "7";
});
number8Btn.addEventListener("click", () => {
  screen.value += "8";
});
number9Btn.addEventListener("click", () => {
  screen.value += "9";
});
number6Btn.addEventListener("click", () => {
  screen.value += "6";
});
number5Btn.addEventListener("click", () => {
  screen.value += "5";
});
number4Btn.addEventListener("click", () => {
  screen.value += "4";
});
number3Btn.addEventListener("click", () => {
  screen.value += "3";
});
number2Btn.addEventListener("click", () => {
  screen.value += "2";
});
number1Btn.addEventListener("click", () => {
  screen.value += "1";
});
number0Btn.addEventListener("click", () => {
  screen.value += "0";
});
equalBtn.addEventListener("click", () => {
  screen.value = eval(screen.value);
});
divBtn.addEventListener("click", () => {
  screen.value += "/";
});
multiplicationBtn.addEventListener("click", () => {
  screen.value += "*";
});
additionBtn.addEventListener("click", () => {
  screen.value += "+";
});
substractionBtn.addEventListener("click", () => {
  screen.value += "-";
});
clearBtn.addEventListener("click", () => {
  screen.value = "";
});
decimalBtn.addEventListener("click", () => {
  if (screen.value.includes(".") == true) {
    screen.value = screen.value;
  } else if (screen.value.includes(".") == false) {
    screen.value += ".";
  }
});
percentBtn.addEventListener("click", () => {
  screen.value = screen.value / 100;
});
pmBtn.addEventListener("click", function () {
  screen.value = -screen.value;
});
