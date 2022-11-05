let counterValue = 0;
const buttonIncr = document.querySelector("button[data-action=increment]");
const buttonDecr = document.querySelector("button[data-action=decrement]");
const value = document.querySelector("#value");
buttonIncr.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});
buttonDecr.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
