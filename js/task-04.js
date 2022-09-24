let counterValue = 0;
const value = document.querySelector("#value");
const buttonSub = document.querySelector(`button[data-action="decrement"]`);
const buttonAdd = document.querySelector("button[data-action=increment]");
buttonSub.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

buttonAdd.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
