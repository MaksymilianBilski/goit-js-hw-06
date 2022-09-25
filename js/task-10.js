function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const box = document.querySelector("#boxes");
const buttonAdd = document.querySelector(`button[data-create]`);
const buttonSub = document.querySelector(`button[data-destroy]`);
const input = document.querySelector(`input[type="number"]`);

const createBoxes = (amount) => {
  if (amount > 100 || amount < 1) {
    return;
  }
  for (let i = 0; i <= amount - 1; i++) {
    const box2 = document.createElement("div");
    box2.style.width = `${30 + 10 * i}px`;
    box2.style.height = `${30 + 10 * i}px`;
    box2.style.backgroundColor = getRandomHexColor();
    box.append(box2);
  }
};

const destroyBoxes = () => {
  box.innerHTML = "";
};

buttonAdd.addEventListener("click", () => createBoxes(input.value));
buttonSub.addEventListener("click", destroyBoxes);
