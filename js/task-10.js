// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const box = document.querySelector("#boxes");
// const buttonAdd = document.querySelector(`button[data-create]`);
// const buttonSub = document.querySelector(`button[data-destroy]`);
// const input = document.querySelector(`input[type="number"]`);

// const createBoxes = (amount) => {
//   if (amount > 100 || amount < 1) {
//     return;
//   }
//   for (let i = 0; i <= amount - 1; i++) {
//     const box2 = document.createElement("div");
//     box2.style.width = `${30 + 10 * i}px`;
//     box2.style.height = `${30 + 10 * i}px`;
//     box2.style.backgroundColor = getRandomHexColor();
//     box.append(box2);
//   }
// };

// const destroyBoxes = () => {
//   box.innerHTML = "";
// };

// buttonAdd.addEventListener("click", () => createBoxes(input.value));
// buttonSub.addEventListener("click", destroyBoxes);

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input[type=number]");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = input.value;
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${[i] * 10 + 30}` + "px";
    box.style.height = `${[i] * 10 + 30}` + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destroyBoxes(amount) {
  amount = input.value;
  for (let i = 0; i <= amount; i++) {
    const box = boxes.children;
    console.log(box[i]);
    box[i].remove();
  }
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
