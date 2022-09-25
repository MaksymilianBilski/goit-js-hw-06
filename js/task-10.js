function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const box = document.querySelector("#boxes");
const buttonAdd = document.querySelector(`button[data-create]`);
const buttonSub = document.querySelector(`button[data-destroy]`);
const input = document.querySelector(`input[type="number"]`);

const createBoxes = (amount) => {
  amount = input.value;
  for (let i = 0; i <= amount - 1; i++) {
    const box2 = document.createElement("div");
    const actualWidth = (box2.style.width = "30px");
    const actualHeight = (box2.style.height = "30px");
    box2.style.backgroundColor = `${getRandomHexColor()}`;
    box.append(box2);
    // const width = Number.parseFloat(actualWidth);
    // const height = Number.parseFloat(actualHeight);
  }
};
buttonAdd.addEventListener("click", createBoxes);

const destroyBoxes = (amount) => {};
